import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Container from "./Container";

const socialLinks = [
    { href: "https://www.linkedin.com/gamalielaq", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com/gamalielaq", label: "GitHub", icon: Github },
    { href: "mailto:gamaliel.aq96@gmail.com", label: "Email", icon: Mail },
];

export default function Footer() {
    return (
        <footer id="contacto" className="border-t border-border/80 bg-background">
            <Container className="py-10">
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">Contacto</p>
                    {/* <h2 className="mt-3 text-lg font-semibold text-text">Gamaliel Abanto</h2> */}
                    <div className="mt-4 space-y-2 text-sm text-text/70">
                        <p>
                            <span className="font-semibold text-text">E-mail de contacto:</span> social@devtalles.com
                        </p>
                        <p className="inline-flex items-center gap-2 text-text/70">
                            <MapPin className="h-4 w-4 text-accent" />
                            Ubicación: Lima - Perú
                        </p>
                    </div>

                    <nav className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-text/70">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                    className="flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition duration-300 hover:border-accent hover:text-accent"
                                >
                                    <Icon className="h-4 w-4" />
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
