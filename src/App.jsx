import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer alerta="SITIO EN CONSTRUCCION"/>
      <Footer/>
    </div>
  );
}

export default App;
