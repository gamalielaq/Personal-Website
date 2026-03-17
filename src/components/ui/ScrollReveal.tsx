"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    amount?: number;
};

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    amount = 0.2,
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={clsx(className)}
        >
            {children}
        </motion.div>
    );
}
