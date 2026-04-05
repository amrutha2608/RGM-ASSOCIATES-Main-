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
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground h-[40px] flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between text-sm py-2">
            <div className="hidden md:flex items-center gap-6">
              <a
                href={`tel:${navigationData.contact.phone}`}
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {navigationData.contact.phone}
              </a>
              <a
                href={`mailto:${navigationData.contact.email}`}
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {navigationData.contact.email}
              </a>
            </div>
            <div className="hidden xl:flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate max-w-[400px]">{navigationData.contact.addresses[0]}</span>
              </div>
              <div className="flex items-center gap-3 border-l border-white/20 pl-6 h-4">
                <a
                  href={navigationData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={navigationData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div
        className={cn(
          "bg-background transition-shadow duration-300",
          isScrolled && "shadow-lg"
        )}
      >
        <div className="w-full max-w-[1600px] mx-auto px-3 lg:px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* LEFT SIDE : LOGO + NAV */}
            <div className="flex items-center gap-1 lg:gap-3 xl:gap-6 grow">
              {/* LOGO */}
             <Link href="/" className="flex flex-shrink-0 items-center gap-2 mr-1 lg:mr-2 xl:mr-4">
  <Image
    src="/logo.jpg"
    alt="Company Logo"
    width={36}
    height={36}
    className="object-contain lg:w-9 lg:h-9 xl:w-11 xl:h-11"
    priority
  />
  <div>
    <h1 className="text-sm lg:text-[15px] xl:text-lg font-semibold leading-tight whitespace-nowrap">
      {navigationData.logo.name}
    </h1>
    <p className="text-[10px] xl:text-xs text-primary font-medium whitespace-nowrap">
      {navigationData.logo.tagline}
    </p>
  </div>
</Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-0 xl:gap-0.5">
                {navigationData.navLinks.map((link) => (
                  link.name !== "Contact Us" && (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() =>
                      link.hasDropdown && setActiveDropdown(link.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-0.5 px-1.5 py-1.5 text-[11px] xl:text-[13px] font-medium rounded-md transition-colors whitespace-nowrap",
                        "hover:bg-secondary hover:text-secondary-foreground",
                        activeDropdown === link.name &&
                          "bg-secondary text-secondary-foreground"
                      )}
                    >
                      {link.name === "Calculator" && (
                        <Calculator className="h-3.5 w-3.5 xl:h-4 xl:w-4 mr-0.5" />
                      )}
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 xl:h-4 xl:w-4 transition-transform",
                            activeDropdown === link.name && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* MEGA MENU */}
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div className={cn(
                        "absolute top-full pt-3 z-50",
                        link.name === "Outsourcing & CFO" ? "right-0" : "left-0"
                      )}>
                        <div className="bg-background border rounded-lg shadow-xl p-6 min-w-[800px]">
                          <div className={cn(
                            "grid gap-8",
                            link.dropdownSections?.length === 4 ? "grid-cols-4" : "grid-cols-3"
                          )}>
                            {link.dropdownSections?.map((section, idx) => (
                              <div key={idx}>
                                <h3 className="text-sm font-semibold text-primary mb-3 uppercase">
                                  {section.title}
                                </h3>
                                <ul className="space-y-2">
                                  {section.items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        href={item.href}
                                        className="block text-sm hover:text-primary"
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
            </div>

            {/* RIGHT SIDE : CTA + MOBILE */}
            <div className="flex items-center gap-1 xl:gap-2 shrink-0 lg:ml-1 xl:ml-2">
              <Button asChild variant="default" className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-[11px] xl:text-sm px-3 xl:px-5 py-1.5 rounded-md whitespace-nowrap">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-secondary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigationData.navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className="flex justify-between w-full px-4 py-3 font-medium hover:bg-secondary rounded-md"
                      onClick={() =>
                        setMobileActiveDropdown(
                          mobileActiveDropdown === link.name
                            ? null
                            : link.name
                        )
                      }
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          mobileActiveDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileActiveDropdown === link.name && (
                      <div className="pl-4 space-y-2">
                        {link.dropdownSections?.filter(s => s.title !== "Required Documents").map((section, idx) => (
                          <div key={idx}>
                            <p className="text-xs font-semibold text-primary">
                              {section.title}
                            </p>
                            {section.items.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className="block px-4 py-2 text-sm hover:bg-secondary rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 font-medium hover:bg-secondary rounded-md"
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
