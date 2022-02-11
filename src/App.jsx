import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
/* import {Clicker} from './Clicker/Clicker'
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

import {PokeApi} from "./ejemplos/PokeApi/PokeApi"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Contacto } from './components/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
          
          <Routes>
            <Route path='/' element={<ItemListContainer nombre='Alejandro' />}/>
            <Route path='/productos' element={<ItemListContainer nombre='Alejandro' />}/>
            <Route path='/productos/:catId' element={<ItemListContainer nombre='Alejandro' />}/>
            <Route path='/detail/:catId' element={<ItemDetailContainer/>}/>
            <Route path='/poke-api' element={<PokeApi/>}/>
            <Route path='/contacto' element={<Contacto/>}/>

            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>

          
          
      </div>
    </BrowserRouter>
  );
}

export default App;
