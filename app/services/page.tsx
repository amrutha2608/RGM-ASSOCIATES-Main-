import { ServicePageContent } from "@/components/service-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | RGM & Associates",
  description: "Explore our comprehensive suite of financial, business, and compliance services.",
};

const servicesData = {
  title: "Our Services",
  breadcrumb: ["Home", "Services"],
  intro: "Explore our comprehensive suite of financial, business, and compliance services. We provide end-to-end solutions tailored to your unique requirements to help your business grow sustainably.",
  content: [
    {
      type: "p",
      text: "At RGM & Associates, we understand that navigating the complexities of corporate law, taxation, and financial compliance can be challenging. Our expert team is dedicated to providing clear, actionable advisory to simplify these processes for you. Whether you are a startup needing business registration or a mature enterprise requiring comprehensive statutory audits, we have you covered."
    }
  ],
  services: [
    "Business Establishment Services",
    "Company Law And Allied Services",
    "Taxation & Advisory",
    "Auditing And Assurance Services",
    "Accounting & Compliance Services",
    "Outsourcing & CFO Services"
  ]
};

export default function ServicesPage() {
  return <ServicePageContent data={servicesData} slug="all-services" />;
}
