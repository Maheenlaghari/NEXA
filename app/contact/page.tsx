"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, HeartPulse, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "Primary Care",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141E28]">
      <Header data={siteContent.header} />
      <main className="flex-1">
        <section className="w-full pt-12 pb-8 md:py-16 bg-[#FAFAF9] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
              CONNECT WITH US
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141E28] leading-[1.2] mb-5">
              Get in touch with our healthcare team.
            </h1>
            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              Whether you need to book a consultation, inquire about specialized treatments, or visit our clinic, our dedicated medical staff is here to help.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-normal tracking-tight text-[#141E28] mb-3">
                    Clinic Information
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    We welcome walk in inquiries and appointments. Reach out via phone or email for immediate assistance.
                  </p>
                </div>

                <div className="flex flex-col gap-6 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                      <Phone className="w-4 h-4 text-slate-700" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                        Telephone
                      </span>
                      <a
                        href={siteContent.footer.contact.phoneHref}
                        className="text-sm font-medium text-[#141E28] hover:text-slate-600 transition-colors"
                      >
                        {siteContent.footer.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                      <Mail className="w-4 h-4 text-slate-700" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                        Email Inquiries
                      </span>
                      <a
                        href={siteContent.footer.contact.emailHref}
                        className="text-sm font-medium text-[#141E28] hover:text-slate-600 transition-colors"
                      >
                        {siteContent.footer.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                      <MapPin className="w-4 h-4 text-slate-700" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                        Location
                      </span>
                      <span className="text-sm font-medium text-[#141E28]">
                        {siteContent.footer.contact.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                      <Clock className="w-4 h-4 text-slate-700" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                        Working Hours
                      </span>
                      <span className="text-sm font-medium text-[#141E28]">
                        Monday to Friday, 8:00 AM to 8:00 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                      <HeartPulse className="w-4 h-4 text-slate-700" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                        Urgent Care
                      </span>
                      <span className="text-sm font-medium text-[#141E28]">
                        24 Hours Immediate Response Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#FAFAF9] p-8 md:p-12 rounded-3xl border border-slate-100">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-normal text-[#141E28] mb-2 tracking-tight">
                      Message Received
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                      Thank you for contacting Nexa Healthcare. Our clinical coordination team will review your request and get in touch with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#141E28] hover:text-slate-600 transition-colors"
                    >
                      <span>Send another inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-normal tracking-tight text-[#141E28] mb-2">
                      Send an Inquiry or Book an Appointment
                    </h3>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed font-normal">
                      Fill out the form below and our medical coordinators will respond promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-medium text-slate-700">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#141E28] focus:border-[#141E28] transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-medium text-slate-700">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="johndoe@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#141E28] focus:border-[#141E28] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-medium text-slate-700">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+92 300 000 0000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#141E28] focus:border-[#141E28] transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-medium text-slate-700">
                            Department
                          </label>
                          <select
                            value={formData.department}
                            onChange={(e) =>
                              setFormData({ ...formData, department: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#141E28] focus:border-[#141E28] transition-all"
                          >
                            <option value="Primary Care">Primary Care</option>
                            <option value="Speciality Care">Speciality Care</option>
                            <option value="Mental Health">Mental Health</option>
                            <option value="Women's Health">{"Women's Health"}</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-medium text-slate-700">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="How can we assist you today?"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#141E28] focus:border-[#141E28] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 bg-[#141E28] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#1E2D3D] transition-all duration-200 shadow-sm mt-2 cursor-pointer"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full border-t border-slate-200/80" />
      </main>
      <Footer data={siteContent.footer} />
    </div>
  );
}
