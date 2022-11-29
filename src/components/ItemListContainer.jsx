// import productos from '../assets/data/productos.json'
import { useContext } from "react";
import { /*Navigate, useNavigate,*/ Link } from "react-router-dom";
import { CompraContext } from "../context/compra.context";
import './ListGroup/ListGroup.css'

function Button(props) {
    return (<button onClick={props.onClick} className="btn-primary">{props.text}</button>);
  }

function ItemListContainer(props) {
  const { addProducto } = useContext(CompraContext);
    //const productos = productos;
    // const navigate = useNavigate();

    if (props.items.length < 1) {
      return  <p>No hay elementos para mostrar</p>;
    }

    const onHandlerAddProduct = () => console.log('add product');
    
    return (
        
      // <div className='productos'>
      //     {
      //       props.items.map((producto) => (
      //         <div className='card bb' key={producto._id}>
      //           <div className="card-body">
      //           <h3>{producto.title}</h3>
      //           <Link to={`/productos/${producto._id}`} >
      //           <img className='producto-image' src={producto.pictures[0]} alt={producto.title}></img>
      //           </Link>
      //           <p>{producto.brand}</p>
      //           <Button onClick={onHandlerAddProduct} text="Add to car"></Button>
      //           </div>
      //         </div>
      //       ))
      //     }
      //   </div>

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
                  <Button onClick={() => addProducto(producto)} text="Agregar al carro"></Button>
                </div>
              </div>
            ))
          }
        </div>
      </>
      
    );
    
}
export default ItemListContainer;