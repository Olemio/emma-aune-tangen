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
            <img className="" src={`${img}`} alt="" />
            <div className="flex px-2 pt-1 pb-4">
                <p className="text-sm text-slate-500">{price}</p>
            </div>
        </button>
    );
}
