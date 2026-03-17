import { Boxes, Component, FileCode2, ServerCog } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceTechnology } from "@/data/services";

type TechnologyChipProps = {
    technology: ServiceTechnology;
};

const technologyStyles: Record<
    ServiceTechnology,
    {
        icon: LucideIcon;
        iconColor: string;
        badgeClassName: string;
        textClassName: string;
    }
> = {
    Angular: {
        icon: Component,
        iconColor: "text-rose-300",
        badgeClassName: "bg-rose-500/14 ring-1 ring-rose-300/24",
        textClassName: "text-rose-100",
    },
    "Next.js": {
        icon: Boxes,
        iconColor: "text-slate-100",
        badgeClassName: "bg-zinc-200/10 ring-1 ring-zinc-100/12",
        textClassName: "text-slate-100",
    },
    NestJS: {
        icon: ServerCog,
        iconColor: "text-red-300",
        badgeClassName: "bg-red-500/14 ring-1 ring-red-300/24",
        textClassName: "text-red-100",
    },
    Laravel: {
        icon: FileCode2,
        iconColor: "text-orange-300",
        badgeClassName: "bg-orange-500/14 ring-1 ring-orange-300/24",
        textClassName: "text-orange-100",
    },
};

export default function TechnologyChip({ technology }: TechnologyChipProps) {
    const style = technologyStyles[technology];
    const Icon = style.icon;

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-border/75 bg-background/60 px-3 py-1.5 text-[0.74rem] font-medium tracking-[0.02em] text-text/82">
            <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${style.badgeClassName}`}>
                <Icon className={`h-3 w-3 ${style.iconColor}`} />
            </span>
            <span className={style.textClassName}>{technology}</span>
        </span>
    );
}
