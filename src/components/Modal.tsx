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
            className="fixed inset-0 bg-amber-900/20 flex items-center justify-center"
            onClick={() => setOpenModalId(undefined)}
        >
            <div
                className="flex flex-col min-w-80vw items-end bg-slate-100 dark:bg-[#191B1A] px-6 py-4 rounded-lg gap-2 text-lg max-h-[80vh] max-w-[80vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="cursor-pointer"
                    onClick={() => setOpenModalId(undefined)}
                >
                    <XMarkIcon className="h-8" />
                </button>
                <img
                    className="rounded-lg object-contain max-h-[70vh]"
                    src={data.src}
                    alt=""
                />
                <div className="flex w-full justify-between">
                    {data.price ? <p>{data.price}</p> : null}
                    {data.sold ? <p>{data.sold}</p> : null}
                    {data.year ? <p>{data.year}</p> : null}
                    {data.size ? <p>{data.size}</p> : null}
                </div>
            </div>
        </div>
    );
}
