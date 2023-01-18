import React from "react";
import { AppContextState } from "../../context/Context";
import styles from './Header.module.css'

function Header() {
    const {cartState, cartDispatch } = AppContextState();

    return (
        <div className={styles.container}>
            <p>Header</p>
            <p className={styles.checkout} onClick={()=>{alert('Check Console'); console.log('Cart Items', cartState.cart);}}>Checkout: {cartState.cart.length} Items </p>
        </div>
    )
}

export default Header