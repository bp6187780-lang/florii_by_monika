const collectionItems = [
  {
    title: 'La Nuit Silk Gown',
    description: 'Bias-cut elegance with sculpted drape.',
    price: '$920',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Atelier Linen Set',
    description: 'Lightweight tailoring with a modern edge.',
    price: '$540',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pearl Knit Column',
    description: 'Soft texture, elongated silhouette.',
    price: '$680',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
  },
]

const lookbookImages = [
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
]

const brandValues = [
  {
    title: 'Slow-crafted ateliers',
    description:
      'Limited runs, hand-finished seams, and couture-level construction for every piece.',
  },
  {
    title: 'Sustainable luxury',
    description:
      'Premium natural fibers sourced with traceability and a commitment to longevity.',
  },
  {
    title: 'Modern femininity',
    description:
      'Architectural silhouettes balanced with softness, designed for the modern muse.',
  },
]

const instagramShots = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80&sat=-20',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80&blend=fbf9f6&blend-alpha=20&blend-mode=multiply',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80&sat=-20',
]

function App() {
  return (
    <div className="bg-brand-background text-brand-primary">
      <header className="relative overflow-hidden">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute left-0 top-32 h-48 w-48 rounded-full bg-brand-accentSoft/40 blur-3xl motion-safe:animate-float-slow" />

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 pt-10 sm:px-8 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              FLORii by Monika
            </p>
            <p className="mt-2 text-sm text-brand-secondary">
              Luxury ready-to-wear • Est. 2016
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-brand-secondary md:flex">
            <a className="transition hover:text-brand-primary" href="#collection">
              Collection
            </a>
            <a className="transition hover:text-brand-primary" href="#story">
              Founder
            </a>
            <a className="transition hover:text-brand-primary" href="#lookbook">
              Lookbook
            </a>
            <a className="transition hover:text-brand-primary" href="#values">
              Values
            </a>
          </nav>
          <a
            className="hidden rounded-full border border-brand-primary/30 px-5 py-2 text-xs uppercase tracking-[0.25em] text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary hover:text-brand-background md:inline-flex"
            href="#whatsapp"
          >
            Private Styling
          </a>
        </div>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary">
              Summer Atelier 2026
            </p>
            <h1 className="text-balance font-heading text-4xl leading-tight text-brand-primary sm:text-5xl lg:text-6xl motion-safe:animate-fade-up">
              Couture softness, modern structure. A wardrobe of quiet luxury.
            </h1>
            <p
              className="max-w-xl text-base text-brand-secondary sm:text-lg motion-safe:animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              FLORii by Monika blends sculptural tailoring with an editorial point of
              view. Designed for the woman who collects timeless pieces and elevated
              essentials.
            </p>
            <div
              className="flex flex-wrap gap-4 motion-safe:animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              <a
                className="rounded-full bg-brand-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-brand-background transition hover:opacity-90"
                href="#collection"
              >
                Explore collection
              </a>
              <a
                className="rounded-full border border-brand-primary/40 px-6 py-3 text-sm uppercase tracking-[0.2em] text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary hover:text-brand-background"
                href="#lookbook"
              >
                View lookbook
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-xs uppercase tracking-[0.25em] text-brand-secondary">
              <div>
                <p className="text-lg font-heading text-brand-primary">40+</p>
                <p>Limited pieces</p>
              </div>
              <div>
                <p className="text-lg font-heading text-brand-primary">EU</p>
                <p>Crafted in atelier</p>
              </div>
              <div>
                <p className="text-lg font-heading text-brand-primary">24h</p>
                <p>Private fittings</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-12 h-32 w-32 rounded-full border border-brand-accent/60 motion-safe:animate-float-slow" />
            <div className="absolute -bottom-8 right-4 h-28 w-28 rounded-full border border-brand-accent/50 motion-safe:animate-float-slow" />
            <div className="relative overflow-hidden rounded-[48px] bg-brand-accent/20 p-4 shadow-soft motion-safe:animate-fade-in">
              <img
                className="h-[460px] w-full rounded-[40px] object-cover"
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Model wearing FLORii by Monika in neutral tones"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 left-6 rounded-3xl bg-white/80 p-4 shadow-card backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Atelier Notes
              </p>
              <p className="mt-2 text-sm text-brand-primary">
                “Designed to move like silk and feel like confidence.”
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="space-y-24 pb-24">
        <section id="collection" className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Signature Collection
              </p>
              <h2 className="mt-3 text-3xl font-heading sm:text-4xl">
                Refined silhouettes with an editorial soul.
              </h2>
            </div>
            <a
              className="text-xs uppercase tracking-[0.3em] text-brand-secondary transition hover:text-brand-primary"
              href="#lookbook"
            >
              View all pieces
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {collectionItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white/70 shadow-card transition hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="overflow-hidden">
                  <img
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-heading">{item.title}</h3>
                  <p className="text-sm text-brand-secondary">{item.description}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-primary">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="story"
          className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12"
        >
          <div className="order-2 space-y-6 lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              Founder Story
            </p>
            <h2 className="text-3xl font-heading sm:text-4xl">
              Monika Florii designs for the woman who curates every detail.
            </h2>
            <p className="text-base text-brand-secondary">
              Raised between artisan workshops and modern galleries, Monika infuses
              FLORii with a couture sensibility and a minimalist eye. Each collection
              is cut in small batches, finished by hand, and released only when it
              meets her exacting standard.
            </p>
            <div className="rounded-2xl border border-brand-accent/50 bg-white/60 p-6 text-sm text-brand-secondary">
              “Luxury should feel effortless. It is the memory of touch, movement,
              and confidence.” — Monika Florii
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="h-[420px] w-full rounded-[40px] object-cover shadow-soft"
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
              alt="Founder portrait in studio"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section id="lookbook" className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Lookbook
              </p>
              <h2 className="mt-3 text-3xl font-heading sm:text-4xl">
                A seasonal narrative in light and texture.
              </h2>
            </div>
            <p className="max-w-md text-sm text-brand-secondary">
              A soft palette, sculptural cuts, and editorial finishing. Every frame
              tells the FLORii story.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-12 md:grid-rows-6">
            {lookbookImages.map((src, index) => {
              const layout =
                index === 0
                  ? 'md:col-span-7 md:row-span-6'
                  : index === 1
                    ? 'md:col-span-5 md:row-span-3'
                    : index === 2
                      ? 'md:col-span-5 md:row-span-3'
                      : index === 3
                        ? 'md:col-span-4 md:row-span-3'
                        : 'md:col-span-8 md:row-span-3'
              return (
                <div
                  key={src}
                  className={`overflow-hidden rounded-3xl ${layout}`}
                >
                  <img
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    src={src}
                    alt="FLORii by Monika lookbook imagery"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )
            })}
          </div>
        </section>

        <section id="values" className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="rounded-[40px] bg-white/70 p-8 shadow-card sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                  Brand Values
                </p>
                <h2 className="mt-3 text-3xl font-heading sm:text-4xl">
                  Luxury with intention.
                </h2>
              </div>
              <p className="max-w-md text-sm text-brand-secondary">
                We design to elevate the everyday, honoring craft, sustainability,
                and the art of modern elegance.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {brandValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl border border-brand-accent/40 bg-brand-background/70 p-6"
                >
                  <h3 className="text-xl font-heading">{value.title}</h3>
                  <p className="mt-3 text-sm text-brand-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="instagram" className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Instagram
              </p>
              <h2 className="mt-3 text-3xl font-heading sm:text-4xl">
                @florii.bymonika
              </h2>
            </div>
            <a
              className="text-xs uppercase tracking-[0.3em] text-brand-secondary transition hover:text-brand-primary"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Follow for daily edits
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {instagramShots.map((shot, index) => (
              <div
                key={`${shot}-${index}`}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  src={shot}
                  alt="FLORii by Monika Instagram preview"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="rounded-[40px] border border-brand-accent/40 bg-white/60 p-8 sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                  Testimonials
                </p>
                <h2 className="mt-3 text-3xl font-heading sm:text-4xl">
                  Client stories coming soon.
                </h2>
              </div>
              <p className="max-w-md text-sm text-brand-secondary">
                Curated stories from private clients and stylists will appear here.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {['Private client review', 'Editorial collaborator', 'Stylist note'].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-dashed border-brand-accent/60 bg-brand-background/80 p-6 text-sm text-brand-secondary"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-secondary">
                      Placeholder
                    </p>
                    <p className="mt-4 text-base text-brand-primary">{label}</p>
                    <p className="mt-2 text-sm text-brand-secondary">
                      Share the transformation, the experience, and the atelier
                      journey.
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section
          id="whatsapp"
          className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
        >
          <div className="relative overflow-hidden rounded-[40px] bg-brand-primary px-8 py-12 text-brand-background sm:px-12">
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-brand-accent/20 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">
              WhatsApp Concierge
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-heading sm:text-4xl">
                  Book a private styling session.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-brand-accent">
                  Receive curated recommendations, runway previews, and bespoke
                  sizing with a direct stylist.
                </p>
              </div>
              <a
                className="rounded-full border border-brand-accent/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-brand-background transition hover:border-brand-background hover:bg-brand-background hover:text-brand-primary"
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-accent/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-6 py-10 text-sm text-brand-secondary sm:px-8 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              FLORii by Monika
            </p>
            <p className="mt-2 text-sm text-brand-secondary">
              Atelier studio • Paris, Milan, Dubai
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em]">
            <a className="transition hover:text-brand-primary" href="#collection">
              Collection
            </a>
            <a className="transition hover:text-brand-primary" href="#story">
              Founder
            </a>
            <a className="transition hover:text-brand-primary" href="#lookbook">
              Lookbook
            </a>
            <a className="transition hover:text-brand-primary" href="#instagram">
              Instagram
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
            © 2026 FLORii by Monika
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
