"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Building,
  Clock,
  ArrowRight,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "ICAI Certified",
      description:
        "All our partners are certified by the Institute of Chartered Accountants of India",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Team of 3+ professionals including CAs, CSs, and legal experts",
    },
    {
      icon: Building,
      title: "Multi-Location",
      description:
        "Offices in Visakhapatnam and Hyderabad serving clients across India",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast and efficient service delivery with dedicated support",
    },
  ];

  const visionMissionValues = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To redefine professional financial services through insight-driven solutions, trust, and long-term value creation.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide precise, compliant, and strategic accounting and taxation services that help clients navigate complexity and make confident financial decisions.",
    },
    {
      icon: HeartHandshake,
      title: "Our Values",
      description: "We maintain strict confidentiality, stay updated with the latest regulations, and leverage technology to provide efficient and transparent solutions. Our client-first approach ensures that every solution is tailored to meet unique financial needs."
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 space-y-20">
        {/* ABOUT CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Your Trusted Partner in Financial Excellence
            </h2>

            <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-6">
              Welcome to M/s R G M & Associates, a premier Chartered Accountancy
              firm where traditional values meet modern financial strategy. With
              a foundation built on integrity and deep technical proficiency, we
              serve as the strategic financial backbone for businesses operating
              in a complex global economy.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify mb-6">
              In an era of shifting regulations, our firm provides the stability
              and foresight necessary to navigate the complexities of
              International Taxation and Direct Tax laws. We go beyond the
              balance sheet, offering specialized Forensic Audits and Audit &
              Assurance services that provide true peace of mind.
            </p>


            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/team">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VISION · MISSION · VALUES */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionMissionValues.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-all text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
