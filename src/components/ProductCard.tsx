export default function ProductCard({
    img,
    name,
}: {
    img?: string;
    name?: string;
}) {
    return (
        <div className="product-box">
            <img className="image" src={`${img}`} alt="" />
            <p className="text-md">{name}</p>
        </div>
    );
}
