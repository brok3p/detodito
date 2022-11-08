// import productos from '../assets/data/productos.json'
import { /*Navigate, useNavigate,*/ Link } from "react-router-dom";

function Button(props) {
    return (<button onClick={props.onClick} className="btn-primary">{props.text}</button>);
  }

function ItemListContainer(props) {
    //const productos = productos;
    // const navigate = useNavigate();

    const onHandlerAddProduct = () => console.log('add product');
    
    return (
        
      <div className='productos'>
          {
            props.items.map((producto) => (
              <div className='card bb' key={producto._id}>
                <div className="card-body">
                <h3>{producto.title}</h3>
                <Link to={`/productos/${producto._id}`} >
                <img className='producto-image' src={producto.pictures[0]} alt={producto.title}></img>
                </Link>
                <p>{producto.brand}</p>
                <Button onClick={onHandlerAddProduct} text="Add to car"></Button>
                </div>
              </div>
            ))
          }
        </div>
      
    );
    
}
export default ItemListContainer;