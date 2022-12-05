import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { addProducto, clear, listaCompra, total, removeProducto } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    function handleDelete(e) {
        // dispatch(DeleteFromCart(e))
        // toast.error('Item borrado de su carrito', {
        //     position: "top-right",
        //     autoClose: 800,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        console.log('eliminar', e);
    }

    return (
        <div className="cart-container">
            <div className="card cart-card">
                <h1>Tu carrito de compras</h1>
                <hr />
                <div>
                    {listaCompra.length > 0 ? (
                        <div className="cart-card-body">
                            <div className="cart-card-list">
                                <h3>Productos</h3>
                                {listaCompra.map((e, i) => (
                                    <div className="cart-card-list-item" key={i}>
                                        <img src={e.pictures[0]} alt='Producto'/>
                                        <h1>{e.title}</h1>
                                        <h2>Total: US$ {Math.round(e.price * e.cantidad)}</h2>
                                        <div className="cart-card-actions">
                                            <button className="btn-default" onClick={() => {
                                                if (e.cantidad > 1) {
                                                    // dispatch(DecreaseCart(e.product))
                                                    addProducto(e, -1)
                                                }
                                                else {
                                                    // handleDelete(e.product)
                                                    removeProducto(e._id)
                                                }
                                            }
                                            }>-</button>
                                            <h1>{e.cantidad}</h1>
                                            <button className="btn-default" onClick={() => {
                                                if (e.stock.stockTotal > e.cantidad) {
                                                    // dispatch(IncreaseCart(e.product))
                                                    addProducto(e)
                                                }
                                                else {
                                                    return
                                                }
                                            }
                                            }>+</button>
                                        </div>
                                        <button className="EliminarItem btn-danger" onClick={() =>
                                            removeProducto(e._id)}>
                                            Eliminar
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className='cart-card-checkout'>
                                <div className='Checkout_total'>
                                    <h1>Total:US$ <br /> {Math.ceil(total)}</h1>
                                </div>
                                {
                                    user?.email ? null : <p>Para completar la compra inicia sesión</p>
                                }
                                {
                                    user?.email ?
                                        <button className="btn-default" onClick={() => navigate('/orders')}>Checkout</button>
                                        :
                                        null
                                        // <Button variant="secondary" disabled>Checkout</Button>
                                }
                                <button className="EliminarItem btn-danger btn-default" onClick={() => clear()}>Borrar carrito</button>
                            </div>
                        </div>
                    ) : (
                        <div className='cart-card-body-empty'>
                            {/* <img src={EmptyCart} alt="emptyCart" /> */}
                            <i className="fas fa-cart-shopping fa-5x"></i>
                            <h1><em>Tu carrito está vacío!</em></h1>
                            {/* <a onClick={() => navigate("/")}>
                                <h2>Regresar a la tienda</h2>
                            </a> */}
                            <Link to={'/'}>
                                <h2>Regresar a la tienda</h2>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            {/* {
                FavState.length > 0 && isAuthenticated ?
                    <div className={FavDiv}>
                        <h1>productos que te han interesado</h1>
                        <div className={ItemsContainer}>
                            <div className={ItemsInCart}>
                                {
                                    FavState.map((e, i) =>

                                        <div className={ItemsContainer_SingleItem} key={i}>
                                            <img src={e.thumbnail} />
                                            <Link to={`/products/${e.product}`}>
                                                {e.title}
                                            </Link>
                                            <h2>US$ {e.price}</h2>
                                            <h2>{e.province}</h2>
                                            {
                                                e.freeShipping == true ? <h2 className={Gratis}>Envio Gratuito</h2> : null
                                            }
                                            {
                                                e.condition == "new" ? <h2>Nuevo</h2> : <h2>Usado</h2>
                                            }
                                            <button className={AddCartFav} onClick={() => handleAddtoCart(e)}>
                                                Agregar al carrito
                                            </button>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
        </div>
    );
}
export default Cart;