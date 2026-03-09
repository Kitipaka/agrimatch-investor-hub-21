import { Lightbulb, BookOpen, Wifi } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ecosystemItems = [
  {
    icon: Lightbulb,
    title: "AgriMatch",
    desc: "Plateforme d’intelligence agricole alimentée par l’IA qui analyse les terres agricoles, génère des études de faisabilité et aide les agriculteurs et investisseurs à prendre des décisions basées sur la donnée.",
    features: [
      "Analyse intelligente des terres",
      "Études de faisabilité automatisées",
      "Décisions basées sur les données",
      "Outils pour agriculteurs et investisseurs",
    ],
  },
  {
    icon: BookOpen,
    title: "FlahPlus",
    desc: "Plateforme de ressources et de connaissances agricoles faisant partie de l’écosystème AgriMatch. Elle donne accès à des études techniques, rapports de stage, projets PFE, présentations et documents spécialisés utilisés par les étudiants et professionnels du secteur agricole.",
    features: [
      "Études techniques agricoles",
      "Rapports de stage & PFE",
      "Présentations et recherches",
      "Ressources pour étudiants et professionnels",
    ],
  },
  {
    icon: Wifi,
    title: "Infrastructure IoT (Futur)",
    desc: "À l’avenir, AgriMatch prévoit d’intégrer des solutions IoT agricoles. Des capteurs connectés permettront de surveiller le sol, l’eau et les conditions environnementales, alimentant la plateforme avec des données en temps réel pour améliorer les analyses.",
    features: [
      "Capteurs agricoles connectés",
      "Suivi des cultures en temps réel",
      "Données du sol et du climat",
      "Intégration avec l’IA AgriMatch",
    ],
  },
];

const EcosystemSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Écosystème AgriMatch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Un écosystème complet <span className="gradient-text">d’innovation agricole</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AgriMatch développe un écosystème agricole numérique composé de plusieurs
            plateformes interconnectées, permettant aux agriculteurs, investisseurs
            et professionnels d’accéder à des outils d’analyse, de recherche et de
            prise de décision avancés.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {ecosystemItems.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 h-full flex flex-col hover:border-primary/20 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>

              <h3 className="text-xl font-display font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <ul className="space-y-2 mt-auto">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

<AnimatedSection delay={0.3}>
  <div className="mt-16 glass-card rounded-xl p-8 md:p-12 glow-border">
    <h3 className="text-2xl font-display font-bold mb-6">
      Vision Intégrée
    </h3>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          Pour les Agriculteurs et Entrepreneurs
        </h4>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Analysez vos terres grâce à l’intelligence artificielle d’AgriMatch,
          découvrez les meilleures pratiques agricoles via FlahPlus et,
          à terme, surveillez vos cultures en temps réel grâce aux capteurs
          IoT connectés.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          Pour les Étudiants et Nouveaux Acteurs
        </h4>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Accédez à des ressources agricoles professionnelles, des rapports
          de stage, projets PFE et études techniques via FlahPlus. Même sans
          expérience en agriculture, les utilisateurs peuvent apprendre,
          explorer des opportunités agricoles et se lancer dans le secteur
          avec des outils et connaissances fiables.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          Pour les Investisseurs
        </h4>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Identifiez des opportunités agricoles basées sur la donnée,
          accédez à des recherches et analyses professionnelles et prenez
          des décisions d’investissement éclairées grâce à l’intelligence
          agricole d’AgriMatch.
        </p>
      </div>

    </div>
  </div>
</AnimatedSection>
    </div>
  </section>
);

export default EcosystemSection;