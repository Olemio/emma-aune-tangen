import React from "react";
import ProductCard from "./ProductCard.tsx";

const images = import.meta.glob("../image-library/*.jpg", {
    eager: true,
    import: "default",
}) as Record<string, string>;

export default function Main() {
    const [searchText, setSearchText] = React.useState("");
    const imageArray = Object.entries(images);
    const [productItems, setProductItems] = React.useState(imageArray);

    const filterFunction = () => {
        const filteredImages = imageArray.map(([path, src]) => {
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
        return filteredImages.filter(Boolean);
    };

    React.useEffect(() => {
        setProductItems(filterFunction());
    }, [searchText]);

    return (
        <main className="flex flex-col items-center mx-auto w-full max-w-[1000px]">
            <h1 className="text-3xl mb-8">Portfølje</h1>

            <input
                className="bg-red-500"
                placeholder="Søk i portfølje..."
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
            />

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
