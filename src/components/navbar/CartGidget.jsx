import emptyCart from '../../assets/img/empty-cart.png';
import ImagenCss from '../Imagen/ImagenCss'

function CartWidget() {
    
    return (
        <a href="/cart">
            <ImagenCss className="img-fluid img-nav-logo" src={emptyCart} alt="cart"></ImagenCss>
        </a>);
}
export default CartWidget;