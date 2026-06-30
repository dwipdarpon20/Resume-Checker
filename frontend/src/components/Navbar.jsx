import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {handleLogout} = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-lg shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-soft">
            <FileText className="h-5 w-5" />
          </span>

          <span className="flex gap-1 text-lg font-bold tracking-tight">
            <span>AI Resume</span>
            <span className="text-gradient">Analyser</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={handleLogout} className="rounded-xl bg-[image:var(--gradient-primary)] px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft cursor-pointer hover:scale-110">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-center">
            <button onClick={handleLogout} className="w-lg rounded-xl bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;