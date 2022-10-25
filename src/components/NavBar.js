import React from "react";
import './NavBar.css';
import logo from '../assets/img/logo-1.png'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light topnavbar">
      <div className="navbar-header">
        <a className="navbar-brand" href="#/">
            <div className="brand-logo">
                <img className="img-fluid img-nav-logo" src={logo} alt="App Logo" />
                {/* <span style="color: white;">D'todito</span> */}
            </div>
            {/* <div className="brand-logo-collapsed">
                <img class="img-fluid" src={logo} alt="App Logo" />
                <h2 className="text-white">DTDT</h2>
            </div> */}
        </a>
    </div>

      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav mr-auto flex-column flex-lg-row">
          {/* <li className="nav-item" >
            <a className="nav-link" title="Home" href="/home">
              <span>Categorías</span>
            </a>
          </li> */}
          <li dropdown="" className="nav-item dropdown">
            <a dropdowntoggle="" className="nav-link dropdown-toggle dropdown-toggle-nocaret" aria-haspopup="true"
              aria-expanded="false">
              <span>Categorias</span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" title="Categorías" href="/configuraciones/categorias"><span>Categorías</span></a>
              <a className="dropdown-item" title="Impuestos" href="/configuraciones/impuestos"><span>Impuestos</span></a>
              <a className="dropdown-item" title="Monedas" href="/configuraciones/monedas"><span>Monedas</span></a>
              <a className="dropdown-item" title="Pagos" href="/configuraciones/pagos"><span>Pagos</span></a>
              <a className="dropdown-item" title="Unidades" href="/configuraciones/unidades.medida"><span>Unidades</span></a>
              <a className="dropdown-item" title="Usuarios" href="/configuraciones/usuarios"><span>Usuarios</span></a>
            </div>
          </li>
          <li className="nav-item" >
            <a className="nav-link" title="Home" href="/home">
              <span>Ofertas</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav flex-row">
          <li className="nav-item" >
            <a className="nav-link" title="Home" href="/home">
              <span>Crear cuenta</span>
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" title="Home" href="/home">
              <span>Ingresar</span>
            </a>
          </li>
        </ul>
      </div>



      {/* <a className="navbar-brand" href="#">
        d'todito
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default NavBar;