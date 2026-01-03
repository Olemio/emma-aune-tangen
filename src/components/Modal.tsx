export default function Modal({
    image,
    setOpenModal,
}: {
    image: string;
    setOpenModal: (img: string | undefined) => void;
}) {
    return (
        <div
            className="fixed inset-0 bg-amber-900/20 flex items-center justify-center"
            onClick={() => setOpenModal(undefined)}
        >
            <div
                className="flex flex-col items-end bg-slate-100 px-6 py-4 rounded-lg gap-2 text-lg max-h-[80vh] max-w-[80vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={() => setOpenModal(undefined)}>Close</button>
                <img
                    className="rounded-lg object-contain max-h-[70vh]"
                    src={image}
                    alt=""
                />
            </div>
        </div>
    );
}
