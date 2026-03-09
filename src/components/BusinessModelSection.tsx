import { CreditCard, FileText, Zap, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";


const models = [
  {
    icon: CreditCard,
    title: "Abonnement Mensuel",
    price: "29,99 €",
    period: "/mois",
    desc: "Accès illimité à l'analyse des terres par l'IA, au chatbot et aux fonctionnalités de la plateforme.",
    features: [
      "Analyse IA illimitée",
      "Études de faisabilité complètes",
      "Accès au chatbot IA",
      "Support prioritaire",
    ],
  },
  {
    icon: FileText,
    title: "Paiement par Étude",
    price: "5 €",
    period: "/étude",
    desc: "Études de faisabilité à la demande pour les utilisateurs occasionnels et les évaluations ponctuelles.",
    features: [
      "Analyse unique des terres",
      "Rapport de 40 pages",
      "Suivi par chatbot IA",
      "Exporter PDF",
    ],
  },
  {
    icon: BookOpen,
    title: "Services FlahPlus",
    price: "1 €+",
    period: "/document",
    desc: "Accès à des ressources agricoles professionnelles via la plateforme FlahPlus : rapports, études techniques, projets PFE et présentations.",
    features: [
      "Rapports de stage",
      "Projets PFE agricoles",
      "Études techniques spécialisées",
      "Ressources pour étudiants et professionnels",
    ],
  },
  {
    icon: Zap,
    title: "Publicités & IoT (Futur)",
    price: "À confirmer",
    period: "/campagne",
    desc: "Plateforme publicitaire pour fournisseurs agricoles et intégration future de solutions IoT pour la collecte de données agricoles.",
    features: [
      "Ciblage d'agriculteurs",
      "Placements sponsorisés",
      "Analytics de campagne",
      "Infrastructure IoT future",
    ],
  },
];

const BusinessModelSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Modèle Economique</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Plusieurs <span className="gradient-text">flux de revenus</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-4 gap-6">
        {models.map((m, i) => (
          <AnimatedSection key={m.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 h-full flex flex-col hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <m.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{m.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-display font-bold text-foreground">{m.price}</span>
                <span className="text-muted-foreground text-sm">{m.period}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{m.desc}</p>
              <ul className="space-y-2 mt-auto">
                {m.features.map((f) => (
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
    </div>
  </section>
);

export default BusinessModelSection;
