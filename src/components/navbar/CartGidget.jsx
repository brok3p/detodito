import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import emptyCart from '../../assets/img/empty-cart.png';
import { CartContext } from '../../context/CartContext';
import { Badge } from '../Badge/Bagde';
// import ImagenCss from '../Imagen/ImagenCss';

function CartWidget() {
    const { calcularCantidadListaCompra } = useContext(CartContext);
    const indicadorBadge = calcularCantidadListaCompra() | 0;
    const faIconoBadge = indicadorBadge > 0 ? "fa-solid fa-cart-shopping text-white" : "fas fa-cart-shopping text-white";
    
    return (
        <Link to="/cart">
            {/* <ImagenCss className="img-fluid img-nav-logo" src={emptyCart} alt="cart"></ImagenCss> */}
            <Badge icono={faIconoBadge} indicador={indicadorBadge}></Badge>
        </Link>);
}
export default CartWidget;