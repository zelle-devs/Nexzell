"use client";

import { createContext, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    COVER_DURATION,
    TEXT_HOLD,
    TEXT_FADE_OUT,
    GAP_BEFORE_NAV,
    UNCOVER_DURATION,
} from "./transitionConfig";

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
    const router = useRouter();
    const isAnimating = useRef(false);

    const [phase, setPhase] = useState("hidden"); // hidden | cover | uncover
    const [textVisible, setTextVisible] = useState(false);
    const [label, setLabel] = useState("");

    const navigate = (href, itemLabel) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        setLabel(itemLabel);
        setPhase("cover");
        setTextVisible(false);

        setTimeout(() => setTextVisible(true), COVER_DURATION);
        setTimeout(() => setTextVisible(false), COVER_DURATION + TEXT_HOLD);

        setTimeout(() => {
            router.push(href);
        }, COVER_DURATION + TEXT_HOLD + TEXT_FADE_OUT);

        setTimeout(() => {
            setPhase("uncover");
        }, COVER_DURATION + TEXT_HOLD + TEXT_FADE_OUT + GAP_BEFORE_NAV);

        setTimeout(() => {
            setPhase("hidden");
            isAnimating.current = false;
        }, COVER_DURATION + TEXT_HOLD + TEXT_FADE_OUT + GAP_BEFORE_NAV + UNCOVER_DURATION);
    };

    return (
        <TransitionContext.Provider value={{ navigate, phase, textVisible, label }}>
            {children}
        </TransitionContext.Provider>
    );
}

export const usePageTransition = () => useContext(TransitionContext);