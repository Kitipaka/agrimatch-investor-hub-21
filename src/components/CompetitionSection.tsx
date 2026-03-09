import { Check, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const rows = [
  "Analyse des Terres par l'IA",
  "Étude de Faisabilité Longue Forme",
  "Chatbot par l'IA",
  "Marketplace",
  "Accès aux Investisseurs",
  "Résultat Rapide",
  "Prix Abordable",
  "Maroc d'abord",
];

type Val = "yes" | "partial" | "no";

const cols: { name: string; values: Val[] }[] = [
  { name: "AgriMatch", values: ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"] },
  { name: "Consultants Traditionnels", values: ["partial", "yes", "no", "no", "partial", "no", "no", "partial"] },
  { name: "Outils Agriculture De Précision", values: ["partial", "no", "no", "no", "no", "partial", "partial", "no"] },
  { name: "Marketplace uniquement", values: ["no", "no", "no", "yes", "partial", "partial", "partial", "no"] },
];

const Cell = ({ val }: { val: Val }) =>
  val === "yes" ? (
    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
      <Check size={14} className="text-primary" />
    </div>
  ) : val === "partial" ? (
    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center mx-auto">
      <Minus size={14} className="text-accent" />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mx-auto">
      <Minus size={14} className="text-muted-foreground/40" />
    </div>
  );

const CompetitionSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Concurrence</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            La seule solution <span className="gradient-text">compléte</span>
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="overflow-x-auto">
          <div className="glass-card rounded-xl overflow-hidden min-w-[640px]">
            {/* Header */}
            <div className="grid grid-cols-5 border-b border-border">
              <div className="p-4" />
              {cols.map((c, i) => (
                <div
                  key={c.name}
                  className={`p-4 text-center text-sm font-display font-semibold ${i === 0 ? "text-primary bg-primary/5" : "text-muted-foreground"}`}
                >
                  {c.name}
                </div>
              ))}
            </div>
            {/* Rows */}
            {rows.map((row, ri) => (
              <div key={row} className={`grid grid-cols-5 ${ri < rows.length - 1 ? "border-b border-border/50" : ""}`}>
                <div className="p-4 text-sm text-foreground font-medium">{row}</div>
                {cols.map((c, ci) => (
                  <div key={c.name} className={`p-4 ${ci === 0 ? "bg-primary/5" : ""}`}>
                    <Cell val={c.values[ri]} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CompetitionSection;
