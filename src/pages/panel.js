import React from 'react';
import logo from '../img/logo.png';
import logoB from '../img/logoB.png';
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport } from "react-icons/md";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Panel() {
  tippy('#painel', {
    content: 'My tooltip!',
  });
  return(
    <div>
      <div className='p-4 border-r inline-block h-screen'>
        <div className='border-b pb-6'>
          <img src={logo} width={220} className='hidden md:block'></img>
          <img src={logoB} width={120} className='md:hidden pl-3'></img>
        </div>
        <ul className='py-4'>
          <li id="painel" className='flex items-center'><MdSpaceDashboard className='mr-1'/>Painel</li>
          <li id="assinatura" className='flex items-center'><MdAutoAwesome className='mr-1'/>Assinatura</li>
          <li id="preferencias" className='flex items-center'><MdAddReaction className='mr-1'/>Preferências</li>
          <li id="solicitartroca" className='flex items-center'><MdOutlineChangeCircle className='mr-1'/>Solicitar troca</li>
          <li id="contato" className='flex items-center'><MdContactSupport className='mr-1'/>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Panel;