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
        <div className="flex flex-col rounded-lg border border-gray-300">
            <img
                className="rounded-t aspect-[4/5] object-cover"
                src={`${img}`}
                alt=""
            />
            <div className="flex flex-col px-4 py-5 gap-1">
                <p className="text-sm">{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}
