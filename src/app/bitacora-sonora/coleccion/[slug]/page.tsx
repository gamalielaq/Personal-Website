import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import {
    bitacoraCollections,
    getCollectionBySlug,
    getCollectionTracks,
} from "@/content/bitacora-sonora";
import Container from "@/shared/components/layout/Container";
import CollectionTrackExperience from "@/features/bitacora-sonora/components/CollectionTrackExperience";

type CollectionDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return bitacoraCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: CollectionDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        return { title: "Coleccion no encontrada | Bitacora Sonora" };
    }

    return {
        title: `${collection.title} | Bitacora Sonora`,
        description: collection.description,
    };
}

export default async function CollectionDetailPage({ params }: CollectionDetailPageProps) {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);

    if (!collection) notFound();

    const tracks = getCollectionTracks(slug);
    return (
        <main className="dark relative min-h-screen pb-40 pt-6">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(74,225,118,0.08)_0%,transparent_70%)]" />

            <Container>
                <div className="glass-card rounded-2xl p-5 sm:p-7 lg:p-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                        <section className="space-y-4 lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
                            <div className="glass-card relative aspect-square w-full overflow-hidden rounded-xl">
                                <img
                                    src={collection.coverImage}
                                    alt={collection.title}
                                    className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="pt-4">
                                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent">Archivo personal</span>
                                <h1 className="mb-2 text-[3rem] font-bold tracking-[-0.04em] text-text sm:text-[3.5rem]">{collection.title}</h1>
                                <p className="max-w-md text-lg leading-relaxed text-text/70">{collection.description}</p>
                                <p className="mt-2 text-xs text-text/60">{tracks.length} canciones · 24 min total</p>
                            </div>

                            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                                <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold text-black transition hover:brightness-110 active:scale-95">
                                    <Play className="h-4 w-4 fill-current" />
                                    Reproducir coleccion
                                </button>
                                <Link href="/bitacora-sonora" className="glass-card flex flex-1 items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-text transition hover:bg-white/10 active:scale-95">
                                    <ArrowLeft className="h-4 w-4" />
                                    Volver a Bitacora
                                </Link>
                            </div>
                        </section>

                        <CollectionTrackExperience tracks={tracks} collectionTitle={collection.title} />
                    </div>
                </div>
            </Container>
        </main>
    );
}
