import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, messages } from "@/lib/site";
import { GoldRule, PageHero, WaButton } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ikashi Jewels" },
      { name: "description", content: "Enquire with Ikashi Jewels on WhatsApp or Instagram. Serving Hyderabad and Mumbai." },
      { property: "og:title", content: "Contact Ikashi Jewels" },
      { property: "og:description", content: "We'd be happy to hear from you — enquire on WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Be Happy to Hear From You"
        intro="For prices, specifications, availability, certification details or bridal and custom enquiries, the quickest way to reach us is WhatsApp."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3 md:px-8">
        <div className="flex flex-col items-center border border-gold/50 bg-primary p-10 text-center text-primary-foreground md:col-span-1">
          <p className="eyebrow text-gold">WhatsApp</p>
          <p className="mt-4 font-serif text-3xl">+91 99896 23276</p>
          <p className="mt-3 text-sm text-ivory/70">Message us any time — we'll reply as soon as we can.</p>
          <WaButton message={messages.general} variant="gold" className="mt-8">Chat on WhatsApp</WaButton>
        </div>
        <div className="flex flex-col items-center border border-border bg-card p-10 text-center">
          <Instagram className="size-7 text-gold" />
          <p className="eyebrow mt-4 text-gold">Instagram</p>
          <p className="mt-4 font-serif text-3xl text-primary">{INSTAGRAM_HANDLE}</p>
          <p className="mt-3 text-sm text-muted-foreground">See our latest designs and bridal stories.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-8 border border-primary px-6 py-3.5 text-xs tracking-[0.2em] text-primary uppercase hover:bg-primary hover:text-primary-foreground">
            Follow Us
          </a>
        </div>
        <div className="flex flex-col items-center border border-border bg-card p-10 text-center">
          <MapPin className="size-7 text-gold" />
          <p className="eyebrow mt-4 text-gold">Cities</p>
          <p className="mt-4 font-serif text-3xl text-primary">Hyderabad · Mumbai</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Enquiries are handled online. Message us on WhatsApp to discuss how we can assist you.
          </p>
        </div>
      </section>
      <section className="px-5 pb-24 text-center">
        <GoldRule />
        <p className="mx-auto mt-6 max-w-xl font-serif text-2xl text-primary italic">For the Muse in You</p>
      </section>
    </>
  );
}
