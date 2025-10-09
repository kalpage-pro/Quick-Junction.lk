import { useNavigate } from "react-router-dom";
import './index.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="title-bar">
        <div className="title">
          Quick Junction.lk
          <input type="email" placeholder="Find" className="find" />
          <button className="search">Search</button>
          <button className="emp">For Employers</button>
          <button className="signup" onClick={() => navigate("/login")}>Login</button>
          <button className="chat">Chat</button>
        </div>
      </div>

      <div className="category">
        <h1>
          <ul>
            <li><a href="#"><button>Home</button></a></li>
            <li><a href="#"><button>Menu</button></a></li>
            <li><a href="#"><button>Menu</button></a></li>
            <li><a href="#"><button>Menu</button></a></li>
            <li><a href="#"><button>Menu</button></a></li>
            <li><a href="#"><button>Menu</button></a></li>
            <li><a href="#"><button>Menu</button></a></li>
            <li><a href="#"><button>About Us</button></a></li>
            <li><a href="#"><button>Feedback</button></a></li>
          </ul>
        </h1>
      </div>
    </header>
  );
}

export default Header;
