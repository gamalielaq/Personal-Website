import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Gamaliel Abanto | Ingeniero de Software",
    description:
        "Ingeniero de software especializado en desarrollo de aplicaciones web modernas, arquitectura frontend y tecnologias JavaScript.",
    keywords: [
        "ingeniero de software",
        "desarrollador frontend",
        "angular developer",
        "web developer",
    ],
    openGraph: {
        title: "Gamaliel Abanto | Ingeniero de Software",
        description:
            "Construyo aplicaciones web modernas usando tecnologias como Angular, Next.js y TypeScript.",
        type: "website",
        url: "/",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Preview del portfolio de Gamaliel Abanto",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gamaliel Abanto | Ingeniero de Software",
        description:
            "Construyo aplicaciones web modernas usando tecnologias como Angular, Next.js y TypeScript.",
        images: ["/opengraph-image"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={cn("font-sans", geist.variable)}>
            <body className="bg-background text-text antialiased">
                <div className="relative min-h-screen overflow-x-hidden bg-background">
                    <NavigationMenu />
                    <div className="flex min-h-screen flex-col pt-24">
                        <PageTransition>{children}</PageTransition>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}