import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export interface BookData {
  id?: string;
  title: string;
  author: string;
  coverImage: string;
  pdf: string;
}

export const fetchBooks = async () => {
  try {
    const booksCollection = collection(db, 'books');
    const booksSnapshot = await getDocs(booksCollection);
    
    if (booksSnapshot.empty) {
      return []; // Возвращаем пустой массив, если данных нет
    }

    const booksPromises = booksSnapshot.docs.map(async (doc) => {
      const data = doc.data();
      
      // Проверяем наличие обязательных полей
      if (!data.title || !data.author) {
        console.warn(`Book ${doc.id} has missing required fields`);
        return null;
      }

      return {
        id: doc.id,
        title: data.title,
        author: data.author,
        coverImage: data.coverImage || '', // Используем пустую строку если нет изображения
        pdf: data.pdf || ''
      };
    });

    // Фильтруем null значения
    const books = await Promise.all(booksPromises);
    return books.filter(book => book !== null);
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