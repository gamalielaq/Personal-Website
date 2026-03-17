"use client";

import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FloatingTechIcons from "@/components/layout/FloatingTechIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";

const blocks = [
    {
        title: "Frontend Engineering",
        description: "Building modern user interfaces with scalable architectures.",
    },
    {
        title: "Web Architecture",
        description: "Designing maintainable and performant web systems.",
    },
    {
        title: "Product Development",
        description: "Creating complete web applications with modern technologies.",
    },
];

export default function WhatIBuildSection() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
            <FloatingTechIcons className="opacity-55" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-2xl shadow-black/30 sm:p-12">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">IngenierÃ­a</p>
                            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-text sm:text-5xl lg:text-6xl">
                                QuÃ© construyo
                            </h1>
                        </div>

                        <div className="mt-12 flex flex-col gap-5 xl:flex-row">
                            {blocks.map((block) => (
                                <article
                                    key={block.title}
                                    className="group flex min-h-[260px] flex-1 flex-col justify-between rounded-[1.75rem] border border-border bg-background/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/35"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 className="max-w-[14ch] text-3xl font-semibold tracking-[-0.03em] text-text sm:text-[2rem]">
                                            {block.title}
                                        </h2>
                                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-accent/75 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                                    </div>

                                    <p className="mt-10 max-w-xs text-sm leading-7 text-text/72 sm:text-base">
                                        {block.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
