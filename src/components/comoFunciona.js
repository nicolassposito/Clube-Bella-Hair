import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import $ from "jquery"
import { useEffect } from "react";


function ComoFunciona() {
useEffect(() => {
    $( ".faqItem" ).on('click', function() {
        $(this).next("p").slideToggle('slow');
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
            <div className='faq text-neutral-50 drop-shadow-xl bg-rose-400 rounded text-xl overflow-hidden p-4 relative cursor-pointer'>
                <h3 className='faqItem text-2xl'>1. Escolha seu plano</h3>
                <p className='faqHidden p-2'>Quando clicar no botão de assinar, irá para a página de <a href='#' className='text-pink-500 font-semibold'>registro</a>, onde criará sua conta e dará continuidade à contratação do plano.</p>
                <button className='faqIcon absolute right-3 top-1/2 text-rose-200' style={{transform: 'translate(0, -50%)'}}><IoIosArrowDown size={26}/></button>
            </div>
        </div>
    </div>
  );
}

export default ComoFunciona;