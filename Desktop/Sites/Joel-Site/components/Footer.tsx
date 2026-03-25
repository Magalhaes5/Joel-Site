export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gold font-display italic text-2xl">JM</span>
              <span className="text-textPrimary font-body font-light text-sm tracking-wide">
                Digital Solutions
              </span>
            </div>
            <p className="text-textMuted text-sm font-light leading-relaxed">
              Websites that work. Brands that last.
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h3 className="text-textPrimary font-medium text-sm mb-4">Navigate</h3>
            <ul className="space-y-2">
              {["Work", "Services", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-textMuted hover:text-gold transition-colors text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-textPrimary font-medium text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Website Creation",
                "Brand & Design",
                "Social Media",
                "Full Package",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-textMuted hover:text-gold transition-colors text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-textPrimary font-medium text-sm mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:magalhaesjoel5@gmail.com"
                  className="text-textMuted hover:text-gold transition-colors text-sm font-light"
                >
                  magalhaesjoel5@gmail.com
                </a>
              </li>
              <li className="text-textMuted text-sm font-light">
                Luxembourg · Switzerland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-textMuted text-sm font-light text-center">
            © {year} JM Digital Solutions · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
