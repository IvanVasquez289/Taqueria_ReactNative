import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState,useEffect } from "react";

const TaqueriaContext = createContext()

const TaqueriaProvider = ({children}) => {
    const [saludo,setSaludo] = useState('Hola desde estado')

    const setData = async () => {
        try {
            await AsyncStorage.setItem('key','este es el key')
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
     setData()   
    }, [])
    
    return (
        <TaqueriaContext.Provider
            value={{
                saludo
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