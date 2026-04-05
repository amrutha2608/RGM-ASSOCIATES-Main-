"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { navigationData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pb-24 md:pb-32 overflow-hidden flex items-center min-h-[40vh] mb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
              alt="Contact RGM & Associates"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
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
                  CONTACT US
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 drop-shadow-sm">
                CONTACT US
              </h1>
              <p className="text-xl text-foreground/90 leading-relaxed max-w-2xl">
                Have questions about our services? Need expert advice for your
                business? We{"'"}re here to help. Reach out to us and our team will
                get back to you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. We
                    typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a
                        href={`tel:${navigationData.contact.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {navigationData.contact.phone}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        {navigationData.contact.phoneHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a
                        href={`mailto:${navigationData.contact.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {navigationData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Visakhapatnam Office
                      </h3>
                      <p className="text-muted-foreground">
                        {navigationData.contact.addresses[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Hyderabad Office
                      </h3>
                      <p className="text-muted-foreground">
                        {navigationData.contact.addresses[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Working Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday
                        <br />
                        9:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Your message has been received. Our team will contact you
                        within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-semibold text-foreground mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Fill out the form below and we{"'"}ll get back to you as soon
                        as possible.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formState.name}
                              onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                              }
                              placeholder="Krishna"
                              required
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formState.email}
                              onChange={(e) =>
                                setFormState({ ...formState, email: e.target.value })
                              }
                              placeholder=""
                              required
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={(e) =>
                                setFormState({ ...formState, phone: e.target.value })
                              }
                              placeholder=""
                              required
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="service">Service Required</Label>
                            <Select
                              value={formState.service}
                              onValueChange={(value) =>
                                setFormState({ ...formState, service: value })
                              }
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="company-registration">
                                  Company Registration
                                </SelectItem>
                                <SelectItem value="gst-registration">
                                  GST Registration
                                </SelectItem>
                                <SelectItem value="tax-filing">
                                  Tax Filing
                                </SelectItem>
                                <SelectItem value="audit">
                                  Audit Services
                                </SelectItem>
                                <SelectItem value="virtual-cfo">
                                  Virtual CFO
                                </SelectItem>
                                <SelectItem value="compliance">
                                  Compliance Services
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message">Your Message *</Label>
                          <Textarea
                            id="message"
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({ ...formState, message: e.target.value })
                            }
                            placeholder="Tell us about your requirements..."
                            required
                            rows={5}
                            className="mt-2"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                              </span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Visit Our Offices
              </h2>
              <p className="text-muted-foreground">
                Drop by our offices in Visakhapatnam or Hyderabad or Badvel for a face-to-face
                consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Visakhapatnam Office */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Visakhapatnam Office Map</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Visakhapatnam Office
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {navigationData.contact.addresses[0]}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Kanaka+Surya+Towers+Visakhapatnam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Badvel Office */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Hyderabad Office Map</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Hyderabad Office
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {navigationData.contact.addresses[1]}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Cyber+Space+Apartments+Puppalaguda+Hyderabad" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Badvel Office Map</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                  Badvel Office
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {navigationData.contact.addresses[2]}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Navata+Road+Transport+Badvel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
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
