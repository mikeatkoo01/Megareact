

// react functional component - props accepted from parent component
export default function Header(props) {
    return (

      // standard header html tag
      <header className="block row center">
        <div>
          <a href="#/">
            <h1>Mega Shopping Cart</h1>
          </a>
        </div>
        {/* cart and sign in with anchors. Sign in not yet implemented -  */}
        <div>
          <a href="#/cart">
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
  