"use client";

import Link from "next/link";
import { navigationData } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/team" },
    { name: "Our Services", href: "/services/business-registration" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Tax Calculator", href: "/calculator" },
  ];

  const services = [
    { name: "Company Registration", href: "/services/private-limited" },
    { name: "GST Registration", href: "/services/gst-registration" },
    { name: "Tax Filing", href: "/services/itr-filing" },
    { name: "Registered Valuer", href: "/services/registered-valuer" },
    { name: "Virtual CFO", href: "/services/virtual-cfo" },
    { name: "Bookkeeping", href: "/services/bookkeeping" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* MAIN FOOTER */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary">CA</span>
              <div>
                <h3 className="text-lg font-semibold">
                  {navigationData.logo.name}
                </h3>
                <p className="text-xs text-primary">
                  {navigationData.logo.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-background/60 leading-relaxed mb-4">
              {navigationData.logo.subtext}
            </p>

            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted partner for accounting, taxation, audit, and
              compliance services across India.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Facebook, href: navigationData.socialLinks.facebook, label: "Facebook" },
                { Icon: Twitter, href: navigationData.socialLinks.twitter, label: "Twitter" },
                { Icon: Linkedin, href: navigationData.socialLinks.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: navigationData.socialLinks.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-primary" />
            </h4>

            <ul className="space-y-4">
              {/* PHONE */}
              <li className="flex gap-3">
                <IconBox>
                  <Phone className="h-4 w-4 text-primary" />
                </IconBox>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href={`tel:${navigationData.contact.phone}`}
                    className="text-background/70 hover:text-primary text-sm"
                  >
                    {navigationData.contact.phone}
                  </a>
                  <p className="text-xs text-background/50">
                    {navigationData.contact.phoneHours}
                  </p>
                </div>
              </li>

              {/* EMAIL */}
              <li className="flex gap-3">
                <IconBox>
                  <Mail className="h-4 w-4 text-primary" />
                </IconBox>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${navigationData.contact.email}`}
                    className="text-background/70 hover:text-primary text-sm"
                  >
                    {navigationData.contact.email}
                  </a>
                </div>
              </li>

              {/* ADDRESSES */}
              {navigationData.contact.addresses.map((address, index) => (
                <li key={index} className="flex gap-3">
                  <IconBox>
                    <MapPin className="h-4 w-4 text-primary" />
                  </IconBox>
                  <div>
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "Visakhapatnam Office"
                        : index === 1
                        ? "Hyderabad Office"
                        : "Badvel Office"}
                    </p>
                    <p className="text-background/70 text-sm">{address}</p>
                  </div>
                </li>
              ))}

              {/* WORKING HOURS */}
              <li className="flex gap-3">
                <IconBox>
                  <Clock className="h-4 w-4 text-primary" />
                </IconBox>
                <div>
                  <p className="text-sm font-medium">Working Hours</p>
                  <p className="text-background/70 text-sm">
                    Mon – Sat: 9:30 AM – 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} {navigationData.logo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-background/60 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-background/60 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-background/60 hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* SMALL ICON WRAPPER */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
      {children}
    </div>
  );
}
