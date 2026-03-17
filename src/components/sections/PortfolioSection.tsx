"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

// Placeholder portfolio data. Replace images, links, and copy as needed.
const projects = [
    {
        id: "comprobantes",
        title: "Módulo de comprobantes",
        summary: "Optimización de flujos críticos y experiencia de usuarios internos.",
        description:
            "Proyecto orientado a reducir fricción operativa, consolidar procesos y asegurar una arquitectura mantenible. Se diseñó un flujo modular con componentes reutilizables, priorizando claridad, rendimiento y consistencia visual.",
        technologies: ["Angular", "Tailwind", "TypeScript"],
        images: ["Comprobantes 01", "Comprobantes 02", "Comprobantes 03", "Comprobantes 04"],
    },
    {
        id: "clinica",
        title: "Web para clínica dental",
        summary: "Sitio informativo con reservas rápidas y enfoque en confianza.",
        description:
            "Landing informativa pensada para conversión y reputación. Incluye secciones educativas, testimonios y un flujo de contacto optimizado para dispositivos móviles.",
        technologies: ["React", "Node.js"],
        images: ["Clínica 01"],
        link: "https://example.com",
    },
    {
        id: "inventarios",
        title: "Sistema de gestión de inventarios",
        summary: "Panel operativo con métricas en tiempo real y control de stock.",
        description:
            "Sistema multi-módulo para control de existencias, alertas de reposición y trazabilidad. La interfaz prioriza lectura rápida de datos y acciones críticas con baja fricción.",
        technologies: ["Laravel", "Vue", "MySQL"],
        images: ["Inventario 01", "Inventario 02", "Inventario 03"],
    },
    {
        id: "startup",
        title: "Landing page para startup",
        summary: "Narrativa visual minimalista con foco en producto.",
        description:
            "Landing enfocada en explicar valor en pocos segundos. Se cuidó micro-copy, jerarquía visual y performance para campañas de adquisición.",
        technologies: ["Next.js", "Tailwind"],
        images: ["Startup 01"],
        link: "https://example.com",
    },
];

type PortfolioProject = (typeof projects)[number];

export default function PortfolioSection() {
    const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
    const [activeImage, setActiveImage] = useState(0);

    const gallery = useMemo(() => activeProject?.images ?? [], [activeProject]);
    const hasGallery = gallery.length > 1;

    useEffect(() => {
        if (!activeProject) return;
        setActiveImage(0);
    }, [activeProject]);

    useEffect(() => {
        document.body.style.overflow = activeProject ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActiveProject(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const nextImage = () => {
        if (!hasGallery) return;
        setActiveImage((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        if (!hasGallery) return;
        setActiveImage((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <section id="proyectos" className="py-18 sm:py-20 lg:py-28">
            <Container>
                <ScrollReveal className="rounded-[2rem] border border-border bg-surface/70 p-8 shadow-2xl shadow-black/15 sm:p-12">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Mi trabajo</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                            Proyectos
                        </h2>
                        <p className="mt-4 text-base leading-7 text-text/70">
                            Selección de proyectos con distintos formatos de presentación, pensados para mostrar versatilidad
                            y claridad en la ejecución.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-background/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
                            >
                                <div className="relative min-h-[180px] border-b border-border bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_40%),linear-gradient(180deg,color-mix(in_srgb,var(--surface)_85%,var(--background)),var(--background))] p-6">
                                    <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-border/70 bg-surface/70 text-xs uppercase tracking-[0.35em] text-text/40">
                                        {project.title}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                                        <p className="text-sm leading-6 text-text/70">{project.summary}</p>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-border bg-surface px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-text/60"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <Button variant="outline" onClick={() => setActiveProject(project)}>
                                            Ver proyecto
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </ScrollReveal>
            </Container>

            {activeProject && (
                <div
                    className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-black/70 p-4 sm:p-8"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="relative max-h-[90vh] w-[92vw] max-w-[800px] overflow-hidden rounded-[1.5rem] border border-border bg-surface text-left shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveProject(null)}
                            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/70 text-text/70 transition hover:text-accent"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="p-6 sm:p-8">
                            <h3 className="text-2xl font-semibold text-text">{activeProject.title}</h3>

                            <div className="mt-6">
                                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/70">
                                    <div className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_48%),linear-gradient(180deg,color-mix(in_srgb,var(--surface)_90%,var(--background)),var(--background))]">
                                        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.35em] text-text/50">
                                            {gallery[activeImage]}
                                        </div>
                                    </div>

                                    {hasGallery && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={prevImage}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 px-3 py-2 text-sm font-semibold text-text/70 transition hover:text-accent"
                                            >
                                                ‹
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextImage}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 px-3 py-2 text-sm font-semibold text-text/70 transition hover:text-accent"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>

                                {hasGallery && (
                                    <div className="mt-3 flex items-center justify-center gap-2">
                                        {gallery.map((_, index) => (
                                            <button
                                                key={`${activeProject.id}-dot-${index}`}
                                                type="button"
                                                aria-label={`Ver imagen ${index + 1}`}
                                                onClick={() => setActiveImage(index)}
                                                className={`h-2.5 w-2.5 rounded-full border transition ${
                                                    index === activeImage
                                                        ? "border-accent bg-accent"
                                                        : "border-border bg-transparent"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <p className="mt-6 text-sm leading-7 text-text/70">{activeProject.description}</p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {activeProject.technologies.map((tech) => (
                                    <span
                                        key={`${activeProject.id}-${tech}`}
                                        className="rounded-full border border-border bg-surface px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-text/60"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {activeProject.link && (
                                <div className="mt-8">
                                    <a
                                        href={activeProject.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black"
                                    >
                                        Visitar sitio
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}





