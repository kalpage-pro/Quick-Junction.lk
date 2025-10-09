import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import Body from "./body";
import Card from "./Card";
import Login from "./Login";
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
      </Routes>
    </Router>
  );
}

export default App;
