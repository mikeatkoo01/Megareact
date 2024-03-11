import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


export default function Basket(props) {
  
    
    const { cartItems, onAdd, onRemove } = props;

    // this is for order summary in the cart
    // used to calculate including tax
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = 1.07;
    const shippingPrice = itemsPrice > 2000 ? 0 : 4;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
      // html tag to have element to the side
      <aside className="block col-5">
        <h2>Cart</h2>
        <div>
          {/* cartItem passed as prop from displayDemo. conditional rendering
          // if cart item is equal to 0 then render this div*/}
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-4">{item.name}</div>
              <div className="col-4">
                {/* onRemove and onAdd functions passed as props from displayDemo */}
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>
  
              <div className="col-2 text-right">
                {/* multiplying quantity of item times by price fixed to 2 decimal places */}
                {item.qty} x £{item.price.toFixed(2)}
              </div>
            </div>
          ))}
  {/* if cart is not empty render the summary section: */}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Subtotal</div>
                <div className="col-1 text-right">£{itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Service Charge</div>
                <div className="col-1 text-right">£{taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Cost</div>
                <div className="col-1 text-right">
                  £{shippingPrice.toFixed(2)}
                </div>
              </div>
  
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>£{totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
              <Link to="/payment" className="btn btn-warning ">Checkout</Link>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  }
  