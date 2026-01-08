import { formatNOK } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function ProductCard({
    id,
    src,
    title,
    price,
    year,
    size,
}: {
    id: string;
    src: string;
    title: string;
    price?: number;
    year?: number;
    size?: string;
}) {
    return (
        <Link
            to={`/art/${id}`}
            className="group flex flex-col cursor-pointer mb-2.5"
        >
            <div className="relative">
            <Link to={`/art/${id}`}>
                <img
                    src={src}
                    alt={title}
                    className="w-full rounded-t transition-opacity duration-300 group-hover:opacity-80"
                />
            </Link>
                <div className="absolute rounded-t inset-0 bg-amber-700/0 duration-300 group-hover:bg-amber-700/60" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-title font-semibold italic text-xl tracking-[0.2em] text-slate-50 opacity-0 translate-y-1 transition-all duration-100 group-hover:opacity-100 group-hover:translate-y-0">
                        {title}
                    </span>
                    <span className="absolute bottom-2 font-title text-xs italic tracking-[0.1em] text-slate-50/60 opacity-0 translate-y-1 transition-all duration-100 group-hover:opacity-100 group-hover:translate-y-0">
                        {size}
                    </span>
                </div>
            </div>

            {price ? (
                <div className="flex justify-between items-center border border-t-0 border-slate-300 rounded-b-lg p-2">
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                        {formatNOK(price)}
                    </p>
                    <p className="text-xs text-slate-500/80 dark:text-slate-300/80">
                        {year}
                    </p>
                </div>
            ) : null}
        </Link>
    );
}
