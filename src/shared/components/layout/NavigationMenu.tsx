"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Terminal } from "lucide-react";
import { navigationItems } from "@/content/navigation";
import { LINKEDIN_URL } from "@/content/social-links";
import Container from "./Container";
import { Button } from "@/shared/components/ui/Button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/shared/components/feedback/dialog";

const menuItems = navigationItems;

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
        <header className="fixed left-0 right-0 top-0 z-50 bg-[#131313]/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,229,255,0.08)]">
            <Container>
                <div className="flex h-20 w-full items-center justify-between gap-4">
                    <Link href="/#inicio" className="flex items-center gap-2.5 text-[#00e5ff]">
                        <Terminal className="h-5 w-5" />
                        <Image
                            src="/logo.png"
                            alt="ARCH.NAV"
                            width={140}
                            height={32}
                            className="h-7 w-auto sm:h-8"
                            priority
                        />
                    </Link>

                    <nav className="hidden items-center gap-10 uppercase tracking-tight text-[#e5e2e1] md:flex">
                        {menuItems.map((item) => {
                            const isHashLink = item.href.startsWith("/#");
                            const isExternalLink = item.href.startsWith("http");
                            const isActive = isHashLink
                                ? activeHash === item.href.slice(1)
                                : pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    target={isExternalLink ? "_blank" : undefined}
                                    rel={isExternalLink ? "noreferrer" : undefined}
                                    className={`pb-1 text-sm transition-colors ${
                                        isActive
                                            ? "border-b-2 border-[#00e5ff] text-[#00e5ff]"
                                            : "text-[#bac9cc] hover:text-[#e5e2e1]"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-[#00e5ff] px-5 py-2 text-xs font-bold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
                        >
                            Obtener Consultoría
                        </Link>
                    </nav>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon-sm"
                                className="border-[#00e5ff]/35 text-[#00e5ff] hover:border-[#00e5ff] hover:bg-[#00e5ff]/10 hover:text-[#00e5ff] md:hidden"
                                aria-label="Abrir menu principal"
                            >
                                <Menu />
                            </Button>
                        </DialogTrigger>

                        <DialogContent
                            className="!top-20 !-translate-y-0 w-[calc(100%-1.5rem)] max-w-md border-white/10 bg-[#111111]/95 p-5 text-white"
                            showCloseButton
                        >
                            <DialogTitle className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                Navegacion
                            </DialogTitle>
                            <nav className="mt-2 flex flex-col gap-1.5">
                                {menuItems.map((item) => {
                                    const isHashLink = item.href.startsWith("/#");
                                    const isExternalLink = item.href.startsWith("http");
                                    const isActive = isHashLink
                                        ? activeHash === item.href.slice(1)
                                        : pathname === item.href;

                                    return (
                                        <DialogClose asChild key={`mobile-${item.href}`}>
                                            <Link
                                                href={item.href}
                                                target={isExternalLink ? "_blank" : undefined}
                                                rel={isExternalLink ? "noreferrer" : undefined}
                                                className={`border-l-[3px] border-y border-r px-4 py-2.5 text-sm font-medium transition duration-200 ${
                                                    isActive
                                                        ? "border-l-[#00e5ff] border-y-white/12 border-r-white/12 bg-white/[0.04] text-[#00e5ff]"
                                                        : "border-l-transparent border-y-white/8 border-r-white/8 text-white hover:border-l-[#00e5ff]/70 hover:text-[#00e5ff]"
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
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#353534] to-transparent" />
        </header>
    );
}
