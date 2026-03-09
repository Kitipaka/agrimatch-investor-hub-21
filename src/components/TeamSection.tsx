import { Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const founders = [
  {
    name: "Tahar Zaitar",
    role: "CEO & Founder",
    initials: "TZ",
    bg: "Energy Engineering",
    school: "Engineering School (France)",
    linkedin: "https://www.linkedin.com/in/tahar-zaitar-a37089340/"
  },
  {
    name: "Amr Zainane",
    role: "Co-Founder",
    initials: "AZ",
    bg: "Mechatronics Engineering",
    school: "Engineering School (France)",
    linkedin: "https://www.linkedin.com/in/amr-zainane-7b4805300/"
  }
];

const team = [
  { name: "Mazine Fathi", role: "Ingénieur Données", initials: "MF" },
  { name: "Hamza Chaaji", role: "Expert Cybersécurité", initials: "HC" },
  { name: "Ilyass", role: "Ingénieur IA", initials: "IL" },
  { name: "Ziad", role: "Designer UI/UX", initials: "ZI" },
  { name: "Hamza", role: "Ingénieur Full Stack", initials: "HA" },
  { name: "Souhaib", role: "Génie Agronome", initials: "SH" },
];

const TeamSection = () => (
  <section id="team" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Equipe</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Construit par des <span className="gradient-text">constructeurs</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Une équipe d'ingénieurs et de développeurs basée au Maroc et en France, combinant une expertise technique approfondie avec des connaissances de domaine agricole.
          </p>
        </div>
      </AnimatedSection>

      {/* Founders */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {founders.map((f, i) => (
          <AnimatedSection key={f.name} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 md:p-8 glow-border hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-display font-bold text-primary">{f.initials}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-display font-semibold">{f.name}</h3>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{f.role}</p>
                  <p className="text-muted-foreground text-sm">{f.bg} · {f.school}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Dev team */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((t, i) => (
          <AnimatedSection key={i} delay={0.2 + i * 0.05}>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-display font-bold text-muted-foreground">{t.initials}</span>
              </div>
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
