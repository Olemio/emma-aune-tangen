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
        <div className="flex flex-col bg-teal-100 p-2 rounded">
            <img src={`${img}`} alt="" />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}
