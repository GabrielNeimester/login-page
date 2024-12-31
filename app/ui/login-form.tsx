import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'

export default function LoginForm() {
    return ( 
        <form action="">
            <Input label="Email" placeholder="Enter your email" type="email" radius='full'></Input>
            <Input label="Password" placeholder="Enter your password" type='password' radius='full'></Input>
            <Button color="primary" variant="solid">Botão NextUI</Button>
        </form>
    )
}