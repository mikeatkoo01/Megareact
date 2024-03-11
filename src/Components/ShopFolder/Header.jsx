
import { FaShoppingCart } from "react-icons/fa";



// react functional component - props accepted from parent component
export default function Header(props) {
    return (

      // standard header html tag
      <header className="block row center">
        <div>
          <>
            <h1>MEGA...tron SHOP&CART</h1>
          </>
        </div>
        {/* cart and sign in with anchors. Sign in not yet implemented -  */}
        <div>
          <a href="#/cart">
          <FaShoppingCart />
            Cart{' '}
            {/* if it does exists - not a 0 then render this button */}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
          </a>{' '}
          
        </div>
      </header>
    );
  }
  