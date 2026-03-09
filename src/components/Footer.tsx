const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display text-lg font-bold">
        <span className="gradient-text">Agri</span>
        <span className="text-foreground">Match</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} AgriMatch. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
