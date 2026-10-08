export const WHATSAPP_NUMBER = "919989623276";
export const INSTAGRAM_URL = "https://www.instagram.com/ikashijewels/";
export const INSTAGRAM_HANDLE = "@ikashijewels";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: "Hello Ikashi Jewels, I would like to know more about your jewellery collections.",
  collections:
    "Hello Ikashi Jewels, I would like to explore your collections. Could you please share more details?",
  bridal:
    "Hello Ikashi Jewels, I am looking for bridal jewellery. Could you please share your bridal designs and details?",
  custom:
    "Hello Ikashi Jewels, I would like to discuss a custom-designed piece. Could you please share the available customization options?",
  gallery:
    "Hello Ikashi Jewels, I saw a design in your gallery and would like to enquire about it.",
  product: (name: string) =>
    `Hello Ikashi Jewels, I am interested in ${name}. Could you please share its price, specifications, availability, and any applicable certification details?`,
};

export type Category =
  | "Bridal Jewellery"
  | "Natural Diamond Jewellery"
  | "Fine Gold Jewellery"
  | "Engagement Rings"
  | "Diamond Necklaces & Earrings"
  | "Bangles & Bracelets"
  | "Custom-Designed Jewellery";

export const CATEGORIES: Category[] = [
  "Bridal Jewellery",
  "Natural Diamond Jewellery",
  "Fine Gold Jewellery",
  "Engagement Rings",
  "Diamond Necklaces & Earrings",
  "Bangles & Bracelets",
  "Custom-Designed Jewellery",
];

export type Product = {
  id: string;
  name: string;
  image: string;
  categories: Category[];
  gallery: GalleryTag[];
  note: string;
};

export type GalleryTag = "Bridal" | "Natural Diamonds" | "Fine Gold" | "Necklaces & Earrings" | "Bangles & Bracelets";

export const products: Product[] = [
  {
    id: "emerald-diamond-necklace-set",
    name: "Emerald Diamond Necklace Set",
    image: "/images/emerald-diamond-necklace-set.jpg",
    categories: ["Natural Diamond Jewellery", "Diamond Necklaces & Earrings", "Bridal Jewellery"],
    gallery: ["Natural Diamonds", "Necklaces & Earrings", "Bridal"],
    note: "A diamond line necklace centred on an emerald, paired with matching earrings.",
  },
  {
    id: "polki-emerald-choker",
    name: "Polki & Emerald Bridal Choker",
    image: "/images/polki-emerald-choker.jpg",
    categories: ["Bridal Jewellery", "Fine Gold Jewellery", "Diamond Necklaces & Earrings"],
    gallery: ["Bridal", "Fine Gold", "Necklaces & Earrings"],
    note: "A statement choker with pearls, emerald detailing and gold drops.",
  },
  {
    id: "diamond-lace-necklace-set",
    name: "Diamond Lace Necklace Set",
    image: "/images/diamond-lace-necklace-set.jpg",
    categories: ["Natural Diamond Jewellery", "Diamond Necklaces & Earrings", "Bridal Jewellery"],
    gallery: ["Natural Diamonds", "Necklaces & Earrings", "Bridal"],
    note: "An intricate lace-like diamond necklace with coordinating earrings.",
  },
  {
    id: "diamond-tassel-pendant-set",
    name: "Diamond Tassel Pendant Set",
    image: "/images/diamond-tassel-pendant-set.jpg",
    categories: ["Natural Diamond Jewellery", "Diamond Necklaces & Earrings"],
    gallery: ["Natural Diamonds", "Necklaces & Earrings"],
    note: "A delicate diamond chain with a tassel pendant and matching drops.",
  },
  {
    id: "pearl-elephant-kada",
    name: "Basra Pearl Elephant Kada",
    image: "/images/pearl-elephant-kada.jpg",
    categories: ["Fine Gold Jewellery", "Bangles & Bracelets", "Bridal Jewellery"],
    gallery: ["Fine Gold", "Bangles & Bracelets", "Bridal"],
    note: "Pearls strung with sculpted gold elephant heads and a ruby accent.",
  },
  {
    id: "ruby-diamond-bangle",
    name: "Ruby & Diamond Bangle",
    image: "/images/ruby-diamond-bangle.jpg",
    categories: ["Natural Diamond Jewellery", "Bangles & Bracelets"],
    gallery: ["Natural Diamonds", "Bangles & Bracelets"],
    note: "Alternating rows of rubies and diamonds in a slim, everyday bangle.",
  },
  {
    id: "solitaire-ring",
    name: "Diamond Solitaire Ring",
    image: "/images/ruby-diamond-bangle.jpg",
    categories: ["Engagement Rings", "Natural Diamond Jewellery"],
    gallery: [],
    note: "A classic solitaire band — shown here worn with the ruby & diamond bangle.",
  },
  {
    id: "ruby-pearl-jhumkas",
    name: "Ruby & Pearl Diamond Jhumkas",
    image: "/images/ruby-pearl-jhumkas.jpg",
    categories: ["Diamond Necklaces & Earrings", "Natural Diamond Jewellery", "Bridal Jewellery"],
    gallery: ["Necklaces & Earrings", "Natural Diamonds", "Bridal"],
    note: "Baguette-diamond tops with ruby domes and South Sea–style pearl drops.",
  },
  {
    id: "pearl-diamond-jhumkas",
    name: "Pearl & Diamond Gold Jhumkas",
    image: "/images/pearl-diamond-jhumkas.jpg",
    categories: ["Diamond Necklaces & Earrings", "Fine Gold Jewellery", "Custom-Designed Jewellery"],
    gallery: ["Necklaces & Earrings", "Fine Gold"],
    note: "Floral diamond studs leading into openwork gold jhumkas with pearl fringe.",
  },
  {
    id: "emerald-drop-earrings",
    name: "Emerald Drop Earrings",
    image: "/images/emerald-drop-earrings.jpg",
    categories: ["Diamond Necklaces & Earrings", "Natural Diamond Jewellery", "Custom-Designed Jewellery"],
    gallery: ["Necklaces & Earrings", "Natural Diamonds"],
    note: "Faceted emerald drops framed in diamonds, elegant from day to evening.",
  },
];

export const collectionCards: { title: Category; image: string; blurb: string }[] = [
  { title: "Bridal Jewellery", image: "/images/polki-emerald-choker.jpg", blurb: "Heirloom pieces for the day itself." },
  { title: "Natural Diamond Jewellery", image: "/images/diamond-lace-necklace-set.jpg", blurb: "GIA- & IGI-certified natural diamonds." },
  { title: "Fine Gold Jewellery", image: "/images/pearl-elephant-kada.jpg", blurb: "Gold, shaped with tradition." },
  { title: "Engagement Rings", image: "/images/ruby-diamond-bangle.jpg", blurb: "The beginning of forever." },
  { title: "Diamond Necklaces & Earrings", image: "/images/emerald-diamond-necklace-set.jpg", blurb: "Light that frames the face." },
  { title: "Bangles & Bracelets", image: "/images/ruby-diamond-bangle.jpg", blurb: "Grace at the wrist." },
  { title: "Custom-Designed Jewellery", image: "/images/emerald-drop-earrings.jpg", blurb: "Your inspiration, considered." },
];
