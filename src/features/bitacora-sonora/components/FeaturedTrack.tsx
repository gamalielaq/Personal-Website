import Link from "next/link";
import type { BitacoraSong } from "@/content/bitacora-sonora";

type FeaturedTrackProps = {
    track: BitacoraSong;
};

export default function FeaturedTrack({ track }: FeaturedTrackProps) {
    return (
        <section className="pb-10 sm:pb-12">
            <article className="rounded-[1.5rem] border border-border/55 bg-[linear-gradient(165deg,rgba(16,16,16,0.9),rgba(14,24,18,0.82))] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-text/55">Pieza seleccionada</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h3 className="text-xl font-semibold text-text sm:text-2xl">{track.title}</h3>
                        <p className="mt-1 text-sm text-text/58">{track.subtitle}</p>
                    </div>
                    <Link
                        href={`/bitacora-sonora/${track.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/12 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/24"
                    >
                        Escuchar
                    </Link>
                </div>
            </article>
        </section>
    );
}
