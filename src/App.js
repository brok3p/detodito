import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar/NavBar';



function App() {
  return (
    <div className="wrapper">
      <NavBar/>
      <ItemListContainer></ItemListContainer>
    </div>
    
  );
}
export default App;
