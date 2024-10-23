/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import SignIn from './pages/SignInPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import { Box, CssBaseline } from '@mui/joy';
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

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
