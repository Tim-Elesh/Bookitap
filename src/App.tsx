/* eslint-disable @typescript-eslint/no-unused-vars */
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
import ProfilePage from './pages/ProfilePage'; // Импортируйте страницу профиля
import Settings from './pages/Settings';


function App() {
  return (
    <AuthProvider>
      <Box>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />


            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />

            <Route 
              path="admin" 
              element={
                <AdminRoute>
                  <AdminPage />
                </AdminRoute>
              } 
            />

            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<ProfilePage />} /> 
            <Route path="feedback" element={<FeedBackPage/>} />
            <Route path="*" element={<NotFound />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </Router>
      </Box>
    </AuthProvider>
  )
}

export default App