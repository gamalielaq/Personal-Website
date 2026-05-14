"use client";

import Link from "next/link";
import type { BitacoraSong } from "@/content/bitacora-sonora";

type SongListItemCardProps = {
    track: BitacoraSong;
    index: number;
    duration: string;
    titleHref?: string;
    state?: "normal" | "hover" | "playing";
    mobile?: boolean;
    onTogglePlay?: () => void;
};

const thumbImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJZ3qM6aIoS1L-Oo_FUANeg082HyvXkO93QcSZLwUotOvMEWNV-s-_ThPD-lvOQeF2uxUW2BAICESVcfNApA7_UcZvZrnIWjUGoek5afN6kEspAALPc-4jC_qW3KRhOaOp8LXIq1oynWICVRFoXKQ_-6kn31gc0ixLr6C1tcuQDTMvC9J4fawRKXBoCgZQ9BSPw8P0vDlwcscWFVE8qsoCmo7cEPl5mVtexs3JmTHZlAyAjxWJG6KTSnsW2WPMvVKo7Zp7V-g9S30",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZT7jHqQMbOpPqSYDRX1Y2tZCwyhPzoPUSF2ivIMHg1212l57T80ZF1q_PZ9NkEI7atzsfg5EyviXra5O_pnC_Dtp_XfaM_oaaAKKcCBomDtpLrloqA7iu5cIOL58zUuuV9CrJBW8m7FhgGm9rcxYaR0bUrKxFwaLu7-zHHznvibObkxCxAJwPgjInCl2BwnmBDabC2ucsJMJYNC0Zp_A_7MmHt4eGZXqj4iOs5Hara3G3_Us6nPkXhurJ9P5HBG3oxqNGmWeOtw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ye6jfK7eEmdIpcPbe6U1QqkIBq8MK24tWx4hMJGYL2pIdZfOZI0to0sZIAyuR1m6wYdqMfEW8mIXceX0kP-EywDDoyIf1pz4bogMhv3HEZCM60ifQS6L0lR0FVJIA3xnzp6R3FVDkPqfIfQzeqMdDvamjwNWALonqfzJBoGJlvkJrxfttOIo3lh76Vv3KcJzX3kakNKN5ZcO1GSWzqSf_2N8VOF8aRgFIRChRa03Zcx4G1iuRHZuApfDWrou0-mnRenKjSOd3pA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAN_Rmpcza7wvG_xP-qNUSrpOgExjezRyME-1fRwRVSi2wCVD9eUW6r6TVXzNXkOWk9opPdIFxQSeanA--nvw0oVfHc8fb1lqt94S4Aaaeoe11XWSTBlsigUpQjOuf6zyzRRaaCbK6ivZnJ3War5jYU7iM1laI99NKfaUdELnj5nYigkJGg3u3ljt3kh4lj9j1Gr-XVbWnkKPyZt-9A4Qrf0KlOJSC8ILCQkLpjO8a898V4871Il6RZDm-UL1gEY7h7ZeH8eMj26uA",
];

