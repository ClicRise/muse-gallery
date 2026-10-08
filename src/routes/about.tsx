import { createFileRoute, Link } from "@tanstack/react-router";
import { messages } from "@/lib/site";
import { GoldRule, PageHero, WaButton } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ikashi Jewels" },
      { name: "description", content: "Ikashi Jewels: natural diamond, bridal and fine gold jewellery with a focus on GIA- and IGI-certified natural diamonds." },
      { property: "og:title", content: "About Ikashi Jewels" },
      { property: "og:description", content: "An appreciation for fine jewellery, natural diamonds and authentic craftsmanship." },
    ],
  }),
  component: About,
});

const blocks = [
  {
    eyebrow: "Our Story",
    title: "Ikashi Jewels",
    img: "/images/emerald-drop-earrings.jpg",
    text: "Ikashi Jewels is a jewellery brand devoted to natural diamond jewellery, bridal jewellery and fine gold jewellery. Our name carries a simple promise: For the Muse in You — jewellery that reflects the woman who wears it.",
  },
  {
    eyebrow: "Jewellery & Craftsmanship",
    title: "Authentic Craftsmanship",
    img: "/images/polki-emerald-choker.jpg",
    text: "From traditional bridal chokers to delicate diamond earrings, each design reflects authentic craftsmanship and trusted purity — the values at the heart of everything we create and curate.",
  },
  {
    eyebrow: "Natural Diamond Focus",
    title: "GIA & IGI Certified",
    img: "/images/diamond-lace-necklace-set.jpg",
    text: "We specialize in GIA- and IGI-certified natural diamonds. Certification details for individual pieces are shared on enquiry, so you can choose with confidence.",
  },
  {
    eyebrow: "A Personal Approach",
    title: "A Conversation, Not a Checkout",
    img: "/images/pearl-diamond-jhumkas.jpg",
    text: "Fine jewellery deserves a personal conversation. Reach us on WhatsApp to ask about a piece, discuss bridal requirements or share inspiration for something made just for you. Ikashi Jewels connects with clients from Hyderabad and Mumbai.",
  },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Ikashi" title="An Appreciation for Fine Jewellery" />
      <div className="mx-auto max-w-6xl space-y-24 px-5 py-24 md:px-8">
        {blocks.map((b, i) => (
          <section key={b.title} className="grid items-center gap-12 md:grid-cols-2">
            <img src={b.img} alt={b.title} loading="lazy" className={`aspect-[4/5] w-full object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="eyebrow text-gold">{b.eyebrow}</p>
              <h2 className="mt-4 text-4xl text-primary md:text-5xl">{b.title}</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </section>
        ))}
      </div>
      <section className="border-t border-border px-5 py-20 text-center">
        <GoldRule />
        <h2 className="mt-6 text-4xl text-primary">Begin Your Search</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/collections" className="inline-flex bg-primary px-7 py-3.5 text-xs tracking-[0.2em] text-primary-foreground uppercase hover:bg-forest">
            Explore Collections
          </Link>
          <WaButton message={messages.general} variant="outline">Enquire on WhatsApp</WaButton>
        </div>
      </section>
    </>
  );
}
