import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin'
import ForgotPassword from './pages/ForgotPassword'
import './App.css'
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/NewPassword';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerificationCode />} />
        <Route path="/reset-password" element={<NewPassword />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
