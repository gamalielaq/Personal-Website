import Link from "next/link";
import type { BitacoraSong } from "@/content/bitacora-sonora";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";

type MusicPlayerProps = {
    track: BitacoraSong;
};

export default function MusicPlayer({ track }: MusicPlayerProps) {
    return (
        <section className="pb-10 sm:pb-12">
            <ScrollReveal>
                <div className="grid gap-6 md:grid-cols-12">
                    <article className="group relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/5 p-6 md:col-span-8 md:p-8">
                        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                            <div className="relative h-52 w-full rounded-2xl border border-border/35 bg-[radial-gradient(circle_at_25%_25%,rgba(75,226,119,0.24),rgba(75,226,119,0.2),rgba(12,12,12,0.85))]" />
                            <div>
                                <p className="text-xs uppercase tracking-[0.26em] text-accent">Featured Piece</p>
                                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">{track.title}</h3>
                                <p className="mt-2 text-sm text-text/65">{track.description}</p>

                                <div className="mt-5">
                                    <div className="mb-1 flex justify-between text-xs text-text/50">
                                        <span>01:45</span>
                                        <span>04:12</span>
                                    </div>
                                    <div className="h-1 w-full rounded-full bg-border/35">
                                        <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-accent via-cyan-300/70 to-transparent" />
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-border/45 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-text/65">{track.mood}</span>
                                    <span className="rounded-full border border-border/45 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-text/65">Analog Synth</span>
                                </div>

                                <div className="mt-5 flex flex-wrap items-center gap-3">
                                    {track.audioUrl ? (
                                        <audio controls preload="none" className="music-audio max-w-md w-full">
                                            <source src={track.audioUrl} />
                                        </audio>
                                    ) : (
                                        <span className="rounded-lg border border-border/45 bg-black/20 px-3 py-2 text-sm text-text/60">Audio no publicado</span>
                                    )}
                                    <Link href={`/bitacora-sonora/${track.slug}`} className="text-sm font-medium text-accent hover:text-text">
                                        Abrir pieza
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="grid gap-4 md:col-span-4">
                        <article className="rounded-3xl border border-border/45 bg-black/20 p-5">
                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">The Pulse</p>
                            <p className="mt-2 text-xl font-semibold text-text">Canales activos</p>
                            <p className="mt-1 text-sm text-text/60">48 capas de archivo sonoro en seguimiento.</p>
                        </article>
                        <article className="rounded-3xl border border-border/45 bg-black/20 p-5">
                            <p className="text-xs uppercase tracking-[0.2em] text-accent/90">New Note</p>
                            <p className="mt-2 text-sm text-text/75">"La textura de hoy suena como concreto humedo."</p>
                        </article>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
