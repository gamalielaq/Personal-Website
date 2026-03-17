"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";

const menuItems = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/about", label: "Sobre mi" },
    { href: "/projects", label: "Proyectos" },
    { href: "/#services", label: "Servicios" },
    { href: "/#frontend-architecture", label: "Arquitectura" },
    { href: "/#contacto", label: "Contacto" },
];

export default function NavigationMenu() {
    const [activeHash, setActiveHash] = useState("#inicio");
    const pathname = usePathname();

    useEffect(() => {
        const setFromLocation = () => {
            const hash = window.location.hash || "#inicio";
            setActiveHash(hash);
        };
        setFromLocation();
        window.addEventListener("hashchange", setFromLocation);
        return () => window.removeEventListener("hashchange", setFromLocation);
    }, []);

    return (
        <header className="fixed left-0 right-0 top-0 z-[9999] h-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <Container>
                <div className="flex h-20 w-full items-center justify-between gap-4">
                    <Link
                        href="/#inicio"
                        className="shrink-0 text-base font-semibold tracking-[0.16em] text-white"
                    >
                        {/* Gamaliel Abanto */}
                    </Link>

                    <nav className="flex flex-wrap justify-end gap-x-6 gap-y-3">
                        {menuItems.map((item) => {
                            const isHashLink = item.href.startsWith("/#");
                            const isActive = isHashLink
                                ? activeHash === item.href.slice(1)
                                : pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-[0.82rem] font-medium text-white transition duration-200 hover:text-[#22c55e] sm:text-sm border-b-2 border-transparent pb-1 ${isActive ? "text-[#22c55e] border-[#22c55e]" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </Container>
        </header>
    );
}

