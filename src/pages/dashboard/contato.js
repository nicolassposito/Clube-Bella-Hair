import React from 'react';
import Panel from '../panel';
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Contact() {
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='mt-20 text-center'>
            <h1 className='text-2xl font-medium text-neutral-700'>Contato</h1>
            <p className='mb-2 font-light text-neutral-700'>Você pode entrar em contato conosco pelos canais:</p>
            <ul>
                <li className='my-1'><a href='https://api.whatsapp.com/send/?phone=551155715311' target='blank' className='inline-flex py-2 px-6 rounded-xl min-w-40 items-center text-lg bg-green-400 text-white'><span><FaWhatsapp className='mr-0.5' size={20}/></span>WhatsApp</a></li>
                <li className='my-1'><a href='https://www.instagram.com/bellahaircabelos' target='blank' className='inline-flex py-2 px-6 rounded-xl min-w-40 items-center text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'><span><FiInstagram className='mr-0.5' size={20}/></span>Instagram</a></li>
            </ul>
        </div>
    </div>
  </div>
  </>;
}

export default Contact;