export type Artwork = {
    id: string;
    title: string;
    src: string;
    price?: number;
    year?: number;
    size?: string;
    sold?: boolean;
    description?: string;
}

const images = import.meta.glob(
  "../image-library/*.jpg",
  { eager: true, import: "default" }
) as Record<string, string>;

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Alone in Quiet Light",
    src: images["../image-library/alene.jpg"],
    price: 4200,
    sold: true,
    year: 2022,
    size: "50x70 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "2",
    title: "Still Life with an Orange",
    src: images["../image-library/appelsinen.jpg"],
    price: 3200,
    year: 2023,
    size: "40x50 cm",
    description:
      "Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: "3",
    title: "The Weight of Deception",
    src: images["../image-library/bedrageri.jpg"],
    price: 2500,
    sold: true,
    year: 2021,
    size: "30x40 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit."
  },
  {
    id: "4",
    title: "Boy in Blue Tones",
    src: images["../image-library/blå-gutt.jpg"],
    price: 3800,
    year: 2024,
    size: "45x60 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident."
  },
  {
    id: "5",
    title: "Searching for Identity",
    src: images["../image-library/identitet.jpg"],
    price: 5200,
    sold: true,
    year: 2023,
    size: "60x80 cm",
    description:
      "Lorem ipsum dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
  },
  {
    id: "6",
    title: "The Kitchen at Dusk",
    src: images["../image-library/kjøkkenet.jpg"],
    year: 2020,
    size: "35x45 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit."
  },
  {
    id: "7",
    title: "As If It Meant Something",
    src: images["../image-library/liksom.jpg"],
    price: 2900,
    year: 2022,
    size: "40x40 cm",
    description:
      "Lorem ipsum dolor sit amet. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet."
  },
  {
    id: "8",
    title: "Orange Light at Sunrise",
    src: images["../image-library/oransje-soloppgang.jpg"],
    price: 6100,
    sold: true,
    year: 2024,
    size: "70x90 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam."
  },
  {
    id: "9",
    title: "Breath Held Between Moments",
    src: images["../image-library/pust.jpg"],
    price: 3400,
    year: 2021,
    size: "45x55 cm",
    description:
      "Lorem ipsum dolor sit amet. Quis autem vel eum iure reprehenderit qui in ea voluptate."
  },
  {
    id: "10",
    title: "Rainbows After the Silence",
    src: images["../image-library/regnbuer.jpg"],
    price: 4600,
    sold: true,
    year: 2022,
    size: "50x65 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio."
  },
  {
    id: "11",
    title: "Snowfall Over Still Ground",
    src: images["../image-library/snølandskap.jpg"],
    price: 7200,
    sold: true,
    year: 2023,
    size: "80x100 cm",
    description:
      "Lorem ipsum dolor sit amet. Temporibus autem quibusdam et aut officiis debitis."
  },
  {
    id: "12",
    title: "A Quiet Refusal to Speak",
    src: images["../image-library/stfu.jpg"],
    price: 2700,
    year: 2020,
    size: "30x40 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est."
  },
  {
    id: "13",
    title: "Learning to Stay Afloat",
    src: images["../image-library/svømming.jpg"],
    price: 3900,
    sold: true,
    year: 2024,
    size: "50x60 cm",
    description:
      "Lorem ipsum dolor sit amet. Nam libero tempore, cum soluta nobis est eligendi optio."
  },
  {
    id: "14",
    title: "Growing Into Something Real",
    src: images["../image-library/voksen.jpg"],
    price: 4800,
    year: 2022,
    size: "55x70 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi."
  }
];

