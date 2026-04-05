"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Bell, ExternalLink } from "lucide-react";
import { useState } from "react";
import { newsItems } from "@/lib/data";

const categories = ["All Updates", "GST", "Income Tax", "Company Law", "FEMA"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All Updates");

  const filteredNews =
    activeCategory === "All Updates"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2000&auto=format&fit=crop"
            alt="News & Updates"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute top-1/4 left-0 right-0 bg-black/85 py-4 md:py-6 shadow-2xl">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4 tracking-wide font-serif drop-shadow-md uppercase">
              News & Updates
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stay up to date with the latest news and developments from our firm.
This section highlights important announcements, achievements, and milestones.
We also share valuable insights and updates from our industry.
Our goal is to keep you informed and connected with our journey.
Check back regularly for the newest updates and information.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                      : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                  {cat !== "All Updates" && (
                    <span className="ml-2 text-xs opacity-70">
                      ({newsItems.filter((n) => n.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* News Count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing <span className="font-semibold text-primary">{filteredNews.length}</span> updates
              {activeCategory !== "All Updates" && (
                <span> in <span className="font-semibold">{activeCategory}</span></span>
              )}
            </p>

            {/* News List */}
            <div className="space-y-6">
              {filteredNews.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                  <Bell className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">No updates found for this category.</p>
                </div>
              ) : (
                filteredNews.map((item) => (
                  <article
                    key={item.id}
                    className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-primary/20">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {item.date}
                          </span>
                          {item.isNew && (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                              <Bell className="h-3 w-3" />
                              New
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <Link
                          href={`/news/${item.id}`}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Official Links */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Official Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center group">
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  Income Tax Department
                </h3>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  www.incometax.gov.in <ExternalLink className="h-3 w-3" />
                </div>
              </a>
              <a href="https://gst.gov.in" target="_blank" rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center group">
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  GST Portal
                </h3>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  gst.gov.in <ExternalLink className="h-3 w-3" />
                </div>
              </a>
              <a href="https://mca.gov.in" target="_blank" rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center group">
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  MCA Portal
                </h3>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  mca.gov.in <ExternalLink className="h-3 w-3" />
                </div>
              </a>
              <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center group">
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  RBI
                </h3>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  rbi.org.in <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
