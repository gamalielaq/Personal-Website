"use client";

import { useMemo, useRef, useState } from "react";
import type { BitacoraSong } from "@/content/bitacora-sonora";
import SongListItemCard from "./SongListItemCard";
import PulsePlayerBar from "./PulsePlayerBar";

type CollectionTrackExperienceProps = {
    tracks: BitacoraSong[];
    collectionTitle: string;
};

const fakeDurations = ["06:12", "05:45", "07:20", "04:43", "03:58", "05:16"];

export default function CollectionTrackExperience({ tracks, collectionTitle }: CollectionTrackExperienceProps) {
    const playableTracks = useMemo(() => tracks.filter((track) => Boolean(track.audioUrl)), [tracks]);
    const [currentTrackId, setCurrentTrackId] = useState<string | null>(playableTracks[0]?.id ?? null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

    const currentTrack = tracks.find((track) => track.id === currentTrackId) ?? playableTracks[0] ?? tracks[0] ?? null;

    const stopOthers = (targetId: string) => {
        Object.entries(audioRefs.current).forEach(([id, audio]) => {
            if (id !== targetId && audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    };

    const playTrackById = async (trackId: string) => {
        const audio = audioRefs.current[trackId];
        if (!audio) return;

        stopOthers(trackId);

        try {
            await audio.play();
            setCurrentTrackId(trackId);
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
        }
    };

    const toggleTrack = async (track: BitacoraSong) => {
        if (!track.audioUrl) return;

        const audio = audioRefs.current[track.id];
        if (!audio) return;

        if (currentTrackId === track.id && isPlaying) {
            audio.pause();
            setIsPlaying(false);
            return;
        }

        await playTrackById(track.id);
    };

    const handleTogglePlayFromBar = async () => {
        if (!currentTrack || !currentTrack.audioUrl) return;

        const audio = audioRefs.current[currentTrack.id];
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
            return;
        }

        await playTrackById(currentTrack.id);
    };

    const stepTrack = async (direction: 1 | -1) => {
        if (playableTracks.length === 0) return;

        const currentIndex = playableTracks.findIndex((track) => track.id === currentTrackId);
        const safeIndex = currentIndex === -1 ? 0 : currentIndex;
        const nextIndex = (safeIndex + direction + playableTracks.length) % playableTracks.length;
        await playTrackById(playableTracks[nextIndex].id);
    };

    return (
        <>
            <section className="lg:col-span-7">
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 px-4 pb-4">
                        <span className="text-xs uppercase tracking-widest text-text/60">Pista</span>
                        <span className="text-xs uppercase tracking-widest text-text/60">Duracion</span>
                    </div>

                    {tracks.map((track, index) => (
                        <div key={track.id}>
                            <SongListItemCard
                                track={track}
                                index={index}
                                duration={fakeDurations[index % fakeDurations.length]}
                                titleHref={`/bitacora-sonora/${track.slug}`}
                                state={isPlaying && currentTrackId === track.id ? "playing" : "normal"}
                                onTogglePlay={track.audioUrl ? () => void toggleTrack(track) : undefined}
                            />
                            {track.audioUrl ? (
                                <audio
                                    ref={(element) => {
                                        audioRefs.current[track.id] = element;
                                    }}
                                    preload="metadata"
                                    className="hidden"
                                    onPlay={() => {
                                        setCurrentTrackId(track.id);
                                        setIsPlaying(true);
                                    }}
                                    onPause={() => {
                                        if (currentTrackId === track.id) {
                                            setIsPlaying(false);
                                        }
                                    }}
                                    onTimeUpdate={(event) => {
                                        if (currentTrackId === track.id) {
                                            setCurrentTime(event.currentTarget.currentTime);
                                        }
                                    }}
                                    onLoadedMetadata={(event) => {
                                        if (currentTrackId === track.id || !currentTrackId) {
                                            setDuration(event.currentTarget.duration || 0);
                                        }
                                    }}
                                    onEnded={() => {
                                        setIsPlaying(false);
                                        void stepTrack(1);
                                    }}
                                >
                                    <source src={track.audioUrl} />
                                </audio>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div className="h-28" />
            </section>

            {currentTrack ? (
                <PulsePlayerBar
                    track={currentTrack}
                    collectionTitle={collectionTitle}
                    isPlaying={isPlaying}
                    currentTime={currentTime}
                    duration={duration}
                    onTogglePlay={() => void handleTogglePlayFromBar()}
                    onPrev={() => void stepTrack(-1)}
                    onNext={() => void stepTrack(1)}
                />
            ) : null}
        </>
    );
}
