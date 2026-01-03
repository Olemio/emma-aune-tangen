export type SortKey =
    | "price-asc"
    | "price-desc"
    | "year-desc"
    | "year-asc"
    | "title-asc"
    | "title-desc";

type Props = {
    sort: SortKey;
    setSort: (v: SortKey) => void;

    onReset: () => void;
};

export default function Controls({ sort, setSort, onReset }: Props) {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <p className="text-sm opacity-70">Sort</p>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="rounded border px-3 py-2 text-sm"
                >
                    <option value="price-asc">Pris lav → høy</option>
                    <option value="price-desc">Pris høy → lav</option>
                    <option value="year-desc">År ny → gammel</option>
                    <option value="year-asc">År gammel → ny</option>
                    <option value="title-asc">Alfabetisk</option>
                    <option value="title-desc">Motsatt alfabetisk</option>
                </select>
            </div>
            <button
                onClick={onReset}
                className="rounded border px-3 py-2 text-sm"
            >
                Reset
            </button>
        </div>
    );
}
