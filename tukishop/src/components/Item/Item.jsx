import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Item = ({prod}) => {

    const {darkMode} = useDarkModeContext()
    return (
        <div className={`card mb-3 cardProducto ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}>
                        <img src={prod.img} className="card-img-top" alt="imagen" />
                        <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody' }`}>
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <Link className="nav-link" to={`/product/${prod.id}`}><button className='btn btn-dark'>Ver Producto</button></Link>
                        </div>
        </div>
    );
}

export default Item;