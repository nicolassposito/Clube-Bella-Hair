import React from 'react';
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png';
import { FiUser, FiBell, FiChevronUp, FiChevronDown } from "react-icons/fi";
import perfil from '../img/perfil.jpg';
import $ from "jquery"
import { useEffect } from "react";
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    $( "#abrirAvisos" ).hover(
      function() {
        $( "#avisos" ).fadeIn( "fast" );
      }, function() {
        $( "#avisos" ).fadeOut( "fast" );
      }
    );
    
    $( "#abrirmenu" ).hover(
      function() {
        $( "#dropdown" ).slideDown( "fast" );
        $( "#dropdown" ).fadeIn( "fast" );
      }, function() {
        $( "#dropdown" ).slideUp( "fast" );
        $( "#dropdown" ).fadeOut( "fast" );
      }
    );
  })
    return (
        <header id='header' className='md:px-6 sm:px-4 pr-1 text-md font-medium text-neutral-500 py-2 bg-white sticky top-0 z-10 w-full z-20' style={{boxShadow: 'rgba(230, 109, 153, 0.4) 0px -3px 15px 1px'}}>
          <div id='menuWall' style={{display: 'none'}}></div>
          <div id='avisosWall' style={{display: 'none'}}></div>
          <div className='flex justify-between items-center'>
            <ul className='flex items-center'>
              <li><a href='/'><img src={logo2} width={340} style={{minWidth: '300px'}} className='md:block hidden'></img></a></li>
              <li><a href='/'><img src={logo} width={160} style={{minWidth: '140px'}} className='md:hidden'></img></a></li>
              <ul id='abrirmenu' className='md:hidden ml-0.5 md:ml-2 relative flex items-center text-sm mr-1' style={{transition: '0.2s'}}><span>Menu</span><FiChevronDown className='hidden sm:block' size={18} /><FiChevronDown className='sm:hidden' size={14} />
              <div id='dropdown' style={{display: 'none'}} className='absolute bg-white drop-shadow-lg py-2 px-4 flex flex-col justify-around rounded'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#planos'>Planos</a></li>
                <li><a href='#contato'>Contato</a></li>
              </div>
              </ul>
              <div id='menulinks' className='hidden md:flex lg:shadow-none shadow-2xl shadow-pink-300 z-30'>
                <li className='links'><a href='#home' className='relative active'>Home</a></li>
                <li className='links'><a href='#planos' className='relative'>Planos</a></li>
                <li className='links'><a href='#contato' className='relative'>Contato</a></li>
              </div>
            </ul>
              <div className='flex items-center'>
                <Link to="/login">
                  <a href='#' className='text-sm flex items-center px-1 py-1 rounded-md font-medium text-neutral-50 outline-double outline-3 outline-offset-1' style={{color: 'var(--primary)',}}><FiUser size={18} style={{strokeWidth: '2px'}}/><span className='mx-1'>Login</span></a>
                </Link>
                <div>
                  <div id='abrirAvisos' className='p-2 rounded-full bg-neutral-200 cursor-pointer relative ml-2 relative'><div className='text-white absolute w-4 h-4 flex items-center justify-center rounded-full' style={{backgroundColor: 'var(--primary)', right: '-2px', bottom: '0', fontSize: '11px'}}>1</div>
                  <FiBell size={18}/>
                  <div id='avisos' className='absolute eu shadow-lg z-10 rounded-sm cursor-default bg-white' style={{minWidth: '260px', right: '3%', top: '130%', border: 'solid 1px #e66d9963', display: 'none'}}>
                    <FiChevronUp size={26} className='absolute' style={{top: '-17px', fontSize: '30px', right: '0%', color: '#e66d9963', strokeWidth: '1px'}}/>
                    {/* Lista de notificações */}
                    <div className='notificacao-texto text-sm bg-white px-8 py-4 mb-2'>
                      <div className='flex items-center w-full justify-between'>
                        <div className='flex items-center'>
                          <img src={perfil} className='rounded-full' style={{width: '40px', height: '40px'}}></img>
                          <p className='ml-1 text-md'>Bella Hair</p>
                        </div>
                        <span className='text-sm text-white px-2 py-1 rounded-lg ml-2 font-semibold' style={{backgroundColor: 'var(--primary)'}}>OFERTA</span>
                      </div>
                      <p className='mt-2 font-semibold'>Você ganhou 20%OFF!</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </header>
    );
    
}

export default Header;