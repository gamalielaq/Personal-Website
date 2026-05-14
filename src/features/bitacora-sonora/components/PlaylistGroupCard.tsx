import Link from "next/link";
import type { BitacoraSong } from "@/content/bitacora-sonora";

type PlaylistGroupCardProps = {
    title: string;
    subtitle: string;
    tracks: BitacoraSong[];
    tone?: "accent" | "secondary" | "neutral";
    href?: string;
};

const toneMap: Record<NonNullable<PlaylistGroupCardProps["tone"]>, string> = {
    accent: "from-accent/25 to-black/20",
    secondary: "from-cyan-300/20 to-black/20",
    neutral: "from-border/20 to-black/20",
};

export default function PlaylistGroupCard({
    title,
    subtitle,
    tracks,
    tone = "neutral",
    href,
}: PlaylistGroupCardProps) {
    const content = (
        <article className="group relative aspect-square overflow-hidden rounded-2xl border border-border/45 bg-surface/60">
            <div className={`absolute inset-0 bg-gradient-to-br ${toneMap[tone]} opacity-80 transition-opacity group-hover:opacity-100`} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm font-semibold text-text">{title}</p>
                <p className="mt-1 text-xs text-text/60">{subtitle}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-text/50">{tracks.length} pistas</p>
            </div>
        </article>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}
