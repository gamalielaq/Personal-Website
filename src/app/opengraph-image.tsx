import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    background: "#0a0a0a",
                    color: "#f5f5f5",
                    fontFamily: "Arial",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at top, rgba(34, 197, 94, 0.22), transparent 36%), linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "64px",
                        border: "1px solid #262626",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            fontSize: 28,
                            color: "#22c55e",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                        }}
                    >
                        <div
                            style={{
                                width: 14,
                                height: 14,
                                borderRadius: 999,
                                background: "#22c55e",
                                display: "flex",
                            }}
                        />
                        Portfolio
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 860,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 72,
                                fontWeight: 700,
                                lineHeight: 1,
                                letterSpacing: "-0.04em",
                                display: "flex",
                            }}
                        >
                            Gamaliel Abanto
                        </div>
                        <div
                            style={{
                                marginTop: 28,
                                fontSize: 32,
                                lineHeight: 1.35,
                                color: "rgba(245, 245, 245, 0.78)",
                                display: "flex",
                            }}
                        >
                            Construyo aplicaciones web modernas usando tecnologias como Angular, Next.js y TypeScript.
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: 24,
                            color: "rgba(245, 245, 245, 0.62)",
                        }}
                    >
                        <div style={{ display: "flex" }}>Ingeniero de Software</div>
                        <div style={{ display: "flex", color: "#22c55e" }}>gamalielabanto.dev</div>
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
