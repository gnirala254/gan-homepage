import { createContext, useContext, useReducer } from "react";
import { cartReducer, getFromLocalStorage } from "./Reducers";

const AppContext = createContext();

const Context = ({ children }) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: getFromLocalStorage('cartItems') && getFromLocalStorage('cartItems')['cart'] && getFromLocalStorage('cartItems')['cart'].length > 0 ? [...getFromLocalStorage('cartItems')['cart']] : [],
  });

  return (
    <AppContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </AppContext.Provider>
  );
};


export const AppContextState = () => {
  return useContext(AppContext);
};

export default Context;
