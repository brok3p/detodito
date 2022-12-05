import { createContext, useEffect, useState } from "react";
import { calcularTotalCompra, _calcularCantidadCompra } from '../utils';

export const CartContext = createContext({});

export const CompraProvider = ({children}) => {
    const compraLocal = JSON.parse(localStorage.getItem('listaCompra')) ?? [];
    const [listaCompra, setListaCompra] = useState(compraLocal);
    const [total, setTotal] = useState(calcularTotalCompra(listaCompra));
    const [totalListaCompra, setTotalListaCompra] = useState(_calcularCantidadCompra(listaCompra));


    useEffect(() => {
        localStorage.setItem('listaCompra', JSON.stringify(listaCompra));
        setTotal(calcularTotalCompra(listaCompra));
        setTotalListaCompra(calcularCantidadListaCompra(listaCompra));

        return () => console.log('my effect is destroying');
    }, [listaCompra, total, totalListaCompra,calcularTotalCompra, _calcularCantidadCompra]);

    /**
     * Agregar un producto a la lista de compra
     * @param {Producto} item Producto agregado
     * @param {number} cantidad Cantidad del producto agregado
     */
    const addProducto = (item, cantidad = 1) => {
        setListaCompra(prevList => {
            let nuevosProductos = [...prevList];
            const existeEnCart = nuevosProductos.findIndex(x => x._id === item._id);

            if (existeEnCart !== -1) {
                const cantidadPrevia = nuevosProductos[existeEnCart].cantidad;
                nuevosProductos[existeEnCart].cantidad = cantidadPrevia + cantidad;
                return nuevosProductos;
            };
            
            const nuevoProducto = { cantidad: cantidad, ...item };
            nuevosProductos.push(nuevoProducto);
            return nuevosProductos;
        });
        
    };

    const removeProducto = (id) => {
        setListaCompra(prevList => {
            const nuevosProductos = [...prevList];
            const i = nuevosProductos.findIndex(x => x.id === id);
            nuevosProductos.splice(i, 1);

            return nuevosProductos
        })
    };

    const clear = () => {
        setListaCompra([]);
    };

    const calcularCantidadListaCompra = () => {
        return listaCompra.reduce((sum, item) => sum + item.cantidad, 0);
    };

    const getCantidadProducto = (id) => {
        let cantidad = listaCompra?.find(item => item._id === id)?.cantidad || 0;

        return cantidad;
    }

    const getPedido = (user) => {
        return {
            cliente: user,
            pedido: listaCompra,
            total: total,
            fecha: new Date(Date.now())
        }
    }

    return (
        <CartContext.Provider value={{
            listaCompra,
            total,
            addProducto,
            removeProducto,
            clear,
            calcularCantidadListaCompra,
            getCantidadProducto,
            getPedido }}>
            { children }
        </CartContext.Provider>
    );
}