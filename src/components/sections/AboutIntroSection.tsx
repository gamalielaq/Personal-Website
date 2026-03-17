"use client";

import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

const technologies = [
    { name: "Angular", short: "A", tone: "bg-red-500/10 text-red-300 border-red-500/30" },
    { name: "React", short: "R", tone: "bg-sky-500/10 text-sky-300 border-sky-500/30" },
    { name: "Next.js", short: "N", tone: "bg-slate-500/10 text-slate-200 border-slate-400/30" },
    { name: "Laravel", short: "L", tone: "bg-rose-500/10 text-rose-300 border-rose-500/30" },
    { name: "NestJS", short: "Ne", tone: "bg-pink-500/10 text-pink-300 border-pink-500/30" },
];

export default function AboutIntroSection() {
    return (
        <section className="py-20 sm:py-24 lg:py-28">
            <Container>
                <ScrollReveal className="grid gap-10 rounded-[2rem] border border-border bg-surface/80 p-8 shadow-2xl shadow-black/20 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div className="order-1 flex items-center justify-center lg:order-none">
                        <div className="w-full max-w-sm">
                            <div className="aspect-square w-full rounded-2xl border border-border/70 bg-background/60 p-4">
                                <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border/70 bg-surface/70 text-sm tracking-[0.3em] text-text/40">
                                     <Image
                                        src="/foto_perfil.jpg"
                                        alt="Retrato profesional de Gamaliel Abanto"
                                        width={320}
                                        height={400}
                                        priority
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-2 space-y-6 text-left">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Sobre mí</p>
                            <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                                Gamaliel
                            </h1>
                            <p className="text-sm font-semibold text-text/90">
                                Front End Architect - Angular Expert
                            </p>
                        </div>

                        <div className="space-y-4 text-base leading-7 text-text/70">
                            <p>
                                Soy desarrollador frontend con más de 6 años de experiencia creando aplicaciones web modernas,
                                escalables y centradas en el usuario. Mi herramienta principal es Angular, donde tengo una amplia
                                experiencia y un conocimiento profundo.
                            </p>
                            <p>
                                También tengo experiencia con React, Next.js, NestJS y Laravel, lo que me permite entender el
                                desarrollo de principio a fin. Me apasiona escribir código limpio y ordenado. También me gusta
                                escribir: actualmente trabajo en un libro sobre crecimiento personal y superación.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tech.tone}`}
                                >
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current/40 text-[0.6rem] font-semibold">
                                        {tech.short}
                                    </span>
                                    {tech.name}
                                </div>
                            ))}
                        </div>

                        <div>
                            <a
                                href="#contacto"
                                className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition duration-300 hover:bg-accent hover:text-black"
                            >
                                Contáctame
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}



