const services = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
    title: "Brand Identity",
    description: "Logo design, brand guidelines, visual identity system yang konsisten dan memorable.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    title: "Web Development",
    description: "Website custom, e-commerce, web apps dengan teknologi modern dan performa tinggi.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
    title: "UI/UX Design",
    description: "User experience research, wireframing, prototyping, dan interface design yang intuitif.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      />
    ),
    title: "Digital Marketing",
    description: "SEO, social media marketing, content strategy, dan campaign management.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    ),
    title: "Motion Graphics",
    description: "Video editing, animasi 2D/3D, explainer videos, dan konten visual dinamis.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    title: "Brand Strategy",
    description: "Market research, positioning, naming, dan pengembangan strategi brand jangka panjang.",
    color: "from-orange-500 to-orange-600",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-amber-400 tracking-[0.3em] text-sm font-medium">
            LAYANAN KAMI
          </span>
          <h2 id="services-title" className="font-display text-4xl md:text-5xl font-bold mt-4">
            Solusi <span className="text-gradient">Lengkap</span> untuk Brand Anda
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-3d group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all duration-500"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-medium">Pelajari Lebih</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};