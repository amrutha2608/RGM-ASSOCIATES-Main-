import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { teamMembers } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Users,
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | RGM & Associates - Chartered Accountants",
  description:
    "Our team is the backbone of our firm, bringing together skill, experience, and dedication.We are a group of professionals committed to delivering quality and excellence.Each member contributes unique expertise to serve our clients effectively.We believe in collaboration, integrity, and continuous growth.Together, we work towards achieving the best outcomes for our clients.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Our Team"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Opaque Black Banner Overlay */}
          <div className="absolute top-1/4 left-0 right-0 bg-black/85 py-4 md:py-6 shadow-2xl">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4 tracking-wide font-serif drop-shadow-md uppercase">
              Our Team
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Meet the Experts Behind Your Financial Success
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our team is the backbone of our firm, bringing together skill, experience, and dedication.We are a group of professionals committed to delivering quality and excellence.Each member contributes unique expertise to serve our clients effectively.We believe in collaboration, integrity, and continuous growth.Together, we work towards achieving the best outcomes for our clients..
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">3</div>
                <p className="text-muted-foreground">Qualified CAs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                <p className="text-muted-foreground">No. of Audits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 relative">
              <span className="absolute left-1/2 -top-4 -translate-x-1/2 text-8xl font-black text-secondary/40 select-none hidden md:block uppercase tracking-tighter">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 relative z-10 uppercase tracking-tight">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 relative z-10" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative z-10 font-medium">
                Professional Experts
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-card text-card-foreground border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* LEFT SIDE: IMAGE + TITLE BOX */}
                  <div className="w-full md:w-[320px] shrink-0 flex flex-col border-r border-border">
                    <div className="relative h-[320px] w-full bg-slate-50 p-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain transition-transform duration-500 p-2"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                    {/* Brand Box below image */}
                    <div className="bg-primary p-6 text-center text-primary-foreground flex flex-col justify-center grow min-h-[140px]">
                      <h3 className="text-xl font-bold uppercase tracking-wide mb-2 line-clamp-2">
                        {member.name.split(',')[0]}
                      </h3>
                      <div className="w-8 h-0.5 bg-primary-foreground/40 mx-auto mb-3" />
                      <p className="text-xs font-semibold uppercase tracking-widest opacity-90 leading-tight">
                        {member.designation}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE: CONTENT DETAILS */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                        {member.name}
                        <span className="text-primary/70 text-lg md:text-xl block md:inline md:ml-3 font-medium">
                          , {member.qualifications.join(", ")}
                        </span>
                      </h2>
                      <p className="text-primary font-semibold text-lg italic">
                        {member.designation}
                      </p>
                    </div>

                    <div className="prose prose-sm max-w-none text-black leading-relaxed mb-8">
                      <p className="text-base whitespace-pre-line text-justify">
                        {member.description}
                      </p>
                    </div>

                    {/* Expertise Highlights */}
                    <div className="mt-auto pt-6 border-t border-dashed border-border flex flex-wrap gap-x-8 gap-y-4">
                      {member.expertise.slice(0, 4).map((exp, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                            {exp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Work with Our Experts?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Schedule a consultation with our team and get expert guidance for
              all your financial and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-lg"
              >
                <Link href="/contact">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Schedule a Date
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-base font-semibold"
              >
                <a href="tel:+917095949594">
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
