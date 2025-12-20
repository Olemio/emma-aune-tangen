import Header from "./components/Header.tsx";
import ProductCard from "./components/ProductCard.tsx";
import monaLisa from "./temp/mona-lisa-painting.jpg";

function App() {
    return (
        <div>
            <Header />

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
        </div>
    );
}

export default App;
