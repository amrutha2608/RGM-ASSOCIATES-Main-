"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Info, TrendingDown, TrendingUp } from "lucide-react";

interface TaxResult {
  totalIncome: number;
  deductions: number;
  taxableIncome: number;
  grossTax: number;
  cess: number;
  totalTax: number;
}

export function TaxCalculator() {
  // Tax Payer Info
  const [name, setName] = useState("");
  const [taxPayerType, setTaxPayerType] = useState("individual");
  const [gender, setGender] = useState("male");
  const [ageCategory, setAgeCategory] = useState("below60");

  // Income Details
  const [salaryIncome, setSalaryIncome] = useState<number>(0);
  const [housePropertyIncome, setHousePropertyIncome] = useState<number>(0);
  const [loanInterest, setLoanInterest] = useState<number>(0);
  const [businessIncome, setBusinessIncome] = useState<number>(0);
  const [capitalGainsSTCG, setCapitalGainsSTCG] = useState<number>(0);
  const [capitalGainsLTCG, setCapitalGainsLTCG] = useState<number>(0);
  const [otherSources, setOtherSources] = useState<number>(0);

  // Deductions
  const [section80C, setSection80C] = useState<number>(150000);
  const [section80D, setSection80D] = useState<number>(0);
  const [otherDeductions, setOtherDeductions] = useState<number>(0);

  // TDS
  const [oldRegimeTDS, setOldRegimeTDS] = useState<number>(0);
  const [newRegimeTDS, setNewRegimeTDS] = useState<number>(0);

  const calculateOldRegimeTax = useMemo(() => {
    // Total Income
    const totalIncome =
      salaryIncome +
      housePropertyIncome -
      Math.min(loanInterest, 200000) +
      businessIncome +
      capitalGainsSTCG +
      capitalGainsLTCG +
      otherSources;

    // Standard Deduction for salaried (50,000)
    const standardDeduction = salaryIncome > 0 ? 50000 : 0;

    // Total Deductions (Chapter VI-A)
    const totalDeductions =
      standardDeduction +
      Math.min(section80C, 150000) +
      Math.min(section80D, 100000) +
      otherDeductions;

    // Taxable Income
    const taxableIncome = Math.max(0, totalIncome - totalDeductions);

    // Calculate Tax based on age category
    let tax = 0;
    let exemptionLimit = 250000;

    if (ageCategory === "60to80") {
      exemptionLimit = 300000;
    } else if (ageCategory === "above80") {
      exemptionLimit = 500000;
    }

    if (taxableIncome <= exemptionLimit) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - exemptionLimit) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = (500000 - exemptionLimit) * 0.05 + (taxableIncome - 500000) * 0.2;
    } else {
      tax =
        (500000 - exemptionLimit) * 0.05 +
        500000 * 0.2 +
        (taxableIncome - 1000000) * 0.3;
    }

    // Rebate under 87A (if taxable income <= 5L)
    if (taxableIncome <= 500000) {
      tax = Math.max(0, tax - 12500);
    }

    // Surcharge
    let surcharge = 0;
    if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
      surcharge = tax * 0.1;
    } else if (taxableIncome > 10000000 && taxableIncome <= 20000000) {
      surcharge = tax * 0.15;
    } else if (taxableIncome > 20000000 && taxableIncome <= 50000000) {
      surcharge = tax * 0.25;
    } else if (taxableIncome > 50000000) {
      surcharge = tax * 0.37;
    }

    const grossTax = tax + surcharge;
    const cess = grossTax * 0.04;
    const totalTax = grossTax + cess;

    return {
      totalIncome,
      deductions: totalDeductions,
      taxableIncome,
      grossTax,
      cess,
      totalTax,
    };
  }, [
    salaryIncome,
    housePropertyIncome,
    loanInterest,
    businessIncome,
    capitalGainsSTCG,
    capitalGainsLTCG,
    otherSources,
    section80C,
    section80D,
    otherDeductions,
    ageCategory,
  ]);

  const calculateNewRegimeTax = useMemo(() => {
    // Total Income (No deductions allowed except standard deduction)
    const totalIncome =
      salaryIncome +
      housePropertyIncome +
      businessIncome +
      capitalGainsSTCG +
      capitalGainsLTCG +
      otherSources;

    // Standard Deduction for salaried (75,000 in new regime FY 25-26)
    const standardDeduction = salaryIncome > 0 ? 75000 : 0;

    // Taxable Income (minimal deductions in new regime)
    const taxableIncome = Math.max(0, totalIncome - standardDeduction);

    // New Regime Tax Slabs (FY 2025-26)
    let tax = 0;

    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 700000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 400000 * 0.05 + (taxableIncome - 700000) * 0.1;
    } else if (taxableIncome <= 1200000) {
      tax = 400000 * 0.05 + 300000 * 0.1 + (taxableIncome - 1000000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax =
        400000 * 0.05 +
        300000 * 0.1 +
        200000 * 0.15 +
        (taxableIncome - 1200000) * 0.2;
    } else {
      tax =
        400000 * 0.05 +
        300000 * 0.1 +
        200000 * 0.15 +
        300000 * 0.2 +
        (taxableIncome - 1500000) * 0.3;
    }

    // Rebate under 87A (if taxable income <= 7L in new regime)
    if (taxableIncome <= 700000) {
      tax = Math.max(0, tax - 25000);
    }

    // Surcharge
    let surcharge = 0;
    if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
      surcharge = tax * 0.1;
    } else if (taxableIncome > 10000000 && taxableIncome <= 20000000) {
      surcharge = tax * 0.15;
    } else if (taxableIncome > 20000000) {
      surcharge = tax * 0.25; // Max surcharge 25% in new regime
    }

    const grossTax = tax + surcharge;
    const cess = grossTax * 0.04;
    const totalTax = grossTax + cess;

    return {
      totalIncome,
      deductions: standardDeduction,
      taxableIncome,
      grossTax,
      cess,
      totalTax,
    };
  }, [
    salaryIncome,
    housePropertyIncome,
    businessIncome,
    capitalGainsSTCG,
    capitalGainsLTCG,
    otherSources,
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const betterRegime =
    calculateOldRegimeTax.totalTax <= calculateNewRegimeTax.totalTax
      ? "old"
      : "new";
  const savings = Math.abs(
    calculateOldRegimeTax.totalTax - calculateNewRegimeTax.totalTax
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Inputs */}
        <div className="lg:col-span-2 space-y-8">
          {/* Tax Payer Info */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              TAX PAYER INFO
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-muted-foreground text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="e.g. Laxman"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">
                  Tax Payer Type
                </Label>
                <Select value={taxPayerType} onValueChange={setTaxPayerType}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="huf">HUF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">
                  Age Category
                </Label>
                <Select value={ageCategory} onValueChange={setAgeCategory}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below60">Normal (Below 60)</SelectItem>
                    <SelectItem value="60to80">Senior Citizen (60-80)</SelectItem>
                    <SelectItem value="above80">Super Senior (80+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Income Details */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-primary mb-6">
              INCOME DETAILS
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Income from Salary
                  </Label>
                  <Input
                    type="number"
                    value={salaryIncome}
                    onChange={(e) =>
                      setSalaryIncome(Number(e.target.value) || 0)
                    }
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Income from House Property
                  </Label>
                  <Input
                    type="number"
                    value={housePropertyIncome}
                    onChange={(e) =>
                      setHousePropertyIncome(Number(e.target.value) || 0)
                    }
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Loan Interest
                  </Label>
                  <Input
                    type="number"
                    value={loanInterest}
                    onChange={(e) =>
                      setLoanInterest(Number(e.target.value) || 0)
                    }
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">
                  Business Income
                </Label>
                <Input
                  type="number"
                  value={businessIncome}
                  onChange={(e) =>
                    setBusinessIncome(Number(e.target.value) || 0)
                  }
                  className="mt-2"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Capital Gains (STCG)
                  </Label>
                  <Input
                    type="number"
                    value={capitalGainsSTCG}
                    onChange={(e) =>
                      setCapitalGainsSTCG(Number(e.target.value) || 0)
                    }
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Capital Gains (LTCG)
                  </Label>
                  <Input
                    type="number"
                    value={capitalGainsLTCG}
                    onChange={(e) =>
                      setCapitalGainsLTCG(Number(e.target.value) || 0)
                    }
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">
                  Other Sources
                </Label>
                <Input
                  type="number"
                  value={otherSources}
                  onChange={(e) => setOtherSources(Number(e.target.value) || 0)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              DEDUCTIONS (CHAPTER VI-A)
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              *Used for Old Regime Calculation. New Regime ignores specific
              deductions except Standard Deduction.
            </p>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Section 80C (LIC, PF)
                  </Label>
                  <Input
                    type="number"
                    value={section80C}
                    onChange={(e) => setSection80C(Number(e.target.value) || 0)}
                    className="mt-2"
                    max={150000}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Max: {formatCurrency(150000)}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground text-sm">
                    Section 80D (Mediclaim)
                  </Label>
                  <Input
                    type="number"
                    value={section80D}
                    onChange={(e) => setSection80D(Number(e.target.value) || 0)}
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label className="text-muted-foreground text-sm">
                  Other Deductions (80E, etc.)
                </Label>
                <Input
                  type="number"
                  value={otherDeductions}
                  onChange={(e) =>
                    setOtherDeductions(Number(e.target.value) || 0)
                  }
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          {/* Old Regime */}
          <div
            className={`bg-card rounded-2xl border p-6 ${
              betterRegime === "old" ? "border-primary ring-2 ring-primary/20" : "border-border"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">OLD REGIME</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">(FY 25-26 / AY 26-27)</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Income</span>
                <span className="text-foreground">
                  {formatCurrency(calculateOldRegimeTax.totalIncome)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deductions</span>
                <span className="text-foreground">
                  - {formatCurrency(calculateOldRegimeTax.deductions)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="text-primary font-medium">Taxable</span>
                <span className="text-primary font-medium">
                  {formatCurrency(calculateOldRegimeTax.taxableIncome)}
                </span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">
                Gross Tax Liability
              </p>
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(calculateOldRegimeTax.totalTax)}
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <Label className="text-muted-foreground text-xs">
                  Tax Paid (TDS)
                </Label>
                <Input
                  type="number"
                  value={oldRegimeTDS}
                  onChange={(e) => setOldRegimeTDS(Number(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-muted-foreground">Balance</span>
                <span
                  className={
                    calculateOldRegimeTax.totalTax - oldRegimeTDS >= 0
                      ? "text-destructive font-medium"
                      : "text-primary font-medium"
                  }
                >
                  {formatCurrency(calculateOldRegimeTax.totalTax - oldRegimeTDS)}
                </span>
              </div>
            </div>
            {betterRegime === "old" && (
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                <TrendingDown className="h-4 w-4" />
                Better Option - Save {formatCurrency(savings)}
              </div>
            )}
          </div>

          {/* New Regime */}
          <div
            className={`bg-card rounded-2xl border p-6 ${
              betterRegime === "new" ? "border-primary ring-2 ring-primary/20" : "border-border"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">NEW REGIME</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">(FY 25-26 / AY 26-27)</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Income</span>
                <span className="text-foreground">
                  {formatCurrency(calculateNewRegimeTax.totalIncome)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deductions</span>
                <span className="text-foreground">
                  - {formatCurrency(calculateNewRegimeTax.deductions)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="text-primary font-medium">Taxable</span>
                <span className="text-primary font-medium">
                  {formatCurrency(calculateNewRegimeTax.taxableIncome)}
                </span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">
                Gross Tax Liability
              </p>
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(calculateNewRegimeTax.totalTax)}
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <Label className="text-muted-foreground text-xs">
                  Tax Paid (TDS)
                </Label>
                <Input
                  type="number"
                  value={newRegimeTDS}
                  onChange={(e) => setNewRegimeTDS(Number(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-muted-foreground">Balance</span>
                <span
                  className={
                    calculateNewRegimeTax.totalTax - newRegimeTDS >= 0
                      ? "text-destructive font-medium"
                      : "text-primary font-medium"
                  }
                >
                  {formatCurrency(calculateNewRegimeTax.totalTax - newRegimeTDS)}
                </span>
              </div>
            </div>
            {betterRegime === "new" && (
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                <TrendingDown className="h-4 w-4" />
                Better Option - Save {formatCurrency(savings)}
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              This calculator provides an estimate based on current tax slabs
              for (FY 2025-26 / AY 2026-27). Please consult a tax professional for accurate
              filing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
