'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsPending(true);
        setErrorMessage('');

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const error = await authenticate(formData);
            if (error) {
                setErrorMessage(error);
            }
        } catch (error) {
            setErrorMessage(`${error} erro`);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                radius="full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                radius="full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button color="primary" variant="solid" aria-disabled={isPending} type="submit">
                Login
            </Button>
            {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
            )}
        </form>
    );
}
