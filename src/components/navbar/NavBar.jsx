import React from "react";
import './NavBar.css';
import CartWidget from "./CartGidget";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavSearchInput from "./NavSearchInput";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


// #region Componentes funcionales 

 function NavbarListItem(props) {
  return (
    <li className="nav-item">
      {/* <a className="nav-link" title={props.item.text} href={props.item.link}>
        <span>{props.item.text}</span>
      </a> */}
      <NavLink className="nav-link" title={props.item.text} to={props.item.link}>
        <span>{props.item.text}</span>
      </NavLink>
    </li>
  );
}

function SubmenuLink(props) {
  const submenu = props.submenu;
  let listItems = '';
  if (submenu?.length > 0) {
    listItems = submenu.map((item) =>
      // Correct! Key should be specified inside the array.
      // <a className="dropdown-item" key={item.id.toString()} href={item.link}>{item.text}</a>
      <NavLink className="dropdown-item" key={item.id.toString()} to={item.link}>
        <span>{item.text}</span>
      </NavLink>
    );
  }
  return listItems;
}

function NavbarListItemLeft(props) {
  return (
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" title={props.item.text} to={props.item.link}>
        <span>{props.item.text}</span>
      </NavLink>
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


// #endregion


const NavBar = ({items}) => {
  // const categorias = categoriasMock.data.categories.map(item => {
  //   return {id: item._id, text: item.name, link: `/categorias/${item._id}`}
  // });
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [ filter, setFilter] = useState('');

  const menu = [
    {
      id: 1,
      text: 'Categor??as',
      //link: '/categorias',
      submenu: items,
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
  ];

  const handleFilterChange = e => {
    if (e !== undefined || e !== '') {
      navigate(`/search/${e}`);
    } else {
      navigate('/');
    }
  }


  return (
    // <header className="topnavbar-wrapper">
      <nav className="navbar navbar-expand-lg topnavbar">
        <div className="navbar-header">
          {/* <a className="navbar-brand" href="/">
            <div className="brand-logo">
              <Logo className="img-fluid img-nav-logo" src={logo} alt="Logo App"></Logo>
            </div>
          </a> */}
          <Link className="s-topbar-logo text-white text-bold" to="/">
            <div className="logo-icon">
              <em className="fas fa-boxes fa-2x"></em>
            </div>
            <div className="logo-name">
              <span>de</span>
              <div className="-flair">todito</div>
            </div>
          </Link>
        </div>

        <div className="navbar-collapse collapse">
          <NavbarListLeft menu={menu.slice(0, 1)}></NavbarListLeft>
          <NavSearchInput submit={handleFilterChange}></NavSearchInput>
          <CartWidget></CartWidget>
          {/* <NavbarList menu={menu.slice(1, 4)}></NavbarList> */}
          <ul className="navbar-nav flex-row">
            {
              user?.email ?
                (<>
                  <li className="nav-item">
                    <NavLink className="nav-link" title={user.nombre} >
                      <span>{user.nombre}</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" title='Salir' onClick={() => logout()}>
                      <span>Salir</span>
                    </NavLink>
                  </li>
                </>)
                :
                <NavbarList menu={menu.slice(1, 4)}></NavbarList>
            }
          </ul>
        </div>
      </nav>
    // </header>
  );
}
export default NavBar;