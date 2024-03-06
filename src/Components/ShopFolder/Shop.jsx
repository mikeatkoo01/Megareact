import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
// import data from './data';
import axios from 'axios';

function Shop() {
  // constructing assignment to extract products from data
  // products must then me passed to Main which is responsible for rendering products
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
 
    // event handler SET UP HERE to add items to cart
    const onAdd = (product) => {
      // exists is a variable that looks for id of product that you need to add if it exists- looking for an item 
      // with id equal to the id of the product that we want to add
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        // if the product exists we want to increase the quantity 
        setCartItems(
          cartItems.map((x) =>
          // comparison - compare the id of each item in cartItem with id of product that needs to be updated 
          // and if it is true we put the value plus 1 - or if not don't change it
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        // if product does not exist we need to add it
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
// onAdd function is then passed to both the basket and main where they will be used

    const onRemove = (product) => {
      // in the cart items search for a product with the id of product.id
      const exist = cartItems.find((x) => x.id === product.id);
      // if there is a quantity of 1 this should be removed
      if (exist.qty === 1) {
        // filter method to remove - returns boolean value that compares
        // the id does not equal to product.id (remove if exists)
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          // if in the cart the id exists change quantity to minus 1 otherwise keep product
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8081/item/read'); 
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error 
        }
      };
  
      fetchData();
    }, []);

    // 1 div for header and 1 for main and basket which show side-by-side
    return (
      <div className="App">
        {/* countCartItems - to be used for counter next to cart icon - pass this to header */}
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          {/* products passed to Main so they can be rendered  */}
          <Main products={products} onAdd={onAdd}></Main>

          {/* cartItems declared above, now passed to basket component - now this can be passed to basket component as prop */}
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
      </div>
    );
  }
  
  export default Shop;