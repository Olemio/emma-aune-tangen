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
    id: "1",
    title: "Bilde 1",
    src: images["../image-library/alene.jpg"],
    price: 4200,
    sold: true,
    year: 2022,
    size: "50x70 cm",
  },
  {
    id: "2",
    title: "Bilde 2",
    src: images["../image-library/appelsinen.jpg"],
    price: 3200,
    year: 2023,
    size: "40x50 cm",
  },
  {
    id: "3",
    title: "Bilde 3",
    src: images["../image-library/bedrageri.jpg"],
    price: 2500,
    sold: true,
    year: 2021,
    size: "30x40 cm",
  },
  {
    id: "4",
    title: "Bilde 4",
    src: images["../image-library/blå-gutt.jpg"],
    price: 3800,
    year: 2024,
    size: "45x60 cm",
  },
  {
    id: "5",
    title: "Bilde 5",
    src: images["../image-library/identitet.jpg"],
    price: 5200,
    sold: true,
    year: 2023,
    size: "60x80 cm",
  },
  {
    id: "6",
    title: "Bilde 6",
    src: images["../image-library/kjøkkenet.jpg"],
    year: 2020,
    size: "35x45 cm",
  },
  {
    id: "7",
    title: "Bilde 7",
    src: images["../image-library/liksom.jpg"],
    price: 2900,
    year: 2022,
    size: "40x40 cm",
  },
  {
    id: "8",
    title: "Bilde 8",
    src: images["../image-library/oransje-soloppgang.jpg"],
    price: 6100,
    sold: true,
    year: 2024,
    size: "70x90 cm",
  },
  {
    id: "9",
    title: "Bilde 9",
    src: images["../image-library/pust.jpg"],
    price: 3400,
    year: 2021,
    size: "45x55 cm",
  },
  {
    id: "10",
    title: "Bilde 10",
    src: images["../image-library/regnbuer.jpg"],
    price: 4600,
    sold: true,
    year: 2022,
    size: "50x65 cm",
  },
  {
    id: "11",
    title: "Bilde 11",
    src: images["../image-library/snølandskap.jpg"],
    price: 7200,
    sold: true,
    year: 2023,
    size: "80x100 cm",
  },
  {
    id: "12",
    title: "Bilde 12",
    src: images["../image-library/stfu.jpg"],
    price: 2700,
    year: 2020,
    size: "30x40 cm",
  },
  {
    id: "13",
    title: "Bilde 13",
    src: images["../image-library/svømming.jpg"],
    price: 3900,
    sold: true,
    year: 2024,
    size: "50x60 cm",
  },
  {
    id: "14",
    title: "Bilde 14",
    src: images["../image-library/voksen.jpg"],
    price: 4800,
    year: 2022,
    size: "55x70 cm",
  },
];