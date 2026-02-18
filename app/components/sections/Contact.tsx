"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    label: "Email",
    value: "hello@artisanstudio.id",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    label: "Telepon",
    value: "+62 21 1234 5678",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    label: "Lokasi",
    value: "Jakarta, Indonesia",
  },
];

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | "info" | null;
  }>({ message: "", type: null });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setFormStatus({
        message: "Mohon lengkapi semua field yang diperlukan.",
        type: "error",
      });
      return;
    }

    setFormStatus({ message: "Mengirim pesan...", type: "info" });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: "Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.",
        type: "success",
      });
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal-left">
            <span className="text-amber-400 tracking-[0.3em] text-sm font-medium">
              HUBUNGI KAMI
            </span>
            <h2 id="cta-title" className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Mari <span className="text-gradient">Wujudkan</span>
              <br />
              Ide Anda
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Siap untuk memulai proyek impian Anda? Tim kami siap membantu mewujudkan visi digital
              Anda dengan solusi kreatif dan inovatif.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {info.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subjek
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-gray-900">
                    Pilih layanan
                  </option>
                  <option value="branding" className="bg-gray-900">
                    Brand Identity
                  </option>
                  <option value="web" className="bg-gray-900">
                    Web Development
                  </option>
                  <option value="uiux" className="bg-gray-900">
                    UI/UX Design
                  </option>
                  <option value="marketing" className="bg-gray-900">
                    Digital Marketing
                  </option>
                  <option value="other" className="bg-gray-900">
                    Lainnya
                  </option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Kirim Pesan
              </Button>

              {formStatus.type && (
                <p
                  className={`mt-4 text-center text-sm ${
                    formStatus.type === "success"
                      ? "text-green-400"
                      : formStatus.type === "error"
                      ? "text-red-400"
                      : "text-amber-400"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};