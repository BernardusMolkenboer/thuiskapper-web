"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MapPin, Shield } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isLight = useMemo(() => isHome && !isScrolled, [isHome, isScrolled]);

  const navLinks = [
    { href: "/#hoe-werkt-het", label: "Hoe werkt het" },
    { href: "/#voordelen", label: "Voordelen" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#kappers", label: "Voor Kappers" },
  ];

  const secondaryLinks = [
    { href: "/locaties", label: "Werkgebied", icon: MapPin },
    { href: "/privacy", label: "Privacy", icon: Shield },
  ];

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isLight
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "flex items-center justify-between",
            isLight ? "py-5" : "py-3",
          ].join(" ")}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className={[
                  "absolute -inset-1 rounded-xl transition-opacity duration-300",
                  isLight
                    ? "bg-white/20 opacity-100"
                    : "bg-brand-100 opacity-0",
                ].join(" ")}
              />
              <Image
                src="/favicon.png"
                alt="Thuiskapper.app"
                width={40}
                height={40}
                className="relative rounded-xl transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>

            <span
              className={[
                "font-bold text-xl transition-colors duration-300",
                isLight ? "text-white" : "text-gray-900",
              ].join(" ")}
            >
              Thuiskapper<span className="text-brand-400">.app</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Hoofdnavigatie"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group",
                  isLight
                    ? "text-white/85 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-brand-600 hover:bg-brand-50",
                ].join(" ")}
              >
                {link.label}
                <span
                  className={[
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-1/2 rounded-full",
                    isLight ? "bg-white/70" : "bg-brand-400",
                  ].join(" ")}
                />
              </a>
            ))}

            <Link
              href="/locaties"
              className={[
                "ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                isLight
                  ? "text-white/85 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-brand-600 hover:bg-brand-50",
              ].join(" ")}
            >
              <MapPin className="w-4 h-4" />
              Locaties
            </Link>

            <a
              href="/#download"
              className={[
                "ml-4 group inline-flex items-center gap-2 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100",
                isLight
                  ? "bg-white text-brand-600 hover:bg-white/95 shadow-white/10"
                  : "bg-brand-400 hover:bg-brand-500 text-white hover:shadow-brand-400/30",
              ].join(" ")}
            >
              Download App
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className={[
              "lg:hidden p-2.5 rounded-xl transition-all duration-300",
              isLight
                ? "text-white hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-100",
            ].join(" ")}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        <div
          id="mobile-nav"
          className={[
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen
              ? "max-h-[520px] opacity-100 pb-5"
              : "max-h-0 opacity-0 pb-0",
          ].join(" ")}
        >
          <nav
            aria-label="Mobiele navigatie"
            className={[
              "rounded-2xl p-4 border",
              isLight ? "glass border-white/10" : "bg-gray-50 border-gray-200",
            ].join(" ")}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={[
                    "font-medium py-3 px-4 rounded-xl transition-all duration-300",
                    isLight
                      ? "text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-brand-50 hover:text-brand-600",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" />

              {secondaryLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={[
                      "flex items-center gap-3 font-medium py-3 px-4 rounded-xl transition-all duration-300",
                      isLight
                        ? "text-white hover:bg-white/10"
                        : "text-gray-700 hover:bg-brand-50 hover:text-brand-600",
                    ].join(" ")}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}

              <a
                href="/#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className={[
                  "mt-2 font-semibold px-6 py-3.5 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2",
                  isLight
                    ? "bg-white text-brand-600 hover:bg-white/95"
                    : "bg-brand-400 hover:bg-brand-500 text-white",
                ].join(" ")}
              >
                Download App
                <ArrowRight className="w-4 h-4" />
              </a>

              <p
                className={[
                  "mt-3 text-xs px-1",
                  isLight ? "text-white/70" : "text-gray-500",
                ].join(" ")}
              >
                Tip: op andere pagina’s kunt u via <strong>Locaties</strong>{" "}
                direct uw stad kiezen.
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
