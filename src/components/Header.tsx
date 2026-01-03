import Menu from "./Menu";

export default function Header() {
    return (
        <header className="flex flex-col mb-10 mx-auto max-w-[1400px] text-xl">
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
