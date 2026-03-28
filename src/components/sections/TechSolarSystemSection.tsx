"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ComponentType } from "react";
import {
    Blocks,
    Boxes,
    Cloud,
    Cpu,
    Database,
    FileCode2,
    Flame,
    GitBranch,
    Layers3,
    ServerCog,
} from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

type OrbitBody = {
    tech: string;
    Icon: ComponentType<{ className?: string }>;
    angle: number;
    colorClass: string;
    glowClass: string;
};

type OrbitLayer = {
    label: string;
    radius: string;
    tilt: number;
    azimuth: number;
    duration: number;
    reverse?: boolean;
    labelAngle: number;
    ringClass: string;
    arcAClass: string;
    arcBClass: string;
    nodes: OrbitBody[];
};

const stars = [
    { left: "4%", top: "12%", size: 2.5, delay: 0 },
    { left: "12%", top: "72%", size: 3, delay: 0.7 },
    { left: "19%", top: "22%", size: 2, delay: 1.8 },
    { left: "26%", top: "83%", size: 2.5, delay: 0.9 },
    { left: "39%", top: "11%", size: 2, delay: 1.4 },
    { left: "48%", top: "88%", size: 3, delay: 1.1 },
    { left: "59%", top: "14%", size: 2.5, delay: 1.9 },
    { left: "67%", top: "78%", size: 2.5, delay: 0.3 },
    { left: "79%", top: "24%", size: 2, delay: 1.6 },
    { left: "88%", top: "66%", size: 3, delay: 0.5 },
    { left: "92%", top: "36%", size: 2, delay: 1.2 },
    { left: "73%", top: "8%", size: 2, delay: 0.8 },
];

const layers: OrbitLayer[] = [
    {
        label: "Frontend",
        radius: "clamp(78px, 18vw, 132px)",
        tilt: 67,
        azimuth: -10,
        duration: 14,
        labelAngle: 316,
        ringClass: "border-white/18",
        arcAClass: "border-t-cyan-300/55 border-r-cyan-200/35",
        arcBClass: "border-b-emerald-300/45 border-l-white/25",
        nodes: [
            {
                tech: "Angular",
                Icon: Blocks,
                angle: 10,
                colorClass: "text-rose-300",
                glowClass: "shadow-[0_0_28px_rgba(244,63,94,0.34)]",
            },
            {
                tech: "React",
                Icon: Layers3,
                angle: 146,
                colorClass: "text-cyan-300",
                glowClass: "shadow-[0_0_28px_rgba(34,211,238,0.34)]",
            },
            {
                tech: "Next.js",
                Icon: Boxes,
                angle: 248,
                colorClass: "text-slate-100",
                glowClass: "shadow-[0_0_26px_rgba(248,250,252,0.2)]",
            },
        ],
    },
    {
        label: "Backend",
        radius: "clamp(122px, 25vw, 210px)",
        tilt: 70,
        azimuth: 16,
        duration: 22,
        reverse: true,
        labelAngle: 22,
        ringClass: "border-white/14",
        arcAClass: "border-t-red-300/45 border-r-white/24",
        arcBClass: "border-b-blue-300/45 border-l-cyan-300/34",
        nodes: [
            {
                tech: "NestJS",
                Icon: ServerCog,
                angle: 62,
                colorClass: "text-red-300",
                glowClass: "shadow-[0_0_28px_rgba(239,68,68,0.32)]",
            },
            {
                tech: "TypeScript",
                Icon: FileCode2,
                angle: 202,
                colorClass: "text-blue-300",
                glowClass: "shadow-[0_0_28px_rgba(59,130,246,0.33)]",
            },
            {
                tech: "Node",
                Icon: Cpu,
                angle: 308,
                colorClass: "text-lime-300",
                glowClass: "shadow-[0_0_28px_rgba(132,204,22,0.3)]",
            },
        ],
    },
    {
        label: "Infra / Data",
        radius: "clamp(165px, 33vw, 286px)",
        tilt: 73,
        azimuth: -24,
        duration: 30,
        labelAngle: 128,
        ringClass: "border-white/11",
        arcAClass: "border-t-indigo-300/42 border-r-sky-300/35",
        arcBClass: "border-b-amber-300/42 border-l-white/22",
        nodes: [
            {
                tech: "MongoDB",
                Icon: Database,
                angle: 44,
                colorClass: "text-emerald-300",
                glowClass: "shadow-[0_0_28px_rgba(52,211,153,0.3)]",
            },
            {
                tech: "Firebase",
                Icon: Flame,
                angle: 166,
                colorClass: "text-amber-300",
                glowClass: "shadow-[0_0_28px_rgba(245,158,11,0.3)]",
            },
            {
                tech: "Cloud",
                Icon: Cloud,
                angle: 262,
                colorClass: "text-sky-300",
                glowClass: "shadow-[0_0_28px_rgba(56,189,248,0.3)]",
            },
            {
                tech: "Git",
                Icon: GitBranch,
                angle: 336,
                colorClass: "text-orange-300",
                glowClass: "shadow-[0_0_28px_rgba(251,146,60,0.3)]",
            },
        ],
    },
];

