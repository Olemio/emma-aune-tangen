import React from "react";
import ProductCard from "./ProductCard.tsx";

const images = import.meta.glob("../image-library/*.jpg", {
    eager: true,
    import: "default",
}) as Record<string, string>;

export default function Main() {
    const [searchText, setSearchText] = React.useState("");
    const [productItems, setProductItems] = React.useState(
        Object.entries(images)
    );

    const filterFunction = () => {
        const filteredImages = Object.entries(images).filter(([path, src]) => {
            const name = path
                .split("/")
                .pop()
                ?.replace(".jpg", "")
                .replaceAll("-", " ");
            if (
                [...searchText.replace(" ", "")].every((char) =>
                    name?.includes(char)
                )
            ) {
                return [path, src];
            }
        });
        console.log(filteredImages);
        return filteredImages.filter(Boolean);
    };

    React.useEffect(() => {
        setProductItems(filterFunction());
    }, [searchText]);

    return (
        <main className="flex flex-col items-center mx-auto w-full max-w-[1000px]">
            <div className="w-full flex justify-between mb-8">
                <h1 className="text-3xl">Portfølje</h1>
                <input
                    className="border border-slate-300 rounded px-4 py-2"
                    placeholder="Søk i portfølje..."
                    type="text"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {productItems.map(([path, src]) => {
                    const name = path
                        .split("/")
                        .pop()
                        ?.replace(".jpg", "")
                        .replaceAll("-", " ");

                    return (
                        <ProductCard
                            key={path}
                            img={src}
                            name={name}
                            price="..."
                        />
                    );
                })}
            </div>
        </main>
    );
}
