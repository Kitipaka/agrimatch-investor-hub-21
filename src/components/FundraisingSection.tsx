import AnimatedSection from "./AnimatedSection";

const funds = [
  {
    label: "Produit & Développement",
    pct: "35%",
    details: [
      "Développement de la plateforme AgriMatch",
      "Amélioration du moteur d’analyse IA",
      "Génération automatique des études de faisabilité",
      "Amélioration de l’expérience utilisateur",
    ],
  },
  {
    label: "Infrastructure & IA",
    pct: "25%",
    details: [
      "Serveurs cloud et infrastructure technique",
      "APIs et bases de données agricoles",
      "Entraînement et maintenance des modèles IA",
      "Stockage et calcul des données",
    ],
  },
  {
    label: "Croissance & Acquisition",
    pct: "20%",
    details: [
      "Acquisition d’utilisateurs (agriculteurs et investisseurs)",
      "Partenariats avec coopératives agricoles",
      "Marketing digital ciblé",
    ],
  },
  {
    label: "Développement FlahPlus",
    pct: "10%",
    details: [
      "Enrichissement de la base de ressources agricoles",
      "Partenariats avec écoles d’agronomie",
      "Intégration de PFE, rapports et études techniques",
    ],
  },
  {
    label: "Équipe",
    pct: "5%",
    details: [
      "Premiers recrutements techniques",
      "Experts agricoles et freelances",
    ],
  },
  {
    label: "Trésorerie / Sécurité",
    pct: "5%",
    details: [
      "Marge financière de sécurité",
      "Gestion des imprévus",
      "Stabilité opérationnelle",
    ],
  },
];

const FundraisingSection = () => (
  <section id="raise" className="section-padding relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "var(--gradient-glow)" }}
    />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 lg:p-16 glow-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
              Levée de fonds
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Levée de <span className="text-[#F4C84A]">$150K</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Nous levons notre prochain tour pour accélérer le développement
              d’AgriMatch, renforcer notre infrastructure IA, développer
              FlahPlus et structurer la croissance de notre écosystème agricole.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {funds.map((fund, i) => (
              <AnimatedSection key={fund.label} delay={i * 0.05}>
                <div className="rounded-xl bg-white/5 border border-white/10 p-6 h-full">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-display font-bold text-foreground">
                      {fund.pct}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
                    {fund.label}
                  </h3>

                  <ul className="space-y-2">
                    {fund.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FundraisingSection;