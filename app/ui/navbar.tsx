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
import { usePathname } from 'next/navigation'

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const pathname = usePathname()

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Login", href: "/login" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            alt="Digital Arôme logo"
                            src="/arome-logo.svg"
                            width={148}
                            height={200}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                <Link href="/login" className={`primary ${pathname === "/login" ? "font-bold" : "font-regular"}`}>Login</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color="primary"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}