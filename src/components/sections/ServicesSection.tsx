"use client";

import Link from "next/link";
import { AppWindow, ArrowUpRight, Blocks, DatabaseZap, Globe2 } from "lucide-react";
import Container from "@/components/layout/Container";
import FloatingTechIcons from "@/components/layout/FloatingTechIcons";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyChip from "@/components/ui/TechnologyChip";

const serviceIcons = {
    applications: AppWindow,
    architecture: Blocks,
    backend: DatabaseZap,
    websites: Globe2,
};

const serviceIconStyles = {
    applications: { badgeTone: "bg-sky-500/12", iconColor: "text-sky-300" },
    architecture: { badgeTone: "bg-violet-500/12", iconColor: "text-violet-300" },
    backend: { badgeTone: "bg-amber-500/12", iconColor: "text-amber-300" },
    websites: { badgeTone: "bg-rose-500/12", iconColor: "text-rose-300" },
};

export default function ServicesSection() {
    return (
        <section id="services" className="relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-60" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Servicios"
                        title="Construyo aplicaciones web modernas para empresas y profesionales."
                    />

                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:gap-5">
                        {services.map((service) => {
                            const Icon = serviceIcons[service.iconKey];
                            const style = serviceIconStyles[service.iconKey];

                            return (
                                <Link
                                    key={service.slug}
                                    href={`/servicios/${service.slug}`}
                                    className="group flex min-h-[220px] cursor-pointer flex-col rounded-[1.5rem] border border-border/80 bg-surface/50 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/24 hover:bg-surface/68 hover:shadow-2xl hover:shadow-black/28"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-[1.04] ${style.badgeTone}`}>
                                            <Icon className={`h-5 w-5 ${style.iconColor}`} />
                                        </span>
                                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-text/35 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text/68" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-text sm:text-2xl">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 max-w-[36ch] text-sm leading-7 text-text/68 sm:text-base">
                                        {service.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {service.technologies.map((technology) => (
                                            <TechnologyChip key={technology} technology={technology} />
                                        ))}
                                    </div>

                                    <div className="mt-4 flex w-full justify-end">
                                        <div className="inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-accent/80 transition duration-300 group-hover:border-accent/45 group-hover:text-accent">
                                            Solicitar servicio
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl text-center">
                        <p className="text-base leading-8 text-text/64 sm:text-lg">
                            Desarrollo soluciones digitales para empresas y profesionales que necesitan construir nuevas aplicaciones o mejorar sus plataformas actuales.
                        </p>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}