import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Panel from './pages/panel';
import './Global.css';
import Assinatura from './pages/dashboard/assinatura';

function App() {
  return (
    <div className="App" id='app'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/painel' element={<Assinatura />} />
          {/* <Route path='*' element={<404Page />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
