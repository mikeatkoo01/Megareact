import logo from './logo.svg';
import './App.css';
import Home from './Components/ItemFolder/HomeFolder/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Items from './Components/ItemFolder/Items';

function App() {
  return (

    <header>
  
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Items</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AboutUs</a>
      </li>

    </ul>
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
