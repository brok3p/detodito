import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CompraContext } from '../../context/compra.context';
import './Badge.css'

export const Badge = () => {
    const { calcularCantidadListaCompra } = useContext(CompraContext);
    const cantidad = calcularCantidadListaCompra();
    const estiloCart = cantidad > 0 ? "fa-solid fa-cart-shopping fa-2x" : "fa-regular fa-cart-shopping fa-2x";

    return (
        // <ul className="nav navbar-nav mr-auto flex-column flex-lg-row">
        //     <li className="nav-item">
                <Link className="" aria-label="cart" href="#">
                    <div className="badge-container">
                        <em className={estiloCart}></em>
                        {/* {cantidad > 0 && <div className="badge-num">{cantidad > 99 ? '99+' : cantidad}</div>} */}
                        {cantidad > 0 && <div className="badge-num">{cantidad}</div>}
                    </div>
                </Link>
        //     </li>
        // </ul>
        
    )
}
// export default Badge;