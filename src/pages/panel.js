import React from 'react';
import logo from '../img/logo.png';
import logoB from '../img/logoB.png';
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport } from "react-icons/md";
import tippy from 'tippy.js';
import './css/panel.css';

function Panel() {
  return(
    <div>
      <div className='p-4 border-r inline-block h-screen'>
        <div className='border-b pb-6'>
          <img src={logo} width={220} className='hidden md:block'></img>
          <img src={logoB} width={70} className='md:hidden pl-2.5'></img>
        </div>
        <ul className='py-4 text-xl md:text-lg text-center flex flex-col'>
          <li id="painel" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700 active'><MdSpaceDashboard className='md:mr-3'/><span className='hidden md:block'>Painel</span></li>
          <li id="assinatura" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdAutoAwesome className='md:mr-3'/><span className='hidden md:block'>Assinatura</span></li>
          <li id="preferencias" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdAddReaction className='md:mr-3'/><span className='hidden md:block'>Preferências</span></li>
          <li id="solicitartroca" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdOutlineChangeCircle className='md:mr-3'/><span className='hidden md:block'>Solicitar troca</span></li>
          <li id="contato" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdContactSupport className='md:mr-3'/><span className='hidden md:block'>Contato</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;