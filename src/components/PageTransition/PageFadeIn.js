"use client";

import { usePathname } from "next/navigation";
import "./PageFadeIn.css";

export default function PageFadeIn({ children }) {
    const pathname = usePathname();
    // key={pathname} har route change pe animation replay karwa deta hai
    return (
        <div key={pathname} className="PageFadeIn-wrapper">
            {children}
        </div>
    );
}