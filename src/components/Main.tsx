import ProductCard from "./ProductCard.tsx";
import monaLisa from "../temp/mona-lisa-painting.jpg";

export default function Main() {
    return (
        <main className="flex flex-col items-center mx-auto w-full max-w-[1100px]">
            <h1 className="text-3xl mb-8">Mona Lisa Collection</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {Array.from({ length: 100 }).map(() => (
                    <ProductCard
                        img={monaLisa}
                        name={'Orginal: "Mona Lise"'}
                        price={"99 992 NOK"}
                    />
                ))}
            </div>
        </main>
    );
}
