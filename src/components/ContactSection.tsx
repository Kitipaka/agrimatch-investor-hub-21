import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Construisons l'avenir de <span className="gradient-text">l'agriculture</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Intéressé par l'investissement, le partenariat ou l'apprentissage? Nous aimerions écouter.
          </p>
        </div>
      </AnimatedSection>


    </div>
  </section>
);

export default ContactSection;
