import React from 'react';
import Panel from '../panel';
import { IoMdCheckmark } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { HiMiniBellAlert } from "react-icons/hi2";

function Assinatura() {
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
    <div className=''>
        <div id='planos' className='text-center p-0.5 md:p-10 h-screen pt-14 max-[400px]:pt-28 px-2'>
            <div className='flex flex-col justify-around h-screen'>
                <div className='relative text-left border p-3 rounded-lg shadow-md hover:shadow-xl transition w-full bg-neutral-50'>
                    <p className='uppercase mb-4 text-base'>Plano básico</p>
                    <p className='mb-3 text-4xy-1-3 font-semibold tracking-tight' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', color: 'var(--primary)'}}>R$: 86,90 <span className='text-base text-neutral-500 font-light'>/mês</span></p>
                    <ul>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Receba produtos de até <span className='ml-1 text-pink-500 font-semibold'>R$110</span></li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Recebe produtos mensamente</li>
                        <li className='flex items-center text-base'><CgClose className='mr-1.5 text-rose-500 drop-shadow' size={20}/>Acesso a suporte prioritário</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a promoções exclusivas</li>
                        <li className='flex items-center text-base'><CgClose className='mr-1.5 text-rose-500 drop-shadow' size={20}/>Cupom exclusivo no site</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Qualidade do produto</li>
                    </ul>
                </div>
                <div className='produto relative text-left border p-3 rounded-lg shadow-md hover:shadow-xl transition w-full bg-neutral-800 text-neutral-100'>
                    <p className='uppercase mb-4 text-base flex justify-between items-center'>Plano VIP <div className='uppercase text-xs text-rose-400 flex items-center'><HiMiniBellAlert className='mr-1' size={16}/>Melhor custo benefício</div></p>
                    <p className='mb-3 text-3xl py-1 font-semibold tracking-tight' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', color: 'var(--primary)'}}>R$: 110,90 <span className='text-base text-neutral-300 font-light'>/mês</span></p>
                    <ul>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Receba produtos de até <span className='ml-1 text-pink-500 font-semibold'>R$140</span></li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Recebe produtos mensamente</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a suporte prioritário</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a promoções exclusivas</li>
                        <li className='flex items-center text-base'><CgClose className='mr-1.5 text-rose-500 drop-shadow' size={20}/>Cupom exclusivo no site</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Qualidade do produto</li>
                    </ul>
                </div>
                <div className='produto relative text-left border p-3 rounded-lg shadow-md hover:shadow-xl transition w-full bg-neutral-50'>
                    <p className='uppercase mb-4 text-base'>Plano BELLA</p>
                    <p className='mb-3 text-3xl py-1 font-semibold tracking-tight' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', color: 'var(--primary)'}}>R$: 180,90 <span className='text-base text-neutral-600 font-light'>/mês</span></p>
                    <ul>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Receba produtos de até <span className='ml-1 text-pink-500 font-semibold'>R$210</span></li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Recebe produtos mensamente</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a suporte prioritário</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Acesso a promoções exclusivas</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Cupom exclusivo no site</li>
                        <li className='flex items-center text-base'><IoMdCheckmark className='mr-1.5 text-emerald-500 drop-shadow' size={20}/>Qualidade do produto</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
  </>;
}

export default Assinatura;