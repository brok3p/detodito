import React from "react";
import './NavBar.css';
import logo from '../assets/img/logo-1.png'
import emptyCart from '../assets/img/empty-cart.png'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light topnavbar">
      <div className="navbar-header">
        <a className="navbar-brand" href="#/">
            <div className="brand-logo">
                <img className="img-fluid img-nav-logo" src={logo} alt="App Logo" />
                {/* <span className="text-white">D'todito</span> */}
            </div>
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
            <a aria-label="algo" className="nav-link dropdown-toggle" href="/#">
              <span>Categorías</span>
            </a>
            <div className="dropdown-menu dropdown-content">
              <a className="dropdown-item" href="/tercnologias">Tecnología</a>
              <a className="dropdown-item" href="/vehiculos">Vehiculos</a>
              <a className="dropdown-item" href="/ropa">Ropa</a>
              <a className="dropdown-item" href="/alimentos">Alimentos</a>
              <a className="dropdown-item" href="/belleza">Belleza</a>
              <a className="dropdown-item" href="/hogar">Hogar</a>
              <a className="dropdown-item" href="/deportes">Detporte</a>
              <a className="dropdown-item" href="/otros">Otros</a>
            </div>
          </li>
          <li className="nav-item" >
            <a className="nav-link" title="Home" href="/ofertas">
              <span>Ofertas</span>
            </a>
          </li>
        </ul>

        <div className=" mr-auto _searchdata_m7g26_132">
          <form className="d-flex">
            {/* <input type="text" className="_datalist_m7g26_103" placeholder="...Buscar" list="data"
              data-ms-editor="true" />
            <button type="submit"
              className="btn btn-outline-success">
              <img src="https://i.pinimg.com/736x/b9/67/82/b96782d0ab0ea492dabcf4a0f00698d2.jpg" alt="search" />
            </button> */}
            <input type="text" className="nav-search-input" placeholder="Buscar productos, marcas y más"
              data-ms-editor="true" />
            {/* <button type="submit" className="nav-search-btn">
              <img className="img-fluid img-nav-logo" src="https://i.pinimg.com/736x/b9/67/82/b96782d0ab0ea492dabcf4a0f00698d2.jpg" alt="search" />
            </button> */}
          </form>
        </div>
        <a activeclassname="_NavLinkActive_m7g26_32" aria-current="page" className="active" href="/cart">
          <img className="img-fluid img-nav-logo _cartIMG_m7g26_151" src={emptyCart} alt="cart" />
        </a>
        <ul className="navbar-nav flex-row">
          <li className="nav-item" >
            <a className="nav-link" title="Home" href="/registrarse">
              <span>Crear cuenta</span>
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" title="Home" href="/ingresar">
              <span>Ingresar</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;