import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import "../Global.css";
import "../App.css";
import { auth } from "../firebase-config";
import Header from "../components/header";
import logo from '../img/logoB.png'
import Background from "../components/background";
import { Link } from "react-router-dom";

function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
  
    const [user, setUser] = useState({});
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => unsubscribe();
      }, []);
  
    const register = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              registerEmail,
              registerPassword
            );
            const user = userCredential.user;
            await updateProfile(auth.currentUser, {
              displayName: registerName,
            });
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        register();
      }
    };
  
    const logout = async () => {
      await signOut(auth);
    };

  return (
    <div className="App overflow-x-hidden">
      <style>
        {`
          #register{
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.3px);
            -webkit-backdrop-filter: blur(4.3px);
            border: 1px solid rgba(255, 255, 255, 0.43);
          }
        `}
      </style>
      <Background />
        <Header />
        <div id="register" className="absolute drop-shadow p-10 flex flex-col max-w-2xl top-1/2 left-1/2" style={{transform: 'translate(-50%, -50%)', width: '90%'}}>
        <img src={logo} width={100} className="mx-auto"></img>
        <h3 className="text-center text-2xl font-semibold text-white drop-shadow-xl py-2">Criar conta</h3>
        <p id="senha-erro" className="text-center text-sm mt-0.5 text-red-700 hidden">As senhas não são iguais!</p>
        <form onSubmit={register} className="flex flex-col">
        <input className="p-2 rounded my-1"
          placeholder="Nome..."
          onChange={(event) => {
            setRegisterName(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <input className="p-2 rounded my-1"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <input id="senha" className="p-2 rounded my-1"
          placeholder="Senha..."
          onKeyPress={handleKeyPress}
        />
        <input id="senha2" type="password" className="p-2 rounded my-1"
          placeholder="Repetir senha..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />

        <button type="submit" className="button w-28 py-2 rounded-full mt-3 mx-auto">Pronto</button>
        </form>
        <p className="text-neutral-700 mt-5">Já tem uma conta? <Link to='/login' className="text-rose-600">Iniciar sessão</Link></p>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}
export default Register;