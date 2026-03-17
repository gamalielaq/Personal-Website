import PageShell from "@/components/layout/PageShell";

const cardClassName = "rounded-[1.5rem] border border-border bg-background/50 p-6";
const titleClassName = "text-xl font-semibold text-text";
const bodyClassName = "mt-4 text-sm leading-7 text-text/72";

export default function BooksPage() {
    return (
        <PageShell
            eyebrow="Books"
            title="Libros que expanden criterio, sensibilidad y direccion."
            description="Aqui puedes reunir recomendaciones, notas de lectura y aprendizajes que impactan tu forma de pensar, crear y vivir."
        >
            <article className={cardClassName}>
                <h2 className={titleClassName}>Lecturas clave</h2>
                <p className={bodyClassName}>
                    Un lugar para destacar libros sobre tecnologia, psicologia, filosofia practica y crecimiento personal.
                </p>
            </article>
            <article className={cardClassName}>
                <h2 className={titleClassName}>Notas y citas</h2>
                <p className={bodyClassName}>
                    Resumenes breves e ideas accionables para que la lectura se convierta en transformacion real.
                </p>
            </article>
        </PageShell>
    );
}
