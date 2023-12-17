import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import logoB from '../img/logoB.png';
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport, MdOutlineLogout } from "react-icons/md";
import './css/panel.css';
import Auth from '../authentication';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom';
import $ from "jquery"

function Panel() {
  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log("User logged out");
    }).catch((error) => {
      console.log(error);
    });
  };
  
  var pathname = window.location.pathname;
  var appId = pathname.split('/')[2];
  window.addEventListener("load", (event) => {
    switch(appId) {
      case 'assinatura':
        $("#assinatura").addClass("active");
        break;
        case 'preferencias':
        $("#preferencias").addClass("active");
        break;
      default:
        $("#painel").addClass("active");
    }
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const leftPanel = document.getElementById('leftPanel');
    const updateWidth = () => setWidth(leftPanel.offsetWidth);

    // Atualiza a largura inicial
    updateWidth();

    // Adiciona o event listener para atualizar a largura quando a janela for redimensionada
    window.addEventListener('resize', updateWidth);

    // Limpa o event listener quando o componente for desmontado
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return(
    <>
    <div className='w-full bg-white fixed py-2 z-10 border-b'>
      <div onClick={logout} className='flex mr-2 text-neutral-700 font-medium items-center justify-end px-3 text-lg cursor-pointer hover:underline underline-offset-4 decoration-pink-600 decoration-2 hover:text-rose-500 transition'><MdOutlineLogout size={22} className='mr-1 pb-0.5'/>Sair</div>
    </div>
    <div id='SpacingRight' style={{ width: `${width}px` }}></div>
    <div className='top-0 z-10 bg-white h-screen z-20 fixed overflow-hidden'>
      <div id='leftPanel' className='pt-6 md:p-4 border-r relative h-full'>
        <div className='border-b pb-6'>
          <img src={logo} width={220} className='hidden md:block'></img>
          <img src={logoB} width={70} className='md:hidden pl-2.5'></img>
        </div>
        <ul className='py-4 text-xl md:text-lg text-center flex flex-col text-slate-700'>
         <li id="painel" className='painel-item bg-slate-100'><MdSpaceDashboard className='md:mr-3'/><span className='hidden md:block'>Painel</span><div className='onhover'>Painel</div></li>
         <Link to={"/painel/assinatura"}><li id="assinatura" className='painel-item bg-slate-100'><MdAutoAwesome className='md:mr-3'/><span className='hidden md:block'>Assinatura</span><div className='onhover'>Assinatura</div></li></Link>
         <Link to={"/painel/preferencias"}><li id="preferencias" className='painel-item bg-slate-100'><MdAddReaction className='md:mr-3'/><span className='hidden md:block'>Preferências</span><div className='onhover'>Preferências</div></li></Link>
          <li id="solicitartroca" className='painel-item bg-slate-100'><MdOutlineChangeCircle className='md:mr-3'/><span className='hidden md:block'>Solicitar troca</span><div className='onhover'>Solicitar troca</div></li>
          <li id="contato" className='painel-item bg-slate-100'><MdContactSupport className='md:mr-3'/><span className='hidden md:block'>Contato</span><div className='onhover'>Contato</div></li>
        </ul>
        <Auth />
      </div>
    </div>
    </>
);
}

export default Panel;