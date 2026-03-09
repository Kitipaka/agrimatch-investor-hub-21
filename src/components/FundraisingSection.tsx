import AnimatedSection from "./AnimatedSection";

const funds = [
  { label: "Marketing", pct: "40%" },
  { label: "Infrastructure IA", pct: "20%" },
  { label: "Croissance", pct: "20%" },
    { label: "Embauche", pct: "10%" },
  { label: "Partenariats", pct: "5%" },
  { label: "trésorerie", pct: "5%" },
];

const FundraisingSection = () => (
  <section id="raise" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="glass-card rounded-2xl p-8 md:p-12 lg:p-16 glow-border text-center">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Levée de Fonds</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Levée de <span className="gradient-text-accent">$150K</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Nous levons notre prochain tour pour écheller le développement des produits, étendre les capacités de l'IA et croître dans de nouveaux marchés.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10 max-w-3xl mx-auto">
            {funds.map((f) => (
              <div key={f.label} className="bg-secondary/50 rounded-lg p-4">
                <p className="text-xl font-display font-bold text-foreground mb-1">{f.pct}</p>
                <p className="text-xs text-muted-foreground">{f.label}</p>
              </div>
            ))}
          </div>


        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FundraisingSection;
