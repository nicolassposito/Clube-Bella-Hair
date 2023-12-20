import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import DashboardHome from './pages/dashboard/home';
import './Global.css';
import Assinatura from './pages/dashboard/assinatura';
import Preferences from './pages/dashboard/preferencias';
import SolicitarTroca from './pages/dashboard/troca';
import $ from "jquery"
import logo from './img/logo.png';
import gif from './img/loading heart.gif';

function App() {
  $(document).ready(function() {
    $('img').on('loadstart', function() {
        $('#loadingScreen').show();
    });

    $('img').on('load', function() {
        $('#loadingScreen').hide();
    });
});

  return (
    <div className="App" id='app'>
      <div id="loadingScreen" className='fixed z-50 bg- w-full h-full' style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}><div className='absolute top-1/2 left-1/2 flex items-center text-neutral-800 font-medium' style={{transform: 'translate(-50%, -50%)'}}><img src={gif} width={50}></img>Carregando...</div></div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/painel' element={<DashboardHome />} />
          <Route path='/painel/assinatura' element={<Assinatura />} />
          <Route path='/painel/preferencias' element={<Preferences />} />
          <Route path='/painel/troca' element={<SolicitarTroca />} />
          {/* <Route path='*' element={<404Page />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
