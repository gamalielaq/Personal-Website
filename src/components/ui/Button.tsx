import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type CommonProps = {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariant;
};

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseClassName =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantClassNames: Record<ButtonVariant, string> = {
    primary: "border-accent bg-accent text-background hover:border-accent-soft hover:bg-accent-soft",
    outline: "border-accent text-accent hover:bg-accent hover:text-background",
};

export default function Button(props: ButtonProps) {
    const { children, className, variant = "primary" } = props;
    const classes = clsx(baseClassName, variantClassNames[variant], className);

    if ("href" in props) {
        const { href, ...linkProps } = props;

        return (
            <Link href={href} className={classes} {...linkProps}>
                {children}
            </Link>
        );
    }

    const { type = "button", ...buttonProps } = props;

    return (
        <button {...buttonProps} type={type} className={classes}>
            {children}
        </button>
    );
}

