import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { TaxCalculator } from "@/components/tax-calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Tax Calculator | RGM & Associates",
  description:
    "Calculate your income tax liability under Old and New Regime for (FY 2025-26 / AY 2026-27). Compare tax savings and choose the best option.",
};

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main className="pb-20 bg-secondary/30 min-h-screen">
        {/* Page Header Banner */}
        <section className="relative pb-24 md:pb-32 overflow-hidden flex items-center min-h-[40vh] mb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="/calculator-banner.png"
              alt="Income Tax Calculator Banner"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  HOME
                </span>
                <span className="text-muted-foreground text-sm">»</span>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  CALCULATOR
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 drop-shadow-sm">
                Income Tax Calculator
              </h1>
              <p className="text-xl text-foreground/90 leading-relaxed max-w-2xl">
                Compare your tax liability under Old and New Tax Regime for (FY
                2025-26 / AY 2026-27). Enter your income details and deductions to find the best
                option for you.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Calculator */}
          <TaxCalculator />

          {/* Tax Slabs Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-border p-8 text-center md:text-left transition-all hover:border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-tight">
                Old Regime Tax Slabs (FY 2025-26 / AY 2026-27)
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-muted-foreground font-medium">
                      Income Slab
                    </th>
                    <th className="text-right py-3 text-muted-foreground font-medium">
                      Tax Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">Up to Rs. 2,50,000</td>
                    <td className="text-right py-3 text-foreground">Nil</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 2,50,001 - Rs. 5,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">5%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 5,00,001 - Rs. 10,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">20%</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground">Above Rs. 10,00,000</td>
                    <td className="text-right py-3 text-foreground">30%</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-muted-foreground">
                * Senior Citizens (60-80): Basic exemption limit Rs. 3,00,000
                <br />* Super Senior Citizens (80+): Basic exemption limit Rs.
                5,00,000
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 text-center md:text-left transition-all hover:border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-tight">
                New Regime Tax Slabs (FY 2025-26 / AY 2026-27)
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-muted-foreground font-medium">
                      Income Slab
                    </th>
                    <th className="text-right py-3 text-muted-foreground font-medium">
                      Tax Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">Up to Rs. 4,00,000</td>
                    <td className="text-right py-3 text-foreground">Nil</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 4,00,001 - Rs. 8,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">5%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 8,00,001 - Rs. 12,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">10%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 12,00,001 - Rs. 16,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">15%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 16,00,001 - Rs. 20,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">20%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 text-foreground">
                      Rs. 20,00,001 - Rs. 24,00,000
                    </td>
                    <td className="text-right py-3 text-foreground">25%</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground">Above Rs. 24,00,000</td>
                    <td className="text-right py-3 text-foreground">30%</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-muted-foreground">
                * Standard Deduction of Rs. 75,000 available
                <br />* Rebate u/s 87A available for income up to Rs. 12,00,000
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
