import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Oferta from './components/oferta';
import Oferta2 from './components/oferta2';
import Oferta3 from './components/oferta3';

function App() {
  return (
    <div className="App" id='home'>
      <Header />
      <Hero />
      <Oferta />
      <Oferta2 />
      <Oferta3 />
    </div>
  );
}
export default App;
