import { Auth } from "./auth";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle.tsx";

export default function Header() {
    return (
        <header className="flex flex-col mb-10 mx-auto max-w-[1400px] text-xl">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center m-5">
                <div>
                    <p className="font-title text-3xl dark:text-slate-100 text-slate-900">
                        Emma Aune-Tangen
                    </p>
                    <p className="text-slate-500 dark:text-slate-300">
                        emmaaunetangen@gmail.com
                    </p>
                </div>
                <div className="flex gap-10 dark:text-slate-200">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-amber-700" : ""
                        }
                    >
                        PORTFOLIO
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-amber-700" : ""
                        }
                    >
                        ABOUT
                    </NavLink>
                    <Auth />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
