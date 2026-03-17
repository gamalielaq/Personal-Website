"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Blocks, Box, Database, ServerCog } from "lucide-react";
import Container from "@/components/layout/Container";
import FloatingTechIcons from "@/components/layout/FloatingTechIcons";
import Button from "@/components/ui/Button";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stackItems = [
    {
        title: "Frontend",
        subtitle: "Angular",
        icon: Blocks,
        iconColor: "text-rose-300",
        badgeClassName: "bg-rose-500/12 ring-1 ring-rose-300/20",
        delay: 0,
    },
    {
        title: "API",
        subtitle: "NestJS",
        icon: ServerCog,
        iconColor: "text-red-300",
        badgeClassName: "bg-red-500/12 ring-1 ring-red-300/20",
        delay: 0.35,
    },
    {
        title: "Database",
        subtitle: "PostgreSQL",
        icon: Database,
        iconColor: "text-sky-300",
        badgeClassName: "bg-sky-500/12 ring-1 ring-sky-300/20",
        delay: 0.7,
    },
    {
        title: "Infra",
        subtitle: "Docker",
        icon: Box,
        iconColor: "text-blue-300",
        badgeClassName: "bg-blue-500/12 ring-1 ring-blue-300/20",
        delay: 1.05,
    },
];

export default function HeroSection() {
    return (
        <section id="inicio" className="relative overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-background" />
            <div className="absolute right-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.11)_0%,rgba(59,130,246,0.05)_34%,transparent_72%)] blur-3xl" />

            <FloatingTechIcons className="opacity-60" />

            <Container className="relative z-10">
                <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:gap-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        className="max-w-2xl"
                    >

                        <motion.p
                            variants={fadeUp}
                            className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-text/54"
                        >
                            Gamaliel Abanto
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="font-semibold tracking-[-0.03em] text-text sm:text-xs"
                        >
                            Front End Architect - Angular Expert
                        </motion.h2>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-text sm:text-4xl lg:text-[3.2rem] lg:leading-[0.95]"
                        >
                            Desarrollo aplicaciones web modernas
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-7 max-w-xl text-[1.05rem] leading-8 text-[#9ca3af] sm:text-lg"
                        >
                            Construyo sistemas web escalables para empresas y profesionales utilizando tecnologias modernas y arquitectura limpia.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                            {[
                                { label: "Angular", className: "text-rose-100 border-rose-400/14 bg-rose-500/10" },
                                { label: "NestJS", className: "text-red-100 border-red-400/14 bg-red-500/10" },
                                { label: "Next.js", className: "text-slate-100 border-white/10 bg-white/[0.04]" },
                            ].map((item) => (
                                <span
                                    key={item.label}
                                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${item.className}`}
                                >
                                    {item.label}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
                        >
                            <Button href="/#services" variant="primary">
                                Ver servicios
                            </Button>
                            <Button href="/contact" variant="outline">
                                Contátame
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mx-auto w-full max-w-[420px] lg:ml-auto"
                    >
                        <div className="relative flex w-full flex-col items-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                                className="relative z-10 w-[200px] sm:w-[220px]"
                            >
                                <div className="overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-surface shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
                                    <Image
                                        src="/foto_perfil.jpg"
                                        alt="Retrato profesional de Gamaliel Abanto"
                                        width={320}
                                        height={400}
                                        priority
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* <div className="relative z-0 flex w-full max-w-[320px] flex-col items-stretch">
                                {stackItems.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.subtitle}
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{
                                                duration: 4.8,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                                delay: item.delay,
                                            }}
                                            className="w-full"
                                        >
                                            <div className="rounded-[0.9rem] border border-white/[0.06] bg-surface px-3.5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur">
                                                <div className="flex items-center gap-3">
                                                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-xl ${item.badgeClassName}`}>
                                                        <Icon className={`h-3.5 w-3.5 ${item.iconColor}`} />
                                                    </span>
                                                    <div>
                                                        <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-text/42">
                                                            {item.title}
                                                        </p>
                                                        <p className="mt-1 text-sm font-semibold tracking-[-0.03em] text-text">
                                                            {item.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {index < stackItems.length - 1 ? (
                                                <div className="flex justify-center py-0">
                                                    <span className="h-8 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.05)_100%)]" />
                                                </div>
                                            ) : null}
                                        </motion.div>
                                    );
                                })}
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}