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
      <div>
        <button
          className="cursor-pointer absolute top-2 right-2"
          onClick={() => setOpenModalId(undefined)}
        >
          <XMarkIcon className="h-8" />
        </button>

        <div
          className="flex flex-col rounded md:flex-row dark:bg-[#191B1A] max-w-[90vw] max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="h-[80vh] object-contain"
            src={data.src}
            alt={data.title}
          />
          <div className="flex flex-col items-center gap-8 p-6 min-w-[260px] max-w-[400px]">
            <h1 className="text-3xl text-center font-title italic font-bold text-amber-700">
              {data.title}
            </h1>
            <p className="text-xl text-center">{data.description}</p>
            
            {data.price || data.sold || data.year || data.size ? (
              <div className="flex items-center gap-4 m-auto">
                <div className="bg-slate-300 px-4 py-1 rounded text-lg">

                {data.price ? <p>{formatNOK(data.price)}</p> : null}
                </div>
                <div className="bg-slate-300 px-4 py-1 rounded text-lg">
                {data.price ? <p>{data.sold ? "Sold" : null}</p> : null}
                </div>
                <div className="bg-slate-300 px-4 py-1 rounded text-lg">
                {data.price ? <p>{data.year}</p> : null}
                </div>
                <div className="bg-slate-300 px-4 py-1 rounded text-lg">
                {data.price ? <p>{data.size}</p> : null}
                </div>
                <div className="bg-slate-300 px-4 py-1 rounded text-lg">
                {data.price ? <p>{data.year}</p> : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
