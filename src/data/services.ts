export type ServiceTechnology = "Angular" | "Next.js" | "NestJS" | "Laravel";

export type ServiceItem = {
    slug: string;
    title: string;
    description: string;
    technologies: ServiceTechnology[];
    solutions: string[];
    iconKey: "applications" | "architecture" | "backend" | "websites";
};

export const services: ServiceItem[] = [
    {
        slug: "aplicaciones-web",
        title: "Desarrollo de aplicaciones web",
        description: "Diseño y desarrollo aplicaciones web modernas, rápidas y escalables.",
        technologies: ["Angular", "Next.js"],
        solutions: [
            "Aplicaciones internas para equipos y operaciones",
            "Plataformas web para productos digitales",
            "Interfaces enfocadas en rendimiento y mantenibilidad",
        ],
        iconKey: "applications",
    },
    {
        slug: "arquitectura-frontend",
        title: "Arquitectura Frontend",
        description: "Diseño arquitecturas frontend que permiten escalar aplicaciones sin caos técnico.",
        technologies: ["Angular"],
        solutions: [
            "Estructuras modulares para proyectos Angular",
            "Refactorización de frontend legacy",
            "Organización de componentes, servicios y estado",
        ],
        iconKey: "architecture",
    },
    {
        slug: "backend",
        title: "Backend y APIs",
        description: "Construcción de APIs y microservicios para soportar aplicaciones modernas.",
        technologies: ["NestJS", "Laravel"],
        solutions: [
            "APIs REST para productos y plataformas web",
            "Servicios de autenticación y gestión de datos",
            "Backends preparados para integraciones y crecimiento",
        ],
        iconKey: "backend",
    },
    {
        slug: "paginas-web",
        title: "Desarrollo de páginas web",
        description: "Creación de páginas web profesionales optimizadas para presencia digital.",
        technologies: ["Next.js"],
        solutions: [
            "Sitios corporativos y páginas de servicios",
            "Landing pages para productos o campañas",
            "Webs rápidas enfocadas en SEO y conversión",
        ],
        iconKey: "websites",
    },
];
