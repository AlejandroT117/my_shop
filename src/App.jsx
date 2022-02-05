import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
/* import {Clicker} from './Clicker/Clicker'
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className='ItemListContainer'>
        <ItemListContainer nombre='Alejandro' />

      </section>
    </div>
  );
}

export default App;
