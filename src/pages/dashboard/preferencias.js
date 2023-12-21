import React from 'react';
import Panel from '../panel';
import $ from "jquery"
import { useEffect } from "react";

function Preferences() {
  useEffect(() => {
    $( ".preferencia" ).on('click', function() {
        $(this).toggleClass("active");
        console.log("active")
      }
    );
  })
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='text-center mt-20 px-1.5 md:px-6 max-w-lg mx-auto'>
          <h1 className="font-medium text-2xl">Preferências de recebimento</h1>
          <p className='font-light text-md'>Aqui você pode controlar as preferências do seu perfil.</p>
          <p className='font-light text-sm'>Sertifique-se de escolher as opções que mais te agradam 😁.</p>
          <div>
            <ul className='text-center'>
            <li className='flex md:flex-row flex-col items-center my-2 justify-center'>
                <span className='mr-2'>Cor:</span>
                <div className='preferencias flex flex-wrap justify-center'>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded active'>Loiro</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>Castanho</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>Preto</button>
                </div>
              </li>
              <li className='flex md:flex-row flex-col items-center my-2 justify-center'>
                <span className='mr-2'>Tipo:</span>
                <div className='preferencias flex flex-wrap justify-center'>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>Ondulado</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>Liso</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>Afro</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded active'>Cacheado</button>
                </div>
              </li>
              <li className='flex md:flex-row flex-col items-center my-2 justify-center'>
                <span className='mr-2'>Tamanho:</span>
                <div className='preferencias flex flex-wrap justify-center'>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>50cm</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded active'>60cm</button>
                  <button className='preferencia bg-neutral-300 px-2 m-0.5 py-1 rounded'>70cm</button>
                </div>
              </li>
              <li className='px-2'>
                <textarea rows="3" wrap="hard" maxLength="80" className='w-full p-2 mt-2 outline outline-2 outline-offset-2 outline-pink-500 rounded max-w-md' placeholder='Detalhe (opcional)'></textarea>
              </li>
              <button className='button py-2 px-6 inline-block mt-2 rounded'>Salvar</button>
            </ul>
            <div className='mx-auto text-left mt-4'>
              <div className='flex items-center font-normal text-base'>
                <div className='rounded-full mr-1' style={{backgroundColor: '#ff5a96', width: '14px', height: '14px'}}></div>
                Poderão ser selecionados para sua encomenda.
              </div>
              <div className='flex items-center font-normal text-base'>
                <div className='rounded-full mr-1 bg-neutral-300' style={{width: '14px', height: '14px'}}></div>
                Não serão selecionados
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </>;
}

export default Preferences;