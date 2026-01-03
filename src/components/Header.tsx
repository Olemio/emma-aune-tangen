import { Auth } from "./auth";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col mb-15 mx-auto max-w-[1400px]">
            <div className="flex justify-between items-center m-5">
                <div>
                    <p className="font-title text-3xl text-slate-900">
                        Emma Aune-Tangen
                    </p>
                    <p className="text-xl text-slate-500">
                        emmaaunetangen@gmail.com
                    </p>
                </div>
                <div className="flex justify-end items-center gap-2 col-start-3">
                    {/* <button>Login with Google</button> */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-amber-700 underline" : ""
                        }
                    >
                        PORTFOLIO
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-amber-700 underline" : ""
                        }
                    >
                        ABOUT
                    </NavLink>
                    <Auth />
                    <SunIcon className="h-6 w-6 cursor-pointer text-slate-700" />
                    <MoonIcon className="h-6 w-6 cursor-pointer text-slate-700" />
                </div>
            </div>

            <div className="h-px w-full rounded-lg bg-slate-300"></div>
        </header>
    );
}
