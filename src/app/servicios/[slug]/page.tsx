import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TechnologyChip from "@/components/ui/TechnologyChip";

type ServicePageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <section className="py-20 sm:py-24 lg:py-28">
            <Container>
                <ScrollReveal>
                    <div className="mx-auto max-w-4xl">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-accent/78">
                            Servicios
                        </p>
                        <h1 className="mt-3 text-[2.1rem] font-semibold tracking-[-0.05em] text-text sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.02]">
                            {service.title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-text/68 sm:text-lg">
                            {service.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {service.technologies.map((technology) => (
                                <TechnologyChip key={technology} technology={technology} />
                            ))}
                        </div>

                        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="rounded-[1.75rem] border border-border/80 bg-surface/50 p-7 sm:p-8">
                                <h2 className="text-xl font-semibold tracking-[-0.03em] text-text sm:text-2xl">
                                    Descripción del servicio
                                </h2>
                                <p className="mt-5 text-base leading-8 text-text/68 sm:text-lg">
                                    {service.description} El objetivo es construir una base técnica clara, sostenible y preparada para crecer con menos fricción operativa.
                                </p>
                            </div>

                            <div className="rounded-[1.75rem] border border-border/80 bg-surface/50 p-7 sm:p-8">
                                <h2 className="text-xl font-semibold tracking-[-0.03em] text-text sm:text-2xl">
                                    Tipos de soluciones ofrecidas
                                </h2>
                                <ul className="mt-5 grid gap-3">
                                    {service.solutions.map((solution) => (
                                        <li
                                            key={solution}
                                            className="rounded-2xl border border-border/70 bg-background/45 px-4 py-4 text-sm leading-7 text-text/76 sm:text-base"
                                        >
                                            {solution}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
