import clsx from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
    eyebrow: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
    align?: "center" | "left";
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    className,
    align = "center",
}: SectionHeadingProps) {
    const isCentered = align === "center";

    return (
        <div
            className={clsx(
                "max-w-3xl",
                isCentered ? "mx-auto text-center" : "text-left",
                className,
            )}
        >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-accent/78">
                {eyebrow}
            </p>
            <h2 className="mt-3 text-[1.95rem] font-semibold tracking-[-0.05em] text-text sm:text-[2.35rem] lg:text-[2.6rem] lg:leading-[1.02]">
                {title}
            </h2>
            {description ? (
                <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-text/64 sm:text-base sm:leading-8">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
