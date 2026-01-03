import { Auth } from "./auth";
import { MoonIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col mb-15 mx-auto max-w-[1400px] text-xl">
            <div className="flex justify-between items-center m-5">
                <div>
                    <p className="font-title text-3xl text-slate-900">
                        Emma Aune-Tangen
                    </p>
                    <p className="text-slate-500">emmaaunetangen@gmail.com</p>
                </div>
                <div className="flex gap-10">
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
                    <MoonIcon className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
