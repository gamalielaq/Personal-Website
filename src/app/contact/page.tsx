import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
    return (
        <section className="py-20 sm:py-24 lg:py-28">
            <Container>
                <ScrollReveal>
                    <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-border bg-surface p-8 text-center shadow-2xl shadow-black/30 sm:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Contacto</p>
                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
                            Contacto
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-text/72 sm:text-lg">
                            Si necesitas desarrollar una aplicación web o colaborar en un proyecto tecnológico, puedes contactarme.
                        </p>

                        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                            <Button
                                href="mailto:hello@example.com"
                                variant="primary"
                                className="w-full sm:w-auto"
                            >
                                Email
                            </Button>
                            <Button
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                variant="primary"
                                className="w-full sm:w-auto"
                            >
                                LinkedIn
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
