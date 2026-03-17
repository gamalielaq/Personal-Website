"use client";

import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClosingQuoteSection() {
    return (
        <section className="pt-16 pb-24 sm:pt-10 sm:pb-13">
            <Container>
                <ScrollReveal>
                    <p className="mx-auto max-w-4xl text-center text-2xl font-semibold tracking-[-0.03em] text-text/92 sm:text-3xl lg:text-3.5xl">
                        &ldquo;Que un error lleve 3 días no es un bug, es un problema de arquitectura. Un bug debe entenderse en 5 min&rdquo;
                    </p>
                </ScrollReveal>
            </Container>
        </section>
    );
}
