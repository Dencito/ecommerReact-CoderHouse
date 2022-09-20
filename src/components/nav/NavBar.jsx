import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
      <header className="menu position-fixed w-100 top-0 shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand fs-3" to="/">Games <span className="text-danger fs-6 fw-bold">Shop</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav d-flex justify-content-center">
                <li><Link className="nav-link active" aria-current="page" to="/category/accion">Accion</Link></li>
                <li><Link className="nav-link" to="/category/carrera">Carreras</Link></li>
                <li><Link className="nav-link" to="/category/aventura">Aventura</Link></li>
                <li><Link className="nav-link" to="/category/un_jugador">Un jugador</Link></li>
              </ul>
            </div>
          </div>
          <Link className='ms-2 d-flex text-decoration-none text-success' to='/cart'>
            <CartWidget/>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
