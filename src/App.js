import megaCat from './megaCat.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


// import './App.css';
import Home from './Components/ItemFolder/HomeFolder/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Items from './Components/ItemFolder/Items';

function App() {
  return (

  
    
    <Router>
      
      <div>
     
        
  <nav className="navbar navbar-expand-sm bg-light justify-content-center" style={{ backgroundColor: "#7CB9E8" }}>
      
      <img src={megaCat} alt='Logo Icon' className="navbar-brand" width="80px" />
  
    

      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" style={{ color: "#00308F" }} to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: "#00308F" }} to='/items'>Items</Link>
        </li>
      </ul>
  

        </nav> 


      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/items" element={<Items/>} /> 

        {/*  <Route path="/Cart" element={<Cart/>} /> */}


      </Routes>


</div>
    </Router>

  



  );
}

export default App;
