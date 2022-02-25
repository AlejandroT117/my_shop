import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
/* import {Clicker} from './Clicker/Clicker'
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

import { PokeApi } from "./ejemplos/PokeApi/PokeApi";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Contacto } from "./components/Contacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

import { Form } from "./components/Form/Form";
import {CartProvider} from './context/MiContext'
import { Cart } from "./components/Cart/Cart";
import {db} from "./firebase/config"

function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App cover-container text-center">
          <header className="App-header">
            <NavBar/>
          </header>

          <Routes>
            <Route path="/" element={<Home nombre="Alejandro" />} />
            <Route
              path="/productos"
              element={<ItemListContainer nombre="Alejandro" />}
            />
            <Route
              path="/productos/:catId"
              element={<ItemListContainer nombre="Alejandro" />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/poke-api" element={<PokeApi />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/form" element={<Form />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
