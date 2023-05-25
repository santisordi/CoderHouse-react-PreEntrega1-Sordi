const Item = ({producto}) => {
    return (
        <>
        <div className="col-md-4 my-4">
            <div className="card border border-0">
                <img src={producto.imagen} className="card-img-top" style={{ height:400 }} alt={producto.titulo}/>
                <div className="card-body">
                    <h3>{producto.titulo}</h3>
                    <p className="card-text">{producto.descripcion}<br /><b>${producto.precio}</b></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item;