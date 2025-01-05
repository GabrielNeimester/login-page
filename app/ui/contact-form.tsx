import { Input, Textarea, Button } from "@nextui-org/react";

export default function ContactForm() {
    return (
        <form className="bg-white px-4 py-4 rounded-md space-y-4 text-black min-w-80">
            <Input label="Nome" placeholder="Escreva seu nome" variant="bordered"  />
            <Input label="Email" placeholder="Escreva seu email" type="email" variant="bordered"  />
            <Textarea className="max-w-xs" label="Mensagem" placeholder="Escreva sua mensagem" variant="bordered" />
            <Button color="primary" variant="solid" type="submit">Enviar</Button>
        </form>

    )
}