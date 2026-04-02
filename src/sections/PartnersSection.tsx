const partners = [1, 2, 3, 4, 5];

const PartnersSection = () => {
  return (
    <section className="py-20 md:py-24 bg-black text-white border-y border-border">
      <div className="container max-w-6xl px-4 flex flex-col items-center gap-10">
        <div className="text-center space-y-3">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.05em] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white/90">Our </span>
            <span className="text-primary">Partners</span>
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
            Our amazing partners backing REVA RIFT
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((p) => (
            <div
              key={p}
              className="h-16 md:h-20 w-[120px] md:w-[150px] rounded-md bg-white/5 border border-white/12"
            />
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-xs md:text-sm text-white/60">
            Interested in sponsoring or partnering with REVA RIFT?
          </p>
          <a
            href="mailto:reva.rift@gmail.com"
            className="btn-shine inline-flex items-center justify-center rounded-full text-sm font-semibold px-7 py-2.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

