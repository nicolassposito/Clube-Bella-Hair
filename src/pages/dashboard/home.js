import React from 'react';
import Panel from '../panel';

function HomePainel() {
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='mt-20'>
          <h1>Bem vindo(a)</h1>
        </div>
    </div>
  </div>
  </>;
}

export default HomePainel;