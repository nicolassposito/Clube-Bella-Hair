import React from 'react';
import Panel from '../panel';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";

function HomePainel() {
  const user = firebase.auth().currentUser;
  return <>
  <div className='flex'>
    <div>
        <Panel />
    </div>
    <div className='relative w-full'>
        <div className='mt-20'>
          <h1>Bem vindo(a) {user.displayName}</h1>
        </div>
    </div>
  </div>
  </>;
}

export default HomePainel;