import { useContext } from "react";
import WishesContext from "../context/wishes";

function useWishesContext() {
    return useContext(WishesContext);
}

export default useWishesContext;