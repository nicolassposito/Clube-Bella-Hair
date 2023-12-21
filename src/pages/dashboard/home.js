import React, { useEffect, useState } from 'react';
import Panel from '../panel';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
import { MdSpaceDashboard, MdAddReaction, MdAutoAwesome, MdOutlineChangeCircle, MdContactSupport, MdOutlineLogout, MdAdd } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Auth from '../../authentication';

function HomePainel() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login'); // Redirect to login page
      }
    });

    return () => unsubscribe();
  }, [navigate]); // Add navigate to the dependency array

  if (!user) {
    return null;
  }
  return <>
  <Auth />
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='mt-20 text-center'>
          <h1 className='font-medium text-3xl'>Bem vindo(a) {user.displayName}</h1>
          <div className='max-w-3xl mx-auto'>
            <div className='flex flex-col md:grid grid-rows-2 grid-flow-col gap-3 mt-20 mx-4'>
              <Link to="/painel/assinatura" className='inline-flex items-center shadow-lg outline outline-1 outline-rose-300 p-4 rounded text-rose-400 opacity-95 hover:opacity-100 hover:bg-rose-300 hover:shadow-xl hover:pointer hover:text-white transition'><MdAutoAwesome className='mr-1' /> Assinatura</Link>
              <Link to="/painel/preferencias" className='inline-flex items-center shadow-lg outline outline-1 outline-rose-300 p-4 rounded text-rose-400 opacity-95 hover:opacity-100 hover:bg-rose-300 hover:shadow-xl hover:pointer hover:text-white transition'><MdAddReaction className='mr-1' /> Preferências</Link>
              <Link to="/painel/troca" className='inline-flex items-center shadow-lg outline outline-1 outline-rose-300 p-4 rounded text-rose-400 opacity-95 hover:opacity-100 hover:bg-rose-300 hover:shadow-xl hover:pointer hover:text-white transition'><MdOutlineChangeCircle className='mr-1' /> Solicitar troca</Link>
              <Link to="/painel/contato" className='inline-flex items-center shadow-lg outline outline-1 outline-rose-300 p-4 rounded text-rose-400 opacity-95 hover:opacity-100 hover:bg-rose-300 hover:shadow-xl hover:pointer hover:text-white transition'><MdContactSupport className='mr-1' /> Contato</Link>
            </div>
            <p className='text-xl text-left mt-6 ml-5'>Seu plano: <span className='text-pink-500 uppercase font-medium'>VIP</span></p>
          </div>
        </div>
    </div>
  </div>
  </>;
}

export default HomePainel;