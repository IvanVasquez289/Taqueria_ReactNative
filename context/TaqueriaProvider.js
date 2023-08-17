import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState,useEffect } from "react";
import { productos as productosData} from "../data/productos";
const TaqueriaContext = createContext()

const TaqueriaProvider = ({children}) => {
    const [saludo,setSaludo] = useState('Hola desde estado')
    const [productos, setProductos] = useState([])
    const [productoActual, setProductoActual] = useState({})
    const [pedido, setPedido] = useState([])
    const [total,setTotal] = useState(0)

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

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.cantidad*producto.precio) + total, 0)
        setTotal(nuevoTotal)
        console.log(total)
    }, [pedido])

    const handlePressProducto = (id) => {
        const producto = productos.filter(productoState => productoState.id === id)
        setProductoActual(producto[0])
    }
    
    const handleSetPedido = (producto) => {

        const existeProducto = pedido.some(productoState => productoState.id === producto.id)
        if(existeProducto){
            console.log('Ya esta en el pedido')
            //Actualizar cantidad 
            const pedidoActualizado = pedido.map(productoState => productoState.id == producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
        }else{
            console.log('Agregando nuevo producto al pedido')
            setPedido([...pedido,producto])
        }
        setProductoActual({})

        // console.log(pedido)
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    return (
        <TaqueriaContext.Provider
            value={{
                saludo,
                productos,
                handlePressProducto,
                productoActual,
                handleSetPedido,
                pedido,
                handleEliminarProducto,
                total
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