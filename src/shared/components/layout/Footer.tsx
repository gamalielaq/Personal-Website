import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";
import Container from "./Container";
import { socialLinks, type SocialIconKey } from "@/content/social-links";

const socialIconMap: Record<SocialIconKey, LucideIcon> = {
    linkedin: Linkedin,
    github: Github,
    email: Mail,
};

export default function Footer() {
    return (
        <footer id="contacto" className="border-t border-border/55 bg-[#0e0e0e]">
            <Container className="py-12 sm:py-14">
                <div className="grid gap-10 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <p className="text-lg font-black tracking-tight text-text">LUMINOUS_ARCHITECT</p>
                        <p className="mt-4 text-sm leading-7 text-text/62">
                            Ingenieria de software premium para equipos que necesitan rendimiento, claridad y escalabilidad.
                        </p>
                        <div className="mt-4 space-y-1 text-sm text-text/68">
                            <p>
                                <span className="font-semibold text-text">E-mail:</span> gamaliel.aq96@gmail.com
                            </p>
                            <p className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-text" />
                                Lima - Peru
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Directory</p>
                        <ul className="mt-4 space-y-3 text-sm text-text/66">
                            <li><Link href="/servicios" className="transition-colors hover:text-text">Services</Link></li>
                            <li><Link href="/projects" className="transition-colors hover:text-text">Case_Studies</Link></li>
                            <li><Link href="/#frontend-architecture" className="transition-colors hover:text-text">Methodology</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Company</p>
                        <ul className="mt-4 space-y-3 text-sm text-text/66">
                            <li><Link href="/about" className="transition-colors hover:text-text">About</Link></li>
                            <li><Link href="/contact" className="transition-colors hover:text-text">Contact</Link></li>
                            <li><span className="text-text/40">Careers</span></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Social</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {socialLinks.map((link) => {
                                const Icon = socialIconMap[link.iconKey];

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                        className="inline-flex items-center gap-2 rounded-full border border-border/50 px-3 py-2 text-xs text-text/75 transition-colors hover:border-accent/50 hover:text-text"
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-border/30 pt-6 text-xs uppercase tracking-[0.14em] text-text/50 md:flex-row md:items-center md:justify-between">
                    <p>(c) 2024 LUMINOUS_ARCHITECT. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Privacy_Policy</span>
                        <span>Terms_of_Service</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

