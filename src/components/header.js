import React from 'react';
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png';
import { FiUser, FiBell, FiChevronUp, FiMenu } from "react-icons/fi";
import perfil from '../img/perfil.jpg';

const Header = () => {
    return (
        <header id='header' className='md:px-6 px-1 text-md font-medium text-neutral-500 py-2 bg-white sticky top-0 z-10 w-full z-20' style={{boxShadow: 'rgba(230, 109, 153, 0.4) 0px -3px 15px 1px'}}>
          <div onClick={FecharMenu} id='menuWall' style={{display: 'none', opacity: '0', transition: '0.3s'}}></div>
          <div className='flex justify-between items-center'>
            <ul className='flex items-center'>
              <li><a href='/'><img src={logo2} width={340} style={{minWidth: '300px'}} className='md:block hidden'></img></a></li>
              <li><a href='/'><img src={logo} width={160} style={{minWidth: '140px'}} className='md:hidden'></img></a></li>
              <li onClick={AbrirMenu} className='lg:hidden ml-2'><FiMenu size={26} className='text-neutral-600'/></li>
              <div style={{left: '-60%', transition: '0.3s'}} id='menulinks' className='flex lg:shadow-none shadow-2xl shadow-pink-300 z-30'>
                <li className='links'><a href='#home' className='relative active'>Home</a></li>
                <li className='links'><a href='#planos' className='relative'>Planos</a></li>
                <li className='links'><a href='#contato' className='relative'>Contato</a></li>
              </div>
            </ul>
              <div className='flex items-center'>
                <a href='#' className='flex items-center px-1 py-1 rounded-md font-medium text-neutral-50 outline-double outline-3 outline-offset-1' style={{color: 'var(--primary)',}}><FiUser size={20} style={{strokeWidth: '2px'}}/><span className='mx-1'>Login</span></a>
                <div>
                  <div onClick={AbrirAvisos} id='abrirAvisos' className='p-2 rounded-full bg-neutral-200 cursor-pointer relative ml-4'><FiBell size={20}/></div>
                  <div onClick={FecharAvisos} id='fecharAvisos' style={{display: 'none'}} className='p-2 rounded-full bg-neutral-200 cursor-pointer relative ml-4'><FiBell size={20}/></div>
                  <div id='avisos' className='absolute eu shadow-lg z-10 rounded-sm cursor-default bg-white' style={{minWidth: '260px', right: '3%', top: '72px', border: 'solid 1px #e66d9963', display: 'none', opacity: '0', transition: '0.3s'}}>
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
        </header>
    );
}

var menuWall = document.getElementById("menuWall");
var menulinks = document.getElementById("menulinks");
var avisos = document.getElementById("avisos");
var abriravisos = document.getElementById("abrirAvisos");
var fecharavisos = document.getElementById("fecharAvisos");

function AbrirMenu(){
  menulinks.style.left = '0';
  menuWall.style.display = 'block';
  menuWall.style.opacity = '100%';
}

function FecharMenu(){
  setTimeout(() => {
    menuWall.style.display = 'none';
  }, 2000);
  menuWall.style.opacity = '0%';
  menulinks.style.left = '-60%';
}

function AbrirAvisos(){
  avisos.style.display = 'block';
  fecharavisos.style.display = 'block';
  abriravisos.style.display = 'none';
  avisos.style.opacity = '100%';
}


function FecharAvisos(){
  setTimeout(() => {
    avisos.style.display = 'none';
}, 2000);
  fecharavisos.style.display = 'none';
  abriravisos.style.display = 'block';
  avisos.style.opacity = '0%';
}

export default Header;