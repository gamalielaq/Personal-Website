import {
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Database,
    FolderTree,
    Layers3,
    Network,
    Terminal,
} from "lucide-react";
import Container from "@/shared/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

type AngularGradientIconProps = {
    className?: string;
};

function AngularGradientIcon({ className }: AngularGradientIconProps) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
            <defs>
                <linearGradient id="angular-enterprise-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f637e3" />
                    <stop offset="50%" stopColor="#8e13f0" />
                    <stop offset="100%" stopColor="#f50d55" />
                </linearGradient>
            </defs>
            <path
                fill="url(#angular-enterprise-gradient)"
                d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"
            />
        </svg>
    );
}


export default function HomePage() {
    return (
        <main>
            <section id="inicio" className="relative overflow-hidden pt-10">
                <div className="absolute inset-0 -z-10" />
                <div className="absolute right-[8%] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.16)_0%,rgba(34,197,94,0.04)_38%,transparent_72%)] blur-3xl" />

                <Container className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7">
                            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                                [01] ESTATO: DISPONIBLE PARA CONSULTORÍA
                            </p>
                            <h1 className="mb-8 text-[3.2rem] font-extrabold leading-[1.1] tracking-tighter text-text">
                                Arquitectura Angular <br />
                                <span className="text-accent">de Élite</span> para Soluciones <br />
                                Web Escalables
                            </h1>
                            <p className="mb-10 max-w-xl text-lg leading-relaxed text-text/70">
                                Ayudo a empresas y startups a construir software robusto, mantenible y de alto rendimiento mediante patrones de ingeniería avanzados y ejecución técnica impecable.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="rounded-md bg-accent px-8 py-4 text-sm font-bold tracking-wide text-black transition-transform active:scale-[0.98]">
                                    Hablemos de tu proyecto
                                </button>
                                <button className="rounded-md border border-border/60 px-8 py-4 text-sm font-bold tracking-wide text-text transition-colors hover:bg-surface">
                                    Ver servicios
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-surface/80">
                                <div className="relative aspect-[4/5]">
                                   <Image
                                                                        src="/foto_perfil.jpg"
                                                                        alt="Retrato profesional de Gamaliel Abanto"
                                                                        width={320}
                                                                        height={400}
                                                                        priority
                                                                        className="h-auto w-full object-cover"
                                                                    />
                                    {/* <img
                                        src="/../public/foto_perfil.jpg"
                                        alt="Retrato Profesional"
                                        className="absolute inset-0 h-full w-full object-cover grayscale opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                                    /> */}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="rounded-md border-l-2 border-accent bg-surface/80 p-4 backdrop-blur">
                                        <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                                            Ingeniero Principal
                                        </p>
                                        <p className="text-sm font-bold text-text">
                                            Especialista en Sistemas Distribuidos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            </section>

            <section className="bg-surface/60 py-24">
                <Container>
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        <div className="space-y-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                                [02] EXPERIENCIA
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-text">
                                7+ años construyendo soluciones reales.
                            </h2>
                            <p className="leading-relaxed text-text/70">
                                No solo escribo código; diseño ecosistemas. Mi enfoque se centra en la longevidad del producto y la eficiencia del equipo de desarrollo.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:col-span-2">
                            <div className="rounded-lg bg-surface/68 p-8 transition-transform hover:-translate-y-1">
                                <Terminal className="mb-6 h-7 w-7 text-accent" />
                                <h3 className="mb-3 font-bold text-text">Especialista Angular</h3>
                                <p className="text-sm leading-relaxed text-text/70">
                                    Dominio total de RxJS, Signals, NgRx y optimización de renderizado para apps críticas.
                                </p>
                            </div>
                            <div className="rounded-lg bg-[#1d1d1d]/86 p-8 transition-transform hover:-translate-y-1">
                                <FolderTree className="mb-6 h-7 w-7 text-accent" />
                                <h3 className="mb-3 font-bold text-text">Arquitectura Limpia</h3>
                                <p className="text-sm leading-relaxed text-text/70">
                                    Diseño de sistemas modulares, desacoplados y testeables siguiendo principios SOLID.
                                </p>
                            </div>
                            <div className="rounded-lg bg-surface/88 p-8 transition-transform hover:-translate-y-1">
                                <Layers3 className="mb-6 h-7 w-7 text-accent" />
                                <h3 className="mb-3 font-bold text-text">Ejecución Fullstack</h3>
                                <p className="text-sm leading-relaxed text-text/70">
                                    Visión holística del desarrollo, desde la DB hasta la experiencia de usuario final.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="services" className="py-24">
                <Container>
                    <div className="mb-16">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                            [03] SERVICIOS CLAVE
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <h2 className="text-4xl font-bold tracking-tighter text-text">Soluciones Estratégicas</h2>
                            <Link href="/#services" className="inline-flex items-center gap-2 rounded-full border border-accent  px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(34,197,94,0.28)] transition-all hover:brightness-110 hover:shadow-[0_12px_34px_rgba(34,197,94,0.36)]">
                                Ver todos los servicios
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                        <div className="relative overflow-hidden rounded-lg  bg-[#1a1a1a]/92 border-l-2 border-accent p-10 md:col-span-8">
                            <div className="relative z-10 max-w-md">
                                <h3 className="mb-4 text-2xl font-bold text-text">Consultoría Angular Enterprise</h3>
                                <p className="mb-8 text-text/70">
                                    Auditoría de código, migración de versiones y optimización de performance para aplicaciones de gran escala.
                                </p>
                                <ul className="mb-8 space-y-2 font-mono text-[10px] uppercase text-accent">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Migration Strategies
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> State Management Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Custom Library Dev
                                    </li>
                                </ul>
                            </div>
                            <Code2 className="absolute -bottom-10 -right-10 h-44 w-44 text-accent/10" />
                        </div>
                        <div className="flex flex-col justify-between rounded-lg bg-[#1d1d1d]/88 p-10 transition-colors hover:bg-[#242424]/90 md:col-span-4">
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-text">Diseño de Arquitectura</h3>
                                <p className="text-sm leading-relaxed text-text/70">
                                    Definición de blueprints técnicos para nuevos productos, asegurando escalabilidad desde el día cero.
                                </p>
                            </div>
                            <div className="pt-8 flex justify-end">
                                <Network className="h-6 w-6 text-amber-300" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg bg-[#1d1d1d]/100 p-10 transition-colors hover:bg-surface md:col-span-4">
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-text">Desarrollo Fullstack</h3>
                                <p className="text-sm leading-relaxed text-text/70">
                                    Implementación de extremo a extremo utilizando Larabel, NestJS y ecosistemas cloud.
                                </p>
                            </div>
                            <div className="pt-8 flex justify-end">
                                <Database className="h-6 w-6 text-accent" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between overflow-hidden rounded-lg bg-[#1a1a1a]/92 border-l-2 border-amber-300/80 p-10 md:col-span-8">
                            <div className="max-w-md">
                                <h3 className="mb-4 text-2xl font-bold text-text">Desarrollo Angular enterprise</h3>
                                <p className="text-text/70">
                                    Desarrollo y escalado de aplicaciones Angular enterprise con arquitectura modular, performance y mantenibilidad.
                                </p>
                            </div>
                            <AngularGradientIcon className="h-12 w-12" />
                        </div>
                    </div>
                </Container>
            </section>

            <section id="tech-orbit" className="border-y border-border/20 py-20">
                <Container>
                    <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4 md:text-left">
                        <div>
                            <p className="font-mono text-3xl font-bold tracking-tighter text-accent">45+</p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-text/60">Proyectos Exitosos</p>
                        </div>
                        <div>
                            <p className="font-mono text-3xl font-bold tracking-tighter text-accent">7</p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-text/60">Años de Experiencia</p>
                        </div>
                        <div>
                            <p className="font-mono text-3xl font-bold tracking-tighter text-accent">12</p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-text/60">Empresas Fortune 500</p>
                        </div>
                        <div>
                            <p className="font-mono text-3xl font-bold tracking-tighter text-accent">100%</p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-text/60">Código Testeable</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="frontend-architecture" className="bg-surface/60 py-24">
                <Container>
                    <div className="flex flex-col items-center gap-16 lg:flex-row">
                        <div className="lg:w-1/2">
                            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-amber-300">
                                [04] METODOLOGÍA
                            </p>
                            <h2 className="mb-8 text-4xl font-bold tracking-tighter text-text italic">
                                Arquitectura escalable por defecto.
                            </h2>
                            <p className="mb-10 max-w-lg leading-relaxed text-text/70">
                                Cada línea de código es una decisión arquitectónica. Implemento estructuras que permiten el crecimiento orgánico de la aplicación sin comprometer la velocidad de entrega ni la calidad.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 rounded-md border-l-2 border-accent bg-surface p-4">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                                    <span className="text-sm font-medium text-text">Patrones de micro-frontends para equipos distribuidos.</span>
                                </div>
                                <div className="flex items-start gap-4 rounded-md border-l-2 border-accent bg-surface p-4">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                                    <span className="text-sm font-medium text-text">Sistemas de diseño basados en componentes atómicos.</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative lg:w-1/2">
                            <div className="scale-105 rounded-xl border border-border/30 bg-surface/70 p-8 shadow-2xl">
                                <div className="mb-6 flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                                    <div className="h-3 w-3 rounded-full bg-accent" />
                                    <span className="ml-4 font-mono text-[9px] uppercase text-text/50">project_structure.sh</span>
                                </div>
                                <div className="space-y-3 font-mono text-xs text-text/60">
                                    <p className="text-accent">src/</p>
                                    <p className="pl-4">├── <span className="text-amber-300">@core/</span> <span className="text-[10px] text-text/40">{"// singleton services, guards, interceptors"}</span></p>
                                    <p className="pl-4">├── <span className="text-amber-300">@shared/</span> <span className="text-[10px] text-text/40">{"// pure components, pipes, directives"}</span></p>
                                    <p className="pl-4">└── <span className="text-amber-300">features/</span></p>
                                    <p className="pl-8">├── dashboard/</p>
                                    <p className="pl-8">├── auth/</p>
                                    <p className="pl-8">└── <span className="text-accent">admin/</span></p>
                                    <p className="pl-12">├── data-access/</p>
                                    <p className="pl-12">├── ui/</p>
                                    <p className="pl-12">└── shell/</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-2xl bg-accent p-12 text-center md:flex-row md:p-20 md:text-left">
                        <div className="relative z-10">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tighter text-black md:text-5xl">
                                ¿Listo para escalar <br className="hidden md:block" /> tu aplicación?
                            </h2>
                            <p className="font-medium text-black/70">
                                Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos técnicos.
                            </p>
                        </div>
                        <div className="relative z-10">
                            <button className="rounded-md bg-black px-10 py-5 text-lg font-bold text-white transition-colors active:scale-[0.98]">
                                Empieza hoy mismo
                            </button>
                        </div>
                        <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-[100px]" />
                    </div>
                </Container>
            </section>
        </main>
    );
}



















