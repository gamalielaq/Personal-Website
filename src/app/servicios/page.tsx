import Link from "next/link";
import {
    AppWindow,
    ArrowRight,
    ArrowUpRight,
    Blocks,
    CheckCircle2,
    DatabaseZap,
    Globe2,
    type LucideIcon,
} from "lucide-react";
import Container from "@/shared/components/layout/Container";
import TechnologyChip from "@/features/services/components/TechnologyChip";
import { services, type ServiceIconKey } from "@/content/services";

const serviceIconMap: Record<ServiceIconKey, LucideIcon> = {
    applications: AppWindow,
    architecture: Blocks,
    backend: DatabaseZap,
    websites: Globe2,
};

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "Definimos objetivos de negocio, alcance tecnico y riesgos antes de construir.",
    },
    {
        step: "02",
        title: "Arquitectura",
        description: "Disenamos una base modular para crecer sin deuda tecnica innecesaria.",
    },
    {
        step: "03",
        title: "Implementacion",
        description: "Entregas por iteraciones cortas, con foco en calidad, performance y claridad.",
    },
    {
        step: "04",
        title: "Evolucion",
        description: "Monitoreo, mejoras y soporte para mantener velocidad sin perder estabilidad.",
    },
];

export default function ServicesPage() {
    const [featured, ...rest] = services;

    return (
        <main className="py-20 sm:py-24 lg:py-28">
            <Container>
                <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface/65 p-8 sm:p-12 lg:p-14">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />
                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-accent">Servicios</p>
                            <h1 className="mt-4 text-[2.1rem] font-semibold tracking-[-0.05em] text-text sm:text-[2.8rem] lg:text-[3.5rem] lg:leading-[0.98]">
                                Soluciones estrategicas para escalar productos digitales
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-text/70 sm:text-lg">
                                Combinamos arquitectura frontend, desarrollo fullstack y enfoque de negocio para construir software mantenible, rapido y listo para crecer.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/35 p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text/70">Enfoque</p>
                            <ul className="mt-4 grid gap-3 text-sm text-text/78">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Arquitectura clara y escalable</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Entregas con valor de negocio</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Calidad tecnica sostenible</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mt-16">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-text sm:text-4xl">Servicios principales</h2>
                        <p className="text-sm uppercase tracking-[0.24em] text-text/55">Composicion bento</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12">
                        {featured && (
                            <article className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-surface/80 p-7 md:col-span-8 sm:p-8">
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
                                <div className="relative z-10">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                                        {(() => {
                                            const Icon = serviceIconMap[featured.iconKey];
                                            return <Icon className="h-5 w-5" />;
                                        })()}
                                    </span>
                                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">{featured.title}</h3>
                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text/70 sm:text-base">{featured.description}</p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {featured.technologies.map((technology) => (
                                            <TechnologyChip key={technology} technology={technology} />
                                        ))}
                                    </div>

                                    <ul className="mt-7 grid gap-2 text-sm text-text/78 sm:grid-cols-2">
                                        {featured.solutions.map((solution) => (
                                            <li key={solution} className="flex gap-2">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                <span>{solution}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/servicios/${featured.slug}`}
                                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-accent/20"
                                    >
                                        Ver detalle
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        )}

                        {rest.map((service) => {
                            const Icon = serviceIconMap[service.iconKey];

                            return (
                                <article
                                    key={service.slug}
                                    className="flex h-full flex-col justify-between rounded-md bg-[#1d1d1d]/88 p-8 md:col-span-4"
                                >
                                    <div>
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-text">{service.title}</h3>
                                        <p className="mt-4 text-sm leading-7 text-text/70">{service.description}</p>
                                    </div>

                                    <div className="mt-8">
                                        <ul className="space-y-3">
                                            {service.solutions.slice(0, 3).map((solution) => (
                                                <li key={`${service.slug}-${solution}`} className="flex items-start gap-3 text-xs font-medium text-text/72">
                                                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                                                    <span>{solution}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/servicios/${service.slug}`}
                                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-text"
                                        >
                                            Ver detalle
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="mt-20">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px w-12 bg-accent/90" />
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">Metodo de trabajo</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {processSteps.map((item) => (
                            <article key={item.step} className="border-border/60 bg-[rgb(28_27_27/var(--tw-bg-opacity,1))] p-6">
                                <p className="font-mono text-3xl font-semibold text-accent/70">{item.step}</p>
                                <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-text/70">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-20 rounded-[1.8rem] border border-border/70 bg-surface/78 p-10 text-center sm:p-14">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-accent">Proxima etapa</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-text sm:text-5xl">
                            Listo para construir una base tecnica mas solida
                        </h2>
                        <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
                            Si ya tienes un sistema en marcha o empiezas desde cero, definimos una ruta clara para construir con velocidad y sostenibilidad.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/#contacto"
                                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                            >
                                Solicitar propuesta tecnica
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-text/85 transition hover:border-accent/50 hover:text-text"
                            >
                                Ver proyectos
                            </Link>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}
