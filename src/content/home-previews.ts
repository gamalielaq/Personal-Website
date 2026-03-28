export type HomePreviewIconKey = "cpu" | "lightbulb" | "book-open";

type HomePreviewItem = {
    href: string;
    title: string;
    description: string;
    iconKey: HomePreviewIconKey;
};

export const homePreviews: HomePreviewItem[] = [
    {
        href: "/engineering",
        title: "Engineering",
        description: "Proyectos, sistemas y decisiones tecnicas construidas con enfoque en claridad y calidad.",
        iconKey: "cpu",
    },
    {
        href: "/ideas",
        title: "Ideas",
        description: "Reflexiones sobre disciplina, relaciones humanas y aprendizaje continuo aplicado a la vida real.",
        iconKey: "lightbulb",
    },
    {
        href: "/books",
        title: "Books",
        description: "Libros, notas y aprendizajes que alimentan mi forma de pensar y construir mejores productos.",
        iconKey: "book-open",
    },
];
