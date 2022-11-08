import { useState } from "react";

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(0);
    const { stock } = props.item;

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
        <div className="list-item-count-group">
            <div className="list-item-count">
                <button onClick={onHandlerRemoveProduct} className="counter">-</button>
                <h1>{cantidad}</h1>
                <button onClick={onHandlerAddProduct} className="counter">+</button>
            </div>
        </div>
    );
}
export default ItemCount;