export default function SongListItemCard({
    track,
    index,
    duration,
    titleHref,
    state = "normal",
    mobile = false,
    onTogglePlay,
}: SongListItemCardProps) {
    const isPlaying = state === "playing";
    const isHoverState = state === "hover";
    const thumb = thumbImages[index % thumbImages.length];

    if (mobile) {
        return (
            <div className="max-w-[375px] overflow-hidden rounded-2xl border border-white/5 bg-[#1c1b1b] shadow-xl">
                <div className="flex items-center gap-4 p-3 transition-colors hover:bg-white/5">
                    <div className="relative h-12 w-12 flex-shrink-0">
                        <img alt="Album Cover" className="h-full w-full rounded-md object-cover" src={thumb} />
                    </div>
                    <div className="min-w-0 flex-grow">
                        <h4 className="truncate text-[12px] leading-tight text-[#e5e2e1]">{track.title}</h4>
                        <p className="truncate text-[10px] text-[#bccbb9] opacity-70">{track.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#bccbb9]">{duration}</span>
                        <button className="cursor-pointer p-1 text-[#bccbb9]"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={onTogglePlay}
            className={`flex items-center gap-6 rounded-xl p-4 transition-all ${
                isPlaying
                    ? "border border-[#22c55e]/30 bg-[#22c55e]/10 shadow-[0_0_40px_rgba(34,197,94,0.1)]"
                    : isHoverState
                        ? "scale-[1.01] border border-white/20 bg-white/5 shadow-2xl"
                        : "group border border-white/5 hover:border-white/10"
            } ${onTogglePlay ? "cursor-pointer" : ""}`}
        >
            {isPlaying ? (
                <div className="flex h-4 w-8 items-center justify-center gap-[2px]">
                    <div className="playing-bar w-1 rounded-full bg-[#22c55e]" />
                    <div className="playing-bar w-1 rounded-full bg-[#22c55e]" />
                    <div className="playing-bar w-1 rounded-full bg-[#22c55e]" />
                    <div className="playing-bar w-1 rounded-full bg-[#22c55e]" />
                </div>
            ) : (
                <span className={`w-8 text-center font-mono ${isHoverState ? "text-[#e5e2e1]" : "text-[#bccbb9] opacity-40 group-hover:text-[#4be277] group-hover:opacity-100"}`}>
                    {String(index + 1).padStart(2, "0")}
                </span>
            )}

            <div className="relative h-14 w-14 flex-shrink-0">
                <img alt="Album Cover" className={`h-full w-full rounded-lg object-cover shadow-lg ${isPlaying ? "ring-2 ring-[#22c55e]/20" : isHoverState ? "" : "opacity-80"}`} src={thumb} />
                <div className={`absolute inset-0 flex items-center justify-center rounded-lg ${isPlaying ? "bg-[#22c55e]/20 backdrop-blur-[1px]" : isHoverState ? "bg-black/60" : "bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"}`}>
                    <span className={`material-symbols-outlined ${isHoverState ? "text-[32px] text-[#6bff8f] drop-shadow-[0_0_8px_rgba(75,226,119,0.5)]" : "text-[28px] text-white"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {isPlaying ? "pause" : isHoverState ? "play_circle" : "play_arrow"}
                    </span>
                </div>
            </div>

            <div className="min-w-0 flex-grow">
                <h4 className={`truncate text-[16px] ${isPlaying ? "font-semibold text-[#22c55e]" : "text-[#e5e2e1]"}`}>
                    {titleHref ? (
                        <Link href={titleHref} className="cursor-pointer hover:text-[#6bff8f]" onClick={(event) => event.stopPropagation()}>
                            {track.title}
                        </Link>
                    ) : (
                        track.title
                    )}
                </h4>
                <p className={`truncate text-[12px] ${isPlaying ? "text-[#22c55e]/80" : isHoverState ? "text-[#e5e2e1]" : "text-[#bccbb9]"}`}>
                    {track.subtitle}
                    {isPlaying ? (
                        <>
                            <span className="mx-2 inline-block h-1 w-1 rounded-full bg-[#22c55e]/50" />
                            <span className="font-mono text-[10px] uppercase tracking-widest">Now Playing</span>
                        </>
                    ) : null}
                </p>
            </div>

            <div className="flex items-center gap-8">
                <span className={`font-mono ${isPlaying ? "font-medium text-[#22c55e]" : isHoverState ? "text-[#e5e2e1]" : "text-[#bccbb9]"}`}>{duration}</span>
                <button className="cursor-pointer text-inherit" onClick={(event) => event.stopPropagation()}><span className="material-symbols-outlined" style={{ fontVariationSettings: isPlaying ? "'FILL' 1" : "'FILL' 0" }}>favorite</span></button>
                <button className="cursor-pointer text-inherit" onClick={(event) => event.stopPropagation()}><span className="material-symbols-outlined">more_vert</span></button>
            </div>
        </div>
    );
}
