import { Auth } from "./auth";

export default function Header() {
    return (
        <header className="flex flex-col mb-16 pt-4 mx-auto max-w-250">
            <div className="grid grid-cols-3">
                <div className="flex flex-col justify-between py-4 md:items-center md:col-start-2">
                    <p className="font-fustat text-2xl">Emma Aune-Tangen</p>
                    <p className="text-sm">emmaaunetangen@gmail.com</p>
                </div>
                <div className="flex justify-end items-center gap-2 col-start-3">
                    {/* <button>Login with Google</button> */}
                    <Auth />
                </div>
            </div>

            <div className="h-px w-full rounded-lg bg-slate-300"></div>
        </header>
    );
}
