import { useEffect, useState } from "react";
import axios from "axios";
import ItemProps from "./ItemsProp";

function CreateItem() {

    const [item, setItem] = useState([]);

    useEffect(function () {
      axios
        .get("http://localhost:8081/item/create")
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
        <h2> Current List of Stock </h2>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">{itemArray}</div>
          {/* this is the display oin the rows */}
        </div>
      </div>
    );
  }
  
  export default CreateItem;