import axios from "axios";
import {useState, useEffect} from "react";



function Users() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    return ( 

<div>
<form className= "form" onSubmit={e => {
    e.preventDefault();
    
    axios.get("http://localhost:8081/user/read").then(response =>{
    const existingUsers = response.data;
    const exists = existingUsers.some(user => {return user.firstName === firstName && user.lastName === lastName; });
    if (!exists) {

    axios.post("http://localhost:8081/user/create", {firstName, lastName, username, password})
      .then((response) =>{
        console.log(response);
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
     
      }
      )
      .catch((err) => console.error(err));

     } else {
        console.log("User with the same name already exists");
        alert("User with the same name already exists")
    } 
    })  .catch(err => console.error(err));

}}>


{/* this is the input form, to create a user */}


<h1>NEW USER? REGISTER HERE &nbsp;</h1>
<label htmlFor="name"> First Name &nbsp;</label>
<input
            value={firstName}
            br
            onChange={(e) => setFirstName(e.target.value)}
            id="fn"
            type="text"
            class="form-control"
          ></input>
<label htmlFor="name"> Last Name &nbsp;</label>
<input
            value={lastName}
            br
            onChange={(e) => setLastName(e.target.value)}
            id="ln"
            type="text"
            class="form-control"
          ></input>
          <label htmlFor="name"> Choose Username &nbsp;</label>
<input
            value={username}
            br
            onChange={(e) => setUsername(e.target.value)}
            id="un"
            type="text"
            class="form-control"
          ></input>
          <label htmlFor="name"> Choose Password &nbsp;</label>
<input
            value={password}
            br
            onChange={(e) => setPassword(e.target.value)}
            id="un"
            type="text"
            class="form-control"
          ></input>
<button type="submit" className="btn btn-success btn-md">
            Submit
          </button>

          <br />
    </form>
    


</div>



     );
}

export default Users;