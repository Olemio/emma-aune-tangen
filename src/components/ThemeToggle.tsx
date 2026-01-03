import React from "react";
import { applyTheme, getInitialTheme } from "../hooks/useTheme.tsx";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">(() =>
        getInitialTheme()
    );

    React.useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <button
            onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="h-6 w-6 cursor-pointer"
        >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
    );
}
