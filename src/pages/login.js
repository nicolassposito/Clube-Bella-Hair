import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "../App.css";
import { auth } from "../firebase-config";
import Header from "../components/header";
import logo from '../img/logoB.png'
import Background from "../components/background";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const navigate = useNavigate();
  if (user) {
    navigate('/panel');
  } else {
    navigate('/login');
  }
  return (
    <div className="App overflow-x-hidden" style={{height: '100vh'}}>
      <style>
        {`
          #login{
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
        <div id="login" className="absolute drop-shadow p-10 flex flex-col max-w-2xl top-1/2 left-1/2" style={{transform: 'translate(-50%, -50%)', width: '90%'}}>
        <img src={logo} width={100} className="mx-auto"></img>
        <h3 className="text-center text-2xl font-semibold text-white drop-shadow-xl py-2">Iniciar sessão</h3>
        <form onSubmit={login} className="flex flex-col">
        <input className="p-2 rounded my-1"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input type="password" className="p-2 rounded my-1"
          placeholder="Senha..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button type="submit" className="button w-28 py-2 rounded-full mt-3 mx-auto" onClick={login}> Login</button>
        </form>
        <p className="text-neutral-700 mt-5">Ainda não tem uma conta? <Link to='/register' className="text-rose-600">Criar conta</Link></p>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}
export default Login;
