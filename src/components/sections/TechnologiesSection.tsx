"use client";

import {
    Boxes,
    Container,
    Database,
    FileCode2,
    GitBranch,
    Layers3,
    Leaf,
    MonitorCog,
    ServerCog,
} from "lucide-react";
import ContainerLayout from "@/components/layout/Container";
import FloatingTechIcons from "@/components/layout/FloatingTechIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
    {
        name: "Angular",
        icon: MonitorCog,
        badgeTone: "bg-gradient-to-br from-rose-500/24 to-pink-500/14 ring-1 ring-rose-300/28 shadow-[0_0_24px_rgba(244,63,94,0.16)]",
        iconColor: "text-rose-300",
    },
    {
        name: "Next.js",
        icon: Boxes,
        badgeTone: "bg-gradient-to-br from-slate-200/16 to-zinc-400/10 ring-1 ring-slate-100/18 shadow-[0_0_20px_rgba(255,255,255,0.06)]",
        iconColor: "text-slate-100",
    },
    {
        name: "Nest JS",
        icon: ServerCog,
        badgeTone: "bg-gradient-to-br from-red-500/24 to-rose-500/14 ring-1 ring-red-300/26 shadow-[0_0_24px_rgba(239,68,68,0.16)]",
        iconColor: "text-red-300",
    },
    {
        name: "Laravel",
        icon: Leaf,
        badgeTone: "bg-gradient-to-br from-orange-500/24 to-red-500/14 ring-1 ring-orange-300/26 shadow-[0_0_24px_rgba(249,115,22,0.16)]",
        iconColor: "text-orange-300",
    },
    {
        name: "React",
        icon: Layers3,
        badgeTone: "bg-gradient-to-br from-cyan-500/24 to-sky-500/14 ring-1 ring-cyan-300/28 shadow-[0_0_24px_rgba(34,211,238,0.16)]",
        iconColor: "text-cyan-300",
    },
    {
        name: "TypeScript",
        icon: FileCode2,
        badgeTone: "bg-gradient-to-br from-blue-500/24 to-indigo-500/14 ring-1 ring-blue-300/28 shadow-[0_0_24px_rgba(59,130,246,0.16)]",
        iconColor: "text-blue-300",
    },
    {
        name: "PostgreSQL",
        icon: Database,
        badgeTone: "bg-gradient-to-br from-sky-500/24 to-blue-500/14 ring-1 ring-sky-300/26 shadow-[0_0_24px_rgba(14,165,233,0.16)]",
        iconColor: "text-sky-300",
    },
    {
        name: "Docker",
        icon: Container,
        badgeTone: "bg-gradient-to-br from-indigo-500/24 to-blue-500/14 ring-1 ring-indigo-300/28 shadow-[0_0_24px_rgba(99,102,241,0.16)]",
        iconColor: "text-indigo-300",
    },
    {
        name: "Git",
        icon: GitBranch,
        badgeTone: "bg-gradient-to-br from-amber-500/24 to-orange-500/14 ring-1 ring-amber-300/28 shadow-[0_0_24px_rgba(245,158,11,0.16)]",
        iconColor: "text-amber-300",
    },
];

export default function TechnologiesSection() {
    return (
        <section id="technologies" className="relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-55" />
            <ContainerLayout className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Tecnologías"
                        title="Herramientas que uso para construir sin fricción innecesaria."
                        description="Herramientas y tecnologías que utilizo para construir aplicaciones modernas."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => {
                            const Icon = technology.icon;

                            return (
                                <div
                                    key={technology.name}
                                    className="group flex items-center gap-4 rounded-[1.5rem] border border-border/80 bg-surface/45 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/65"
                                >
                                    <span
                                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-[1.06] ${technology.badgeTone}`}
                                    >
                                        <Icon className={`h-5.5 w-5.5 stroke-[2.2] ${technology.iconColor}`} />
                                    </span>
                                    <span className="text-base font-semibold text-text">{technology.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </ContainerLayout>
        </section>
    );
}
