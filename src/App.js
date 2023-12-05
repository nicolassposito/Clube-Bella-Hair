import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Oferta from './components/oferta';
import Oferta2 from './components/oferta2';
import Oferta3 from './components/oferta3';
import Redirect from './components/site redirect';
import Pricing from './components/pricing';
import ComoFunciona from './components/comoFunciona';
import Garantia from './components/garantia';
import Contato from './components/contato';

function App() {
  return (
    <div className="App" id='home'>
      <Header />
      <Hero />
      <Oferta />
      <Oferta2 />
      <Oferta3 />
      <Pricing />
      <Redirect />
      <ComoFunciona />
      <Garantia />
      <Contato />
    </div>
  );
}
export default App;
