import {
    SunIcon as SunOutline,
    MoonIcon as MoonOutline,
} from "@heroicons/react/24/outline";
import {
    SunIcon as SunSolid,
    MoonIcon as MoonSolid,
} from "@heroicons/react/24/solid";
import React from "react";
import { applyTheme, getInitialTheme } from "../../hooks/useTheme";

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
            className="md:h-8 md:w-8 h-16 w-16"
        >
            <span className="md:hidden cursor-pointer">
                {theme === "light" ? <MoonSolid /> : <SunSolid />}
            </span>

            <span className="hidden md:block cursor-pointer">
                {theme === "light" ? <MoonOutline /> : <SunOutline />}
            </span>
        </button>
    );
}
