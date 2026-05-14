import {
    bitacoraCreativeStatement,
    bitacoraCollections,
    bitacoraSongs,
} from "@/content/bitacora-sonora";
import Container from "@/shared/components/layout/Container";
import MusicHero from "@/features/bitacora-sonora/components/MusicHero";
import MusicPlayer from "@/features/bitacora-sonora/components/MusicPlayer";
import TrackList from "@/features/bitacora-sonora/components/TrackList";
import PlaylistGroupCard from "@/features/bitacora-sonora/components/PlaylistGroupCard";

export default function BitacoraSonoraPage() {
    const playerTrack = bitacoraSongs.find((song) => song.audioUrl) ?? bitacoraSongs[0];

    return (
        <main className="dark">
            <Container>
                <MusicHero totalTracks={bitacoraSongs.length} />

                <section className="pb-10 sm:pb-12">
                    <h3 className="mb-4 px-1 text-xs uppercase tracking-[0.2em] text-text/55">Collections</h3>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {bitacoraCollections.map((collection, index) => (
                            <PlaylistGroupCard
                                key={collection.slug}
                                title={collection.title}
                                subtitle={collection.subtitle}
                                tracks={bitacoraSongs.filter((song) => collection.trackSlugs.includes(song.slug))}
                                tone={index % 3 === 0 ? "accent" : index % 3 === 1 ? "secondary" : "neutral"}
                                href={`/bitacora-sonora/coleccion/${collection.slug}`}
                            />
                        ))}
                    </div>
                </section>

                <MusicPlayer track={playerTrack} />

                <TrackList tracks={bitacoraSongs} />

                <section className="pb-20 sm:pb-24">
                    <p className="max-w-3xl text-sm leading-7 text-text/62">{bitacoraCreativeStatement}</p>
                </section>
            </Container>
        </main>
    );
}
