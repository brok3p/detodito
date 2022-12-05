const OrderInfo = ({user, tag_invoicenumber, tag_orderid, tag_ordername, tag_quotedate} ) => {
    const espacing = <div className="spacing"><hr /></div>;
    return (
        <>
        <div className="deliver">
                    <p> Detalles de entrega:</p>
                    {user?.direccion[0]?.pais} <br />
                    {user?.direccion[0]?.departamento} <br />
                    {user?.direccion[0]?.provincia} <br />
                    {user?.direccion[0]?.distrito} <br />
                    {user?.direccion[0]?.direccion}
                </div>
                <div className="client">
                    <p>Detalles del Cliente: </p>
                    <strong>Nombre:</strong> {user?.nombre}&nbsp;{user?.apellidos}<br />
                    <strong>Correo:</strong> {user?.email}<br />
                    <strong>Número de Contacto: </strong> {user?.telefono}<br />
                </div>
                <div className="orderinfo">
                    <p>Información del Pedido: </p>
                    <strong>Nuestra referencia: </strong> DWC{tag_invoicenumber}-{tag_orderid}<br />
                    <strong>Número Pedido: </strong>{tag_orderid} <br />
                    <strong>Referencia Pedido: </strong> {tag_ordername} <br />
                    <strong>Fecha Pedido: </strong> {tag_quotedate} <br />
                </div>
                {espacing}
                <div className="payinfo">
                    <p>PARA SU INFORMACIÓN:</p>
                    Puede pagar su pedido con tarjeta de débito/crédito accediendo a su cuenta personal en su banca por internet o llamando al 01292 430300
                    <strong>(puede aplicarse una tasa de tramitación del 2,5%, que se detallará en su factura)</strong>. Para pagar por transferencia bancaria, utilice los siguientes datos:
                    <strong>Código de clasificación: 11-52-37 Número de cuenta: 00196268</strong>.
                </div>
    
        </>
    );
}
export default OrderInfo;