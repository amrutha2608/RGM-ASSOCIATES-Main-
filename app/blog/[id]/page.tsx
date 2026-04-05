import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-primary pt-12 pb-24 text-primary-foreground relative px-4 text-center border-b-[8px] border-[#1e8b98]">
          <div className="absolute top-6 left-6 md:left-24">
            <Button asChild variant="ghost" className="text-white hover:text-[#1e8b98] hover:bg-white transition-colors">
              <Link href="/blog" className="flex items-center gap-2 font-bold backdrop-blur-sm bg-black/20 rounded-lg px-4 py-2">
                <ArrowLeft className="h-5 w-5" /> Back to Blog
              </Link>
            </Button>
          </div>
          <div className="container mx-auto max-w-4xl pt-16">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#1e8b98]/20 px-4 py-2 rounded-full border border-white/20 font-semibold shadow-sm">
                <Tag className="h-4 w-4" />
                {post.category}
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-medium">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full font-medium">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-wide leading-tight mx-auto mb-6 text-white drop-shadow-lg">
              {post.title}
            </h1>
          </div>
        </div>

        <article className="container mx-auto px-4 max-w-4xl -mt-10 mb-20 relative z-10">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-14 mb-10 overflow-hidden">
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 shadow-sm">
               <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>

            <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-10 border-l-4 border-[#1e8b98] pl-6 italic shadow-sm bg-slate-50 py-4 pr-4 rounded-r-lg">
              {post.excerpt}
            </p>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-loose text-justify">
              <p>
                {post.content || "Additional exhaustive details for this post are currently being updated by our expert team. Stay tuned for deeper insights and expanded commentary."}
              </p>
              
              <h3 className="text-primary mt-12 mb-4 font-bold border-b border-gray-200 pb-2">Further Consultation</h3>
              <p>
                As compliance regulations evolve rapidly securely managing these obligations requires an expert touch. To explore precisely how these concepts apply to your individual scenario and benefit your financial framework, we highly suggest acquiring an external analysis of your operations.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-gray-50 rounded-lg border p-10 shadow-inner">
             <h3 className="text-2xl font-bold text-slate-800 mb-4">Have Questions About This Article?</h3>
             <p className="text-slate-600 mb-6 max-w-xl mx-auto">
               Our dedicated Chartered Accountants are ready to provide specialized and actionable advice to bring absolute clarity.
             </p>
             <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Talk To Our Experts</Link>
             </Button>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
