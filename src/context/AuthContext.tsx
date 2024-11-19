import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebaseConfig';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  getUserEmail: () => string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithEmail = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setCurrentUser(result.user);
    setIsAuthenticated(true);
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setCurrentUser(result.user);
      setIsAuthenticated(true);
      
      if (result.user.email) {
        localStorage.setItem('userEmail', result.user.email);
      }
      
      return result;
    } catch (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  };

  const logout = async () => {
      await signOut(auth);
      setCurrentUser(null);
      setIsAuthenticated(false);
  };

  const registerWithEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(result.user);
      setIsAuthenticated(true);
      return result;
    } catch (error) {
      console.error('Registration error:', error);
      throw error; // Re-throw to handle in the component
    }
  };

  const getUserEmail = () => {
    return currentUser?.email || null;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser, 
        isAuthenticated, 
        loginWithEmail, 
        loginWithGoogle, 
        logout, 
        registerWithEmail,
        getUserEmail 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
