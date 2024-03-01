import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { PropTypes, checkPropTypes } from "prop-types";


function ItemsInCart(props) {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const params = useParams("");
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [id, setId] = useState();

    function getCartItems() {
        axios.get("http://localhost:8080/cart/get/" + params.id)
            .then((response) => { setItems(response.data.items) })
            .catch(console.log())
            console.log( items);
            setId({cart: params.id});
    }
    useEffect(() => { getCartItems() }, [])
    
    return (
        <div className="form-control border-3 border-primary rounded" style={{backgroundColor:"#295821"}}>


<form
            onSubmit={e => {

                e.preventDefault()

               
                axios.patch("http://localhost:8080/item/update/"+params.id, { itemQuantity})

                    .then(response => {
                        
                        setItemQuantity("");
                         navigate(-1);
                       

                    })

                    .catch(err => console.error(err))

            }
            }
            >



            <div style={{marginLeft: "10px"}} label htmlFor="itemQuantity" className="form-label">Item Quantity
                <input size="50"
                    id="itemQuantity"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "30px", marginTop: "30px" }}
                    type="number"
                    value={itemQuantity}
                    onChange={e => setItemQuantity(e.target.value)}
                  
                />

            </div>


            <button className="btn btn-primary" style = {{margin: "5px"}} type="submit">Submit</button>

        </form >

        </div>
      );
}

export default ItemsInCart ;