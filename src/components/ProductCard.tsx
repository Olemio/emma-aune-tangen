export default function ProductCard({
    img,
    name,
    price,
}: {
    img?: string;
    name?: string;
    price?: string;
}) {
    return (
        <div className="flex flex-col bg-teal-100 p-2 rounded border border-gray-400">
            <img className="rounded" src={`${img}`} alt="" />
            <div className="flex justify-between items-center p-2">
                <p>{name}</p>
                <p className="text-sm">{price}</p>
            </div>
        </div>
    );
}
