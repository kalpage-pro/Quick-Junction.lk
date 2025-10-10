import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import Body from "./body";
import Card from "./Card";
import Login from "./Login";
import Signup from "./Signup";  
import AuthPage from "./AuthPage";
import './index.css';

function HomePage() {
  return (
    <>
      <Header />
      <Body />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}


export default App;
