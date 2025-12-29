export default function Modal({
    image,
    setOpenModal,
}: {
    image: string;
    setOpenModal: (img: string | undefined) => void;
}) {
    return (
        <div className="fixed top-0 bg-slate-200/40 flex h-screen w-full justify-center items-center">
            <div className="bg-slate-50 p-2">
                <button onClick={() => setOpenModal(undefined)}>Close</button>
                hello: {image}
                <img
                    className="rounded-t-lg aspect-3/4 object-cover"
                    src={`${image}`}
                    alt=""
                />
            </div>
        </div>
    );
}
