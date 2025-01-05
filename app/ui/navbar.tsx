'use client'

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";
import Image from 'next/image';

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Catálogo",
        "Sobre Nós",
        "Contato"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image
                        alt="Digital Arôme logo"
                        src="/arome-logo.svg"
                        width={148}
                        height={200}
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="primary" href="#">
                        Catálogo
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="primary" href="#">
                        Sobre Nós
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="primary" href="#">
                        Contato
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color="primary"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}