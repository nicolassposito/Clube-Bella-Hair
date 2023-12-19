import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import DashboardHome from './pages/dashboard/home';
import './Global.css';
import Assinatura from './pages/dashboard/assinatura';
import Preferences from './pages/dashboard/preferencias';
import $ from "jquery"
import logo from './img/logo.png';
import gif from './img/loading heart.gif';

function App() {
  $(document).ready(function() {
    // $('img').on('loadstart', function() {
    //     $('#loadingScreen').show();
    // });

    // $('img').on('load', function() {
    //     $('#loadingScreen').hide();
    // });
});

  return (
    <div className="App" id='app'>
      <div id="loadingScreen" style={{"position":"fixed","zIndex": "1000","top":"0","left":"0","width":"100%","height":"100%","backgroundColor":"rgba(0,0,0,0.5)","display":"flex","justifyContent":"center","alignItems":"center"}}><div><img width={260} src={logo} alt="Carregando..."/><img src={gif} width={50}></img></div></div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/painel' element={<DashboardHome />} />
          <Route path='/painel/assinatura' element={<Assinatura />} />
          <Route path='/painel/preferencias' element={<Preferences />} />
          {/* <Route path='*' element={<404Page />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
