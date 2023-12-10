import React from 'react';
import logo from '../img/logo.png';
import logoB from '../img/logoB.png';
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport } from "react-icons/md";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/shift-away.css';
import './css/panel.css';

function Panel() {
  tippy('.painel-item', {
    animation: 'shift-away',
    placement: 'right',
    touch: 'boolean',
  });
  return(
    <div>
      <div className='p-4 border-r inline-block h-screen'>
        <div className='border-b pb-6'>
          <img src={logo} width={220} className='hidden md:block'></img>
          <img src={logoB} width={70} className='md:hidden pl-2.5'></img>
        </div>
        <ul className='py-4 text-xl md:text-lg text-center flex flex-col'>
          <li id="painel" data-tippy-content="Painel" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700 active'><MdSpaceDashboard className='md:mr-3'/><span className='hidden md:block'>Painel</span></li>
          <li id="assinatura" data-tippy-content="Assinatura" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdAutoAwesome className='md:mr-3'/><span className='hidden md:block'>Assinatura</span></li>
          <li id="preferencias" data-tippy-content="Preferências" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdAddReaction className='md:mr-3'/><span className='hidden md:block'>Preferências</span></li>
          <li id="solicitartroca" data-tippy-content="Solicitar troca" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdOutlineChangeCircle className='md:mr-3'/><span className='hidden md:block'>Solicitar troca</span></li>
          <li id="contato" data-tippy-content="Contato" className='painel-item inline-flex md:flex justify-center md:justify-start items-center p-2 md:py-4 rounded-full md:rounded-0 cursor-pointer bg-slate-100 md:bg-transparent text-slate-700'><MdContactSupport className='md:mr-3'/><span className='hidden md:block'>Contato</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;