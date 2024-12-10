import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css';
import Container from './layouts/container/Container';
import MembershipPage from './layouts/membershipPage/MembershipPage';
import QRScreen from './layouts/qrScreen/QRScreen';
import LoginSignUp from './layouts/loginSignUp/LoginSignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path='/qr' element={<QRScreen />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
