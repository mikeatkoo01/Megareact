
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

function DisplayItem(props) {


    const [items, setItems] = useState("");
    const { item, onAdd } = props;



    function handleClick() {


        axios.get("http://localhost:8081/item/read")
            .then(response => {
                setItems(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displayItems = [];


    for (const item of items) {


        displayItems.push(
            <div className='col-4'  key = {item.id} >
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> <b>Name:</b> {item.name}</p>
                            <p><b>Price:</b>{item.price}</p>
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
                    <p><button> BUY </button></p>

                    <div>
        
        <h3>{item.name}</h3>
        <div>£{item.price}</div>
        <div>
          <button onClick={() => onAdd(item)}>Add To Cart</button>
        </div>
      </div>

                        </div>
                    </div>
                </div>

            </div>

        )

    }


    return (
        <>
        <br />
        <h2>Current Stock</h2>
            <button class="btn btn-light btn-lg" onClick={handleClick}>Display all Stock</button>
            <div  className='container'>
                <div className='row'>
                
                    {displayItems}
                </div>
            </div>
        </>
    );
}

export default DisplayItem;