import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <>
      <header className="menu position-fixed w-100 top-0 shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand fs-3" href="/">Games <span className="text-danger fs-6 fw-bold">Shop</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav d-flex justify-content-center">
                <a className="nav-link active" aria-current="page" href="/categorias/accion">Accion</a>
                <a className="nav-link" href="/categorias/carreras">Carreras</a>
                <a className="nav-link" href="/categorias/aventuras">Aventuras</a>
                <a className="nav-link" href="/categorias/un_jugador">Solo un jugador</a>
              </ul>
            </div>
          </div>
          <CartWidget/>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
