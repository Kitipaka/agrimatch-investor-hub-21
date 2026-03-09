import { Zap, Droplets, Brain, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Zap, title: "L'agriculture se numérialise", desc: "L'industrie agricole de 5 billions de dollars subit une transformation numérique rapide, créant des opportunités massives pour les plateformes axées sur l'IA." },
  { icon: Droplets, title: "Les décisions concernant les terres et l'eau sont plus importantes", desc: "Le changement climatique et la rareté des ressources rendent l'évaluation des terres pilotée par les données plus critique — et plus précieuse — que jamais." },
  { icon: Brain, title: "L'IA peut compresser la recherche 100x", desc: "Les grands modèles de langage et l'IA géospatiale permettent maintenant une analyse qui nécessitait auparavant des mois de conseil d'experts." },
  { icon: MapPin, title: "Le Maroc est le tremplin parfait", desc: "Un secteur agricole solide, un écosystème technologique en croissance et la proximité avec l'Europe et l'Afrique font du Maroc un marché de lancement idéal." },
];

const WhyNowSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, hsl(150,25%,3%,0.5), transparent)" }} />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Pourquoi Maintenant</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Le moment est <span className="gradient-text-accent">parfait</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 h-full hover:border-accent/20 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <r.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyNowSection;
