"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { BitacoraSong } from "@/content/bitacora-sonora";
import {
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Volume2,
    AudioLines,
    ListMusic,
    Play,
    Pause,
} from "lucide-react";

type PulsePlayerBarProps = {
    track: BitacoraSong;
    collectionTitle: string;
    isPlaying?: boolean;
    currentTime?: number;
    duration?: number;
    onTogglePlay?: () => void;
    onNext?: () => void;
    onPrev?: () => void;
};

function formatTime(timeInSeconds: number) {
    if (!Number.isFinite(timeInSeconds) || timeInSeconds <= 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function PulsePlayerBar({
    track,
    collectionTitle,
    isPlaying = false,
    currentTime = 0,
    duration = 0,
    onTogglePlay,
    onNext,
    onPrev,
}: PulsePlayerBarProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const progressPercent = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

    return createPortal(
        <footer className="fixed bottom-0 left-0 right-0 z-[80] border-t border-white/10 bg-[#131313]/95 px-4 py-4 text-[#e5e2e1] backdrop-blur-lg md:px-8">
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6">
                <div className="flex w-1/3 items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_25%_25%,rgba(75,226,119,0.22),rgba(12,12,12,0.9))]" />
                    <div className="hidden sm:block">
                        <p className="text-sm leading-tight text-[#e5e2e1]">{track.title}</p>
                        <p className="text-xs text-[#bccbb9]/70">Bitacora Sonora · {collectionTitle}</p>
                    </div>
                </div>

                <div className="flex max-w-xl flex-1 flex-col items-center gap-2">
                    <div className="flex items-center gap-6 text-[#bccbb9]/80">
                        <Shuffle className="h-4 w-4 cursor-pointer" />
                        <button className="cursor-pointer" onClick={onPrev}>
                            <SkipBack className="h-5 w-5" />
                        </button>
                        <button onClick={onTogglePlay} className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#e5e2e1] text-[#131313] transition-transform hover:scale-105 active:scale-95">
                            {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
                        </button>
                        <button className="cursor-pointer" onClick={onNext}>
                            <SkipForward className="h-5 w-5" />
                        </button>
                        <Repeat className="h-4 w-4 cursor-pointer" />
                    </div>

                    <div className="flex w-full items-center gap-3">
                        <span className="font-mono text-xs text-[#bccbb9]/60">{formatTime(currentTime)}</span>
                        <div className="group relative h-1 flex-1 cursor-pointer rounded-full bg-[#353534]">
                            <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/60 to-accent shadow-[0_0_8px_rgba(74,225,118,0.4)]" style={{ width: `${progressPercent}%` }} />
                            <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#e5e2e1] opacity-0 transition-opacity group-hover:opacity-100" style={{ left: `calc(${progressPercent}% - 6px)` }} />
                        </div>
                        <span className="font-mono text-xs text-[#bccbb9]/60">{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="hidden w-1/3 items-center justify-end gap-4 md:flex">
                    <AudioLines className="h-4 w-4 cursor-pointer text-[#bccbb9]/70" />
                    <ListMusic className="h-4 w-4 cursor-pointer text-[#bccbb9]/70" />
                    <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-[#bccbb9]/70" />
                        <div className="h-1 w-20 rounded-full bg-[#353534]">
                            <div className="h-full w-2/3 rounded-full bg-[#bccbb9]/80" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>,
        document.body
    );
}
