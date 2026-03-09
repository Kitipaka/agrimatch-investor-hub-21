import AnimatedSection from "./AnimatedSection";

const markets = [
  { label: "TAM", value: "$1.7T", desc: "Marché Adressable Total — Intelligence et analyse des terres agricoles mondialement." },
  { label: "SAM", value: "$120B", desc: "Marché Adressable Utile — Plateformes de technologie agricole au Moyen-Orient et en Afrique." },
  { label: "SOM", value: "$3B", desc: "Marché Obtainable Utile — Maroc et marchés d'expansion initiale." },
];

const MarketSection = () => (
  <section id="market" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Opportunité de Marché</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Un marché <span className="gradient-text">massif</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AgriMatch commence au Maroc et s'expande en Afrique, au Moyen-Orient et au-delà. L'intelligence des terres agricoles est un besoin mondial sans plateforme dominante.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {markets.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.12}>
            <div className="glass-card rounded-xl p-8 text-center h-full glow-border hover:-translate-y-1 transition-transform duration-300">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">{m.label}</p>
              <p className="stat-value mb-4">{m.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MarketSection;
