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
    // Проверяем инициализацию Firebase
    if (!db) {
      throw new Error('Firestore не инициализирован');
    }

    const booksCollection = collection(db, 'books');
    
    // Добавляем таймаут для запроса
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), 10000)
    );
    
    const booksPromise = getDocs(booksCollection);
    const booksSnapshot = await Promise.race([booksPromise, timeoutPromise]);

    if (!booksSnapshot) {
      throw new Error('Не удалось получить данные');
    }

    return booksSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    // Добавляем более подробную информацию об ошибке
    if (error instanceof Error) {
      throw new Error(`Ошибка при загрузке книг: ${error.message}`);
    }
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

export const initializeDatabase = async () => {
  try {
    const booksCollection = collection(db, 'books');
    
    // Импортируем тестовые данные
    const booksData = (await import('../data/books')).default;
    
    // Загружаем каждую книгу
    for (const book of booksData) {
      try {
        // Загружаем изображение обложки
        const coverImageResponse = await fetch(book.coverImage.trim());
        const coverImageBlob = await coverImageResponse.blob();
        const coverImageFile = new File([coverImageBlob], `${book.id}_cover.jpg`, {
          type: 'image/jpeg'
        });
        
        // Загружаем PDF
        const pdfResponse = await fetch(book.pdf);
        const pdfBlob = await pdfResponse.blob();
        const pdfFile = new File([pdfBlob], `${book.id}_book.pdf`, {
          type: 'application/pdf'
        });

        // Загружаем файлы в Storage и получаем URL
        const coverImageUrl = await uploadBookFile(coverImageFile, `covers/${book.id}_cover.jpg`);
        const pdfUrl = await uploadBookFile(pdfFile, `pdfs/${book.id}_book.pdf`);

        // Добавляем запись в Firestore
        await addDoc(booksCollection, {
          title: book.title,
          author: book.author,
          coverImage: coverImageUrl,
          pdf: pdfUrl,
          createdAt: new Date()
        });

        console.log(`Book ${book.title} uploaded successfully`);
      } catch (error) {
        console.error(`Error adding book ${book.title}:`, error);
      }
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}; 