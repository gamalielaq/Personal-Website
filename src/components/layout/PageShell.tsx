import type { ReactNode } from "react";
import Container from "./Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

type PageShellProps = {
    eyebrow: string;
    title: string;
    description: string;
    children?: ReactNode;
};

export default function PageShell({
    eyebrow,
    title,
    description,
    children,
}: PageShellProps) {
    return (
        <section className="py-20 sm:py-24 lg:py-28">
            <Container>
                <ScrollReveal>
                    <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-2xl shadow-black/30 backdrop-blur sm:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
                        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-text/72 sm:text-lg">{description}</p>

                        {children ? <div className="mt-12 grid gap-6 md:grid-cols-2">{children}</div> : null}
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
