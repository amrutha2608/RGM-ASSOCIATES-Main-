"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationData } from "@/lib/data";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  ChevronDown,
  Menu,
  X,
  Calculator,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] =
    useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#111439] text-white shadow-xl">
      {/* SINGLE HEADER CONTAINER */}
      <div className="w-full max-w-[1700px] mx-auto px-4 lg:px-8">
        
        {/* TOP CONTACT STRIP (Unified responsive header) */}
        <div className="flex flex-wrap items-center justify-between py-2 border-b border-white/10 text-[10px] md:text-xs gap-y-2">
          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            <a href={`tel:${navigationData.contact.phone}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span>{navigationData.contact.phone}</span>
            </a>
            <a href={`mailto:${navigationData.contact.email}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap">
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              <span>{navigationData.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 w-full md:w-auto md:max-w-[400px] xl:max-w-none">
            <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            <span className="text-[9px] sm:text-[10px] md:text-xs leading-tight">{navigationData.contact.addresses[0]}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href={navigationData.socialLinks.facebook} target="_blank" className="hover:text-white/80 transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
            <a href={navigationData.socialLinks.twitter} target="_blank" className="hover:text-white/80 transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="flex items-center justify-between h-[72px]">
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-lg">
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="object-contain" priority />
            </div>
            <div>
              <h1 className="text-sm lg:text-base xl:text-lg font-bold tracking-tight text-white leading-none">
                {navigationData.logo.name}
              </h1>
              <p className="text-[10px] text-white/70 font-medium mt-0.5 tracking-wide">
                {navigationData.logo.tagline}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV SECTION */}
          <div className="flex items-center gap-2 xl:gap-6">
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigationData.navLinks.map((link) => (
                link.name !== "Contact Us" && (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.hasDropdown ? (
                    <button className="flex items-center gap-1 px-3 py-2 text-[13px] xl:text-[14px] font-semibold text-white/90 hover:text-white transition-colors">
                      {link.name}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 opacity-70", activeDropdown === link.name && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-3 py-2 text-[13px] xl:text-[14px] font-semibold text-white/90 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* MEGA MENU (Modern dark variant) */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className={cn(
                      "absolute top-full pt-2 z-50",
                      link.name === "Outsourcing & CFO" ? "right-0" : "left-0"
                    )}>
                      <div className="bg-[#111439] border border-white/10 rounded-xl shadow-2xl p-6 min-w-[850px]">
                        <div className={cn(
                          "grid gap-8",
                          link.dropdownSections?.length === 4 ? "grid-cols-4" : "grid-cols-3"
                        )}>
                          {link.dropdownSections?.map((section, idx) => (
                            <div key={idx}>
                              <h3 className="text-[11px] font-bold text-white/40 mb-3 uppercase tracking-widest">
                                {section.title}
                              </h3>
                              <ul className="space-y-1.5">
                                {section.items.map((item, i) => (
                                  <li key={i}>
                                    <Link
                                      href={item.href}
                                      className="block text-sm text-white/80 hover:text-white hover:pl-1 transition-all py-1 border-l border-transparent hover:border-white/20 pl-0"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                )
              ))}
            </nav>

            {/* CTA BUTTON */}
            <Button asChild className="hidden lg:inline-flex bg-white text-[#111439] hover:bg-white/90 font-bold text-xs xl:text-sm px-6 py-2.5 rounded-lg shadow-lg transition-all active:scale-95 ml-4">
              <Link href="/contact">Contact Us</Link>
            </Button>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111439] border-t border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="container mx-auto px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {navigationData.navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/5 last:border-0 pb-2">
                {link.hasDropdown ? (
                  <>
                    <button
                      className="flex justify-between w-full px-4 py-3 text-sm font-bold text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() =>
                        setMobileActiveDropdown(
                          mobileActiveDropdown === link.name ? null : link.name
                        )
                      }
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300 opacity-50",
                          mobileActiveDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileActiveDropdown === link.name && (
                      <div className="pl-4 mt-2 space-y-4 pb-4 animate-in fade-in duration-200">
                        {link.dropdownSections?.filter(s => s.title !== "Required Documents").map((section, idx) => (
                          <div key={idx} className="space-y-2">
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest pl-4">
                              {section.title}
                            </p>
                            <div className="grid grid-cols-1 gap-1">
                              {section.items.map((item, i) => (
                                <Link
                                  key={i}
                                  href={item.href}
                                  className="block px-4 py-2 text-[13px] text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm font-bold text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
