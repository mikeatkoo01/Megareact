import { useState } from 'react';
import Header from '../DemoFolder/Header';
import Main from './MainItem';
import Basket from '../DemoFolder/Basket';
import Items from './Items';
import DisplayItem from './DisplayItem';


function AddRemove() {
    const { item } = data;
    const [cartItems, setCartItems] = useState([]);


    const onAdd = (items) => {
      const exist = cartItems.find((x) => x.id === item.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );

      } else {
        setCartItems([...cartItems, { ...item, qty: 1 }]);
      }
    };

    const onRemove = (item) => {
      const exist = cartItems.find((x) => x.id === item.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== item.id));
      } 
      
      else {
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

    return (
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          <Main item={item} onAdd={onAdd}></Main>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
      </div>
    );
  }
  
  export default AddRemove;