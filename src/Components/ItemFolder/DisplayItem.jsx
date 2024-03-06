
import axios from "axios";
import { useState, useNavigate } from "react";
import { Navigate } from 'react-router-dom';

function DisplayItem() {


    const [items, setItems] = useState("");
    const [selectedItem, setSelectedItem] = useState("");


    function handleClick() {


        axios.get("http://localhost:8081/item/read")
            .then(response => {
                setItems(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const handleClick2 = (selectedItem) => {
        axios.get("http://localhost:8081/item/read" + selectedItem.id)
          .then((response) => {
            setSelectedItem(response.data); 
            Navigate("/cart"); 
          })
          .catch((err) => console.error(err));
      };


    const displayItems = [];


    for (const item of items) {


        displayItems.push(
            <div className='col-4'  key = {item.id} >
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> <b>Name:</b> {item.name}</p>
                            <p><b>Price:</b> {item.price}</p>
                            <p><b>Qty:</b> {item.quantity}</p>
                            
                           
                            <p><button type="button" onClick={() => {
                        axios.delete("http://localhost:8081/item/delete/" + item.id)
                            .then(res => {


                                axios.get("http://localhost:8081/item/read")
                                    .then(response => {
                                        setItems(response.data)
                                        console.log(response);
                                    })
                                    .catch(err => console.error(err))
                        
                            })
                            .catch(err => console.error(err));
                    }}>DELETE</button></p>
                    <p>
                    <button
  type="button"
  onClick={() => handleClick2(selectedItem)} 
>
  BUY
</button>
</p>












                        </div>
                    </div>
                </div>

            </div>

        )

    }


    return (
<>
      
            <button class="btn btn-light btn-lg" onClick={handleClick}>Display current  the Stock</button>
            <div  className='container'>
                <div className='row'>
                
                    {displayItems}
                </div>
            </div>
  
        <br />
        <div class="content-slider">
  <div class="slider">
    <div class="mask">
      <ul>
        <li class="anim1">
          <div class="quote">We Do This Only For The Benefit Of The Decepticons.</div>

        </li>
        <li class="anim2">
          <div class="quote">We Do This Only For The Benefit Of The Decepticons.</div>
          
        </li>
        <li class="anim3">
          <div class="quote">We Do This Only For The Benefit Of The Decepticons.</div>
          
        </li>
        <li class="anim4">
          <div class="quote">We Do This Only For The Benefit Of The Decepticons.</div>
        </li>
       
      </ul>
    </div>
  </div>
</div>

</>



        
    );
}

export default DisplayItem;