import React from "react";
import Menu from "./Menu";

export default function Header() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header
            className={`sticky top-0 z-48 transition-colors duration-300 flex flex-col mb-10 mx-auto max-w-[1400px] text-xl ${
                scrolled
                    ? "bg-amber-100/60 dark:bg-amber-900/40 backdrop-blur"
                    : "bg-transparent"
            }`}
        >
            <div className="flex gap-8 justify-between items-center m-5">
                <div>
                    <p className="font-title text-3xl dark:text-slate-100 text-slate-900">
                        Emma Aune-Tangen
                    </p>
                    <a
                        className="text-slate-500 dark:text-slate-300"
                        href="mailto:emmaaunetangen@gmail.com"
                    >
                        emmaaunetangen@gmail.com
                    </a>
                </div>
                <Menu />
            </div>
        </header>
    );
}
