import AnimatedSection from "./AnimatedSection";
import { X } from "lucide-react";
import { useState } from "react";

const MoroccoFloodImpactSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, hsl(150,25%,4%,0.3), transparent)" }} />
      <div className="section-container relative">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Impact du Maroc</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Le Maroc transformé : <span className="gradient-text">avant et après</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Les récentes inondations et précipitations ont montré le potentiel agricole immense du Maroc. AgriMatch aide les agriculteurs et investisseurs à tirer parti de ces changements climatiques pour optimiser les cultures et gérer les ressources en eau efficacement.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl overflow-hidden glow-border hover:border-destructive/30 transition-colors">
              <div className="relative">
                <img 
                  src="/morocco-before.jpg" 
                  alt="Maroc avant - Terrain sec et aride" 
                  className="w-full h-80 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage('/morocco-before.jpg')}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="bg-gradient-to-t from-background to-transparent p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2">Avant les inondations</h3>
                <p className="text-sm text-gray-300">Terrain aride, ressources en eau limitées, potentiel agricole contraints</p>
              </div>
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-xl overflow-hidden glow-border hover:border-primary/30 transition-colors">
              <div className="relative">
                <img 
                  src="/morocco-after.jpg" 
                  alt="Maroc après - Végétation luxuriante et ressources en eau abondantes" 
                  className="w-full h-80 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage('/morocco-after.jpg')}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="bg-gradient-to-t from-background to-transparent p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2">Après les inondations</h3>
                <p className="text-sm text-gray-300">Végétation abondante, ressources en eau disponibles, potentiel agricole maximal</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 glass-card rounded-xl p-8 md:p-12 glow-border">
            <h3 className="text-2xl font-display font-bold mb-6">L'Opportunité AgriMatch</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold text-foreground">Analyser en Temps Réel</h4>
                <p className="text-sm text-muted-foreground">Surveiller les changements climatiques et adapter les stratégies agricoles instantanément</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-semibold text-foreground">Optimiser les Cultures</h4>
                <p className="text-sm text-muted-foreground">Identifier les meilleures cultures pour chaque région et saison avec précision</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-semibold text-foreground">Gérer l'Eau Efficacement</h4>
                <p className="text-sm text-muted-foreground">Maximiser l'utilisation des ressources en eau pour une productivité durable</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

    {/* Modal for full-size image */}
    {selectedImage && (
      <div 
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <div 
          className="relative max-w-4xl w-full max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="w-full h-full object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
      </div>
    )}
  </section>
  );
};

export default MoroccoFloodImpactSection;
