import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { newsItems } from "@/lib/data";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === id);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.title} | News & Updates`,
    description: item.summary,
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === id);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-primary pt-12 pb-24 text-primary-foreground relative px-4 text-center border-b-[8px] border-[#1e8b98]">
          <div className="absolute top-6 left-6 md:left-24">
            <Button asChild variant="ghost" className="text-white hover:text-[#1e8b98] hover:bg-white transition-colors">
              <Link href="/news" className="flex items-center gap-2 font-bold backdrop-blur-sm bg-black/20 rounded-lg px-4 py-2">
                <ArrowLeft className="h-5 w-5" /> Back to News
              </Link>
            </Button>
          </div>
          <div className="container mx-auto max-w-4xl pt-16">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#1e8b98]/20 px-4 py-2 rounded-full border border-white/20 font-semibold shadow-sm">
                <Tag className="h-4 w-4" />
                {item.category}
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-medium">
                <Calendar className="h-4 w-4" />
                {item.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-wide leading-tight mx-auto mb-6 text-white drop-shadow-lg">
              {item.title}
            </h1>
          </div>
        </div>

        <article className="container mx-auto px-4 max-w-4xl -mt-10 mb-20 relative z-10">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-14 mb-10">
            <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-10 border-l-4 border-[#1e8b98] pl-6 italic shadow-sm bg-slate-50 py-4 pr-4 rounded-r-lg">
              {item.summary}
            </p>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-loose text-justify">
              <p>
                {item.content || "Additional exhaustive details for this news item are currently being updated by our expert team. Stay tuned for deeper insights and expanded compliance notes."}
              </p>
              
              <h3 className="text-primary mt-12 mb-4 font-bold border-b border-gray-200 pb-2">Impact and Action Required</h3>
              <p>
                Given the rapidly evolving regulatory landscape, this update may significantly impact your standard compliance flows. Our analysts recommend immediately verifying your internal accounts against the new standards. Reach out to our specialized advisory desk for a custom consultation regarding this change.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-gray-50 rounded-lg border p-10 shadow-inner">
             <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Clarifications on this Update?</h3>
             <p className="text-slate-600 mb-6 max-w-xl mx-auto">
               Our Chartered Accountants are equipped to provide precise context and actionable advice to safeguard your business compliance.
             </p>
             <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Setup a Free Consultation</Link>
             </Button>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
