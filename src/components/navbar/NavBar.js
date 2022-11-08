import React from "react";
import './NavBar.css';
import logo from '../../assets/img/logo-1.png'
import CartWidget from "./CartGidget";
import Logo from "../img/Logo";
import categoriasMock from "../../assets/data/categoriasMock";


// #region Componentes funcionales 

 function NavbarListItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" title={props.item.text} href={props.item.link}>
        <span>{props.item.text}</span>
      </a>
    </li>
  );
}

function SubmenuLink(props) {
  const submenu = props.submenu;
  let listItems = '';
  if (submenu?.length > 0) {
    listItems = submenu.map((item) =>
      // Correct! Key should be specified inside the array.
      <a className="dropdown-item" key={item.id.toString()} href={item.link}>{item.text}</a>
    );
  }
  return listItems;
}

function NavbarListItemLeft(props) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" title={props.item.text} href={props.item.link}>
        <span>{props.item.text}</span>
      </a>
      <div className="dropdown-menu dropdown-content">
        <SubmenuLink submenu={props.item.submenu}></SubmenuLink>
      </div>
    </li>
  );
}

function NavbarList(props) {
  const menu = props.menu;
  const listItems = menu.map((item) =>
    <NavbarListItem key={item.id.toString()} item={item} />
  );
  return (
    <ul className="navbar-nav flex-row">
      {listItems}
    </ul>
  );
}

function NavbarListLeft(props) {
  const menu = props.menu;
  const listItems = menu.map((item) => {
    if (item.submenu?.length > 0) {
      return <NavbarListItemLeft key={item.id.toString()} item={item} />
    } else {
      return <NavbarListItem key={item.id.toString()} item={item} />
    }
  }
  );
  return (
    <ul className="nav navbar-nav mr-auto flex-column flex-lg-row">
      {listItems}
    </ul>
  );
}


function NavSearchInput() {
  return (
  <div className="mr-auto">
    <form className="d-flex">
      <input type="text" className="nav-search-input" placeholder="Buscar productos, marcas y más" />
    </form>
  </div>);
}

// #endregion


const NavBar = () => {

  const categorias = categoriasMock.data.categories.map(item => {
    return {id: item._id, text: item.name, link: `/categorias/${item._id}`}
  });

  const menu = [
    {
      id: 1,
      text: 'Categorías',
      //link: '/categorias',
      submenu: categorias
      // submenu: [
      //   {
      //     id: 1,
      //     'text': 'Tecnología',
      //     'link': '/tercnologias'
      //   },
      //   {
      //     id: 2,
      //     'text': 'Vehículos',
      //     'link': '/vehiculos'
      //   },
      //   {
      //     id: 3,
      //     'text': 'Ropa',
      //     'link': '/ropa'
      //   },
      //   {
      //     id: 4,
      //     'text': 'Alimentos',
      //     'link': '/alimentos'
      //   },
      //   {
      //     id: 5,
      //     'text': 'Belleza',
      //     'link': '/belleza'
      //   },
      //   {
      //     id: 6,
      //     'text': 'Hogar',
      //     'link': '/hogar'
      //   },
      //   {
      //     id: 7,
      //     'text': 'Detporte',
      //     'link': '/deportes'
      //   },
      //   {
      //     id: 8,
      //     'text': 'Otros',
      //     'link': '/otros'
      //   }
      // ]
    },
    // {
    //   id: 2,
    //   text: 'Ofertas',
    //   link: '/ofertas',
    // },
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
    // <header className="topnavbar-wrapper">
      <nav className="navbar navbar-expand-lg topnavbar">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <div className="brand-logo">
              <Logo className="img-fluid img-nav-logo" src={logo} alt="Logo App"></Logo>
              {/* <span className="text-white">D'todito</span> */}
            </div>
          </a>
        </div>

        <div className="navbar-collapse collapse">
          <NavbarListLeft menu={menu.slice(0, 1)}></NavbarListLeft>
          <NavSearchInput></NavSearchInput>
          <CartWidget></CartWidget>
          <NavbarList menu={menu.slice(1, 4)}></NavbarList>
        </div>
      </nav>
    // </header>
  );
}
export default NavBar;