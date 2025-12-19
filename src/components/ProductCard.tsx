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
        <div className="product-box">
            <img className="image" src={`${img}`} alt="" />
            <div className="product-box-info">
                <p className="text-md">{name}</p>
                <p className="text-sm">{price}</p>
            </div>
        </div>
    );
}
