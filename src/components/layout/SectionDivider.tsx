import clsx from "clsx";
import Container from "@/components/layout/Container";

type SectionDividerProps = {
    className?: string;
};

export default function SectionDivider({ className }: SectionDividerProps) {
    return (
        <div className={clsx("my-8", className)} aria-hidden="true">
            <Container>
                <div className="relative mx-auto flex max-w-5xl items-center justify-center">
                    <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_18%,rgba(255,255,255,0.15)_100%)]" />
                    <span className="mx-5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(255,255,255,0.4)] shadow-[0_0_0_4px_rgba(255,255,255,0.03)]" />
                    <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.03)_82%,transparent_100%)]" />
                </div>
            </Container>
        </div>
    );
}
