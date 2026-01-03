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
        <button onClick={() => setOpenModal(img)} className="flex flex-col">
            <img className="object-cover" src={`${img}`} alt="" />
            <div className="flex flex justify-between py-2 gap-1">
                <p className="text-sm">{name}</p>
                <p>{price}</p>
            </div>
        </button>
    );
}
