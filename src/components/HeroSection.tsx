import { BarChart3, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] bg-primary blur-[120px]" />

    <div className="section-container w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            Intelligence Agricole Alimentée par l'IA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] tracking-tight mb-6">
            La plateforme mondiale pour{" "}
            <span className="gradient-text">l'intelligence des terres agricoles</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
            AgriMatch utilise l'IA pour analyser les terres agricoles et générer des études de faisabilité complètes — permettant aux investisseurs et aux agriculteurs de prendre des décisions plus intelligentes, plus rapidement.
          </p>



          {/* Trust row */}
          <div className="flex flex-wrap gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Lancé
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-primary" />
              6 500+ utilisateurs
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              Maroc d'abord, prêt pour le monde
            </div>
          </div>
        </motion.div>

        {/* Right — Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card rounded-2xl p-6 glow-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">AgriMatch Dashboard</span>
            </div>

            {/* Mock header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Analyse des Terres — Région de Marrakech</div>
                <div className="text-lg font-display font-semibold text-foreground">Rapport de Faisabilité</div>
              </div>
              <div className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">Généré par l'IA</div>
            </div>

            {/* Mock stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Score du Sol", value: "87/100", color: "text-primary" },
                { label: "Accès à l'Eau", value: "Élevé", color: "text-accent" },
                { label: "Estimation du ROI", value: "X%", color: "text-foreground" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary/50 rounded-lg p-3">
                  <div className="text-[10px] text-muted-foreground mb-1">{s.label}</div>
                  <div className={`text-lg font-display font-bold ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Mock chart */}
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground">Analyse d'Adéquation des Cultures</span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {[65, 82, 45, 91, 73, 58, 86, 69].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm bg-primary/40"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Analyse par l'IA terminée — étude de 40 pages prête
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
