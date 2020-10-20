import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Imessage from './Imessage';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is signed in
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        // User is logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      {
        user ? <Imessage /> : <Login />
      }
    </div>
  );
}

export default App;
