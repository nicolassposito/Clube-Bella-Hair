import React from 'react';
import { MdShoppingBag } from "react-icons/md";

function Redirect() {
  return(
    <div className='text-center p-3 text-lg bg-neutral-100'>
      <div className='flex items-center justify-center text-neutral-800 font-medium'><p>Você também pode ver todos os produtos na nossa <a href='https://bellahair.com.br' target='blank' className='button items-center justify-center flex py-0.5 px-2 rounded w-36 mx-auto'><MdShoppingBag className='mr-0.5' />Loja</a></p></div>
    </div>
  );
}

export default Redirect;