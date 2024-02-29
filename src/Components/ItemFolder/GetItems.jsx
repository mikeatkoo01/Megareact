import axios from "axios";
import {useEffect, useState } from "react";
import ItemProps from "./ItemProps";



function GetItems() {

    const [items, setItems] = useState([])
    useEffect(function(){

    axios.get ("http://localhost:8081/item/read")
    .then ((response) => {setItems(response.data)})
    .catch (error => console.error(error))

    },[]);

    const itemsArray =[];
    for (const item of items){
        itemsArray.push(
        <ItemProps
        key={item.name + " " + item.quantity}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        />);
       

    }
    
    return (  

        <div>
        <h2> Current stock </h2>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">{itemsArray}</div>
        </div>
      </div>



    );
}

export default GetItems ;