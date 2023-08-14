import { createContext, useState,useEffect } from "react";

const TaqueriaContext = createContext()

const TaqueriaProvider = ({children}) => {
    const [saludo,setSaludo] = useState('Hola desde estado')
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