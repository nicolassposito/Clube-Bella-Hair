import React from 'react';
import banner from '../img/banner.png';
import bannerMobile from '../img/banner mob.png';
import './header';


function Hero() {
  return(
    <div className='hero relative'>
      <img src={banner} width='100%' className='md:block hidden'></img>
      <img src={bannerMobile} width='100%' className='md:hidden'></img>
    </div>
  );
}

export default Hero;