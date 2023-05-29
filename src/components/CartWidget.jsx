const carrtioImg = '/assets/images/cart.svg'

const CartWidget = () => {
    return (
            <button type="button" className="btn btn-light position-relative">
                <img src={carrtioImg} alt="Logo carrito" width={25} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
    )
}

export default CartWidget

