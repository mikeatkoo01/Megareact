import logo from './logo.svg';
import './App.css';
import Home from './Components/ItemFolder/HomeFolder/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Items from './Components/ItemFolder/Items';
import ShowCart from './Components/CartFolder/ShowCart';
import { FaShoppingCart } from "react-icons/fa";


function App() {
  return (

    <header>
  
    <Router>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Items">
                    Items
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button onClick"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/UserManagement">
                      Log off
                    </a>
                  </div>

                  <li className="nav-item">
                  <a className="nav-link" href="/Items">
                    About Us
                  </a>
                </li>
                </li>
                <li className="nav-item">
                  <ShowCart />
                  <FaShoppingCart />

                </li>
              </ul>
            </div>
          </div>
</nav>




      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/Items" element={<Items/>} /> 

        {/* <Route path="/Cart" element={<Cart/>} />

        <Route path="/About us" element={<AboutUs/>} />  */}

      </Routes>

    </Router>

  </header>



  );
}

export default App;
