import { useEffect, useState } from "react";
import { Lock, Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import manasLogo from "@/assets/manas-logo.png";

const navItems: { label: string; href: string; icon?: typeof Lock }[] = [
  { label: "Home", href: "/" },
  { label: "Pesquisadores", href: "/people" },
  { label: "Publicações", href: "/publications" },
  { label: "Reuniões", href: "/resources" },
  { label: "Laboratório", href: "/laboratorio" },
  { label: "Além da Pesquisa", href: "/alem-da-pesquisa" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    const prefersDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", prefersDark);
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  const renderLink = (item: (typeof navItems)[number], onClick?: () => void, baseClass?: string) => {
    const isActive =
      item.href === "/"
        ? location.pathname === "/"
        : location.pathname === item.href || location.pathname.startsWith(item.href + "/");

    const content = (
      <>
        {item.icon && <item.icon size={13} />}
        {item.label}
      </>
    );

    return (
      <Link
        key={item.href}
        to={item.href}
        onClick={onClick}
        className={cn(
          baseClass,
          "relative",
          isActive &&
            "text-primary after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary",
        )}
      >
        {content}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={manasLogo} alt="MANAS Lab" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-lg tracking-tight text-foreground">MANAS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => renderLink(item, undefined, "nav-link flex items-center gap-1"))}
          <button
            onClick={toggleTheme}
            className="nav-link flex items-center justify-center p-1.5 rounded-md hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) =>
            renderLink(
              item,
              () => setMobileOpen(false),
              "nav-link flex items-center gap-1.5 py-3 border-b border-border/50 last:border-0",
            ),
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
