function Cart(props) {

    const { selectedItem} = props;
    return ( 
<div>

<h1>I am the cart!</h1>

<div>
      <h1>Your Selected Item:</h1>
      
      <p>Name: {selectedItem.name}</p>
      <p>Description: {selectedItem.price}</p>
      
    </div>

</div>

     );
}

export default Cart;