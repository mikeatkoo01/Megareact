import CreateItem from "./CreateItem";
import axios from "axios";
import { useState, useEffect } from "react";


function Items() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

  
  
  
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:8081/item/create", {
                name,
                price,
                quantity,
                
              })
              .then((response) => {
                setName("");
                setPrice("");
                setQuantity("");
              
              })
              .catch((err) => console.error(err));
          }}
        >
          
          {/* this is the input form on the items page  */}
          {" "}
          <h1>Input Stock &nbsp;</h1>
          <label htmlFor="name"> Name &nbsp;</label>
          <input
            value={name}
            br
            onChange={(e) => setName(e.target.value)}
            id="nm"
            type="text"
            class="form-control"
          ></input>
          <label htmlFor="dollar">Price &nbsp;</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="dollar"
            type="text"
            class="form-control"
          ></input>
          <label htmlFor="ad">Quantity &nbsp; &nbsp; &nbsp;</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            id="ad"
            type="text"
            class="form-control"
          ></input>
          <br />
          <button type="submit" className="btn btn-success btn-md">
            Submit
          </button>
          <br />
        </form>
        <br />
        <br />
        <CreateItem />
      </div>
    );
  }
  
  export default Items;