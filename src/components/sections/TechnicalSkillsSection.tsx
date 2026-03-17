"use client";

import {
    Blocks,
    Braces,
    Component,
    Cpu,
    FileCode2,
    Layers3,
    PanelLeft,
    RefreshCcw,
    Sparkles,
    Workflow,
} from "lucide-react";
import Container from "@/components/layout/Container";
import FloatingTechIcons from "@/components/layout/FloatingTechIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const skills = [
    { name: "Angular", icon: PanelLeft, iconColor: "text-red-300", badgeTone: "bg-red-400/10" },
    { name: "Signals", icon: Sparkles, iconColor: "text-emerald-300", badgeTone: "bg-emerald-400/10" },
    { name: "RxJS", icon: Workflow, iconColor: "text-fuchsia-300", badgeTone: "bg-fuchsia-400/10" },
    { name: "Arquitectura modular", icon: Layers3, iconColor: "text-sky-300", badgeTone: "bg-sky-400/10" },
    { name: "Stores centralizados", icon: Cpu, iconColor: "text-orange-300", badgeTone: "bg-orange-400/10" },
    { name: "Componentes reutilizables", icon: Component, iconColor: "text-pink-300", badgeTone: "bg-pink-400/10" },
    { name: "Refactorización de código legacy", icon: RefreshCcw, iconColor: "text-amber-300", badgeTone: "bg-amber-400/10" },
    { name: "TypeScript", icon: FileCode2, iconColor: "text-blue-300", badgeTone: "bg-blue-400/10" },
    { name: "HTML", icon: Braces, iconColor: "text-orange-300", badgeTone: "bg-orange-400/10" },
    { name: "CSS", icon: Blocks, iconColor: "text-cyan-300", badgeTone: "bg-cyan-400/10" },
];

export default function TechnicalSkillsSection() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-55" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Habilidades técnicas"
                        title="Herramientas y patrones que sostienen aplicaciones vivas."
                    />

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={skill.name}
                                    className="group flex min-h-[108px] flex-col justify-between rounded-[1.25rem] border border-border/80 bg-surface/45 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/65 hover:shadow-xl hover:shadow-black/15"
                                >
                                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 group-hover:scale-[1.04] ${skill.badgeTone}`}>
                                        <Icon className={`h-4.5 w-4.5 ${skill.iconColor}`} />
                                    </span>
                                    <span className="mt-5 text-sm font-semibold leading-5 text-text">{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
