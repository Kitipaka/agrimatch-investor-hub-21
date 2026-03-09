import AnimatedSection from "./AnimatedSection";

const VisionSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Vision</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-8 leading-tight">
            Construire la couche d'intelligence pour{" "}
            <span className="gradient-text">les terres agricoles</span> mondialement
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            AgriMatch vise à devenir la couche d'intelligence mondiale pour les terres agricoles — une plateforme où quiconque peut analyser les terres, évaluer les investissements agricoles et développer des projets agricoles en utilisant des données et des idées pilotées par l'IA.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default VisionSection;
