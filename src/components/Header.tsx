export default function Header() {
    return (
        <header className="flex flex-col mb-8">
            <div className="flex justify-between items-center py-4 mx-auto w-full max-w-[1200px]">
                <p className="font-fustat text-2xl">Emma Aune-Tangen</p>
                <p className="text-sm">emmaaunetangen@gmail.com</p>
            </div>
            <div className="mx-auto h-[1px] w-full max-w-[1100px] rounded-lg bg-gray-400"></div>
        </header>
    );
}
