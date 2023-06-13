import './App.css';
import Cart from './components/Cart';
import Destacados from './components/Destacados';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"/destacados"} element={<Destacados/>}/>
          <Route path={"/cart"} element={<Cart />}/>
          <Route path={"/*"} element={<Error404 />}/>
  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
