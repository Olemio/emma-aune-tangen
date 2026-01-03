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
                className="flex flex-col min-w-80vw items-end bg-slate-100 dark:bg-[#191B1A] px-6 py-4 rounded-lg gap-2 text-lg max-h-[80vh] max-w-[80vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={() => setOpenModal(undefined)}>Close</button>
                <img
                    className="rounded-lg object-contain max-h-[70vh]"
                    src={image}
                    alt=""
                />
                <div className="flex w-full justify-between">
                    <p>12.000,00 NOK</p>
                    <p>Original</p>
                    <p>Without frame</p>
                    <p>x: 60cm / y: 60cm</p>
                </div>
            </div>
        </div>
    );
}
