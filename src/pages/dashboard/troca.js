import React from 'react';
import Panel from '../panel';

function SolicitarTroca() {
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='mt-20'>
            <h1 className='font-medium text-center text-2xl'>Solicitar troca de produto</h1>
            <form className='flex flex-col items-center text-left max-w-md mx-auto mt-10'>
                <input className='w-full outline outline-1 outline-pink-400 p-2 rounded my-1' placeholder='Nome'></input>
                <input className='w-full outline outline-1 outline-pink-400 p-2 rounded my-1' type="number" placeholder='Telefone (DDD + Número)'></input>
                <textarea rows="3" wrap="hard" maxLength="80" className='w-full p-2 mt-2 outline outline-1 outline-offset-2 outline-pink-500 rounded w-full' placeholder='Detalhes'></textarea>
                <button className='button py-2 px-6 inline-block mt-3 rounded' type='submit'>Enviar</button>
            </form>
        </div>
    </div>
  </div>
  </>;
}

export default SolicitarTroca;