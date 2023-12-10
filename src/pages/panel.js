import React from 'react';
import logo from '../img/logo.png';
import logoB from '../img/logoB.png';
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport } from "react-icons/md";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/shift-away.css';

function Panel() {
  tippy('.painel-item', {
    animation: 'shift-away',
  });
  return(
    <div>
      <div className='p-4 border-r inline-block h-screen'>
        <div className='border-b pb-6'>
          <img src={logo} width={220} className='hidden md:block'></img>
          <img src={logoB} width={120} className='md:hidden pl-3'></img>
        </div>
        <ul className='py-4'>
          <li id="painel" data-tippy-content="Painel" className='painel-item flex items-center py-4 cursor-pointer'><MdSpaceDashboard className='mr-3'/>Painel</li>
          <li id="assinatura" data-tippy-content="Assinatura" className='painel-item flex items-center py-4 cursor-pointer'><MdAutoAwesome className='mr-3'/>Assinatura</li>
          <li id="preferencias" data-tippy-content="Preferências" className='painel-item flex items-center py-4 cursor-pointer'><MdAddReaction className='mr-3'/>Preferências</li>
          <li id="solicitartroca" data-tippy-content="Solicitar troca" className='painel-item flex items-center py-4 cursor-pointer'><MdOutlineChangeCircle className='mr-3'/>Solicitar troca</li>
          <li id="contato" data-tippy-content="Contato" className='painel-item flex items-center py-4 cursor-pointer'><MdContactSupport className='mr-3'/>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;