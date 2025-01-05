'use client'
import Image from 'next/image'
import CardCatalog from './ui/card-catalog'
import ContactForm from './ui/contact-form'
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="bg-cover bg-center flex flex-col sm:flex-row items-center m-4">
        <div className='flex flex-col space-y-8'>
          <h1 className='text-2xl text-primary font-bold '>A MELHOR COMBINAÇÃO PARA VOCÊ!</h1>
          <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio similique adipisci saepe repudiandae quaerat! Ullam, quo. Quae quaerat libero, illum est repellat, consequatur earum molestias, totam at velit labore.</p>
        </div>
        <Image
          alt="Candle Image"
          src="/candle-home.svg"
          width={500}
          height={450}
        >
        </Image>
      </div>
      <CardCatalog />
      <div className="bg-cover bg-center flex flex-col-reverse px-4 py-8 md:flex-row">
        <Image
          alt="Sobre Nós"
          src="/sobre.jpg"
          width={900}
          height={680}
        />
        <div className='px-4 pb-8'>
          <h1 className='text-2xl text-primary font-bold mb-4'>Sobre Nós</h1>
          <p>la justo, id ultricies nunc laoreet eget. In vitae dapibus mauris, non feugiat nisi. Cras ut feugiat urna, ut posuere augue. Proin eleifend nec mi pharetra pretium. Nullam gravida, massa in lacinia feugiat, velit odio pellentesque erat, eu blandit purus felis vitae erat. Proin id vestibulum nisl. Nullam maximus lorem mi.</p>
          <p>Mauris bibendum pharetra odio, nec varius justo commodo non. Aliquam in gravida justo. Morbi et leo ut libero commodo porttitor. Nam dapibus est non ipsum tincidunt, nec suscipit mauris aliquam. Vivamus eget turpis orci. Nulla cursus ultrices iaculis. Duis sed maximus quam, ut egestas augue.</p>
        </div>
      </div>
      <div className='bg-primary text-white flex flex-col px-4 py-8 gap-x-2 space-y-4 sm:flex-row sm:space-x-4'>
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold'>Contato</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipscing elit</p>
          <p className='flex'>
            <FaPhone className='mr-1'/>
            +91-988888888</p>
          <p className='flex'>
            <FaEnvelope className='mr-1' />
            webvela@abc.com</p>
          <p className='flex'>
            <FaLocationDot className='mr-1'/>
            Indaiatuba, SP</p>
        </div>
        <ContactForm />
      </div>
    </>


  );
}
