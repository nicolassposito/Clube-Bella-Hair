import React from 'react';

function Footer() {
  return(
    <div className='flex justify-center items-center py-2 text-white flex-wrap' style={{backgroundColor: 'var(--primary-dark)'}}>
        Feito por Nicolas Sposito, em parceria com a <img className='ml-1.5' src='https://acdn.mitiendanube.com/stores/001/608/438/themes/common/logo-689021723-1683587536-f9e019574a09d3122aff56a5d96c12881683587537-320-0.webp' width={100}></img>
    </div>
  );
}

export default Footer;