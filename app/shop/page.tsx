import { signOut } from '@/auth';
import { Button } from '@nextui-org/button';

export default function Shop() {
    return (
        <>
            <h1>This is the shop page</h1>
            <Button onPress={async () => {
                'use server';
                await signOut();
            }}>Log out</Button>
        </>

    )
}