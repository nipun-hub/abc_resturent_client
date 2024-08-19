
import { createContext, useEffect, useState } from "react"
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [token, setToken] = useState({
        token: '',
        name: '',
    });

    const updateToken = (target, value) => {
    setToken(prevToken => ({
        ...prevToken,
        [target]: value,
    }));
}

    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const deleteFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: 0 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItem[item];
            }
        }
        return totalAmount;
    }

    // set review session
    const [reviewsOpen, setReviewsOpen] = useState(false);
    const [id, setId] = useState();
    const handleReviewsOpen = (id) => {
        setId(id);
        setReviewsOpen(true);
    }
    const handleReviewsClose = () => setReviewsOpen(false);

    const contextValue = {
        token,
        updateToken,
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        deleteFromCart,
        removeFromCart,
        getTotalCartAmount,
        reviewsOpen,
        id,
        handleReviewsOpen,
        handleReviewsClose,
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider;