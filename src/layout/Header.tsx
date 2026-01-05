import React from "react";
import Menu from "./Menu";

export default function Header() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;

            setScrolled((prev) => {
                if (!prev && y > 30) return true;
                if (prev && y < 10) return false;
                return prev;
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header
            className={`sticky top-0 z-48 transition-colors duration-300 flex flex-col mb-10    mx-auto text-xl ${
                scrolled
                    ? "backdrop-blur-lg dark:bg-amber-900/75 bg-amber-50/75"
                    : "bg-transparent"
            }`}
        >
            <div
                className={`
                    flex justify-between items-center
                    m-auto w-full max-w-[1400px] transition-all duration-300
                    ${scrolled ? "px-5 py-2" : "p-5"}
                `}
            >
                <div>
                    <p className="font-title text-3xl dark:text-slate-100 text-slate-900">
                        Emma Aune-Tangen
                    </p>
                    <a
                        className={`
                            text-slate-500 dark:text-slate-300
                            block overflow-hidden
                            transition-[opacity,max-height,transform] duration-300
                            ${
                                scrolled
                                    ? "max-h-0 opacity-0 -translate-y-1"
                                    : "max-h-10 opacity-100 translate-y-0"
                            }
                        `}
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
