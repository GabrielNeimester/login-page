"use client"

import Image from 'next/image';
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='flex flex-col justify-between items-center text-white p-2 bg-primary sm:flex-row'>
                <Image
                    alt="Digital Arôme logo"
                    src="/footer-logo.svg"
                    width={148}
                    height={200}
                />
                <div className='flex gap-x-2'>
                    <p>@2024 All rights reserved</p>
                    <p>Arôme</p>
                </div>
                <div className='flex gap-x-2'>
                    <FaInstagram />
                    <FaTwitter />
                    <FaWhatsapp />
                </div>
        </footer>
    )
}