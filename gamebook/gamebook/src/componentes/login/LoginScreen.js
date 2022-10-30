import React from 'react';
import { useNavigate } from 'react-router-dom';
export const LoginScreen = () => {
 const navigate = useNavigate();
 const doLogin = () => {
 navigate("/");
 }
 return (
 <>
 <h1>Login</h1>
 <br/>
 <button className="btn btn-primary"
 onClick={ doLogin }>
 Ingresar
 </button>
 </>
 )
}