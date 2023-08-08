import { createContext, useState, useCallback } from "react";
import axios from "axios";

const WishesContext = createContext();

function Provider({ children }) {
    const [wishes, setWishes] = useState([]);

    const fetchWishes = useCallback(async () => {
        const response = await axios.get('https://tofftopeight.com/tiwi/public/api/wishes');
        console.log(response);
        setWishes(response.data);
    }, []);

    const createWish = async (name, message) => {
        const response = await axios.post('http://localhost:3001/wishes', {
            name,
            message
        });

        console.log(response);
        const updatedWishes = [
           ...wishes,
            response.data
        ];

        setWishes(updatedWishes);
    };

    const valueToShare = {
        wishes,
        createWish,
        fetchWishes
    };

    return <WishesContext.Provider value={valueToShare}>
        {children}
    </WishesContext.Provider>
}

export { Provider };
export default WishesContext;