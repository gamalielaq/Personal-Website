export type BitacoraSong = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    mood: string;
    lyricsExcerpt: string;
    story: string;
    createdAt: string;
    fullLyrics?: string[];
    audioUrl?: string;
    videoUrl?: string;
    tiktokUrl?: string;
};

export type BitacoraCollection = {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    trackSlugs: string[];
};

export const bitacoraSongs: BitacoraSong[] = [
    {
        id: "bs-001",
        slug: "luz-entre-ventanas",
        title: "Me costó aceptarlo",
        subtitle: "Piano tenue, aire nocturno y pulso ligero",
        description:
            "La escribi para los dias veloces. Es una cancion que baja el volumen del mundo y deja espacio para volver a escuchar.",
        mood: "Sereno",
        lyricsExcerpt:
            "Abro la manana sin prisa / la ciudad respira conmigo",
        story:
            "Nacio al final de una jornada larga. Quise guardar ese minuto en que el cuerpo recuerda que no todo exige respuesta inmediata.",
        createdAt: "2026-04-18",
        fullLyrics: [
            "Abro la manana sin prisa,",
            "la ciudad respira conmigo.",
            "En la ventana cae una luz pequena,",
            "como una nota que no quiere imponerse.",
            "Camino lento, vuelvo a mi ritmo,",
            "y todo encuentra su lugar.",
        ],
        audioUrl: "/Me%20cost%C3%B3%20aceptarlo.mp3",
    },
    {
        id: "bs-002",
        slug: "latido-de-cables",
        title: "Nadie lo Nota pero sigo aquí",
        subtitle: "Synth calido, bajo profundo y voz cercana",
        description:
            "Una conversacion entre maquinas y piel. La tecnologia aparece como instrumento, no como protagonista.",
        mood: "Contemplativo",
        lyricsExcerpt:
            "Hay pulso en cada pixel / si escucho con paciencia",
        story:
            "Surgio despues de una sesion de prototipado. Me interesaba traducir esa friccion tecnica en una textura mas humana.",
        createdAt: "2026-03-06",
        fullLyrics: [
            "Hay pulso en cada pixel,",
            "si escucho con paciencia.",
            "No todo cable es distancia,",
            "a veces tambien es puente.",
            "Pongo la mano en el ruido",
            "y aparece una voz cercana.",
        ],
        audioUrl: "/Nadie%20lo%20Nota%20pero%20sigo%20aqu%C3%AD%20(Edit).mp3",
        videoUrl: "https://www.youtube.com/watch?v=example-latido",
    },
    {
        id: "bs-003",
        slug: "mapa-minimo",
        title: "Mapa Minimo",
        subtitle: "Guitarra limpia, texturas ambientales y silencio",
        description:
            "Una cancion pequena sobre decisiones pequenas. Avanzar sin ruido, sostener el proceso y cuidar la direccion.",
        mood: "Intimo",
        lyricsExcerpt:
            "No necesito todo el camino / solo el siguiente paso vivo",
        story:
            "Aparecio en madrugada, cuando todo estaba en silencio. Buscaba una melodia simple para trabajar sin dramatizar.",
        createdAt: "2026-02-11",
        tiktokUrl: "https://www.tiktok.com/@example/video/1234567890123456789",
    },
    {
        id: "bs-004",
        slug: "orilla-de-datos",
        title: "Orilla de Datos",
        subtitle: "Beat lento, pads analogos y voz en primer plano",
        description:
            "Un cruce entre metodo y afecto. Cada capa intenta mostrar que la precision tambien puede cuidar.",
        mood: "Reflexivo",
        lyricsExcerpt:
            "Ordeno el ruido en notas / y aparece una casa",
        story:
            "Comenzo revisando notas tecnicas antiguas. Entre lineas encontre una historia personal que pedia voz.",
        createdAt: "2026-01-27",
        fullLyrics: [
            "Ordeno el ruido en notas,",
            "y aparece una casa.",
            "Metodo sobre la mesa,",
            "afecto en la misma pagina.",
            "Lo preciso no me enfria,",
            "solo me ayuda a cuidar.",
        ],
    },
];

