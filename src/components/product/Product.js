import React, { useEffect, useState } from "react";
import { AppContextState } from "../../context/Context";
import styles from './Product.module.css'

function Product({productInfo}) {
    const {cartState, cartDispatch } = AppContextState();
    const [cartTextFlag, setCartTextFlag] = useState(true)

    useEffect(() => {
      let tempIndex = cartState.cart.findIndex(obj => obj._id === productInfo._id);
      tempIndex !== -1 ? setCartTextFlag(false) : setCartTextFlag(true);
    }, [cartState.cart]);

    const clickToCart = async () => {
        cartDispatch({ type: cartTextFlag ? "ADD_TO_CART" : 'REMOVE_FROM_CART', payload: productInfo })
      }

    return (
        <div>
            <div className={styles.productContainer}>
                <img src={productInfo.imgUrl} alt={productInfo.name} className={styles.productImg}/>
                <p className={styles.name}>{productInfo.name}</p>
                <p className={styles.price}>Rs. {productInfo.price}</p>
                <button className={cartTextFlag ? styles.btn : styles.btn2} onClick={() => { clickToCart() }}>{cartTextFlag ? 'Add To Cart' : 'Remove From cart'}</button>
            </div>
        </div>
    )
}

export default Product;