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

const sanitizeFileName = (fileName: string): string => {
  // Транслитерация кириллицы и замена специальных символов
  const translitMap: { [key: string]: string } = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '',
    'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'қ': 'k', 'ң': 'n', 'ү': 'u', 'ұ': 'u', 'ә': 'a', 'і': 'i', 'ғ': 'g',
    'ө': 'o', 'һ': 'h'
  };

  return fileName
    .toLowerCase()
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .replace(/[^a-z0-9.]/g, '_');
};

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
  try {
    const fileExtension = file.name.split('.').pop();
    const timestamp = Date.now();
    const sanitizedName = sanitizeFileName(file.name.split('.')[0]);
    const safePath = `${path}/${sanitizedName}_${timestamp}.${fileExtension}`;

    const metadata = {
      contentType: file.type,
      customMetadata: {
        'Access-Control-Allow-Origin': '*'
      }
    };

    const storageRef = ref(storage, safePath);
    await uploadBytes(storageRef, file, metadata);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const addBook = async (bookData: BookData, coverImageFile: File, pdfFile: File) => {
  try {
    const coverImageUrl = await uploadBookFile(coverImageFile, 'covers');
    const pdfUrl = await uploadBookFile(pdfFile, 'pdfs');

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