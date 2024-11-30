/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import Loading from './components/Loading'; // Импортируйте компонент прелоадера
import './App.css';
import SignIn from './pages/SignInPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import { Box, CssBaseline } from '@mui/joy';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import FeedBackPage from './pages/FeedbackPage';
import AdminRoute from './components/AdminRoute';
import ProfilePage from './pages/ProfilePage';
import Settings from './pages/Settings';
import BookPage from './pages/BookPage'; // Импортируйте новый компонент

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Симуляция загрузки данных
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Задержка в 2 секунды

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />; // Показать прелоадер, пока загружается контент
    }

    return (
        <AuthProvider>
            <Box>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/dashboard" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                        <Route path="admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="feedback" element={<FeedBackPage />} />
                        <Route path="/books/:bookId" element={<BookPage />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path='/sign-up' element={<SignUpPage />} />
                        <Route path='/forgot-password' element={<ForgotPassword />} />
                    </Routes>
                </Router>
            </Box>
        </AuthProvider>
    );
}

export default App;