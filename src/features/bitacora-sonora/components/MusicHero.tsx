import Image from "next/image";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";

type MusicHeroProps = {
    totalTracks: number;
};

export default function MusicHero({ totalTracks }: MusicHeroProps) {
    return (
        <section className="py-10 sm:py-12 lg:py-14">
            <ScrollReveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-[linear-gradient(160deg,rgba(12,12,12,0.95),rgba(13,22,16,0.88)_46%,rgba(12,12,12,0.95))] p-6 sm:p-8 lg:p-10">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(75,226,119,0.16),transparent_55%)]" />

                    <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <h1 className="text-[2rem] font-semibold tracking-[-0.04em] text-text sm:text-5xl lg:text-6xl">Bitacora Sonora</h1>
                            <p className="mt-4 max-w-xl text-base leading-7 text-text/70 sm:text-lg">
                                Canciones creadas con IA a partir de pensamientos, procesos y momentos reales.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition active:scale-95">
                                    <span>▶</span>
                                    Reproducir archivo
                                </button>
                                <div className="rounded-xl border border-accent/25 bg-accent/8 px-4 py-2 text-sm">
                                    <span className="font-mono text-accent">{String(totalTracks).padStart(2, "0")}</span>
                                    <span className="ml-2 text-text/60">Piezas en archivo</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <div className="relative h-64 w-64 sm:h-72 sm:w-72">
                                <Image
                                    src="/foto_perfil.jpg"
                                    alt="Curador de Bitacora Sonora"
                                    fill
                                    className="rounded-[2rem] object-cover shadow-2xl ring-1 ring-border/30"
                                />
                                <div className="absolute -bottom-3 -left-3 rounded-xl border border-border/40 bg-black/50 px-3 py-2 backdrop-blur">
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-accent">Curator Profile</p>
                                    <p className="text-sm font-semibold text-text">@echo_taiga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
