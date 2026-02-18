"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    rating: 5,
    text: "Artisan Studio berhasil mengubah visi brand kami menjadi kenyataan. Tim yang sangat profesional dan kreatif. Hasil yang luar biasa!",
    initials: "JW",
    name: "John Wijaya",
    role: "CEO, TechStartup",
    color: "from-amber-500 to-amber-600",
  },
  {
    rating: 5,
    text: "Website baru kami meningkatkan konversi sebesar 150%. Desain yang elegan dan user experience yang luar biasa. Highly recommended!",
    initials: "AL",
    name: "Amanda Lee",
    role: "Marketing Director, FashionBrand",
    color: "from-purple-500 to-purple-600",
  },
  {
    rating: 5,
    text: "Proses kolaborasi yang menyenangkan. Mereka benar-benar memahami kebutuhan kami dan memberikan solusi yang tepat. Great team!",
    initials: "RS",
    name: "Rizky Setiawan",
    role: "Founder, LocalBrand",
    color: "from-blue-500 to-blue-600",
  },
];

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials.length;
  const maxSlide = Math.max(0, totalSlides - slidesToShow);

  const handlePrev = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(maxSlide, currentSlide + 1));
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-amber-400 tracking-[0.3em] text-sm font-medium">TESTIMONIALS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Kata <span className="text-gradient">Mereka</span>
          </h2>
        </div>

        <div className="relative reveal">
          <div className="overflow-hidden">
            <div
              className="testimonial-track flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-slide flex-shrink-0 px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">{testimonial.text}</p>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};