import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function UpdateItem() {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const [item, setItem] = useState("");
    const { itemId } = useParams();
    
    const [uploadImages, setUploadImages]= useState("");



  
      


    return ( <div>


<form
          onSubmit={(e) => {
            e.preventDefault();


            axios.patch(`http://localhost:8081/item/update/${itemId}`, {
                name,
                price,
                quantity,
                uploadImages,})
          .then((response) => {
           setItem(response.data); 
           setName("");
           setPrice("");
           setQuantity("");
           setUploadImages("");
        
          })
          .catch((err) => console.error(err));
      
      
      
         }}
             
        >
          <div>
          
          {" "}
          <h1>Update Item &nbsp;</h1>
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
           <label htmlFor="ad">Image &nbsp; &nbsp; &nbsp;</label>
           <input
  value={uploadImages}
  onChange={(e) => setUploadImages(e.target.value)}
  id="uploadImage"
  type="text"
  class="form-control"
/>
          <br />
          <button type="submit" className="btn btn-success btn-md">
            Submit
          </button>

          </div>
          <br />
        </form>
        


    </div>
        
        
        
        );
}

export default UpdateItem;
