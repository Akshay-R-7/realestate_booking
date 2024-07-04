import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import {useDispatch, useSelector} from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import {useNavigate} from 'react-router-dom'

export default function OAuth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider(app);
      const auth = getAuth();
      
      const result = await signInWithPopup(auth, provider)
      const res = await fetch('/api/auth/google',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify({name:result.user.displayName, email: result.user.email, photo:result.user.photoURL})
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (err) {
      console.log("could not sign in with ggogle", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 "
    >
      Continue with Google
    </button>
  );
}