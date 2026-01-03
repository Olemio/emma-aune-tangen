export type Artwork = {
    id: string;
    title: string;
    src: string;
    price?: number;
    year?: number;
    size?: string;
    sold?: boolean;
}

const images = import.meta.glob(
  "../image-library/*.jpg",
  { eager: true, import: "default" }
) as Record<string, string>;


export const artworks: Artwork[] = [
  {
    id: "alene",
    title: "Bilde 1",
    src: images["../image-library/alene.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "appelsinen",
    title: "Bilde 2",
    src: images["../image-library/appelsinen.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "bedrageri",
    title: "Bilde 3",
    src: images["../image-library/bedrageri.jpg"],
    price: 2500,
    size: "30x40 cm",
  },
  {
    id: "bla-gutt",
    title: "Bilde 4",
    src: images["../image-library/blå-gutt.jpg"],
  },
  {
    id: "identitet",
    title: "Bilde 5",
    src: images["../image-library/identitet.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "kjokkenet",
    title: "Bilde 6",
    src: images["../image-library/kjøkkenet.jpg"],
  },
  {
    id: "liksom",
    title: "Bilde 7",
    src: images["../image-library/liksom.jpg"],
  },
  {
    id: "oransje-soloppgang",
    title: "Bilde 8",
    src: images["../image-library/oransje-soloppgang.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "pust",
    title: "Bilde 9",
    src: images["../image-library/pust.jpg"],
  },
  {
    id: "regnbuer",
    title: "Bilde 10",
    src: images["../image-library/regnbuer.jpg"],
  },
  {
    id: "snølandskap",
    title: "Bilde 11",
    src: images["../image-library/snølandskap.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "stfu",
    title: "Bilde 12",
    src: images["../image-library/stfu.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "svømming",
    title: "Bilde 13",
    src: images["../image-library/svømming.jpg"],
    price: 3000,
    sold: true,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "voksen",
    title: "Bilde 14",
    src: images["../image-library/voksen.jpg"],
  },
];