function ProductInfo({items}) {

    const listaProductos = items.map((producto) => {
        return (
            <tr key={producto._id}>
                <td className="name">{producto.title}</td>
                <td className="detail">{producto.brand}</td>
                <td className="qty">{producto.cantidad}</td>
                <td className="cost">{producto.price}</td>
            </tr>
        );
    });
    return (<div className="productinfo">
        <p> Información de su Pedido:</p>
        <table>
            <tbody>
                <tr>
                    <th className="name"> Nombre </th>
                    <th className="detail"> Marca </th>
                    <th className="qty">Cantidad</th>
                    <th className="cost">Precio</th>
                </tr>
                {listaProductos}
            </tbody>
        </table>
    </div>);
}
export default ProductInfo;