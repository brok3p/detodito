import PropTypes from 'prop-types';
import './Badge.css';

export const Badge = ({icono, indicador }) => {
    return (
        // <Link className="" aria-label="cart" href="#">
        <div className="badge-container">
            <em className={icono}></em>
            {/* {cantidad > 0 && <div className="badge-num">{cantidad > 99 ? '99+' : cantidad}</div>} */}
            {indicador > 0 && <div className="badge-num">{indicador}</div>}
        </div>
        // </Link>

    );
}
// export default Badge;

Badge.propTypes = {
    icono: PropTypes.string.isRequired,
    indicador: PropTypes.number.isRequired,
}