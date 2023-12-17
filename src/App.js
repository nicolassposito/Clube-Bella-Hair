import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import DashboardHome from './pages/dashboard/home';
import './Global.css';
import Assinatura from './pages/dashboard/assinatura';
import Preferencias from './pages/dashboard/preferencias';

function App() {
  return (
    <div className="App" id='app'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/painel' element={<DashboardHome />} />
          <Route path='/painel/assinatura' element={<Assinatura />} />
          <Route path='/painel/assinatura' element={<Preferencias />} />
          {/* <Route path='*' element={<404Page />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
