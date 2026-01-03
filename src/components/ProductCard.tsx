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
    price?: number;
    setOpenModal: (id: string | undefined) => void;
}) {
    return (
        <button
            onClick={() => setOpenModal(id)}
            className="group flex flex-col cursor-pointer mb-2.5"
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

            {price ? (
                <div className="flex bg-amber-100 rounded p-2.5">
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                        {price} NOK
                    </p>
                </div>
            ) : null}
        </button>
    );
}
