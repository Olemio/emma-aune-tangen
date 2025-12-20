import ProductCard from "./ProductCard.tsx";
import monaLisa from "../temp/mona-lisa-painting.jpg";

export default function Main() {
    return (
        <>
            <h1>Mona Lisa Collection</h1>

            <div>
                {Array.from({ length: 100 }).map(() => (
                    <ProductCard
                        img={monaLisa}
                        name={"Mona Lise"}
                        price={"Super masse kroner!"}
                    />
                ))}
            </div>
        </>
    );
}
