import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemsInCart from "../ItemFolder/ItemInCart";

function DisplayItemsInCart() {
    const params = useParams("");
    const itemList = []
    const [items, setItems] = useState([]);
    let itemTotal=0;
    let cartTotal=0;

    

    function getCartItems() {
        axios.get("http://localhost:8080/cart/get/" + params.id)
            .then((response) => { setItems(response.data.items) })
            .catch(console.log())
            console.log( items);
    }

    for (const item of items) {
        itemList.push(<ItemsInCart
            id={item.id}
            name={item.itemName}
            price={item.itemPrice}
            quantity={item.itemQuantity}
           
        />

        )

    }
    for (const item of items) {

       cartTotal=cartTotal+ item.itemPrice*item.itemQuantity
       
    }
    
    // console.log(cartTotal);
    // <ItemStructure cartTotal={cartTotal}/>

    useEffect(() => { getCartItems() }, [])
    return (
        <div>
            <h3>Cart</h3>
            <div>
                
                {itemList}
                <h4>Total to pay: £
                {cartTotal}
                </h4>
            </div>

        </div>
    );
}

export default DisplayItemsInCart;