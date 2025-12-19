import Header from "./components/Header.tsx";
import ProductCard from "./components/ProductCard.tsx";

function App() {
    return (
        <div className="page-wrapper">
            <Header />

            <h1 className="text-lg">Mine bilder av Mona Lise</h1>

            <div className="product-list">
                {Array.from({ length: 10 }).map(() => (
                    <ProductCard
                        img={"./temp/mona-lisa-painting.jpg"}
                        name={"Mona Lise"}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
