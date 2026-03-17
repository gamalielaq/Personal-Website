import PageShell from "@/components/layout/PageShell";

const cardClassName = "rounded-[1.5rem] border border-border bg-background/50 p-6";
const titleClassName = "text-xl font-semibold text-text";
const bodyClassName = "mt-4 text-sm leading-7 text-text/72";

export default function IdeasPage() {
    return (
        <PageShell
            eyebrow="Ideas"
            title="Ideas para vivir mejor, pensar mejor y relacionarnos mejor."
            description="Un espacio para escribir sobre disciplina, relaciones humanas, crecimiento personal y las pequenas decisiones que cambian una vida."
        >
            <article className={cardClassName}>
                <h2 className={titleClassName}>Disciplina</h2>
                <p className={bodyClassName}>
                    Reflexiones sobre consistencia, energia y procesos que hacen posible el progreso real.
                </p>
            </article>
            <article className={cardClassName}>
                <h2 className={titleClassName}>Relaciones</h2>
                <p className={bodyClassName}>
                    Notas sobre comunicacion, vinculos sanos y la forma en que nos construimos junto a otros.
                </p>
            </article>
        </PageShell>
    );
}
