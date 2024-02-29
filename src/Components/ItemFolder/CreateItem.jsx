import { useEffect, useState } from "react";
import axios from "axios";
import ItemProps from "./ItemProps";


function CreateItem() {

    const [item, setItem] = useState([]);

    useEffect(function () {
      axios
        .post("http://localhost:8081/item/create")
        .then((response) => {
          console.log("Response:", response);

          setItem(response.data);

          console.log("Item:", item);
        })
        .catch((err) => console.error(err));
    }, []);
  
    const itemArray = [];

    for (const items of item) {
      itemArray.push(
        <ItemProps

          key={item.name + " " + item.quantity}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        
        />
      );
    }
  
    return (
      <div>
        <div className="container-fluid">
          <div className="row">{itemArray}</div>
        </div>
      </div>
    );
  }
  
  export default CreateItem;