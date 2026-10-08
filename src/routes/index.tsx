import { createFileRoute, Link } from "@tanstack/react-router";
import { collectionCards, messages, products } from "@/lib/site";
import { Carousel, CtaBanner, GoldRule, ProductCard, WaButton } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ikashi Jewels — Natural Diamond & Bridal Jewellery" },
      { name: "description", content: "Natural diamond jewellery, bridal pieces and fine gold jewellery. GIA- & IGI-certified natural diamonds. Enquire on WhatsApp." },
      { property: "og:title", content: "Ikashi Jewels — For the Muse in You" },
      { property: "og:description", content: "Natural diamond, bridal and fine gold jewellery. Enquire on WhatsApp." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.id !== "solitaire-ring").slice(0, 8);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Mobile hero */}
        <div className="md:hidden">
          <div className="relative">
            <img
              src="/images/emerald-drop-earrings.jpg"
              alt="Model wearing emerald and diamond drop earrings"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="fade-up -mt-10 relative px-6 pb-14 text-center">
            <p className="eyebrow text-gold">For the Muse in You</p>
            <h1 className="mt-4 text-[2.6rem] leading-[1.08] text-primary">
              Elegance, Crafted to Be <em className="text-gold">Cherished</em>
            </h1>
            <p className="mx-auto mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              Natural diamond jewellery, bridal pieces and fine gold — designed for the moments you will want to remember.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/collections"
                className="inline-flex items-center justify-center bg-primary px-6 py-4 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase"
              >
                Explore Collections
              </Link>
              <WaButton message={messages.general} variant="outline" className="py-4">Enquire on WhatsApp</WaButton>
            </div>
          </div>
        </div>
        <div className="mx-auto hidden max-w-7xl items-center gap-10 px-8 py-24 md:grid md:grid-cols-12">
          <div className="fade-up md:col-span-5">
            <p className="eyebrow text-gold">For the Muse in You</p>
            <h1 className="mt-6 text-6xl leading-[1.05] text-primary lg:text-7xl">
              Elegance, Crafted to Be <em className="text-gold">Cherished</em>
            </h1>
            <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
              Natural diamond jewellery, bridal pieces and fine gold — designed for the moments you will want to
              remember, and the woman who makes them hers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="inline-flex items-center px-7 py-3.5 text-xs font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground transition-colors hover:bg-forest"
              >
                Explore Collections
              </Link>
              <WaButton message={messages.general} variant="outline">Enquire on WhatsApp</WaButton>
            </div>
          </div>
          <div className="relative md:col-span-7">
            <div className="grid grid-cols-5 gap-4">
              <img
                src="/images/emerald-drop-earrings.jpg"
                alt="Model wearing emerald and diamond drop earrings"
                className="col-span-3 aspect-[3/4] w-full object-cover"
              />
              <div className="col-span-2 flex flex-col gap-4 pt-16">
                <img src="/images/emerald-diamond-necklace-set.jpg" alt="Emerald diamond necklace set" className="aspect-[3/4] w-full object-cover" />
                <img src="/images/ruby-pearl-jhumkas.jpg" alt="Ruby and pearl diamond jhumkas" className="aspect-square w-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-2/3 w-1/2 border border-gold/50" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-card px-5 py-24 text-center md:py-32">
        <GoldRule />
        <h2 className="mx-auto mt-8 max-w-3xl text-4xl text-primary md:text-6xl">Jewellery That Speaks Without Words</h2>
        <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">
          Ikashi Jewels brings together natural diamond jewellery, bridal jewellery and fine gold jewellery —
          pieces chosen for their authentic craftsmanship and trusted purity, meant to be worn, treasured and
          passed on.
        </p>
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-3">
          {["Natural Diamonds", "Bridal Jewellery", "Fine Gold"].map((t) => (
            <div key={t}>
              <p className="font-serif text-3xl text-foreground">{t}</p>
              <span className="mx-auto mt-3 block h-px w-10 bg-gold" />
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">The Collections</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">Curated for Every Chapter</h2>
          </div>
          <Link to="/collections" className="eyebrow border-b border-gold pb-1 text-primary">View all</Link>
        </div>
        <Carousel label="Collections">
          {collectionCards.map((c) => (
            <Link
              key={c.title}
              to="/collections"
              search={{ category: c.title }}
              className="group relative block w-[78%] shrink-0 snap-start overflow-hidden sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <img src={c.image} alt={c.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-1 text-sm text-ivory/75">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </section>

      {/* Featured */}
      <section className="bg-secondary/50 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="eyebrow text-gold">Featured Jewellery</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">Pieces to Fall For</h2>
            <GoldRule className="mt-6" />
          </div>
          <div className="mt-14">
            <Carousel label="Featured jewellery">
              {featured.map((p) => (
                <div key={p.id} className="flex w-[78%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
                  <ProductCard p={p} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Bridal */}
      <section className="grid md:grid-cols-2">
        <img src="/images/polki-emerald-choker.jpg" alt="Polki and emerald bridal choker" loading="lazy" className="h-full max-h-[760px] w-full object-cover" />
        <div className="flex flex-col justify-center bg-forest px-8 py-20 text-ivory md:px-16">
          <p className="eyebrow text-gold">Bridal</p>
          <h2 className="mt-5 text-4xl md:text-6xl">For Moments That Stay With You</h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/75">
            From statement chokers to diamond sets and heirloom kadas, our bridal jewellery is chosen to carry the
            weight of a day you will remember forever — and to be worn long after it.
          </p>
          <div className="mt-10"><WaButton message={messages.bridal} variant="gold">Enquire About Bridal</WaButton></div>
        </div>
      </section>

      {/* Certification */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">Natural Diamonds</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">Certified Natural Diamonds</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ikashi Jewels specializes in GIA- and IGI-certified natural diamonds. Independent certification from
              recognised gemological laboratories offers clarity about a diamond's characteristics.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Certification details for a specific piece can be requested when you enquire.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              ["GIA", "Gemological Institute of America"],
              ["IGI", "International Gemological Institute"],
            ].map(([a, b]) => (
              <div key={a} className="border border-gold/50 bg-card p-8 text-center">
                <p className="font-serif text-5xl text-primary">{a}</p>
                <span className="mx-auto my-4 block h-px w-8 bg-gold" />
                <p className="text-xs leading-relaxed tracking-wider text-muted-foreground uppercase">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-card px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <img src="/images/pearl-elephant-kada.jpg" alt="Close-up of gold elephant detailing on a pearl kada" loading="lazy" className="aspect-square w-full object-cover" />
          <div>
            <p className="eyebrow text-gold">Craftsmanship</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">An Appreciation for Every Detail</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A sculpted elephant clasp. The setting of a single stone. The fall of a pearl fringe. Fine jewellery
              lives in the details, and every piece is considered for how it catches light and how it feels to wear.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 text-center">
          <p className="eyebrow text-gold">Gallery</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">A Closer Look</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["diamond-lace-necklace-set", "pearl-diamond-jhumkas", "ruby-diamond-bangle", "diamond-tassel-pendant-set"].map((s) => (
            <img key={s} src={`/images/${s}.jpg`} alt={s.replace(/-/g, " ")} loading="lazy" className="aspect-[3/4] w-full object-cover" />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/collections" className="inline-flex border border-primary px-7 py-3.5 text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground">
            View the Collections
          </Link>
        </div>
      </section>

      <CtaBanner
        title="Find a Piece That Feels Like You"
        text="Tell us what you are looking for — an occasion, a stone, a feeling — and we will help you discover it."
        message={messages.general}
        label="Enquire on WhatsApp"
      />
    </>
  );
}
