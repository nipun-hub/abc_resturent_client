
import { createContext, useEffect, useState } from "react"
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [token, setToken] = useState({
        token: 'dfghdfhdfhfdshsdhdfhfghdfrh',
        name: 'Nipun Theekshna',
    });

    const updateToken = (target, value) => {
    setToken(prevToken => ({
        ...prevToken,
        [target]: value,
    }));
}

    const [cartItem, setcartItem] = useState({});

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setcartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const deleteFromCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: 0 }))
    }

    const getTotlCartAmmount = () => {
        let totalAmmounnt = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemIfor = food_list.find((product) => product._id === item);
                totalAmmounnt += itemIfor.price * cartItem[item];
            }
        }
        return totalAmmounnt;
    }

    // set review secrion
    const [reviewsOpen, setreviewsOpen] = useState(false);
    const [id, setid] = useState();
    const handlereviewsOpen = (id) => {
        setid(id);
        setreviewsOpen(true);
    }
    const handlereviewsClose = () => setreviewsOpen(false);

    const contextValue = {
        token,
        updateToken,
        food_list,
        cartItem,
        setcartItem,
        addToCart,
        deleteFromCart,
        removeFromCart,
        getTotlCartAmmount,
        reviewsOpen,
        id,
        handlereviewsOpen,
        handlereviewsClose,
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider;