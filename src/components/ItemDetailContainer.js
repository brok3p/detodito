const ItemDetailContainer = (props) => {
    return (
        <>
            <div className="text-center">
                <h1>{props.item.category.name}</h1>
            </div>
            <div className="list-group-count">
                <div className="col">
                    <img className='list-item-image-detail' src={props.item.pictures[0]} alt={props.item.title}></img>
                </div>
                <div className="col">
                    <h1>{props.item.title}</h1>
                    <p className="text-justify">{props.item.description}</p>
                    <p>Condición:&nbsp;<span className="text-bold">{props.item.condition}</span></p>
                </div>
            </div>
            <div className="list-group-count">
                <h1>{props.item.price} {props.item.currency}</h1>
                <div className="list-item-count-group">
                    <div className="list-item-count">
                    <button className="counter">-</button>
                    <h1>1</h1>
                    <button className="counter">+</button>
                    </div>
                </div>
                <div className="text-muted">
                    <h2>Stock disponible {props.item.stock.stockTotal}</h2>
                </div>
                <div>
                    <button className="list-item-button">Agregar al carro</button>
                </div>
            </div>
        </>
    )
}
export default ItemDetailContainer;