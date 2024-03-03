import Footer from "../../Footer";
import {useState, useEffect} from "react";
import axios from "axios";
import logoB from "./logoB.png";
import logoA from "./logoA.PNG";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function Home(){

    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    return(
          <div>

<h1 className="welcome">Welcome to MEGA...tron</h1>
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

        alert("You have landed and you are welcome here" + " " + username)

      .then((response) =>{
        console.log(response);
     
      }
      )
      .catch((err) => console.error(err));

     } else {
        console.log("Death to Intruders");
        alert("In the end you are all expendable")
    } 
    })  .catch(err => console.error(err));

}}>


{/* this is the input form, to create a user */}



<label htmlFor="user"><strong>Username</strong> &nbsp;</label>
<input 
            value={username}
            br
            onChange={(e) => setUsername(e.target.value)}
            id="fn"
            type="text"
            class="form-control"
          ></input>
<label htmlFor="pass"> <strong>Password</strong> &nbsp;</label>
<input
            value={password}
            br
            onChange={(e) => setPassword(e.target.value)}
            id="ln"
            type="text"
            class="form-control"
          ></input>
<button type="submit" className="btn btn-success btn-md">
            You call yourself a prime...user?: Submit your information for immediate verification
          </button>

          <br />
    </form>

<br />



<h3>Don't have an account?</h3>

   
    <Link to="/Register" className="btn btn-warning ">ENTER IF YOU DARE!!!</Link>


    <br />
    <br />

<h4>The <img src={logoA} width="80" height="50" alt="Logo" />survival tip: Everything you buy here is food for your pathetic retail hunger!</h4>


      <br/>

        <Footer/>

        </div>
    )
}
export default Home;