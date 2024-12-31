import React from 'react';
import LoginForm from '../ui/login-form';


export default function Login() {

    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('./login.jpg')" }}>
            <LoginForm/>
        </div>

    )
}