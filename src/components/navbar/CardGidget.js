import emptyCart from '../../assets/img/empty-cart.png'
import Logo from '../img/Logo'

function CartWidget() {
    return (
        <a href="/cart">
            <Logo className="img-fluid img-nav-logo" src={emptyCart} alt="cart"></Logo>
        </a>);
}
export default CartWidget;