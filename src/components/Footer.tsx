const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Srijit Bhattacharya. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
