"use client";

import { useRef, useState } from "react";
import type { BitacoraSong } from "@/content/bitacora-sonora";
import SongListItemCard from "./SongListItemCard";

type TrackListProps = {
    tracks: BitacoraSong[];
};

const fakeDurations = ["05:22", "03:45", "04:12", "02:56", "03:18", "04:01"];

export default function TrackList({ tracks }: TrackListProps) {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

    const handleTogglePlay = async (track: BitacoraSong) => {
        if (!track.audioUrl) return;

        const currentAudio = audioRefs.current[track.id];
        if (!currentAudio) return;

        Object.entries(audioRefs.current).forEach(([id, audio]) => {
            if (id !== track.id && audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        if (playingId === track.id) {
            currentAudio.pause();
            setPlayingId(null);
            return;
        }

        try {
            await currentAudio.play();
            setPlayingId(track.id);
        } catch {
            setPlayingId(null);
        }
    };

    return (
        <section className="pb-12 sm:pb-16">
            <div className="mb-4 flex items-end justify-between border-b border-white/5 px-1 pb-4">
                <h2 className="text-xs uppercase tracking-[0.22em] text-text/55">Archived Entries</h2>
                <p className="font-mono text-xs text-text/45">Latest first</p>
            </div>
            <div className="space-y-2">
                {tracks.map((track, index) => (
                    <div key={track.id}>
                        <SongListItemCard
                            track={track}
                            index={index}
                            duration={fakeDurations[index % fakeDurations.length]}
                            titleHref={`/bitacora-sonora/${track.slug}`}
                            state={playingId === track.id ? "playing" : "normal"}
                            onTogglePlay={track.audioUrl ? () => void handleTogglePlay(track) : undefined}
                        />
                        {track.audioUrl ? (
                            <audio
                                ref={(element) => {
                                    audioRefs.current[track.id] = element;
                                }}
                                preload="none"
                                className="hidden"
                                onEnded={() => setPlayingId((current) => (current === track.id ? null : current))}
                            >
                                <source src={track.audioUrl} />
                            </audio>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}
