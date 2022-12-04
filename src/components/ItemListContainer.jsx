// import productos from '../assets/data/productos.json'
import { useContext } from "react";
import { /*Navigate, useNavigate,*/ Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './ListGroup/ListGroup.css'

function Button(props) {
    return (<button disabled={props.active} onClick={props.onClick} className="btn-primary btn-default">{props.text}</button>);
  }

function ItemListContainer(props) {
  const { addProducto, getCantidadProducto } = useContext(CartContext);
    //const productos = productos;
    // const navigate = useNavigate();

    if (props.items.length < 1) {
      return  <p>No hay elementos para mostrar</p>;
    }

    const onHandlerAddProduct = () => console.log('add product');
    
    
    return (
      <>
        <div className="card-list">
          {
            props.items.map((producto) => (
              <div className="list-group" key={producto._id}>
                <div className="list-item-img">
                  <Link to={`/productos/${producto._id}`} >
                    <img className='producto-image' src={producto.pictures[0]} alt={producto.title}></img>
                  </Link>
                </div>
                <div className="list-item-text">
                  <h1>
                    <Link to={`/productos/${producto._id}`} >
                      {producto.title}
                    </Link>
                  </h1>
                  <h2>{producto.price} {producto.currency}</h2>
                </div>
                <div className="list-item-buttons">
                  <Button active={getCantidadProducto(producto._id) > 0 } onClick={() => addProducto(producto)} text="Agregar al carro"></Button>
                </div>
              </div>
            ))
          }
        </div>
      </>
      
    );
    
}
export default ItemListContainer;