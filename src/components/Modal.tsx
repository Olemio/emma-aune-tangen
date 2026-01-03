import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Artwork } from "../data/artworks";

export default function Modal({
    data,
    setOpenModalId,
}: {
    data: Artwork;
    setOpenModalId: (id: undefined) => void;
}) {
    return (
        <div
            className="fixed inset-0 bg-amber-900/20 flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenModalId(undefined)}
        >
            <div
                className="flex bg-slate-50 dark:bg-[#191B1A] max-w-[90vw] max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-[min(90vw,1100px)] h-[min(80vh,800px)] bg-slate-100 dark:bg-black/30 flex items-center justify-center">
                    <img
                        className="w-full h-full object-contain"
                        src={data.src}
                        alt={data.title}
                    />
                </div>
                <div className="flex flex-col p-6 min-w-[260px]">
                    <button
                        className="cursor-pointer"
                        onClick={() => setOpenModalId(undefined)}
                    >
                        <XMarkIcon className="h-8" />
                    </button>

                    <p>{data.title}</p>

                    <div className="flex w-full justify-between">
                        {data.price ? <p>{data.price}</p> : null}
                        {data.sold ? <p>{data.sold ? "Sold" : null}</p> : null}
                        {data.year ? <p>{data.year}</p> : null}
                        {data.size ? <p>{data.size}</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
