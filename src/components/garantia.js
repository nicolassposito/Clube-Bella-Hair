import React from 'react';
import logo2 from '../img/logo2.png'

function Garantia() {
  return(
    <div>
        <div className='container mx-auto py-6 text-center'>
            <img src={logo2} width={300} className='mx-auto'></img>
            <h1 className='text-xl py-1 underline'>Garantia de Satisfação</h1>
            <p>Se você não ficar 100% satisfeito com a sua compra, entre em <a href='#contato' className='text-rose-400 font-semibold'>contato</a> conosco.</p>
        </div>
    </div>
  );
}

export default Garantia;