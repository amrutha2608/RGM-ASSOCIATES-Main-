"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  CheckCircle,
  Phone,
  ArrowRight,
  FileText,
  Shield,
  Users,
} from "lucide-react";
import type { ServicePageData } from "@/lib/data";

interface ServicePageContentProps {
  data:
    | ServicePageData
    | {
        title: string;
        breadcrumb: string[];
        intro: string;
        content: Array<{ type: string; text: string }>;
        services: string[];
        image?: string;
        hideTitleOverlay?: boolean;
      };
  slug: string;
}

const sidebarLinks = [
  { title: "All Services", href: "/services" },
  { title: "Business Establishment Services", href: "/services/private-limited" },
  { title: "Company Law And Allied Services", href: "/services/secretarial" },
  { title: "Taxation", href: "/services/gst-registration" },
  { title: "Auditing And Assurance Services", href: "/services/statutory-audit" },
  { title: "Accounting & Compliance Services", href: "/services/bookkeeping" },
];

const genericImages = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512409556816-52bdc7246068?q=80&w=2000&auto=format&fit=crop"
];

const getDeterministicImage = (slug: string) => {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return genericImages[Math.abs(hash) % genericImages.length];
};

export function ServicePageContent({ data, slug }: ServicePageContentProps) {
  const fullData = data as ServicePageData;
  const heroImage = fullData.image || getDeterministicImage(slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-primary py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/90 font-medium">
            {data.breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-4 w-4 opacity-70 border-white/50" />}
                {index === data.breadcrumb.length - 1 ? (
                  <span className="text-white font-semibold">{item}</span>
                ) : (
                  <Link
                    href={index === 0 ? "/" : "#"}
                    className="hover:text-white transition-colors opacity-80"
                  >
                    {item}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 pt-4 pb-10 md:pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT: Sidebar Navigation */}
          <div className="w-full lg:w-1/4 flex-shrink-0 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Sidebar Menu matching screenshot */}
              <div className="flex flex-col space-y-2">
                {sidebarLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex justify-between items-center px-5 py-4 bg-secondary/50 hover:bg-secondary transition-colors rounded-sm text-foreground font-medium border-l-4 border-transparent hover:border-primary"
                  >
                    <span className="text-[15px]">{link.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>

              {/* Contact Assistance Sidebar Widget */}
              <div className="bg-secondary/40 border border-border rounded-sm p-6 mt-8">
                <h3 className="text-lg font-bold text-foreground border-b pb-3 mb-4">Request a call back</h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Leave your details and we will get back to you within 24 hours.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: Main Content Area */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            
            {/* Hero Banner Area */}
            <div className="relative w-full h-[250px] md:h-[400px] mb-8 overflow-hidden bg-gray-100">
              <Image
                src={heroImage}
                alt={data.title}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Opaque Black Banner Overlay - Now visible for all services in Uppercase as requested */}
              <div className="absolute top-1/4 left-0 right-0 bg-black/85 py-4 md:py-6 shadow-2xl">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4 tracking-wide font-serif drop-shadow-md uppercase">
                  {data.title}
                </h1>
              </div>
            </div>

            {/* Intro Content */}
            <div className="prose prose-lg max-w-none mb-10 text-foreground">
              <p className="leading-loose text-[16px] md:text-[18px]">
                {data.intro}
              </p>
            </div>

            {/* Content Paragraphs */}
            {data.content.map((block, index) => (
              <div key={index} className="prose prose-lg max-w-none mb-8 text-foreground">
                <p className="leading-loose text-[16px] md:text-[18px]">
                  {block.text}
                </p>
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-8 my-10">
              {/* Services List */}
              <div className="bg-secondary/40 rounded-sm p-8 border border-secondary/20">
                <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  What We Offer
                </h2>
                <ul className="space-y-4">
                  {data.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground font-medium leading-tight">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Benefits */}
              {fullData.benefits && (
                <div className="bg-[#f8f9fa] rounded-sm p-8 border border-gray-100">
                  <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Key Benefits
                  </h2>
                  <div className="space-y-4">
                    {fullData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground font-medium leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>



            {/* Expert Section */}
            {fullData.expert && (
              <div className="bg-background border rounded-sm p-8 my-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10" />
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-32 h-32 flex-shrink-0 rounded-full bg-muted overflow-hidden relative shadow-inner border-4 border-background mb-4 md:mb-0">
                    <Image
                      src={fullData.expert.image}
                      alt={fullData.expert.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {fullData.expert.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                      {fullData.expert.designation}
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-4 py-2">
                       "{fullData.expert.description}"
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Bottom Form CTA */}
            <div className="mt-12 bg-primary rounded-sm p-8 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Need Help With {data.title}?</h3>
                <p className="text-primary-foreground/80">Our specialized team is waiting to provide your custom solution.</p>
              </div>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90 border-none rounded-sm px-8 py-6 flex-shrink-0 z-10 font-bold">
                <Link href="/contact">
                  Start Application <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
