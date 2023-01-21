import React, { useEffect, useState } from "react";
import { AppContextState } from "../../context/Context";
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';


function Header() {
    const { cartState } = AppContextState();
    const [currentPath, setCurrentPath] = useState('/')
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [window.location.pathname])

    const onCheckCLick = () => {
        if (window.location.pathname === '/') {
            alert('Check Console');
            console.log('Cart Items', cartState.cart);
            navigate("/cart");
        } else {
            navigate('/')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.topDiv}>
                {currentPath === '/' ?
                    <p className={styles.checkout} onClick={() => onCheckCLick()}>Checkout: {cartState.cart.length} Items </p>
                    : <p className={styles.checkout} onClick={() => onCheckCLick()}>Go To Home</p>
                }
                {currentPath === '/' ? <div className={styles.flexDiv}>
                    <div className={`${styles.itemsDiv} ${styles.itemsDiv1}`}>
                        <img className={styles.imgClass} src="https://www.astronauts.id/blog/wp-content/uploads/2022/08/Rekomendasi-Produk-Skincare-untuk-Pemula-yang-Wajib-Kamu-Miliki.jpg" alt=" className={styles.imgClass}" />
                        <h3>Products</h3>
                        <p>hell daihda jd aid a djadada d  iaiddsa jndsasd</p>
                    </div>
                    <div className={styles.itemsDiv}>
                        <img className={styles.imgClass} src="https://cdn.shopify.com/s/files/1/0319/1449/2041/products/BelgiumChocolateTruffleCakeHalfKg_large.jpg?v=1668000495" alt="img" />
                        <h3>Cake Class</h3>
                        <p>hell daihda jd aid a djadada d  iaiddsa jndsasd</p>
                    </div>
                    <div className={`${styles.itemsDiv} ${styles.lastPad} ${styles.itemsDiv3}`}>
                        <img className={styles.imgClass} src="https://i.insider.com/5ed95c393f7370198527eea3?width=700" alt="img" />
                        <h3>Recipes</h3>
                        <p>hell daihda jd aid a djadada d  iaiddsa jndsasd</p>
                    </div>
                </div> : ''}
            </div>
            {currentPath === '/' ? <div className={styles.btmDiv}>

            </div> : ''}
        </div>
    )
}

export default Header