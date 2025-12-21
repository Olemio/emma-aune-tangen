import ProductCard from "./ProductCard.tsx";

const images = import.meta.glob("../image-library/*.jpg", {
    eager: true,
    import: "default",
}) as Record<string, string>;

export default function Main() {
    return (
        <main className="flex flex-col items-center mx-auto w-full max-w-[1000px]">
            <h1 className="text-3xl mb-8">Portfølje</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {Object.entries(images).map(([path, src]) => {
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
