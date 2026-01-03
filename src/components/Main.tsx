import React from "react";
import ProductCard from "./ProductCard.tsx";
import Modal from "./Modal.tsx";

const images = import.meta.glob("../image-library/*.jpg", {
    eager: true,
    import: "default",
}) as Record<string, string>;

export default function Main() {
    // const [searchText, setSearchText] = React.useState("");
    // const [productItems, setProductItems] = React.useState(
    //     Object.entries(images)
    // );
    const [openModal, setOpenModal] = React.useState<string | undefined>();

    // const filterFunction = () => {
    //     const filteredImages = Object.entries(images).filter(([path, src]) => {
    //         const name = path
    //             .split("/")
    //             .pop()
    //             ?.replace(".jpg", "")
    //             .replaceAll("-", " ");
    //         if (
    //             [...searchText.replace(" ", "")].every((char) =>
    //                 name?.includes(char)
    //             )
    //         ) {
    //             return [path, src];
    //         }
    //     });
    //     return filteredImages.filter(Boolean);
    // };

    // React.useEffect(() => {
    //     setProductItems(filterFunction());
    // }, [searchText]);

    return (
        <main className="mx-auto max-w-[1400px] px-5">
            {/* <div className="w-full flex justify-between mb-8">
                <h1 className="text-3xl">Portfølje</h1>
                <input
                    className="border border-slate-300 rounded px-4 py-2"
                    placeholder="Søk i portfølje..."
                    type="text"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div> */}

            <div className="columns-2 md:columns-3 lg:columns-4 gap-5">
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
                            price="12 000 NOK"
                            setOpenModal={setOpenModal}
                        />
                    );
                })}
            </div>
            {openModal ? (
                <Modal image={openModal} setOpenModal={setOpenModal} />
            ) : null}
        </main>
    );
}
