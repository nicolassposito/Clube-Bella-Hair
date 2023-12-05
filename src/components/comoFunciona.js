import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import $ from "jquery"
import { useEffect } from "react";


function ComoFunciona() {
useEffect(() => {
    $( ".faqItem" ).on('click', function() {
        $(this).next("p").slideToggle('1000');
        $(this).next(".faqIcon").toggleClass('active');
      }
    );

    $(document).ready(function() {
        $(".faq").children("p").hide();
      })
  })
  return(
    <div className='p-6 bg-neutral-800'>
        <div className='container mx-auto'>
            <h1 className="text-center text-neutral-50 text-3xl font-semibold mb-4">Como funciona ?</h1>
            <div className='faq text-neutral-50 drop-shadow-xl bg-rose-400 rounded text-xl overflow-hidden relative my-3'>
                <h3 className='faqItem text-2xl cursor-pointer p-4'>1. Escolha seu plano</h3>
                <p className='faqHidden px-4 pb-2'>Quando clicar no botão de assinar, irá para a página de <a href='#' className='text-rose-800 font-semibold'>registro</a>, onde criará sua conta e dará continuidade à contratação do plano.</p>
                <div className='faqIcon absolute right-3 top-5 text-rose-200'><IoIosArrowDown size={26}/></div>
            </div>
            <div className='faq text-neutral-50 drop-shadow-xl bg-rose-400 rounded text-xl overflow-hidden relative my-3'>
                <h3 className='faqItem text-2xl cursor-pointer p-4'>2. Seleção de preferências</h3>
                <p className='faqHidden px-4 pb-2'>Ao adquirir o plano, você selecionará as preferências do produto <span className='text-rose-800 font-semibold'>(loiro, castanho, curto, longo, etc)</span>.</p>
                <div className='faqIcon absolute right-3 top-5 text-rose-200'><IoIosArrowDown size={26}/></div>
            </div>
            <div className='faq text-neutral-50 drop-shadow-xl bg-rose-400 rounded text-xl overflow-hidden relative my-3'>
                <h3 className='faqItem text-2xl cursor-pointer p-4'>3. Aproveite</h3>
                <p className='faqHidden px-4 pb-2'>Todo mês você receberá um produto  <span className='text-rose-800 font-semibold'>selecionado</span> pra você.</p>
                <div className='faqIcon absolute right-3 top-5 text-rose-200'><IoIosArrowDown size={26}/></div>
            </div>
        </div>
    </div>
  );
}

export default ComoFunciona;