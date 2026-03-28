"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Container from "./Container";
import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const menuItems = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/about", label: "Sobre mi" },
    { href: "/projects", label: "Proyectos" },
    { href: "/#services", label: "Servicios" },
    { href: "/#frontend-architecture", label: "Arquitectura" },
    { href: "/#tech-orbit", label: "Orbita" },
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
        <header className="fixed left-0 right-0 top-0 z-[9999] h-20 backdrop-blur supports-[backdrop-filter]">
            <Container>
                <div className="flex h-20 w-full items-center justify-between gap-4">
                    <Link
                        href="/#inicio"
                        className="shrink-0 text-base font-semibold tracking-[0.16em] text-white"
                    >
                        {/* Gamaliel Abanto */}
                    </Link>

                    <nav className="hidden flex-wrap justify-end gap-x-6 gap-y-3 md:flex">
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

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon-sm"
                                className="border-white/20 text-white hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-white md:hidden"
                                aria-label="Abrir menu principal"
                            >
                                <Menu />
                            </Button>
                        </DialogTrigger>

                        <DialogContent
                            className="!top-20 !-translate-y-0 w-[calc(100%-1.5rem)] max-w-md border-white/10 bg-[#0f0f0f]/95 p-5 text-white"
                            showCloseButton
                        >
                            <DialogTitle className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                
                            </DialogTitle>
                            <nav className="mt-1 flex flex-col gap-1.5">
                                {menuItems.map((item) => {
                                    const isHashLink = item.href.startsWith("/#");
                                    const isActive = isHashLink
                                        ? activeHash === item.href.slice(1)
                                        : pathname === item.href;

                                    return (
                                        <DialogClose asChild key={`mobile-${item.href}`}>
                                            <Link
                                                href={item.href}
                                                className={`border-l-[3px] border-y border-r px-4 py-2.5 text-sm font-medium transition duration-200 ${isActive
                                                    ? "border-l-[#22c55e] border-y-white/12 border-r-white/12 bg-white/[0.04] text-[#22c55e]"
                                                    : "border-l-transparent border-y-white/8 border-r-white/8 text-white hover:border-l-[#22c55e]/70 hover:text-[#22c55e]"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </DialogClose>
                                    );
                                })}
                            </nav>
                        </DialogContent>
                    </Dialog>
                </div>
            </Container>
        </header>
    );
}



