import { useState } from "react";

const ItemCount = ({ init, stock, addToCart }) => {
    // const { init, stock, addToCart } = props.item;
    const [cantidad, setCantidad] = useState(init);

    const onHandlerAddProduct = () => {
        if (stock.stockTotal > cantidad) {
            setCantidad(cantidad+1);
        }
    }

    const onHandlerRemoveProduct = () => {
        if (cantidad > 0) {
            setCantidad(cantidad-1);
        }
    }

    return (
        <>
            <div className="list-item-count-group">
                <div className="list-item-count">
                    <button disabled={cantidad <= 1} onClick={onHandlerRemoveProduct} className="counter">-</button>
                    <h1>{cantidad}</h1>
                    <button disabled={cantidad >= stock.stockTotal} onClick={onHandlerAddProduct} className="counter">+</button>
                </div>
            </div>
            <div className="text-muted">
                <h2>Stock disponible {stock.stockTotal}</h2>
            </div>
            <div>
                <button className="list-item-button" disabled={stock.stockTotal < 1} onClick={() => addToCart(cantidad)}>Agregar al carro</button>
            </div>
        </>
    );
}
export default ItemCount;