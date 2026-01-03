import React from "react";
import ProductCard from "../components/ProductCard.tsx";
import Modal from "../components/Modal.tsx";
import { artworks, type Artwork } from "../data/artworks.ts";
import { formatTitle } from "../utils/helpers.tsx";

export default function Main() {
    const [openModalId, setOpenModalId] = React.useState<string | undefined>();

    const findArtworkById = (id: string | undefined): Artwork | undefined => {
        return artworks.find((artwork) => artwork.id === id);
    };

    const selectedArtwork = React.useMemo(
        () => findArtworkById(openModalId),
        [openModalId]
    );

    return (
        <main className="mx-auto max-w-[1400px] px-5">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2.5">
                {artworks.map(({ id, src, title, price }) => {
                    return (
                        <ProductCard
                            key={id}
                            id={id}
                            src={src}
                            title={formatTitle(title)}
                            price={price}
                            setOpenModalId={setOpenModalId}
                        />
                    );
                })}
            </div>

            {selectedArtwork ? (
                <Modal data={selectedArtwork} setOpenModalId={setOpenModalId} />
            ) : null}
        </main>
    );
}
