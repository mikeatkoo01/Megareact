// import axios from "axios";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// function ItemsAdd() {

//     const [name, setName] = useState("");
//     const [itemPrice, setItemPrice] = useState(0.0);
//     const [itemQuantity, setItemQuantity] = useState(0);
//     const params = useParams("");
//     const navigate = useNavigate();

//     function handleClick() {
//         axios.post("http://localhost:8080/item/create", { name, price, quantity, cart:{id: params.id} })

//             .then(response => {
//                 setItemName("");
//                 // setItemPrice("");
//                 setItemQuantity("");
//                 navigate("/cart")

//             })

//             .catch(err => console.error(err))
//     }
//     return (
//         <div>
//             <for
//                         label htmlFor="itemName" className="form-label">Name
//                         <input size="50"
//                             id="itemName"
//                             className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
//                             type="text"
//                             value={itemName}
//                             onChange={e => setItemName(e.target.value)}
//                             required
//                         />

//                     </div>

//                     <div label htmlFor="itemPrice" className="form-label">Price
//                         <input size="50"
//                             id="itemPrice"
//                             className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
//                             type="number"
//                             value={itemPrice}
//                             onChange={e => setItemPrice(e.target.value)}
//                             required
//                         />
//                     </div>


//                     <div label htmlFor="itemQuantity" className="form-label">Quantity
//                         <input size="50"
//                             id="itemQuantity"
//                             className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
//                             type="number"
//                             value={itemQuantity}
//                             onChange={e => setItemQuantity(e.target.value)}
//                             required
//                         />

//                     </div>
                  

                
                

               

//                 </form>
//             <button className="btn btn-primary" type="button" onClick={handleClick}>Submit</button>


//         </div>
//     );
// }

// export default ItemsAdd;