export default function TechSolarSystemSection() {
    const sceneRef = useRef<HTMLDivElement | null>(null);
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);

    const smoothTiltX = useSpring(tiltX, { stiffness: 95, damping: 18, mass: 0.6 });
    const smoothTiltY = useSpring(tiltY, { stiffness: 95, damping: 18, mass: 0.6 });

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const scene = sceneRef.current;
        if (!scene) return;

        const rect = scene.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const xRatio = (event.clientX - centerX) / (rect.width / 2);
        const yRatio = (event.clientY - centerY) / (rect.height / 2);

        tiltX.set(-yRatio * 5);
        tiltY.set(xRatio * 7);
    };

    const resetParallax = () => {
        tiltX.set(0);
        tiltY.set(0);
    };

    return (
        <section id="tech-orbit" className="relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.09)_0%,rgba(8,12,20,0.35)_42%,transparent_80%)]" />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14)_0%,rgba(34,197,94,0.03)_38%,transparent_74%)] blur-3xl" />

            {stars.map((star, index) => (
                <motion.span
                    key={`star-${index}`}
                    className="pointer-events-none absolute rounded-full bg-white"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{ opacity: [0.15, 0.7, 0.2], scale: [1, 1.22, 0.95] }}
                    transition={{
                        duration: 2.6 + (index % 4) * 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                />
            ))}

            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Orbital Core"
                        title="Ecosistema tecnologico orbital"
                        description=""
                    />

                    <div className="mt-10 flex justify-center" style={{ perspective: "1400px" }}>
                        <motion.div
                            ref={sceneRef}
                            onPointerMove={handlePointerMove}
                            onPointerLeave={resetParallax}
                            style={{ rotateX: smoothTiltX, rotateY: smoothTiltY, transformStyle: "preserve-3d" }}
                            className="relative aspect-square w-full max-w-[640px]"
                        >
                            {layers.map((layer, layerIndex) => (
                                <div key={layer.label} className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="absolute rounded-full bg-white/6 blur-2xl"
                                        style={{ width: `calc(${layer.radius} * 2)`, height: `calc(${layer.radius} * 0.58)` }}
                                    />

                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            transform: `rotateX(${layer.tilt}deg) rotateZ(${layer.azimuth}deg)`,
                                        }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className={`rounded-full border ${layer.ringClass}`}
                                                style={{ width: `calc(${layer.radius} * 2)`, height: `calc(${layer.radius} * 2)` }}
                                            />
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className={`rounded-full border border-transparent ${layer.arcAClass}`}
                                                style={{
                                                    width: `calc(${layer.radius} * 2)`,
                                                    height: `calc(${layer.radius} * 2)`,
                                                    transform: `rotate(${24 + layerIndex * 18}deg)`,
                                                }}
                                            />
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className={`rounded-full border border-transparent ${layer.arcBClass}`}
                                                style={{
                                                    width: `calc(${layer.radius} * 2)`,
                                                    height: `calc(${layer.radius} * 2)`,
                                                    transform: `rotate(${138 + layerIndex * 24}deg)`,
                                                }}
                                            />
                                        </div>

                                        <motion.div
                                            className="absolute inset-0"
                                            animate={{ rotate: layer.reverse ? -360 : 360 }}
                                            transition={{ duration: layer.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        >
                                            {layer.nodes.map((node, nodeIndex) => (
                                                <div
                                                    key={node.tech}
                                                    className="absolute left-1/2 top-1/2"
                                                    style={{ transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateX(${layer.radius})` }}
                                                >
                                                    <div style={{ transform: `rotateX(${-layer.tilt}deg) rotateZ(${-layer.azimuth}deg)` }}>
                                                        <motion.div
                                                            animate={{ rotate: layer.reverse ? 360 : -360, y: [0, -3, 0] }}
                                                            transition={{
                                                                rotate: { duration: layer.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                                                                y: {
                                                                    duration: 2.4 + nodeIndex * 0.25,
                                                                    repeat: Number.POSITIVE_INFINITY,
                                                                    ease: "easeInOut",
                                                                },
                                                            }}
                                                            className="group relative"
                                                            whileHover={{ scale: 1.12 }}
                                                        >
                                                            <div className="absolute inset-0 -z-10 rounded-2xl bg-white/8 blur-md" />
                                                            <div
                                                                className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/22 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-md sm:h-14 sm:w-14 ${node.glowClass}`}
                                                                title={node.tech}
                                                                aria-label={node.tech}
                                                            >
                                                                <node.Icon className={`h-5 w-5 stroke-[2.2] sm:h-6 sm:w-6 ${node.colorClass}`} />
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    <div
                                        className="absolute left-1/2 top-1/2"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${layer.labelAngle}deg) translateX(${layer.radius})`,
                                        }}
                                    >
                                        <span className="inline-flex -translate-y-1/2 rounded-sm border border-white/16 bg-[#0e111a]/90 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/84 sm:text-[0.62rem]">
                                            {layer.label}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/8 blur-3xl" />

                            <motion.div
                                className="absolute left-1/2 top-1/2 h-[168px] w-[168px] -translate-x-1/2 -translate-y-1/2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                                <div className="h-full w-full rounded-full border border-dashed border-emerald-300/24" />
                            </motion.div>

                            <motion.div
                                className="absolute left-1/2 top-1/2 h-[124px] w-[124px] -translate-x-1/2 -translate-y-1/2"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                                <div className="h-full w-full rounded-full border border-white/18" />
                            </motion.div>

                            <motion.div
                                className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-300/35 bg-[radial-gradient(circle,rgba(34,197,94,0.5)_0%,rgba(16,185,129,0.22)_38%,rgba(10,12,18,0.96)_100%)] shadow-[0_0_66px_rgba(34,197,94,0.34)] sm:h-28 sm:w-28"
                                animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 46px rgba(34,197,94,0.28)", "0 0 78px rgba(34,197,94,0.42)", "0 0 46px rgba(34,197,94,0.28)"] }}
                                transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <div className="absolute h-[62%] w-[62%] rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />
                                <div className="absolute h-[24%] w-[24%] rounded-full bg-emerald-200/85 blur-[1px]" />
                            </motion.div>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