export const bitacoraCollections: BitacoraCollection[] = [
    {
        slug: "pruebas-audio",
        title: "Pruebas Audio",
        subtitle: "Demo local",
        description: "Colección temporal para probar reproducción de archivos locales.",
        coverImage: "https://lh3.googleusercontent.com/aida/ADBb0uh_Ahv-NxaxYZifzCVj6o-LG9N9d27vte1UNdpvZN0K6tPFHU_m4kj_vyHYKI9lLszpuueZnnqJmAL32hoI9qGDJQ3YgGqel49_6p0777A6Z0iAbTx7u0Yy4MFdYRPQUKR5QG8_4ZrpQwYNYKh3pVkmlFEQ1CALLv0KZY_6fvLEJP8fcB2kSB0wYiO5RbVWB5_9qP1HK_CVb1iTFED9tDSD9-f4Yn1l4cOPDF-FJJF0EOrFYN77DKYkh-k",
        trackSlugs: ["luz-entre-ventanas", "latido-de-cables"],
    },
    {
        slug: "presencia",
        title: "Presencia",
        subtitle: "Respiracion y foco",
        description: "Canciones para volver al cuerpo, respirar y mirar con mas calma.",
        coverImage: "https://lh3.googleusercontent.com/aida/ADBb0uh_Ahv-NxaxYZifzCVj6o-LG9N9d27vte1UNdpvZN0K6tPFHU_m4kj_vyHYKI9lLszpuueZnnqJmAL32hoI9qGDJQ3YgGqel49_6p0777A6Z0iAbTx7u0Yy4MFdYRPQUKR5QG8_4ZrpQwYNYKh3pVkmlFEQ1CALLv0KZY_6fvLEJP8fcB2kSB0wYiO5RbVWB5_9qP1HK_CVb1iTFED9tDSD9-f4Yn1l4cOPDF-FJJF0EOrFYN77DKYkh-k",
        trackSlugs: ["luz-entre-ventanas", "mapa-minimo", "orilla-de-datos", "latido-de-cables"],
    },
    {
        slug: "movimiento",
        title: "Movimiento",
        subtitle: "Pulso urbano",
        description: "Piezas con energia y textura para sostener avance creativo.",
        coverImage: "https://lh3.googleusercontent.com/aida/ADBb0uh_Ahv-NxaxYZifzCVj6o-LG9N9d27vte1UNdpvZN0K6tPFHU_m4kj_vyHYKI9lLszpuueZnnqJmAL32hoI9qGDJQ3YgGqel49_6p0777A6Z0iAbTx7u0Yy4MFdYRPQUKR5QG8_4ZrpQwYNYKh3pVkmlFEQ1CALLv0KZY_6fvLEJP8fcB2kSB0wYiO5RbVWB5_9qP1HK_CVb1iTFED9tDSD9-f4Yn1l4cOPDF-FJJF0EOrFYN77DKYkh-k",
        trackSlugs: ["latido-de-cables", "orilla-de-datos"],
    },
    {
        slug: "calma",
        title: "Calma",
        subtitle: "Capas suaves",
        description: "Coleccion para bajar revoluciones y escuchar con mas detalle.",
        coverImage: "https://lh3.googleusercontent.com/aida/ADBb0uh_Ahv-NxaxYZifzCVj6o-LG9N9d27vte1UNdpvZN0K6tPFHU_m4kj_vyHYKI9lLszpuueZnnqJmAL32hoI9qGDJQ3YgGqel49_6p0777A6Z0iAbTx7u0Yy4MFdYRPQUKR5QG8_4ZrpQwYNYKh3pVkmlFEQ1CALLv0KZY_6fvLEJP8fcB2kSB0wYiO5RbVWB5_9qP1HK_CVb1iTFED9tDSD9-f4Yn1l4cOPDF-FJJF0EOrFYN77DKYkh-k",
        trackSlugs: ["luz-entre-ventanas", "mapa-minimo"],
    },
];

export const bitacoraCreativeStatement =
    "Bitacora Sonora es un cuaderno de trabajo hecho de canciones. Aqui documento procesos, dudas y hallazgos con una idea simple: usar la tecnologia para ampliar la escucha, no para reemplazarla. Cada pieza es un registro del presente, con calma y criterio.";

export function getSongBySlug(slug: string) {
    return bitacoraSongs.find((song) => song.slug === slug);
}

export function getAllSongSlugs() {
    return bitacoraSongs.map((song) => song.slug);
}

export function getCollectionBySlug(slug: string) {
    return bitacoraCollections.find((collection) => collection.slug === slug);
}

export function getCollectionTracks(collectionSlug: string) {
    const collection = getCollectionBySlug(collectionSlug);
    if (!collection) return [];

    return collection.trackSlugs
        .map((trackSlug) => getSongBySlug(trackSlug))
        .filter((song): song is BitacoraSong => Boolean(song));
}
