import React from 'react';
import logo from '../img/logo.png';
import logoB from '../img/logoB.png';
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport } from "react-icons/md";
import './css/panel.css';
import Auth from '../authentication';

function Panel() {
  return(
    <div>
      <div className='p-4 border-r inline-block h-screen'>
        <div className='border-b pb-6'>
          <img src={logo} width={220} className='hidden md:block'></img>
          <img src={logoB} width={70} className='md:hidden pl-2.5'></img>
        </div>
        <ul className='py-4 text-xl md:text-lg text-center flex flex-col text-slate-700'>
          <li id="painel" className='painel-item bg-slate-100 active'><MdSpaceDashboard className='md:mr-3'/><span className='hidden md:block'>Painel</span><div className='onhover'>Painel</div></li>
          <li id="assinatura" className='painel-item bg-slate-100'><MdAutoAwesome className='md:mr-3'/><span className='hidden md:block'>Assinatura</span><div className='onhover'>Assinatura</div></li>
          <li id="preferencias" className='painel-item bg-slate-100'><MdAddReaction className='md:mr-3'/><span className='hidden md:block'>Preferências</span><div className='onhover'>Preferências</div></li>
          <li id="solicitartroca" className='painel-item bg-slate-100'><MdOutlineChangeCircle className='md:mr-3'/><span className='hidden md:block'>Solicitar troca</span><div className='onhover'>Solicitar troca</div></li>
          <li id="contato" className='painel-item bg-slate-100'><MdContactSupport className='md:mr-3'/><span className='hidden md:block'>Contato</span><div className='onhover'>Contato</div></li>
        </ul>
        <Auth />
      </div>
    </div>
  );
}

export default Panel;