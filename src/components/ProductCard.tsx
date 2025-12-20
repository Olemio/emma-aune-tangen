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
        <div>
            <img src={`${img}`} alt="" />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}
