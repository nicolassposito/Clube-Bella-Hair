import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Oferta from './components/oferta';

function App() {
  return (
    <div className="App" id='home'>
      <Header />
      <Hero />
      <Oferta />
    </div>
  );
}
export default App;
