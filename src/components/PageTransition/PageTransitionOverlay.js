"use client";

import { useEffect, useRef } from "react";
import { usePageTransition } from "@/app/TransitionContext";
import { COVER_DURATION, UNCOVER_DURATION } from "@/app/transitionConfig";
import "./PageTransitionOverlay.css";

const MAX_CURVE = 190;
const LETTER_STAGGER = 15; // ms — har letter ke beech delay

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function PageTransitionOverlay() {
    const { phase, textVisible, label } = usePageTransition();
    const clipRef = useRef(null);
    const rafRef = useRef(null);
    const dims = useRef({ w: 0, h: 0 });

    useEffect(() => {
        const updateDims = () => {
            dims.current = { w: window.innerWidth, h: window.innerHeight };
        };
        updateDims();
        window.addEventListener("resize", updateDims);
        return () => window.removeEventListener("resize", updateDims);
    }, []);

    const setClip = (d) => {
        if (clipRef.current) clipRef.current.style.clipPath = `path('${d}')`;
    };

    const coverPath = (yTop, curve) => {
        const { w, h } = dims.current;
        return `M 0,${h} L ${w},${h} L ${w},${yTop} C ${w * 0.75},${yTop - curve} ${w * 0.25},${yTop - curve} 0,${yTop} Z`;
    };

    const uncoverPath = (yBottom, curve) => {
        const { w, h } = dims.current;
        const topFixed = -h;
        return `M 0,${topFixed} L ${w},${topFixed} L ${w},${yBottom} C ${w * 0.75},${yBottom + curve} ${w * 0.25},${yBottom + curve} 0,${yBottom} Z`;
    };

    useEffect(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const h = dims.current.h || window.innerHeight;

        if (phase === "hidden") {
            setClip(coverPath(h, 0));
            return;
        }

        const isCover = phase === "cover";
        const from = h;
        const to = 0;
        const duration = isCover ? COVER_DURATION : UNCOVER_DURATION;

        // Pehla frame foran set karo taake koi flash na ho
        setClip(isCover ? coverPath(h, 0) : uncoverPath(h, 0));

        const start = performance.now();

        const tick = (now) => {
            const elapsed = Math.max(0, now - start);
            const t = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(t);
            const y = from + (to - from) * eased;
            const curve = MAX_CURVE * Math.sin(Math.PI * t);

            setClip(isCover ? coverPath(y, curve) : uncoverPath(y, curve));

            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase]);

    const letters = Array.from(label ?? "");

    return (
        <div
            className="PageTransition-overlay"
            data-phase={phase}
            style={{ pointerEvents: phase === "cover" ? "auto" : "none" }}
        >
            <div
                ref={clipRef}
                className="PageTransition-clip"
                style={{ clipPath: "path('M 0,0 Z')" }}
            />

            <span className="PageTransition-text">
                {letters.map((char, i) => (
                    <span
                        key={i}
                        className={`PageTransition-letter ${textVisible ? "is-visible" : ""}`}
                        style={{
                            transitionDelay: textVisible
                                ? `${i * LETTER_STAGGER}ms`
                                : `${(letters.length - i) * (LETTER_STAGGER * 0.6)}ms`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>
        </div>
    );
}