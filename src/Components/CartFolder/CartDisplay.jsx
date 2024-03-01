import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import CreateCart from "./CreateCart";

function CartDisplay(props) {


const navigate = useNavigate();




function deletecart(){
    axios.delete("http://localhost:8081/cart/delete/" + props.id);
    window.location.reload()
}
   
    




    return (
        <div>
            <h5>Cart: {props.id}</h5>
          


            <button onClick={() => navigate("/item/" + props.id)} >Add Items</button>

            <button onClick={() => navigate("/cart/read/" + props.id)} >Current Items</button>

            <button onClick={() => deletecart} >Delete Items</button>
           


        </div>
    );
}

export default CartDisplay;