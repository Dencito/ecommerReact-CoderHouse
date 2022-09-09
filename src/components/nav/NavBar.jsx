import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <>
      <header className="menu">
        <nav className="d-flex justify-content-between bg-primary shadow-lg">
          <a className="text-decoration-none text-white fs-1 fw-bold ms-2" href="." target="_blank">Games <span className="text-danger">Shop</span></a>
          <ul className="list-unstyled d-flex mt-3">
            <li><a className="mx-2 d-block text-white fs-5 fw-bold text-decoration-none" href=".">Inicio</a></li>
            <li><a className="mx-2 d-block text-white fs-5 fw-bold text-decoration-none" href=".">Productos</a></li>
            <li><a className="mx-2 d-block text-white fs-5 fw-bold text-decoration-none" href=".">Login</a></li>
            <li>
                <CartWidget/>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;