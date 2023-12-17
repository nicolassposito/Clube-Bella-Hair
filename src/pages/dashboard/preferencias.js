import React from 'react';
import Panel from '../panel';

function Preferences() {
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='text-center mt-20 px-6'>
          <h1 className="font-medium text-2xl">Preferências de recebimento</h1>
          <p className='font-light text-md'>Aqui você pode controlar as preferências do seu perfil.</p>
          <p className='font-light text-sm'>Sertifique-se de escolher as opções que mais te agradam 😁.</p>
          <div>
            <ul className='text-center'>
              <li className='flex items-center'>
                <span className='mr-2'>Cor:</span>
                <div className='flex'>
                  <button className='bg-neutral-200 px-2 py-1 rounded'>Loiro</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
  </>;
}

export default Preferences;