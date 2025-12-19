import Header from "./components/Header.tsx";
import ProductCard from "./components/ProductCard.tsx";

function App() {
    return (
        <div className="page-wrapper">
            <Header />

            <h1 className="text-lg">Mine Bilder</h1>

            <div className="product-list">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default App;
