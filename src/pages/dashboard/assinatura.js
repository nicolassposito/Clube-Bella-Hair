import firebase from 'firebase/compat/app';
import user from '..//..//authentication'
import 'firebase/compat/auth';
import "firebase/auth";
import React, { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-3622835939055146-122211-c7a4eb4812e6618de05e059754833d0a-96790647');


const Assinatura = () => {
  const createSubscription = async (product) => {
    const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TEST-3622835939055146-122211-c7a4eb4812e6618de05e059754833d0a-96790647'
      },
      body: JSON.stringify({
            "reason": "teste",
            "auto_recurring": {
              "frequency": 1,
              "frequency_type": "months",
              "transaction_amount": 1,
              "currency_id": "BRL",
              "repetitions": 12
            },
            "back_url": "https://www.yoursite.com",
            "status": "active"
      })
    });

    const data = await response.json();

    // Aqui você pode redirecionar o usuário para `data.init_point` para iniciar o processo de assinatura
  };

  // Seus produtos
  const products = [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' },
    // Adicione mais produtos aqui
  ];

  return (
    <div>
      <h1>Assinatura</h1>

      {user ? (
        <div>
          <h2>Bem-vindo, {user.displayName}!</h2>

          <h3>Produtos</h3>
          {products.map((product) => (
            <div key={product.id}>
              <h4>{product.name}</h4>
              <button onClick={() => createSubscription(product)}>Assinar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Por favor, faça login para ver os produtos.</p>
      )}
    </div>
  );
};

export default Assinatura;
