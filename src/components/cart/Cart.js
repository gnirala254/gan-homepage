import React from "react";
import { AppContextState } from "../../context/Context";
import Product from "../product/Product";
import './Cart.css'

function Cart() {
    const { cartState } = AppContextState();

    return (
        <div className="cartsContainer">
            <h2>Cart</h2>
            <div className="cart">
                {
                    cartState.cart.map((product, index) => <Product productInfo={product} key={index} />)
                }
            </div>
        </div>
    )
}

export default Cart;