import { Brain, FileText, MessageCircle, ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "Intelligence des Terres par l'IA",
    desc: "Analyse approfondie du sol, de l'eau, du climat et des données de marché à l'aide de modèles d'IA propriétaires formés sur des ensembles de données agricoles.",
  },
  {
    icon: FileText,
    title: "Éudes de Faisabilité de Longue Forme",
    desc: "Rapports complets automatisés de 40 pages couvrant chaque dimension du potentiel terrain — de la composition du sol aux projections financières.",
  },
  {
    icon: MessageCircle,
    title: "Chatbot Agricole par l'IA",
    desc: "Posez des questions de suivi sur n'importe quelle étude. Recevez des réponses immédiates et conscientes du contexte de votre analyste agricole IA dédié.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace & Couche d'Investissement",
    desc: "Connectez les agriculteurs aux acheteurs et aux investisseurs. Découvrez les opportunités, listez les projets et concluez des affaires — tout sur une seule plateforme.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">La Solution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Une plateforme. L'intelligence complète des terres.<span className="gradient-text"></span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AgriMatch compresse l'évaluation des terres, la planification et l'exécution en une seule plateforme native d'IA — offrant aux utilisateurs une intelligence de qualité décisionnelle en minutes, pas en mois.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 h-full hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
