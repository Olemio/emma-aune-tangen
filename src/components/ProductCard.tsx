export default function ProductCard({
    id,
    src,
    title,
    price,
    setOpenModal,
}: {
    id: string;
    src: string;
    title: string;
    price?: string;
    setOpenModal: (src: string | undefined) => void;
}) {
    return (
        <button
            onClick={() => setOpenModal(src)}
            className="group flex flex-col cursor-pointer"
        >
            <div className="relative">
                <img
                    src={src}
                    alt={title}
                    className="w-full transition-opacity duration-300 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-amber-700/0 duration-300 group-hover:bg-amber-700/60" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-title font-semibold italic text-xl tracking-[0.2em] text-slate-50 opacity-0 translate-y-1 transition-all duration-100 group-hover:opacity-100 group-hover:translate-y-0">
                        {title}
                    </span>
                </div>
            </div>

            <div className="flex px-2 pt-1 pb-6">
                <p className="text-sm text-slate-500 dark:text-slate-300">
                    {price}
                </p>
            </div>
        </button>
    );
}
