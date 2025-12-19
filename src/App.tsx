import Header from "./components/Header.tsx";

function App() {
    return (
        <div className="page-wrapper">
            <Header />

            <h1 className="text-lg">Mine Bilder</h1>

            <div className="product-list">
                <img
                    className="image"
                    src="../temp/mona-lisa-painting.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default App;
