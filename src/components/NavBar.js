import React from "react";
import './NavBar.css';
import logo from '../assets/img/logo-1.png'
import emptyCart from '../assets/img/empty-cart.png'


function Logo(props) {
  return (<img
    className={props.className}
    src={props.src}
    alt={props.alt} />);
}

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function NavbarListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <li className="nav-item">
      <a className="nav-link" title={props.item.text} href={props.item.link}>
        <span>{props.item.text}</span>
      </a>
    </li>
  );
}

function NavbarList(props) {
  const menu = props.menu;
  const listItems = menu.map((item) =>
    // Correct! Key should be specified inside the array.
    <NavbarListItem key={item.id.toString()} item={item} />
  );
  return (
    <ul className="navbar-nav flex-row">
      {listItems}
    </ul>
  );
}


const NavBar = () => {

  const menu = [
    {
      id: 1,
      text: 'Categorías',
      link: '/categorias',
      submenu: [
        {
          id: 1,
          'text': 'Tecnología',
          'link': '/tercnologias'
        },
        {
          id: 2,
          'text': 'Vehículos',
          'link': '/vehiculos'
        },
        {
          id: 3,
          'text': 'Ropa',
          'link': '/ropa'
        },
        {
          id: 4,
          'text': 'Alimentos',
          'link': '/alimentos'
        },
        {
          id: 5,
          'text': 'Belleza',
          'link': '/belleza'
        },
        {
          id: 6,
          'text': 'Hogar',
          'link': '/hogar'
        },
        {
          id: 7,
          'text': 'Detporte',
          'link': '/deportes'
        },
        {
          id: 8,
          'text': 'Otros',
          'link': '/otros'
        }
      ]
    },
    {
      id: 2,
      text: 'Ofertas',
      link: '/ofertas',
    },
    {
      id: 3,
      text: 'Crear cuenta',
      link: '/registrarse',
    },
    {
      id: 4,
      text: 'Ingresar',
      link: '/ingresar',
    }
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light topnavbar">
      <div className="navbar-header">
        <a className="navbar-brand" href="#/">
          <div className="brand-logo">
            <Logo className="img-fluid img-nav-logo" src={logo} alt="Logo App"></Logo>
            {/* <span className="text-white">D'todito</span> */}
          </div>
        </a>
      </div>

      <div className="navbar-collapse collapse">
        {/* <ul className="nav navbar-nav mr-auto flex-column flex-lg-row">
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
        </ul> */}
        <NavbarList menu={menu.slice(0,2)}></NavbarList>

        <div className=" mr-auto _searchdata_m7g26_132">
          <form className="d-flex">
            <input type="text" className="nav-search-input" placeholder="Buscar productos, marcas y más"
              data-ms-editor="true" />
          </form>
        </div>
        <a className="_NavLinkActive_m7g26_32" aria-current="page" href="/cart">
          <img className="img-fluid img-nav-logo _cartIMG_m7g26_151" src={emptyCart} alt="cart" />
        </a>
        {/* <Lista></Lista> */}
        <NavbarList menu={menu.slice(2,4)}></NavbarList>
      </div>
    </nav>
  );
};

export default NavBar;