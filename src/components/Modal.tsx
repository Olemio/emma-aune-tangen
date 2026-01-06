import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Artwork } from "../data/artworks";
import { formatNOK } from "../utils/helpers";

export default function Modal({
    data,
    setOpenModalId,
}: {
    data: Artwork;
    setOpenModalId: (id: undefined) => void;
}) {
    return (
        <div
            className="fixed z-50 inset-0 bg-slate-50/90 backdrop-blur-xs flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenModalId(undefined)}
        >
            <div
                className="flex flex-col w-[min(90vw,calc(90vh*4/3))] h-[min(90vh,calc(90vw*3/4))] rounded md:flex-row dark:bg-[#191B1A] max-w-[90vw] max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="dark:bg-black/30 flex items-center justify-center">
                    <img
                        className="w-full h-full object-contain"
                        src={data.src}
                        alt={data.title}
                    />
                </div>
                <div className="flex flex-col items-center gap-8 p-6 min-w-[260px]">
                    <button
                        className="cursor-pointer self-end"
                        onClick={() => setOpenModalId(undefined)}
                    >
                        <XMarkIcon className="h-8" />
                    </button>

                    <h1 className="text-3xl font-title italic font-bold text-amber-700">
                        {data.title}
                    </h1>
                    <p>{data.description}</p>
                    {data.price || data.sold || data.year || data.size ? (
                        <div className="flex flex-col items-center gap-4 m-auto">
                            <h2 className="text-xl">About artwork</h2>
                            {data.price ? <p>{formatNOK(data.price)}</p> : null}
                            {data.sold ? (
                                <p>{data.sold ? "Sold" : null}</p>
                            ) : null}
                            {data.year ? <p>{data.year}</p> : null}
                            {data.size ? <p>{data.size}</p> : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
