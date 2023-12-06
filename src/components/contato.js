import React from 'react';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Contato() {
  return(
    <div id='contato'>
        <div className='container mx-auto py-6 border-t border-neutral-300 px-3'>
            <h1 className='text-2xl text-neutral-800'>Contato</h1>
            <p className='text-neutral-700'>Tem alguma dúvida? Entre em contato conosco pelo:</p>
            <ul>
                <li><a className="text-green-600 font-medium flex items-center my-0.5" href='https://api.whatsapp.com/send/?phone=551155715311&text&type=phone_number&app_absent=0&utm_campaign=Mega+Hair+Adesivo+%28Convite15%29&utm_source=perfit'><FaWhatsapp size={20} />Whatsapp</a></li>
                <li><a className="text-pink-600 font-medium flex items-center my-0.5" href='https://www.instagram.com/bellahaircabelos/'><FaInstagram size={20} />Instagram</a></li>
                <li><a className="text-neutral-700 font-medium flex items-center my-0.5" href='mailto:trocas@bellahair.com.br'><MdMailOutline size={20} />E-mail</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Contato;