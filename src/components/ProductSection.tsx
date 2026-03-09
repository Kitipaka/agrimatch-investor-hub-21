import { BarChart3, FileText, MessageCircle, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const products = [
  {
    icon: BarChart3,
    title: "Moteur d'Analyse des Terres",
    desc: "Analyse par l'IA multi-sources couvrant la composition du sol, la disponibilité de l'eau, les modèles climatiques et l'adéquation des cultures régionales.",
    mockContent: (
      <div className="space-y-3 mt-4">
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Qualité du Sol</span><span className="text-primary font-medium">Excellente</span></div>
        <div className="w-full h-2 bg-secondary rounded-full"><div className="h-2 bg-primary rounded-full" style={{ width: "87%" }} /></div>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Accès à l'Eau</span><span className="text-primary font-medium">Élevé</span></div>
        <div className="w-full h-2 bg-secondary rounded-full"><div className="h-2 bg-primary rounded-full" style={{ width: "78%" }} /></div>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Score Climatique</span><span className="text-accent font-medium">Modéré</span></div>
        <div className="w-full h-2 bg-secondary rounded-full"><div className="h-2 bg-accent rounded-full" style={{ width: "62%" }} /></div>
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Étude de Faisabilité de 40 Pages",
    desc: "Rapports complets générés par l'IA avec projections financières, recommandations de cultures, analyse des risques et feuilles de route de développement.",
    mockContent: (
      <div className="mt-4 space-y-2">
        {["Résumé exécutif", "Analyse du Sol et de l'Eau", "Matrice d'Adéquation des Cultures", "Projections Financières", "Évaluation des Risques", "Plan de Développement"].map((t) => (
          <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-1 h-1 rounded-full bg-primary" />
            {t}
          </div>
        ))}
        <div className="mt-3 px-3 py-1.5 rounded bg-primary/10 text-primary text-xs font-medium inline-block">~40 pages · Export PDF</div>
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "Assistant Chatbot par l'IA",
    desc: "IA agricole consciente du contexte qui répond à des questions de suivi sur vos terres, études et opportunités d'investissement.",
    mockContent: (
      <div className="mt-4 space-y-3 text-xs">
        <div className="bg-secondary/50 rounded-lg p-3 text-muted-foreground max-w-[80%]">Quelles sont les meilleures cultures pour ce type de sol?</div>
        <div className="bg-primary/10 rounded-lg p-3 text-foreground max-w-[85%] ml-auto">D'après l'analyse, les olives et les agrumes affichent les scores d'adéquation les plus élevés pour cette région...</div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Marketplace & Appariement",
    desc: "Connectez-vous avec des agriculteurs vérifiés, des acheteurs agricoles et des investisseurs. Listez les projets et trouvez des partenaires pour le développement.",
    mockContent: (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {["Agriculteurs", "Acheteurs", "Investisseurs", "Partenaires"].map((r) => (
          <div key={r} className="bg-secondary/50 rounded-lg p-2 text-center">
            <div className="text-lg font-display font-bold text-foreground">X</div>
            <div className="text-[10px] text-muted-foreground">{r}</div>
          </div>
        ))}
      </div>
    ),
  },
];

const ProductSection = () => (
  <section id="product" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Plateforme</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Conçu pour <span className="gradient-text">la scalabilité</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Une plateforme intégrée verticalement couvrant l'ensemble du cycle de vie de l'intelligence agricole.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 h-full hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <p.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold">{p.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              {p.mockContent}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
