import React from "react";
import ProductCard from "../components/ProductCard.tsx";
import { artworks, type Artwork } from "../data/artworks.ts";
import { formatTitle } from "../utils/helpers.tsx";
import Controls, { type SortKey } from "../components/Controls.tsx";

export default function Main() {
  const [openModalId, setOpenModalId] = React.useState<string | undefined>();
  const [sort, setSort] = React.useState<SortKey>("year-desc");
  const [search, setSearch] = React.useState<string>("");

  const findArtworkById = (id: string | undefined): Artwork | undefined => {
    return artworks.find((artwork) => artwork.id === id);
  };

  const selectedArtwork = React.useMemo(
    () => findArtworkById(openModalId),
    [openModalId],
  );

  const visibleArtworks = React.useMemo(() => {
    const q = search.toLowerCase().replace(/\s+/g, "");

    let list = artworks.filter((a) => {
      if (!q) return true;

      const title = a.title.toLowerCase().replace(/\s+/g, "");

      return [...q].every((char) => title.includes(char));
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return (a.price ?? Infinity) - (b.price ?? Infinity);
        case "price-desc":
          return (b.price ?? Infinity) - (a.price ?? Infinity);
        case "year-asc":
          return (a.year ?? Infinity) - (b.year ?? Infinity);
        case "year-desc":
          return (b.year ?? -Infinity) - (a.year ?? -Infinity);
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
      }
    });

    return list;
  }, [sort, search]);

  return (
    <main className="mx-auto max-w-[1400px] px-5">
      <Controls
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
        onReset={() => {
          setSort("year-desc");
          setSearch("");
        }}
      />

      <div className="columns-2 md:columns-3 lg:columns-4 gap-2.5">
        {visibleArtworks.map(({ id, src, title, price, year, size }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              src={src}
              title={formatTitle(title)}
              price={price}
              year={year}
              size={size}
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
