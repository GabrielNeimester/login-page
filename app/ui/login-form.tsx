'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { authenticate } from '@/app/lib/actions';
import {Link} from "@nextui-org/react";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsPending(true);
        setErrorMessage('');
        setEmailInvalid(false); 
        setPasswordInvalid(false);  

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const error = await authenticate(formData);
            if (error) {
                setErrorMessage(error);
                setPasswordInvalid(true)
                setEmailInvalid(true)
            }
        } catch (error) {
            setErrorMessage(`${error} erro`);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 p-4 w-full'>
            <h1 className='text-2xl'>Entrar</h1>
            <Input
                label="Email"
                placeholder="Email"
                type="email"
                radius="full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={emailInvalid}
            />
            <Input
                label="Password"
                placeholder="Password"
                type="password"
                radius="full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={passwordInvalid}
            
            />
            <Button color="primary" variant="solid" aria-disabled={isPending} type="submit">
                Entrar
            </Button>
            <Button color="primary" variant="bordered">
                Criar uma conta
            </Button>
            {errorMessage && (
                <p className='text-red-600 self-center'>O e-mail ou a senha não são válidos</p>
            )}
            <Link href="">Esqueceu a senha?</Link >

        </form>
    );
}
