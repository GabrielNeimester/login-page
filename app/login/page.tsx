import React from 'react';
import LoginForm from '../ui/login-form';
import Image from 'next/image';

export default function Login() {

    return (
        <div className="bg-cover bg-center flex">
                <Image
                    alt="Candle Image"
                    src="/login-background.jpg"
                    width={900}
                    height={680}
                    className="hidden md:block m-2 w-2/3"
                />
                <LoginForm/>

        </div>

    )
}