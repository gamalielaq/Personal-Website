import Link from "next/link";
import Image from "next/image";
import {
    AtSign,
    Cloud,
    Code2,
    Database,
    Layers3,
    Mail,
    Network,
    Send,
    ShieldCheck,
    Zap,
} from "lucide-react";
import Container from "@/shared/components/layout/Container";

const values = [
    {
        title: "Honestidad Tecnica",
        description: "Transparencia total sobre limitaciones y viabilidad tecnologica.",
        icon: ShieldCheck,
    },
    {
        title: "Rapidez de Ejecucion",
        description: "Ciclos de entrega cortos sin comprometer la integridad estructural.",
        icon: Zap,
    },
    {
        title: "Calidad de Codigo",
        description: "Software limpio, documentado y listo para ser mantenido por humanos.",
        icon: Code2,
    },
];

const stackGroups = [
    {
        title: "01 / Frontend Core",
        icon: Layers3,
        items: [
            ["Angular", "Expert"],
            ["TypeScript", "Native"],
            ["RxJS / State Mgmt", "Senior"],
        ],
    },
    {
        title: "02 / Fullstack Systems",
        icon: Database,
        items: [
            ["NestJS", "Preferred"],
            ["NextJS / React", "Senior"],
            ["Laravel", "3 Years"],
        ],
    },
    {
        title: "03 / Frontend Architecture",
        icon: Cloud,
        items: [
            ["Design Systems", "Pro"],
            ["Arquitectura Modular", "Pro"],
            ["Performance Frontend", "Pro"],
        ],
    },
];

