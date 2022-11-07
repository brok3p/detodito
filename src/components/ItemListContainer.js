import productos from '../assets/data/productos.json'

function Button(props) {
    return (<button onClick={props.onClick} className="btn-primary">{props.text}</button>);
  }

function ItemListContainer() {
    //const productos = productos;

    const onHandlerAddProduct = () => console.log('add product');
    
    return (
        <section className="section-container">
      <div className='productos'>
          {
            productos.map((producto) => (
              <div className='card bb' key={producto._id}>
                <div className="card card-body">
                <h3>{producto.title}</h3>
                <img className='producto-image' src={producto.pictures[0]} alt={producto.title}></img>
                <p>{producto.brand}</p>
                <Button onClick={onHandlerAddProduct} text="Add to car"></Button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
    
}
export default ItemListContainer;