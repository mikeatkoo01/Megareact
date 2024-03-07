
import './App.css';
import Home from './Components/ItemFolder/HomeFolder/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Items from './Components/ItemFolder/Items';
import ShowCart from './Components/CartFolder/ShowCart';
import { FaShoppingCart } from "react-icons/fa";
import Users from './Components/UserFolder/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/ShopFolder/Shop';
import logoA from './Components/logoA.PNG'
import DisplayItem from './Components/ItemFolder/DisplayItem';
import Cart from './Components/CartFolder/Cart';
import Payment from './Components/ShopFolder/Payment';
import Footer from './Components/Footer';
import UpdateItem from './Components/ItemFolder/UpdateItem';




function App() {
  return (

    <header>
  
    <Router>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     
          <div className="container-fluid bg-green ">
            <a className="navbar-brand" href="/"></a>
            <img src={logoA} width="80" height="50" alt="Logo" />
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
                  <a className="nav-link active" aria-current="page" href="/shop">
                    Shop
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              

                <li className="nav-item">
                  <a className="nav-link" href="/manage">
                    Back Office
                  </a>
                </li>

                

              
                <li className="nav-item">
                  {/* <ShowCart />
                  <FaShoppingCart /> */}

                </li>
              </ul>
            </div>
          </div>

</nav>




      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/manage" element={<Items/>} /> 

        <Route path="/register" element={<Users/>} />

        <Route path="/shop" element={<Shop/>} />

        <Route path="/payment" element={<Payment/>} />


        <Route path="/update/:itemId" element={<UpdateItem />} />

        {/* <Route path="/Cart" element={<Cart/>} /> */}

  

      </Routes>
      <Footer/>
    </Router>

  </header>



  );
}

export default App;
