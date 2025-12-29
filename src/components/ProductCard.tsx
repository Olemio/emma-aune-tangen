export default function ProductCard({
    img,
    name,
    price,
    setOpenModal,
}: {
    img?: string;
    name?: string;
    price?: string;
    setOpenModal: (img: string | undefined) => void;
}) {
    return (
        <button
            onClick={() => setOpenModal(img)}
            className="flex flex-col rounded-lg border border-slate-300"
        >
            <img
                className="rounded-t-lg aspect-3/4 object-cover"
                src={`${img}`}
                alt=""
            />
            <div className="flex flex-col px-4 py-5 gap-1">
                <p className="text-sm">{name}</p>
                <p>{price}</p>
            </div>
        </button>
    );
}
