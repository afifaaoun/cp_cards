import './App.css';
import Cards from './components/cards';
import Carousels from './components/Carousel';
import Categories from './components/Categories';
import Navbars from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbars/>
      <Cards/>
      <Carousels/>
      <Categories/>

    </div>
  );
}

export default App;
