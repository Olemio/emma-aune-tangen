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
            className="flex flex-col rounded-lg"
        >
            <img className="rounded object-cover" src={`${img}`} alt="" />
            <div className="flex flex-col items-start px-4 py-5 gap-1">
                <p className="text-sm">{name}</p>
                <p>{price}</p>
            </div>
        </button>
    );
}
