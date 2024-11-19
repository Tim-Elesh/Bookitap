import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase/firebaseConfig';

export interface BookData {
  id?: string;
  title: string;
  author: string;
  coverImage: string;
  pdf: string;
}

export const fetchBooks = async () => {
  try {
    // Проверяем, аутентифицирован ли пользователь
    if (!auth.currentUser) {
      throw new Error('User must be authenticated to fetch books');
    }

    const booksCollection = collection(db, 'books');
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BookData[];
    return booksList;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const uploadBookFile = async (file: File, path: string) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export const addBook = async (bookData: BookData, coverImageFile: File, pdfFile: File) => {
  try {
    // Upload files
    const coverImageUrl = await uploadBookFile(coverImageFile, `covers/${coverImageFile.name}`);
    const pdfUrl = await uploadBookFile(pdfFile, `pdfs/${pdfFile.name}`);

    // Add to Firestore
    const bookRef = await addDoc(collection(db, 'books'), {
      ...bookData,
      coverImage: coverImageUrl,
      pdf: pdfUrl,
      createdAt: new Date()
    });

    return bookRef.id;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
}; 