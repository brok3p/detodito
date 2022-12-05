import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import './Order.css'
import OrderInfo from './OrderInfo';
import Payment from './Payment';
import ProductInfo from './ProductInfo';
import { pedidoService } from '../../services/pedido.service';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const Order = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { listaCompra, total, getPedido, clear } = useContext(CartContext);
    const espacing = <div className="spacing"><hr /></div>;

    const tag_ordername = '#34567890-PER';
    const tag_invoicenumber = 'PER';
    const tag_orderid = '00000129';
    const tag_quotedate = (new Date(Date.now())).toDateString();
    const tag_shippingtotal = 0;
    const tag_invoicediscountamount = 0;
    const tag_amountoutstanding = 0;

    const handleSubmit = async() => {
        setIsLoaded(false);
        console.log('pedido: ', getPedido(user));
        await pedidoService.addPedido(getPedido(user))
            .then((snapshot) => {
                setIsLoaded(true);
                console.log(snapshot);
                clear();
                navigate('/');
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>;
    } else if (!isLoaded) {
        return <Loader></Loader>;
    } else {
    return (
        <>
            <div className="invoice">
                <div className="backpayments">
                    <Link >Mis pagos </Link>
                </div>
                <div className="makepayment">
                    <Link>Pago de Pedido </Link>
                </div>

                <div className="thanks">
                    <p> Gracias por su pedido</p>
                    Encuentre adjunto a continuación la información de su pedido {tag_ordername}.
                </div>
                {espacing}
                <OrderInfo
                    user={user}
                    tag_invoicenumber={tag_invoicenumber}
                    tag_orderid={tag_orderid}
                    tag_ordername={tag_ordername}
                    tag_quotedate={tag_quotedate} ></OrderInfo>
                <ProductInfo items={listaCompra}></ProductInfo>
                <div className="ordernotes">
                    <p> Notas sobre su pedido: </p>
                </div>
                <div className="paymenttotal">
                    <strong>Sub Total: </strong> {total} <br />
                    <strong> Envío &amp; Embalaje: </strong>{tag_shippingtotal} <br />
                    <strong> Descuento: </strong> {tag_invoicediscountamount} <br />
                    <strong> Total: </strong>{total} <br />
                    <strong> Importe pendiente: </strong> {tag_amountoutstanding} <br />
                    <strong> Cantidad pagada: </strong>{total}
                </div>
                {espacing}
                <Payment tag_invoicenumber={tag_invoicenumber} submit={handleSubmit}></Payment>
            </div>
        </>
    );
    }


}
export default Order;