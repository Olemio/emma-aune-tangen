export default function Header() {
    return (
        <header className="flex flex-col mb-16 pt-4 mx-auto max-w-[1000px]">
            <div className="flex justify-between items-center py-4  w-full">
                <p className="font-fustat text-2xl">Emma Aune-Tangen</p>
                <p className="text-sm">emmaaunetangen@gmail.com</p>
            </div>

            <div className="h-[1px] w-full  rounded-lg bg-gray-400"></div>
        </header>
    );
}
