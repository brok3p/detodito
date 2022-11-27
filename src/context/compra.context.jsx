import { createContext, useEffect, useState } from "react";

const calcularTotalCompra = (listaCompra) => listaCompra.reduce((sum, item) => sum + item.price * item.cantidad, 0);
const calcularCantidadListaCompra1 = (listaCompra) => listaCompra.reduce((sum, item) => sum + item.cantidad, 0);

export const CompraContext = createContext({});

export const CompraProvider = ({children}) => {
    const compraLocal = JSON.parse(localStorage.getItem('listaCompra')) ?? [];
    const [listaCompra, setListaCompra] = useState(compraLocal);
    const [total, setTotal] = useState(calcularTotalCompra(listaCompra));
    const [totalListaCompra, setTotalListaCompra] = useState(calcularCantidadListaCompra1(listaCompra));


    useEffect(() => {
        localStorage.setItem('listaCompra', JSON.stringify(listaCompra));
        setTotal(calcularTotalCompra(listaCompra));
        setTotalListaCompra(calcularCantidadListaCompra(listaCompra));
        console.log('contextTotal', total);
        console.log('contextTotal', totalListaCompra);
    }, [listaCompra]);

    /**
     * Agregar un producto a la lista de compra
     * @param {Producto} item Producto agregado
     * @param {number} cantidad Cantidad del producto agregado
     */
    const addProducto = (item, cantidad) => {
        setListaCompra(prevList => {
            const nuevosProductos = [...prevList];
            const existeEnCart = nuevosProductos.findIndex(x => x.id === item.id);

            if (existeEnCart !== -1) {
                nuevosProductos[existeEnCart].cantidad += cantidad;
                return nuevosProductos;
            };
            
            const nuevoProducto = { cantidad, ...item };
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

    return (
        <CompraContext.Provider value={{listaCompra, total, addProducto, removeProducto, clear, calcularCantidadListaCompra }}>
            { children }
        </CompraContext.Provider>
    );
};