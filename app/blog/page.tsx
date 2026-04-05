import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RGM & Associates - Chartered Accountants",
  description:
    "Stay updated with the latest news, updates, and insights on taxation, compliance, and business regulations from our expert team.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop"
            alt="Our Blog"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Opaque Black Banner Overlay */}
          <div className="absolute top-1/4 left-0 right-0 bg-black/85 py-4 md:py-6 shadow-2xl">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4 tracking-wide font-serif drop-shadow-md uppercase">
              Insights & Updates
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Welcome to our blog, where we share insights, ideas, and valuable knowledge.
                This section covers industry trends, expert opinions, and practical tips.
                Our aim is to provide content that is both informative and easy to understand.
                We strive to keep our readers updated with relevant and meaningful information.
                Explore our articles to stay informed and inspired.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Blog Image */}
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>


                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Have Questions? We're Here to Help.
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                Reach out to our team of expert Chartered Accountants for guidance on tax, compliance, and business matters.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-lg"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-base font-semibold"
                >
                  <Link href="/contact">
                    Schedule a Date
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
