import { NavLink } from "react-router-dom";
import { Auth } from "./auth";
import { ThemeToggle } from "./ThemeToggle";
import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export default function Menu() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <div className="hidden md:flex gap-10 dark:text-slate-200">
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

            <button onClick={() => setIsOpen(true)} className="md:hidden flex">
                <Bars3BottomRightIcon className="h-8 w-8 text-slate-900 dark:text-slate-100" />
            </button>
            {isOpen ? (
                <div className="fixed flex flex-col items-center bg-amber-200/95 inset-0 z-50">
                    <div className="flex justify-between p-8 w-full">
                        <div className="flex items-center gap-8">
                            <Auth />
                            <ThemeToggle />
                        </div>
                        <button onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                    <div className="flex flex-col items-center h-full w-full gap-20 mt-20">
                        <NavLink
                            onClick={() => setIsOpen(false)}
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-700 text-3xl md:text-xl"
                                    : "text-3xl md:text-xl"
                            }
                        >
                            PORTFOLIO
                        </NavLink>
                        <NavLink
                            onClick={() => setIsOpen(false)}
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-700 text-3xl md:text-xl"
                                    : "text-3xl md:text-xl"
                            }
                        >
                            ABOUT
                        </NavLink>
                    </div>
                </div>
            ) : null}
        </>
    );
}
