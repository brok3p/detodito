import './App.css';
// import NavBar from './components/navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Producto from './pages/producto/producto';
import Categoria from './pages/categoria/categoria';
import Base from './components/Layout/Base';
import Login from './pages/login/login';
import Registrar from './pages/registrar/registrar';
import Cart from './pages/cart/Cart';
import { CompraProvider } from './context/CartContext';

function App() {
  return (
    // <div className="wrapper">
    //   <NavBar/>
    //   <section className="section-container">
    //     <Routes>

    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/categorias/:id" element={<Categoria />} />
    //       <Route exact path="/productos/:id" element={<Producto />} />

    //     </Routes>
    //   </section>
    // </div>
    <CompraProvider>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categorias/:id" element={<Categoria />} />
          <Route exact path="/productos/:id" element={<Producto />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/ingresar" element={<Login />} />
          <Route exact path="/registrarse" element={<Registrar />} />
        </Routes>
      </Base>
    </CompraProvider>
  );
}

export default App;
