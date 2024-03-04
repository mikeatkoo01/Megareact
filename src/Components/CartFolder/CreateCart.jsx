// import axios from "axios";
// import {useEffect, useState} from "react";
// import CartDisplay from "./CartDisplay";

// function CreateCart() {

//     const cartItems = []

//         const [carts, setCarts] = useState([]);


//     function getCart(){

//         axios.get("http://localhost:8080/cart/read")

//         .then((response) => {setCarts(response.data)})
//         .catch(console.log())}

//         useEffect(()=> {getCart()},[])
//                 for (const cart of carts){
//                     cartItems.push(<CartDisplay
//                         id={cart.id}
//                         item={cart.itemId} />
                        
//                     )
                
//                 }
//     function handleclick() {
//         axios.post("http://localhost:8081/cart/create")
//             .then(response => {getCarts() })
//             .catch(err => console.error(err))

            
//     }

    


//     return (
//         <div>
//             <button type="button" onClick={handleclick}>New Cart</button>

//             <h3>Cart</h3>
//            <div> {cartItems}
//            </div>
//         </div>
//     );
// }

// export default CreateCart;