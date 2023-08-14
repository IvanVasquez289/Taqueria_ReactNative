import { useContext } from "react";
import TaqueriaContext from "../context/TaqueriaProvider";

const useTaqueria = () => {
    return useContext(TaqueriaContext)
}

export default useTaqueria