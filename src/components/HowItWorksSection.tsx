import { UserPlus, MapPin, Cpu, FileCheck, MessageSquare, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: UserPlus, title: "Créer un Compte", desc: "Inscrivez-vous en quelques secondes et accédez à la plateforme." },
  { icon: MapPin, title: "Charger une Localisation", desc: "Entrez les coordonnées terrestres ou téléchargez une broche de localisation." },
  { icon: Cpu, title: "L'IA Analyse les Terres", desc: "Notre IA croise des données sur le sol, le climat, l'eau et le marché." },
  { icon: FileCheck, title: "Obtenir une Étude de Faisabilité", desc: "Recevez un rapport détaillé de 40 pages de faisabilité." },
  { icon: MessageSquare, title: "Poser des Questions à l'IA", desc: "Discutez avec l'IA pour des idées de suivi et une analyse plus approfondie." },
  { icon: Handshake, title: "Connectez-vous et Transactionnez", desc: "Trouvez les agriculteurs, acheteurs ou investisseurs via le marketplace." },
];

const HowItWorksSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
    <div className="section-container relative">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Comment Ça Fonctionne</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            De la terre à l'intelligence en <span className="gradient-text">minutes</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="relative glass-card rounded-xl p-6 h-full group hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-display font-bold text-sm">{i + 1}</span>
                </div>
                <s.icon size={20} className="text-primary/60" />
              </div>
              <h3 className="text-base font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
