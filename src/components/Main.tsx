import ProductCard from "./ProductCard.tsx";
import monaLisa from "../temp/mona-lisa-painting.jpg";

export default function Main() {
    return (
        <main className="flex flex-col justify-center items-center py-4 mx-auto w-full max-w-[1200px]">
            <h1 className="text-xl">Mona Lisa Collection</h1>

            <div>
                {Array.from({ length: 100 }).map(() => (
                    <ProductCard
                        img={monaLisa}
                        name={"Mona Lise"}
                        price={"Super masse kroner!"}
                    />
                ))}
            </div>
        </main>
    );
}
