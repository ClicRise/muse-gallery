import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { messages, products, type GalleryTag } from "@/lib/site";
import { CtaBanner, PageHero } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ikashi Jewels" },
      { name: "description", content: "An editorial gallery of Ikashi Jewels bridal, natural diamond and fine gold jewellery." },
      { property: "og:title", content: "Gallery — Ikashi Jewels" },
      { property: "og:description", content: "Explore our jewellery up close." },
    ],
  }),
  component: Gallery,
});

const FILTERS: (GalleryTag | "All Jewellery")[] = ["All Jewellery", "Bridal", "Natural Diamonds", "Fine Gold", "Necklaces & Earrings", "Bangles & Bracelets"];
const items = products.filter((p) => p.gallery.length);

function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All Jewellery");
  const [idx, setIdx] = useState<number | null>(null);
  const list = filter === "All Jewellery" ? items : items.filter((p) => p.gallery.includes(filter));
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIdx(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (idx === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, step]);

  const current = idx !== null ? list[idx] : null;

  return (
    <>
      <PageHero eyebrow="Gallery" title="Jewellery, Up Close" />
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-5 pt-12 md:px-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`border px-4 py-2 text-[0.7rem] tracking-[0.16em] uppercase transition-colors ${
              filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground/75 hover:border-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <section className="mx-auto max-w-7xl columns-1 gap-5 px-5 py-14 sm:columns-2 lg:columns-3 md:px-8">
        {list.map((p, i) => (
          <button
            key={p.id}
            onClick={(e) => {
              lastFocus.current = e.currentTarget;
              setIdx(i);
            }}
            className="group relative mb-5 block w-full overflow-hidden break-inside-avoid focus-visible:outline-2 focus-visible:outline-gold"
            aria-label={`View ${p.name}`}
          >
            <img src={p.image} alt={p.name} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent p-5 text-left font-serif text-xl text-ivory opacity-0 transition-opacity group-hover:opacity-100">
              {p.name}
            </span>
          </button>
        ))}
      </section>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.name} className="fixed inset-0 z-[60] flex items-center justify-center bg-forest/95 p-4" onClick={close}>
          <button ref={closeRef} onClick={close} aria-label="Close" className="absolute top-5 right-5 p-2 text-ivory hover:text-gold"><X className="size-7" /></button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image" className="absolute left-2 p-3 text-ivory hover:text-gold md:left-6"><ChevronLeft className="size-9" /></button>
          <figure className="max-w-4xl text-center" onClick={(e) => e.stopPropagation()}>
            <img src={current.image} alt={current.name} className="mx-auto max-h-[78vh] w-auto object-contain" />
            <figcaption className="mt-4 font-serif text-2xl text-ivory">{current.name}</figcaption>
            <p className="text-xs tracking-widest text-gold uppercase">{(idx ?? 0) + 1} / {list.length}</p>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image" className="absolute right-2 p-3 text-ivory hover:text-gold md:right-6"><ChevronRight className="size-9" /></button>
        </div>
      )}

      <CtaBanner
        title="Interested in a Design?"
        text="Contact Ikashi Jewels to enquire about a particular piece or collection."
        message={messages.gallery}
        label="Enquire on WhatsApp"
      />
    </>
  );
}
