import './firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Auth() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }, []);
  
    if (!user) {
        return<>
        <Navigate to="/login" />
        </>
    } else {
        return null;
    }
  }

export default Auth;