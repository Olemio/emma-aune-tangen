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
    title: "Alene",
    src: images["../image-library/alene.jpg"],
  },
  {
    id: "appelsinen",
    title: "Appelsinen",
    src: images["../image-library/appelsinen.jpg"],
  },
  {
    id: "bedrageri",
    title: "Bedrageri",
    src: images["../image-library/bedrageri.jpg"],
  },
  {
    id: "bla-gutt",
    title: "Blå gutt",
    src: images["../image-library/blå-gutt.jpg"],
  },
  {
    id: "identitet",
    title: "Identitet",
    src: images["../image-library/identitet.jpg"],
  },
  {
    id: "kjokkenet",
    title: "Kjøkkenet",
    src: images["../image-library/kjøkkenet.jpg"],
  },
  {
    id: "liksom",
    title: "Liksom",
    src: images["../image-library/liksom.jpg"],
  },
  {
    id: "oransje-soloppgang",
    title: "Oransje soloppgang",
    src: images["../image-library/oransje-soloppgang.jpg"],
  },
  {
    id: "pust",
    title: "Pust",
    src: images["../image-library/pust.jpg"],
  },
  {
    id: "regnbuer",
    title: "Regnbuer",
    src: images["../image-library/regnbuer.jpg"],
  },
  {
    id: "snølandskap",
    title: "Snølandskap",
    src: images["../image-library/snølandskap.jpg"],
  },
  {
    id: "stfu",
    title: "STFU",
    src: images["../image-library/stfu.jpg"],
  },
  {
    id: "svømming",
    title: "Svømming",
    src: images["../image-library/svømming.jpg"],
  },
  {
    id: "voksen",
    title: "Voksen",
    src: images["../image-library/voksen.jpg"],
  },
];