import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { ServicePageContent } from "@/components/service-page-content";
import { servicePages, navigationData } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Triggering site-wide data refresh for updated service page visuals

// Generate static params for all service pages
export async function generateStaticParams() {
  const allServices: string[] = [];

  // Collect all service slugs from navigation data
  navigationData.navLinks.forEach((link) => {
    if (link.hasDropdown && link.dropdownSections) {
      link.dropdownSections.forEach((section) => {
        section.items.forEach((item) => {
          const slug = item.href.replace("/services/", "");
          allServices.push(slug);
        });
      });
    }
  });

  return allServices.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = servicePages[slug];

  if (pageData) {
    return {
      title: `${pageData.title} | RGM & Associates`,
      description: pageData.intro.substring(0, 160),
    };
  }

  // Default metadata for services without specific page data
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | RGM & Associates`,
    description: `Professional ${formattedTitle} services by certified Chartered Accountants. Expert assistance for all your business needs.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Get specific page data or generate default
  const pageData = servicePages[slug];

  // Generate default data if not found
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const defaultPageData = {
    title: formattedTitle,
    breadcrumb: ["Home", "Services", formattedTitle],
    intro: `Our ${formattedTitle} services provide comprehensive solutions for businesses of all sizes. Our experienced team of Chartered Accountants ensures complete compliance and professional guidance throughout the process.`,
    content: [
      {
        type: "paragraph",
        text: `RGM & Associates, we understand the importance of ${formattedTitle.toLowerCase()} for your business success. Our dedicated team works closely with clients to provide tailored solutions that meet their specific requirements and ensure timely completion of all formalities.`,
      },
    ],
    services: [
      "Complete documentation assistance",
      "Expert consultation and guidance",
      "Timely filing and compliance",
      "Post-service support",
      "Regular updates and reporting",
    ],
  };

  const displayData = pageData || defaultPageData;

  return (
    <>
      <Header />
      <main>
        <ServicePageContent data={displayData} slug={slug} />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
  