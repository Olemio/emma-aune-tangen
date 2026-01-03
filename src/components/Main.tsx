import React from "react";
import ProductCard from "./ProductCard.tsx";
import Modal from "./Modal.tsx";
import { artworks } from "../data/artworks.ts";
import { formatTitle } from "../utils/helpers.tsx";

export default function Main() {
    const [openModal, setOpenModal] = React.useState<string | undefined>();

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
