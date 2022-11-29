import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CompraContext } from "../context/compra.context";
import ItemCount from "./ItemCount";

const ItemDetailContainer = (props) => {
    const { listaCompra, addProducto } = useContext(CompraContext);

    if (!props.item) {
        return  <p>No hay información para mostrar</p>;
    }

    const addToCart = (cantidad) => {
        console.log('Agregar al carrito', cantidad);
        addProducto(props.item, cantidad);
    }

    return (
        <>
            <div className="text-center">
                <h1>{props.item.category.name}</h1>
            </div>
            <div className="list-group-count">
                <div className="col">
                    <img className='list-item-image-detail' src={props.item.pictures[0]} alt={props.item.title}></img>
                </div>
                <div className="col">
                    <h1>{props.item.title}</h1>
                    <p className="text-justify">{props.item.description}</p>
                    <p>Condición:&nbsp;<span className="text-bold">{props.item.condition}</span></p>
                </div>
            </div>
            <div className="list-group-count">
                <h1>{props.item.price} {props.item.currency}</h1>
                <ItemCount init={1} stock={props.item.stock} addToCart={addToCart} ></ItemCount>
                
            </div>
        </>
    )
}
export default ItemDetailContainer;