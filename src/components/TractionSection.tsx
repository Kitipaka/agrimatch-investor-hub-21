import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "6 500+", label: "Utilisateurs" },
  { value: "10+", label: "Études Générées" },
  { value: "10+", label: "Utilisateurs Payants" },
  { value: "$116", label: "Revenu" },
  { value: "$116", label: "GMV du Marketplace" },
];

const TractionSection = () => (
  <section id="traction" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Traction</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Momentum précoce, <span className="gradient-text">utilisateurs réels</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Depuis le lancement, AgriMatch a connu une croissance organique forte avec une augmentation de 40% mois sur mois des utilisateurs actifs.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.08}>
            <div className="glass-card rounded-xl p-6 md:p-8 text-center glow-border">
              <p className="stat-value mb-2">{s.value}</p>
              <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TractionSection;
