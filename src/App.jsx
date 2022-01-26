import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer'

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
