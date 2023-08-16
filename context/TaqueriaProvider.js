import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState,useEffect } from "react";
import { productos as productosData} from "../data/productos";
const TaqueriaContext = createContext()

const TaqueriaProvider = ({children}) => {
    const [saludo,setSaludo] = useState('Hola desde estado')
    const [productos, setProductos] = useState([])

    const setData = async () => {
        try {
            await AsyncStorage.setItem('key','este es el key')
        } catch (error) {
            console.log(error)
        }
    }
    
    const obtenerProductos = () => {
       setProductos(productosData)
    }

    useEffect(() => {
     setData()   
     obtenerProductos()
    }, [])
    
    return (
        <TaqueriaContext.Provider
            value={{
                saludo,
                productos
            }}
        >
            {children}
        </TaqueriaContext.Provider>
    )
}

export {
    TaqueriaProvider
}

export default TaqueriaContext