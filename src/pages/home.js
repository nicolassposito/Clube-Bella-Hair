import '../App.css';
import Header from '../components/header';
import Hero from '../components/hero';
import Oferta from '../components/oferta';
import Oferta2 from '../components/oferta2';
import Oferta3 from '../components/oferta3';
import Redirect from '../components/site redirect';
import Pricing from '../components/pricing';
import ComoFunciona from '../components/comoFunciona';
import Garantia from '../components/garantia';
import Contato from '../components/contato';
import Footer from '../components/footer';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("bem vindo " + user.email)
    const uid = user.uid;
  } else {
    
  }
});
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
        <Footer />
      </div>
    );
  }
  export default Home;