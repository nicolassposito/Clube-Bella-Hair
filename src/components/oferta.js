import React from 'react';
import { FaCheck } from "react-icons/fa";

function oferta() {
  return(
    <div className='px-5 pb-7 pt-7' style={{backgroundColor: '#eee'}}>
        <div className='container mx-auto flex flex-wrap items-center justify-center'>
            <h1 className='uppercase text-3xl md:text-2xl font-semibold text-neutral-700 drop-shadow-sm tracking-tight md:text-left text-center max-w-lg md:max-w-sm'>A melhor oferta para se renovar todo mês</h1>
            <ul className='md:py-0 py-5'>
              <li className='flex items-center text-neutral-600 md:text-sm text-md py-2 md:py-1 drop-shadow-sm'><FaCheck size={26} className='rounded-full mr-1 md:hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '6px'}}/><FaCheck size={22} className='rounded-full mr-1 md:block hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '5px'}}/>Entregas mensais no conforto de casa</li>
              <li className='flex items-center text-neutral-600 md:text-sm text-md py-2 md:py-1 drop-shadow-sm'><FaCheck size={26} className='rounded-full mr-1 md:hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '6px'}}/><FaCheck size={22} className='rounded-full mr-1 md:block hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '5px'}}/>Ofertas e descontos especiais</li>
              <li className='flex items-center text-neutral-600 md:text-sm text-md py-2 md:py-1 drop-shadow-sm'><FaCheck size={26} className='rounded-full mr-1 md:hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '6px'}}/><FaCheck size={22} className='rounded-full mr-1 md:block hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '5px'}}/>Custo benefício</li>
              <li className='flex items-center text-neutral-600 md:text-sm text-md py-2 md:py-1 drop-shadow-sm'><FaCheck size={26} className='rounded-full mr-1 md:hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '6px'}}/><FaCheck size={22} className='rounded-full mr-1 md:block hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '5px'}}/>Preço de Black Friday</li>
              <li className='flex items-center text-neutral-600 md:text-sm text-md py-2 md:py-1 drop-shadow-sm'><FaCheck size={26} className='rounded-full mr-1 md:hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '6px'}}/><FaCheck size={22} className='rounded-full mr-1 md:block hidden drop-shadow-md' color='#fff' style={{backgroundColor: '#ff8892', padding: '5px'}}/>Clientes com benefícios exclusivos</li>
            </ul>
        </div>
    </div>
  );
}

export default oferta;