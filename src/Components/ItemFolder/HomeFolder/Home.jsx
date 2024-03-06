import Footer from "../../Footer";
import {useState, useEffect} from "react";
import axios from "axios";
import logoB from "./logoB.png";
import logoA from "./logoA.PNG";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home(){

    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    return(
          <div>



  <div class="scroll-container">
    <div class="scroll-text">
      <ul>
        <li>
          <h1 class="quote">Welcome to the MEGA...tron Superstore. Welcome to the MEGA...tron Superstore. Welcome to the MEGA...tron Superstore.</h1>

        </li>
        
       
      </ul>
    </div>
  </div>


  



<img src={logoB} width="400" height="300" alt="LogoB" />
<br/>
<br/>


<h3>Returning from the Hoover Dam? Please Log In:</h3>
<br/>

<form className= "form" onSubmit={e => {
    e.preventDefault();
    
    axios.get("http://localhost:8081/user/read").then(response =>{
    const existingUsers = response.data;
    const exists = existingUsers.some(user => {return user.username === username && user.password === password; });
    if (exists) {
  
      navigate("/shop");
      alert(`You have landed and you are welcome here, ${username}`);
    }  else {
        console.log("Death to Intruders");
        alert("In the end you are all expendable")
    } 
    })  .catch(err => console.error(err));

}}>


{/* this is the input form, to create a user */}

{/* <p className="welcome">test</p> */}

<label htmlFor="user"><strong>Username</strong> &nbsp;</label>
<br/>
<input 
            value={username}
            br
            onChange={(e) => setUsername(e.target.value)}
            id="fn"
            type="text"
            class="form-control, col-3"
          
          ></input>

<br/>
<label htmlFor="pass"> <strong>Password</strong> &nbsp;</label>
<br/>
<input
            value={password}
            br
            onChange={(e) => setPassword(e.target.value)}
            id="ln"
            type="password"
            class="form-control, col-3"
          ></input>
          <br/>
          <br/>
<button type="submit" className="btn btn-success btn-md">
            You call yourself a prime...user?: Submit your information for immediate verification
          </button>

          <br />
    </form>

<br />



<h3>Don't have an account?</h3>

   
    <Link to="/Register" className="btn btn-warning col-12 ">ENTER IF YOU DARE!!!</Link>


    <br />
    <br />

<h4>The <img src={logoA} width="80" height="50" alt="Logo" />survival tip: Everything you buy here is food for your pathetic retail hunger!</h4>


      <br/>

        <Footer/>

        </div>
    )
}
export default Home;