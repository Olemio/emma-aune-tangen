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

    search: string;
    setSearch: (v: string) => void;

    onReset: () => void;
};

export default function Controls({
    sort,
    setSort,
    search,
    setSearch,
    onReset,
}: Props) {
    return (
        <div className="grid grid-cols-3 px-4 mb-4 text-sm border-b border-slate-200 ">
            <div className="flex justify-start">
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                >
                    <option value="price-asc">Pris lav → høy</option>
                    <option value="price-desc">Pris høy → lav</option>
                    <option value="year-desc">År ny → gammel</option>
                    <option value="year-asc">År gammel → ny</option>
                    <option value="title-asc">Alfabetisk</option>
                    <option value="title-desc">Motsatt alfabetisk</option>
                </select>
            </div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                className="text-center focus:outline-none text-amber-700 text-lg"
            />

            <div className="flex justify-end">
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}
