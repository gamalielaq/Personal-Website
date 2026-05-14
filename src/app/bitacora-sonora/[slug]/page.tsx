import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    bitacoraSongs,
    getAllSongSlugs,
    getSongBySlug,
} from "@/content/bitacora-sonora";
import Container from "@/shared/components/layout/Container";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import { Button } from "@/shared/components/ui/Button";

type SongDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getAllSongSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SongDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const song = getSongBySlug(slug);

    if (!song) {
        return {
            title: "Pieza no encontrada | Bitacora Sonora",
        };
    }

    return {
        title: `${song.title} | Bitacora Sonora`,
        description: song.description,
    };
}

function formatSongDate(date: string) {
    const parsed = new Date(`${date}T00:00:00`);

    return new Intl.DateTimeFormat("es-PE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(parsed);
}

export default async function SongDetailPage({ params }: SongDetailPageProps) {
    const { slug } = await params;
    const song = getSongBySlug(slug);

    if (!song) {
        notFound();
    }

    const relatedSongs = bitacoraSongs.filter((item) => item.slug !== song.slug).slice(0, 2);

    return (
        <main>
            <Container>
                <section className="py-12 sm:py-16 lg:py-20">
                    <ScrollReveal>
                        <article className="rounded-[2rem] border border-border/60 bg-[linear-gradient(165deg,rgba(13,13,13,0.95),rgba(13,25,17,0.9))] p-6 sm:p-10 lg:p-12">
                            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-accent">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                Pieza del Archivo
                            </p>
                            <h1 className="mt-4 max-w-4xl text-[2.2rem] font-semibold tracking-[-0.05em] text-text sm:text-5xl lg:text-6xl lg:leading-[1.03]">
                                {song.title}
                            </h1>
                            <p className="mt-3 text-sm text-text/58 sm:text-base">{song.subtitle}</p>

                            <div className="mt-7 grid gap-5 lg:grid-cols-[0.7fr_1fr]">
                                <div className="rounded-2xl border border-accent/30 bg-[linear-gradient(145deg,rgba(22,163,74,0.26),rgba(16,16,16,0.35))] p-4">
                                    <div className="rounded-xl border border-accent/35 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),rgba(22,163,74,0.42),rgba(12,12,12,0.85))] p-4">
                                        <div className="h-28 rounded-lg border border-border/35 bg-[radial-gradient(circle,rgba(75,226,119,0.2)_2px,transparent_3px)] [background-size:26px_26px]" />
                                    </div>
                                    <div className="mt-4 h-1.5 w-full rounded-full bg-border/35">
                                        <div className="h-full w-2/5 rounded-full bg-accent" />
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/55 bg-accent/16 text-accent" aria-label="Reproducir demo">
                                            ▶
                                        </button>
                                        <p className="text-xs uppercase tracking-[0.18em] text-text/58">Reproductor visual</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="grid gap-3 text-sm sm:max-w-xl sm:grid-cols-2">
                                        <div className="rounded-2xl border border-border/50 bg-background/18 px-4 py-3.5">
                                            <p className="text-text/45">Clima</p>
                                            <p className="mt-1 text-base font-medium text-text/86">{song.mood}</p>
                                        </div>
                                        <div className="rounded-2xl border border-border/50 bg-background/18 px-4 py-3.5">
                                            <p className="text-text/45">Fecha</p>
                                            <p className="mt-1 text-base font-medium text-text/86">{formatSongDate(song.createdAt)}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
                                        {song.audioUrl ? (
                                            <a href={song.audioUrl} target="_blank" rel="noreferrer" className="rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-text/90 transition-colors hover:bg-accent/18">
                                                Escuchar audio
                                            </a>
                                        ) : null}
                                        {song.videoUrl ? (
                                            <a href={song.videoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-text/90 transition-colors hover:bg-accent/18">
                                                Ver video
                                            </a>
                                        ) : null}
                                        {song.tiktokUrl ? (
                                            <a href={song.tiktokUrl} target="_blank" rel="noreferrer" className="rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-text/90 transition-colors hover:bg-accent/18">
                                                Ver en TikTok
                                            </a>
                                        ) : null}
                                    </div>

                                    <p className="mt-6 max-w-3xl text-base leading-8 text-text/72 sm:text-lg">
                                        {song.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </ScrollReveal>
                </section>

                <section className="pb-12 sm:pb-16">
                    <ScrollReveal>
                        <article className="rounded-[1.6rem] border border-border/55 bg-[#141414]/82 p-6 sm:p-8">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-text/50">Historia</p>
                            <p className="mt-4 text-base leading-8 text-text/74 sm:text-lg">{song.story}</p>

                            <blockquote className="mt-7 border-l border-accent/45 pl-4 text-lg leading-8 text-text/84 sm:text-xl">
                                "{song.lyricsExcerpt}"
                            </blockquote>
                        </article>
                    </ScrollReveal>
                </section>

                {song.fullLyrics?.length ? (
                    <section className="pb-12 sm:pb-16">
                        <ScrollReveal>
                            <article className="rounded-[1.6rem] border border-accent/20 bg-[linear-gradient(170deg,rgba(22,163,74,0.08),rgba(17,17,17,0.88))] p-6 sm:p-8 lg:p-10">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-text/52">Letra completa</p>
                                <div className="mt-5 space-y-2.5 text-base leading-8 text-text/82 sm:text-lg">
                                    {song.fullLyrics.map((line, index) => (
                                        <p key={`${song.id}-line-${index}`}>{line}</p>
                                    ))}
                                </div>
                            </article>
                        </ScrollReveal>
                    </section>
                ) : null}

                <section className="pb-20 sm:pb-24">
                    <ScrollReveal>
                        <div className="rounded-[1.6rem] border border-border/55 bg-surface/65 p-6 sm:p-8">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="max-w-2xl text-sm leading-7 text-text/66">
                                    Cada pieza forma parte de un archivo en movimiento. Puedes volver al indice o seguir explorando otras canciones.
                                </p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full border-accent/30 text-text hover:bg-accent/14 hover:text-text sm:w-auto"
                                >
                                    <Link href="/bitacora-sonora">Volver a Bitacora Sonora</Link>
                                </Button>
                            </div>

                            {relatedSongs.length ? (
                                <div className="mt-6 grid gap-3 md:grid-cols-2">
                                    {relatedSongs.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/bitacora-sonora/${item.slug}`}
                                            className="rounded-xl border border-border/50 bg-background/16 px-4 py-3 text-sm text-text/78 transition-colors hover:border-accent/30 hover:bg-background/28"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </ScrollReveal>
                </section>
            </Container>
        </main>
    );
}
