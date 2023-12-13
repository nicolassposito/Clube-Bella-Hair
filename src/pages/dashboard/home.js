import React from 'react';
import Panel from '../panel';

function HomePainel() {
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='absolute' style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            
        </div>
    </div>
  </div>
  </>;
}

export default HomePainel;