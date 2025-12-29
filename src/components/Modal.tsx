export default function Modal({
    image,
    setOpenModal,
}: {
    image: string;
    setOpenModal: (img: string | undefined) => void;
}) {
    return (
        <div className="fixed top-0 bg-slate-900/60 flex h-screen w-full justify-center items-center">
            <div className="flex flex-col items-end bg-slate-100 px-6 py-4 rounded-lg gap-2 text-lg">
                <button onClick={() => setOpenModal(undefined)}>Close</button>
                <img
                    className="rounded-t-lg aspect-3/4 object-cover"
                    src={`${image}`}
                    alt=""
                />
            </div>
        </div>
    );
}
