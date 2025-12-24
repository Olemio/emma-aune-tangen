export default function Header() {
    return (
        <header className="flex flex-col mb-16 pt-4 mx-auto max-w-250">
            <div className="grid grid-cols-3">
                <div></div>
                <div className="flex flex-col justify-between items-center py-4 w-full">
                    <p className="font-fustat text-2xl">Emma Aune-Tangen</p>
                    <p className="text-sm">emmaaunetangen@gmail.com</p>
                </div>
                <div className="flex justify-end">
                    <button>Login with Google</button>
                </div>
            </div>

            <div className="h-px w-full rounded-lg bg-gray-400"></div>
        </header>
    );
}
