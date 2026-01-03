import React from "react";
import ProductCard from "./ProductCard.tsx";
import Modal from "./Modal.tsx";
import { artworks } from "../data/artworks.ts";

export default function Main() {
    const [openModal, setOpenModal] = React.useState<string | undefined>();

    return (
        <main className="mx-auto max-w-[1400px] px-5">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2.5">
                {artworks.map(({ id, src, title }) => {
                    const name = title
                        .split("/")
                        .pop()
                        ?.replace(".jpg", "")
                        .replaceAll("-", " ");

                    return (
                        <ProductCard
                            key={id}
                            img={src}
                            name={name}
                            price="12.000,00 NOK"
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
