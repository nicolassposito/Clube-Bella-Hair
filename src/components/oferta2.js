import React from 'react';

function oferta2() {
  return(
    <div className='px-5 pb-7 pt-7' style={{backgroundColor: '#fff'}}>
      <div className='container mx-auto'>
        <h1 className='uppercase text-3xl md:text-2xl text-neutral-800 drop-shadow-sm tracking-tight text-center'>Com o <span className='font-semibold'>clube da Bella</span> você tem:</h1>
        <div className='flex flex-wrap justify-center mt-2'>
          <div className='bg-neutral-200 p-2 rounded md:mx-2 mx-1 my-1 vantagens transition'><span className='text-base font-semibold text-neutral-700'>PRATICIDADE</span></div>
          <div className='bg-neutral-200 p-2 rounded md:mx-2 mx-1 my-1 vantagens transition'><span className='text-base font-semibold text-neutral-700'>ECONOMIA</span></div>
          <div className='bg-neutral-200 p-2 rounded md:mx-2 mx-1 my-1 vantagens transition'><span className='text-base font-semibold text-neutral-700'>QUALIDADE</span></div>
          <div className='bg-neutral-200 p-2 rounded md:mx-2 mx-1 my-1 vantagens transition'><span className='text-base font-semibold text-neutral-700'>DESCONTOS</span></div>
        </div>
      </div>
    </div>
  );
}

export default oferta2;