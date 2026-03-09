import { Clock, DollarSign, Layers, Search } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: Clock,
    title: "Lent et Coûteux",
    desc: "Les études de faisabilité traditionnelles prennent des semaines et coûtent des milliers — mettant les décisions agricoles intelligentes hors de portée pour la plupart des agriculteurs et petits investisseurs.",
  },
  {
    icon: Search,
    title: "Données Fragmentées",
    desc: "La qualité du sol, l'accès à l'eau, le climat et les données de marché sont dispersés dans des bases de données cloisonnées sans source unique de vérité.",
  },
  {
    icon: DollarSign,
    title: "Pas d'Intelligence de Qualité Décisionnelle",
    desc: "Les agriculteurs et les investisseurs manquent d'outils accessibles et powered par l'IA pour évaluer le potentiel des terres avant d'engager du capital.",
  },
  {
    icon: Layers,
    title: "Exécution Fragmentée",
    desc: "Les consultants, fournisseurs, acheteurs et sources de capital opèrent isolément — créant des frictions à chaque étape du développement agricole.",
  },
];

const ProblemSection = () => (
  <section id="problem" className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, hsl(150,25%,4%,0.5), transparent)" }} />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Le Problème</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Les décisions concernant les terres agricoles sont défaillantes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Des milliards de capital agricole sont mal alloués chaque année car les décideurs manquent d'une intelligence terrain rapide, abordable et fiable.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 h-full hover:border-primary/20 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/15 transition-colors">
                <p.icon size={22} className="text-destructive" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
