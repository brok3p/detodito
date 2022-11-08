import './App.css';
import NavBar from './components/navbar/NavBar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import Producto from './pages/producto/producto';
import Categoria from './pages/categoria/categoria';

function App() {
  return (
    <div className="wrapper">
      <NavBar/>
      <section className="section-container">
        <Routes className="section-container">

          <Route exact path="/" element={<Home />} />
          <Route exact path="/categorias/:id" element={<Categoria />} />
          <Route exact path="/productos/:id" element={<Producto />} />

        </Routes>
      </section>
    </div>
    
  );
}

export default App;
