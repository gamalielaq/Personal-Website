"use client";

import clsx from "clsx";
import type { CSSProperties } from "react";
import { useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import {
    AppWindow,
    Blocks,
    Braces,
    Bug,
    Cloud,
    Code2,
    Cpu,
    Database,
    DatabaseZap,
    FileCode2,
    GitBranch,
    Globe2,
    LayoutGrid,
    Layers3,
    Monitor,
    Network,
    PanelLeft,
    RefreshCcw,
    Rocket,
    ServerCog,
    ShieldCheck,
    Terminal,
    Wrench,
    Workflow,
} from "lucide-react";

const iconItems: Array<{
    Icon: LucideIcon;
    left: string;
    top: string;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    rotation: number;
    colorClass: string;
}> = [
    { Icon: Blocks, left: "8%", top: "18%", size: 28, opacity: 0.16, duration: 16, delay: -6, rotation: -8, colorClass: "text-cyan-300" },
    { Icon: AppWindow, left: "18%", top: "62%", size: 22, opacity: 0.18, duration: 18, delay: -12, rotation: 6, colorClass: "text-sky-300" },
    { Icon: Globe2, left: "85%", top: "20%", size: 30, opacity: 0.16, duration: 17, delay: -10, rotation: -12, colorClass: "text-emerald-300" },
    { Icon: DatabaseZap, left: "78%", top: "70%", size: 26, opacity: 0.18, duration: 19, delay: -16, rotation: 10, colorClass: "text-amber-300" },
    { Icon: ServerCog, left: "64%", top: "36%", size: 24, opacity: 0.16, duration: 17, delay: -8, rotation: 4, colorClass: "text-red-300" },
    { Icon: Database, left: "10%", top: "78%", size: 24, opacity: 0.16, duration: 19, delay: -14, rotation: -6, colorClass: "text-sky-300" },
    { Icon: Bug, left: "40%", top: "12%", size: 20, opacity: 0.14, duration: 18, delay: -7, rotation: 12, colorClass: "text-lime-300" },
    { Icon: ShieldCheck, left: "32%", top: "52%", size: 22, opacity: 0.16, duration: 15, delay: -5, rotation: -4, colorClass: "text-teal-300" },
    { Icon: Code2, left: "52%", top: "22%", size: 22, opacity: 0.16, duration: 20, delay: -13, rotation: 8, colorClass: "text-blue-300" },
    { Icon: Cpu, left: "55%", top: "78%", size: 26, opacity: 0.16, duration: 20, delay: -11, rotation: -8, colorClass: "text-orange-300" },
    { Icon: Cloud, left: "90%", top: "54%", size: 24, opacity: 0.16, duration: 17, delay: -9, rotation: 6, colorClass: "text-sky-200" },
    { Icon: Terminal, left: "24%", top: "30%", size: 20, opacity: 0.14, duration: 16, delay: -4, rotation: -10, colorClass: "text-green-300" },
    { Icon: Wrench, left: "70%", top: "12%", size: 20, opacity: 0.14, duration: 19, delay: -15, rotation: 14, colorClass: "text-yellow-300" },
    { Icon: Rocket, left: "14%", top: "42%", size: 20, opacity: 0.14, duration: 21, delay: -20, rotation: -14, colorClass: "text-fuchsia-300" },
    { Icon: GitBranch, left: "88%", top: "80%", size: 22, opacity: 0.16, duration: 19, delay: -18, rotation: 8, colorClass: "text-orange-300" },
    { Icon: Network, left: "44%", top: "68%", size: 22, opacity: 0.16, duration: 18, delay: -6, rotation: -6, colorClass: "text-violet-300" },
    { Icon: Monitor, left: "62%", top: "8%", size: 20, opacity: 0.14, duration: 17, delay: -9, rotation: 10, colorClass: "text-rose-300" },
    { Icon: LayoutGrid, left: "36%", top: "86%", size: 20, opacity: 0.14, duration: 18, delay: -12, rotation: -12, colorClass: "text-indigo-300" },
    { Icon: Braces, left: "6%", top: "34%", size: 18, opacity: 0.14, duration: 17, delay: -9, rotation: 6, colorClass: "text-orange-300" },
    { Icon: FileCode2, left: "22%", top: "10%", size: 18, opacity: 0.14, duration: 19, delay: -14, rotation: -6, colorClass: "text-blue-300" },
    { Icon: Layers3, left: "74%", top: "46%", size: 22, opacity: 0.16, duration: 18, delay: -7, rotation: 4, colorClass: "text-cyan-300" },
    { Icon: PanelLeft, left: "92%", top: "34%", size: 18, opacity: 0.14, duration: 16, delay: -5, rotation: -8, colorClass: "text-pink-300" },
    { Icon: RefreshCcw, left: "48%", top: "90%", size: 18, opacity: 0.14, duration: 20, delay: -16, rotation: 12, colorClass: "text-amber-200" },
    { Icon: Workflow, left: "58%", top: "58%", size: 20, opacity: 0.14, duration: 19, delay: -11, rotation: -10, colorClass: "text-fuchsia-300" },
];

type FloatingTechIconsProps = {
    className?: string;
};

function randomBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export default function FloatingTechIcons({ className }: FloatingTechIconsProps) {
    const drift = useMemo(
        () =>
            iconItems.map(() => {
                const x = randomBetween(-180, 180);
                const y = randomBetween(-160, 160);
                const rot2 = randomBetween(-18, 18);
                return { x, y, rot2 };
            }),
        []
    );

    return (
        <div
            aria-hidden="true"
            className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}
        >
            {iconItems.map((item, index) => {
                const style = {
                    left: item.left,
                    top: item.top,
                    opacity: item.opacity,
                    "--x": `${drift[index].x}px`,
                    "--y": `${drift[index].y}px`,
                    "--rot": `${item.rotation}deg`,
                    "--rot2": `${drift[index].rot2}deg`,
                    animation: `tech-drift ${item.duration}s ease-in-out ${item.delay}s infinite`,
                    willChange: "transform",
                } as CSSProperties;

                return (
                    <div
                        key={`${item.left}-${item.top}-${index}`}
                        className="absolute"
                        style={style}
                    >
                        <item.Icon size={item.size} className={clsx(item.colorClass)} />
                    </div>
                );
            })}
        </div>
    );
}