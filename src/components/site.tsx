import { Link } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { Menu, X, Instagram, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, messages, waLink, type Product } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collections", label: "Collections" },
  { to: "/contact", label: "Contact" },
] as const;

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-12 bg-gold/70" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-gold/70" />
    </div>
  );
}

export function WaButton({
  message,
  children,
  variant = "solid",
  className = "",
}: {
  message: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "gold" | "light";
  className?: string;
}) {
  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-forest",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    gold: "bg-gold text-forest hover:bg-ivory",
    light: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-forest",
  }[variant];
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${styles} ${className}`}
    >
      <MessageCircle className="size-4" aria-hidden />
      {children}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-forest py-2 text-center text-[0.68rem] tracking-[0.28em] text-gold uppercase">
        GIA & IGI certified natural diamonds · Enquiries welcome on WhatsApp
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Ikashi Jewels home">
            <img src="/images/logo.jpg" alt="Ikashi Jewels logo" className="size-12 rounded-full md:size-16" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-2xl text-primary">Ikashi Jewels</span>
              <span className="text-[0.6rem] tracking-[0.3em] text-gold uppercase">For the Muse in You</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="text-xs tracking-[0.22em] uppercase text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:decoration-gold data-[status=active]:underline-offset-8"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <WaButton message={messages.general} className="px-5 py-3">Enquire</WaButton>
          </div>
          <button
            className="p-2 text-primary lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 pb-6 lg:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                className="block border-b border-border py-4 font-serif text-2xl text-foreground data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <WaButton message={messages.general} className="mt-6 w-full">Enquire on WhatsApp</WaButton>
          </nav>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <img src="/images/logo.jpg" alt="Ikashi Jewels logo" className="size-16 rounded-full" />
            <div>
              <p className="font-serif text-3xl text-ivory">Ikashi Jewels</p>
              <p className="eyebrow text-gold">For the Muse in You</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            Natural diamond jewellery, bridal pieces and fine gold jewellery — with a specialization in GIA- and
            IGI-certified natural diamonds. Hyderabad · Mumbai.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5 text-gold">Explore</p>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5 text-gold">Connect</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <Instagram className="size-4" /> {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <MessageCircle className="size-4" /> WhatsApp enquiries
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs tracking-wider text-ivory/50">
        © {new Date().getFullYear()} Ikashi Jewels. All rights reserved.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-ivory shadow-lg ring-2 ring-gold/60 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function ProductCard({ p, category }: { p: Product; category?: string | undefined }) {
  return (
    <article className="group flex w-full flex-col bg-card">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <p className="eyebrow text-gold">{category ?? p.categories[0]}</p>
        <h3 className="mt-2 text-2xl text-foreground">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">Enquire for Price</p>
        <WaButton message={messages.product(p.name)} variant="outline" className="mt-5 w-full px-3 whitespace-nowrap">
          Enquire on WhatsApp
        </WaButton>
      </div>
    </article>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-border px-5 py-20 text-center md:py-28">
      <p className="eyebrow fade-up text-gold">{eyebrow}</p>
      <h1 className="fade-up mx-auto mt-5 max-w-3xl text-5xl text-primary md:text-7xl">{title}</h1>
      <GoldRule className="mt-8" />
      {intro && <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function CtaBanner({ title, text, message, label }: { title: string; text: string; message: string; label: string }) {
  return (
    <section className="bg-primary px-5 py-20 text-center text-primary-foreground md:py-28">
      <GoldRule />
      <h2 className="mx-auto mt-8 max-w-2xl text-4xl md:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ivory/75">{text}</p>
      <WaButton message={message} variant="gold" className="mt-10">{label}</WaButton>
    </section>
  );
}

export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  const btn =
    "flex size-11 items-center justify-center rounded-full border border-primary/30 bg-background text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={ref}
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <button className={btn} onClick={() => scroll(-1)} aria-label={`Previous ${label}`}><ChevronLeft className="size-5" /></button>
        <button className={btn} onClick={() => scroll(1)} aria-label={`Next ${label}`}><ChevronRight className="size-5" /></button>
      </div>
    </div>
  );
}
