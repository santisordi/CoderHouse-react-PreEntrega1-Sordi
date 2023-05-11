
const ItemListContainer = ({alerta})=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="alert alert-warning my-5 text-center" role="alert">{alerta}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer