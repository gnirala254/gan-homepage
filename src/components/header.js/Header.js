import React, { useEffect, useState } from "react";
import { AppContextState } from "../../context/Context";
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const { cartState } = AppContextState();
    const [currentPath, setCurrentPath] = useState('/')
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [window.location.pathname])

    const onCheckCLick = () => {
        if(window.location.pathname === '/'){
            navigate("/cart");
        } else {
            navigate('/')
        }
        alert('Check Console'); 
    }

    return (
        <div className={styles.container}>
            <p>Header</p>
            {currentPath == '/' ?
            <p className={styles.checkout} onClick={() => onCheckCLick()}>Checkout: {cartState.cart.length} Items </p>
            :  <p className={styles.checkout} onClick={() => onCheckCLick()}>Go To Home</p>
            }
             {/* <Link to={currentPath == '/' ? '/cart' : ''}>{currentPath == '/' ? <p className={styles.checkout} onClick={() => onCheckCLick()}>Checkout: {cartState.cart.length} Items </p> : <p className={styles.checkout} onClick={() => onCheckCLick()}>Go To Home</p>}</Link> */}
        </div>
    )
}

export default Header