const ItemDetailContainer = (props) => {
    return (
        <>
            <div>
                <div>
                    {props.item.category.name}
                </div>
                <div>
                    <img className='producto-image' src={props.item.pictures[0]} alt={props.item.title}></img>
                </div>
                <div>
                    <h1>{props.item.title}</h1>
                    <p>{props.item.description}</p>
                    {props.item.condition}
                </div>
            </div>
            <div>
                <div>{props.item.price} {props.item.currency}</div>
                <div>-</div>
                <div>1</div>
                <div>+</div>
                <div>Stock disponible {props.item.stock.stockTotal}</div>
                <div>
                    <button>Add to card</button>
                </div>
            </div>
        </>
    )
}
export default ItemDetailContainer;