export default function AboutIntroSection() {
    return (
        <section className="py-20 lg:py-28">
            <Container className="space-y-24">
                <header className="max-w-4xl">
                    <p className="mb-4 text-xs tracking-[0.24em] text-accent">Metricas & Identidad</p>
                    <h1 className="text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl">Sobre Mi</h1>
                </header>

                <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                    <div className="space-y-8 lg:col-span-5">
                        <div className="group relative">
                            <div className="absolute inset-0 -rotate-2 rounded-2xl bg-accent/10 transition-transform duration-500 group-hover:rotate-0" />
                            <Image
                                src="/foto_perfil.jpg"
                                alt="Retrato profesional de Gamaliel Abanto"
                                width={700}
                                height={900}
                                priority
                                className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1d1d1d]/88 p-6">
                                <p className="text-2xl font-bold text-accent/80">7+</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-text/60">Anos de Exp.</p>
                            </div>
                            <div className="bg-[#1d1d1d]/88 p-6">
                                <p className="text-2xl font-bold text-accent/80">40+</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-text/60">Sistemas Core</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 lg:col-span-7 lg:pt-10">
                        <div>
                            <p className="text-[0.92rem] font-semibold uppercase tracking-[0.34em] text-text">Gamaliel Abanto</p>
                            <p className="text-xs font-semibold tracking-[0.01em] text-accent/90">Front End Architect - Angular Expert</p>
                            <p className="mt-4 mb-3 text-[2.5rem] uppercase tracking-[0.1em] text-text">MAS QUE UN DESARROLLADOR: <span className="text-[#00e5ff]">TU SOCIO TECNICO</span></p>
                            <div className="mt-3 max-w-2xl space-y-6 text-base leading-8 text-[#bac9cc]">
                                <p>
                                   Mi camino no comenzó solo escribiendo código, sino entendiendo cómo estructurar aplicaciones complejas de forma clara y mantenible. Hoy aplico ese enfoque en el desarrollo con Angular, construyendo interfaces bajo principios de arquitectura modular y escalable.
                                </p>
                                <p>
                                    Mi trabajo no se limita a implementar funcionalidades: analizo, estructuro y optimizo soluciones para evitar deuda técnica y asegurar que el sistema pueda evolucionar sin problemas. Priorizo claridad, consistencia y decisiones técnicas bien fundamentadas desde el inicio
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
                            {values.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <article key={value.title} className="space-y-3 rounded-md bg-[#1d1d1d] p-5 ring-1 ring-border/20">
                                        <Icon className="h-5 w-5 text-[#00e5ff]" />
                                        <h3 className="font-semibold text-text">{value.title}</h3>
                                        <p className="text-xs leading-6 text-text/65">{value.description}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-md bg-[#1a1a1a]/92 p-10 lg:p-16">
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1a1a1a]/10 to-transparent" />
                    <div className="relative z-10 max-w-4xl space-y-10">
                        <div>
                            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-accent/90">Filosofia De Desarrollo</p>
                            <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">Lo que creo sobre el desarrollo de software</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                            <article className="space-y-3">
                                <p className="text-xl font-semibold text-[#00e5ff]">01</p>
                                <h3 className="text-2xl font-semibold text-text">La simplicidad es la maxima sofisticacion.</h3>
                                <p className="text-[#bac9cc]">Un sistema complejo que funciona es el resultado de un sistema simple que evoluciono. Mi codigo evita la sobreingenieria.</p>
                            </article>
                            <article className="space-y-3">
                                <p className="text-xl font-semibold text-[#00e5ff]">02</p>
                                <h3 className="text-2xl font-semibold text-text">El software es un activo de negocio.</h3>
                                <p className="text-[#bac9cc]">Si el codigo no ayuda a vender mas, ahorrar tiempo o reducir riesgos, es solo ruido. Programo con ROI en mente.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="space-y-12">
                    <div className="space-y-3 text-center">
                        <p className="text-xs uppercase tracking-[0.24em] text-accent">Blueprints & Tools</p>
                        <h2 className="text-3xl font-semibold uppercase tracking-[0.14em] text-text">Stack Tecnologico</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                        {stackGroups.map((group) => {
                            const Icon = group.icon;
                            return (
                                <article key={group.title} className="space-y-8 bg-surface/65 p-10 transition-colors hover:bg-surface/85">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text">{group.title}</h3>
                                        <Icon className="h-5 w-5 text-[#00e5ff]" />
                                    </div>

                                    <div className="space-y-4">
                                        {group.items.map(([label, level]) => (
                                            <div key={label} className="flex items-center justify-between border-b border-border/20 pb-2">
                                                <span className="text-text/72">{label}</span>
                                                <span className="text-[10px] uppercase tracking-[0.16em] text-accent">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-xs uppercase tracking-widest text-accent">¿Listo para escalar?</span>
                            <h2 className="text-4xl font-black leading-tight text-text">HABLEMOS DE TU PROXIMA SOLUCION</h2>
                            <p className="max-w-md text-lg text-[#bac9cc]">Transformo requerimientos de negocio en activos tecnologicos de alto rendimiento.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="group flex items-start gap-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border/20 bg-surface/70 transition-colors group-hover:border-accent">
                                    <AtSign className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-text/60">Email</div>
                                    <div className="text-lg font-medium text-text">gamaliel.aq96@gmail.com</div>
                                </div>
                            </div>

                            <div className="group flex items-start gap-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border/20 bg-surface/70 transition-colors group-hover:border-accent">
                                    <Network className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-text/60">Redes Profesionales</div>
                                    <div className="mt-2 flex gap-4">
                                        <Link href="https://github.com/gamalielaq" target="_blank" rel="noreferrer" className="text-xs tracking-widest text-[#bac9cc] transition-colors hover:text-accent">GITHUB</Link>
                                        <Link href="https://www.linkedin.com/in/gamalielaq" target="_blank" rel="noreferrer" className="text-xs tracking-widest text-[#bac9cc] transition-colors hover:text-accent">LINKEDIN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-surface/70 p-10">
                        <form className="space-y-6">
                            <div className="space-y-1">
                                <label className="ml-1 text-[10px] uppercase tracking-widest text-text/60">Nombre Completo</label>
                                <input
                                    className="w-full rounded border border-border/20 bg-surface px-4 py-3 text-text outline-none transition-all placeholder:text-text/35 focus:border-accent focus:ring-1 focus:ring-accent/20"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="ml-1 text-[10px] uppercase tracking-widest text-text/60">Email Corporativo</label>
                                <input
                                    className="w-full rounded border border-border/20 bg-surface px-4 py-3 text-text outline-none transition-all placeholder:text-text/35 focus:border-accent focus:ring-1 focus:ring-accent/20"
                                    placeholder="john@company.com"
                                    type="email"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="ml-1 text-[10px] uppercase tracking-widest text-text/60">Tipo de Proyecto</label>
                                <select className="w-full appearance-none rounded border border-border/20 bg-surface px-4 py-3 text-text outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/20">
                                    <option>Desarrollo Front end Angular</option>
                                    <option>Arquitectura Frontend </option>
                                    <option>Desarrollo Fullstack</option>
                                    <option>Desarrollo de aplicaciones web</option>
                                    <option>Backend NestJS &/o Laravel</option>
                                    <option>Desarrollo de páginas web</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="ml-1 text-[10px] uppercase tracking-widest text-text/60">Tu Mensaje</label>
                                <textarea
                                    className="w-full resize-none rounded border border-border/20 bg-surface px-4 py-3 text-text outline-none transition-all placeholder:text-text/35 focus:border-accent focus:ring-1 focus:ring-accent/20"
                                    placeholder="Describe brevemente el desafio tecnico..."
                                    rows={4}
                                />
                            </div>

                            <button className="inline-flex rounded-md w-full items-center justify-center gap-2 bg-gradient-to-r bg-accent py-4 font-bold uppercase tracking-wider text-text transition hover:brightness-110">
                                <Send className="h-4 w-4" />
                                Iniciar Conversacion
                            </button>
                        </form>
                    </div>
                </section>

                <section className="flex flex-col items-center space-y-10 py-8 text-center">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">Listo para elevar tu arquitectura?</h2>
                        <p className="text-base leading-8 text-text/72">Estoy disponible para colaboraciones estrategicas y desarrollo de productos desde cero.</p>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <Link
                            href="/#contacto"
                            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:brightness-110"
                        >
                            <Mail className="h-4 w-4" />
                            Hablemos de tu proyecto
                        </Link>
                        <Link
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-md border border-border/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-text transition hover:bg-surface/80"
                        >
                            Seguir mi camino en LinkedIn
                        </Link>
                    </div>
                </section>
            </Container>
        </section>
    );
}
