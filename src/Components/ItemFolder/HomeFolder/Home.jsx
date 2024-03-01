import Footer from "../../Footer";
import {useState, useEffect} from "react";
import axios from "axios";

function Home(){

    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    return(
          <div>

<h1>Welcome to MEGA - "tron"</h1>
<br/>
<br/>


<h3>Please Log In</h3>
<br/>

<form className= "form" onSubmit={e => {
    e.preventDefault();
    
    axios.get("http://localhost:8081/user/read").then(response =>{
    const existingUsers = response.data;
    const exists = existingUsers.some(user => {return user.username === username && user.password === password; });
    if (exists) {

        alert("Loggied In Welocme " + username)

      .then((response) =>{
        console.log(response);
     
      }
      )
      .catch((err) => console.error(err));

     } else {
        console.log("User with the same name already exists");
        alert("User doesnt exsist please register")
    } 
    })  .catch(err => console.error(err));

}}>


{/* this is the input form, to create a user */}



<label htmlFor="user"> Username &nbsp;</label>
<input
            value={username}
            br
            onChange={(e) => setUsername(e.target.value)}
            id="fn"
            type="text"
            class="form-control"
          ></input>
<label htmlFor="pass"> password &nbsp;</label>
<input
            value={password}
            br
            onChange={(e) => setPassword(e.target.value)}
            id="ln"
            type="text"
            class="form-control"
          ></input>
<button type="submit" className="btn btn-success btn-md">
            Submit
          </button>

          <br />
    </form>

<br />



<h3>Dont have an account</h3>
    <button>Register</button>
    <br />
    <br />

<p>Make your purchase order dreams come true</p>


      <br/>

        <Footer/>

        </div>
    )
}
export default Home;