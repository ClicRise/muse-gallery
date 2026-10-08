import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, messages, products, type Category } from "@/lib/site";
import { GoldRule, PageHero, ProductCard, WaButton } from "@/components/site";

type Search = { category?: Category };

export const Route = createFileRoute("/collections")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: CATEGORIES.includes(s.category as Category) ? (s.category as Category) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Collections — Ikashi Jewels" },
      { name: "description", content: "Browse bridal, natural diamond, fine gold, engagement rings, necklaces, earrings, bangles and custom-designed jewellery." },
      { property: "og:title", content: "Collections — Ikashi Jewels" },
      { property: "og:description", content: "Explore Ikashi Jewels collections and enquire for price on WhatsApp." },
    ],
  }),
  component: Collections,
});

function Collections() {
  const { category } = Route.useSearch();
  const list = category ? products.filter((p) => p.categories.includes(category)) : products;
  const tabs: (Category | undefined)[] = [undefined, ...CATEGORIES];

  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="The Ikashi Collections"
        intro="Every piece is available on enquiry. Select a collection, then message us on WhatsApp for price, specifications, availability and certification details."
      />
      <div className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur md:top-24">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 md:flex-wrap md:justify-center md:px-8" role="tablist" aria-label="Filter collections">
          {tabs.map((t) => {
            const active = t === category;
            return (
              <Link
                key={t ?? "all"}
                to="/collections"
                search={{ category: t }}
                role="tab"
                aria-selected={active}
                className={`shrink-0 border px-4 py-2 text-[0.7rem] tracking-[0.16em] uppercase transition-colors ${
                  active ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground/75 hover:border-gold hover:text-primary"
                }`}
              >
                {t ?? "All Collections"}
              </Link>
            );
          })}
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <p className="mb-8 text-sm text-muted-foreground">{list.length} {list.length === 1 ? "piece" : "pieces"}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} p={p} category={category} />)}
        </div>
      </section>
      <section className="bg-forest px-5 py-20 text-center text-ivory md:py-24">
        <GoldRule />
        <p className="eyebrow mt-6 text-gold">Custom-Designed Jewellery</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Looking for something specific?</h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ivory/75">
          Share your jewellery preferences or design inspiration with Ikashi Jewels to enquire about available customization options.
        </p>
        <WaButton message={messages.custom} variant="gold" className="mt-10">Discuss Your Design</WaButton>
      </section>
    </>
  );
}
