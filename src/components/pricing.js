import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { HiMiniBellAlert } from "react-icons/hi2";


function Pricing() {
  return(
    <div className='text-center py-4'>
        <div className='container mx-auto'>
            <div className='py-5'>
                <h1 className='text-2xl font-medium text-neutral-800'>Pronta para uma vida mais prática?</h1>
                <h2 className='text-base mt-1 mb-3'>Escolha seu plano</h2>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='produto relative text-left border p-4 rounded-lg shadow-md hover:shadow-xl transition m-1 md:w-fit w-full bg-neutral-50'>
                    <p className='uppercase mb-4 text-base'>Plano básico</p>
                    <p className='mb-3 text-4xl pb-3.5 pt-3 font-semibold tracking-tight' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', color: 'var(--primary)'}}>R$: 86,90 <span className='text-base text-neutral-500 font-light'>/mês</span></p>
                    <ul>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Receba produtos de até <span className='ml-1 text-pink-500 font-semibold'>R$110</span></li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Recebe produtos mensamente</li>
                        <li className='flex items-center text-base'><CgClose className='mr-1.5 text-rose-500 drop-shadow' size={20}/>Acesso a suporte prioritário</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a promoções exclusivas</li>
                        <li className='flex items-center text-base'><CgClose className='mr-1.5 text-rose-500 drop-shadow' size={20}/>Cupom exclusivo no site</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Qualidade do produto</li>
                    </ul>
                    <button className='button flex mx-auto py-1.5 px-5 rounded-full mt-3'>Assinar</button>
                </div>
                <div className='produto relative text-left border p-4 rounded-lg shadow-md hover:shadow-xl transition m-1 md:w-fit w-full bg-neutral-800 text-neutral-100'>
                    <p className='uppercase mb-4 text-base flex justify-between items-center'>Plano VIP <div className='uppercase text-xs text-rose-400 flex items-center'><HiMiniBellAlert className='mr-1' size={16}/>Melhor custo benefício</div></p>
                    <p className='mb-3 text-4xl pb-3.5 pt-3 font-semibold tracking-tight' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', color: 'var(--primary)'}}>R$: 110,90 <span className='text-base text-neutral-300 font-light'>/mês</span></p>
                    <ul>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Receba produtos de até <span className='ml-1 text-pink-500 font-semibold'>R$140</span></li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Recebe produtos mensamente</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a suporte prioritário</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a promoções exclusivas</li>
                        <li className='flex items-center text-base'><CgClose className='mr-1.5 text-rose-500 drop-shadow' size={20}/>Cupom exclusivo no site</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Qualidade do produto</li>
                    </ul>
                    <button className='button-transparent flex mx-auto py-1.5 px-5 rounded-full mt-3 hover:text-neutral-800'>Assinar</button>
                </div>
                <div className='produto relative text-left border p-4 rounded-lg shadow-md hover:shadow-xl transition m-1 md:w-fit w-full bg-neutral-50'>
                    <p className='uppercase mb-4 text-base'>Plano BELLA</p>
                    <p className='mb-3 text-4xl pb-3.5 pt-3 font-semibold tracking-tight' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', color: 'var(--primary)'}}>R$: 180,90 <span className='text-base text-neutral-600 font-light'>/mês</span></p>
                    <ul>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Receba produtos de até <span className='ml-1 text-pink-500 font-semibold'>R$210</span></li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Recebe produtos mensamente</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a suporte prioritário</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a promoções exclusivas</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Cupom exclusivo no site</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Qualidade do produto</li>
                    </ul>
                    <button className='button flex mx-auto py-1.5 px-5 rounded-full mt-3'>Assinar</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Pricing;