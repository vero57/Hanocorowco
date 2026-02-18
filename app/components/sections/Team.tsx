const team = [
  {
    name: "Nyoman Ayu Carmenita",
    role: "Front-end developer & brand strategist",
    description: "Front-end developer & brand strategist dengan pengalaman selama 6 tahun",
    color: "from-amber-500 to-amber-600",
    socialColor: "amber-500",
    photo: "/employee/carmen.png",
  },
  {
    name: "Komang Chodan Saraswati",
    role: "UI/UX dan brand design",
    description: "UI/UX dan brand design dengan pengalaman selama 4 tahun di berbagai industri",
    color: "from-purple-500 to-purple-600",
    socialColor: "purple-500",
    photo: "/employee/chodan.png",
  },
  {
    name: "Ida Ayu Ningning",
    role: "Full-stack developer & architect",
    description: "Full-stack developer & architect dengan pengalaman selama 5 tahun dalam membangun aplikasi web skala besar",
    color: "from-blue-500 to-blue-600",
    socialColor: "blue-500",
    photo: "/employee/ningning.png",
  },
  {
    name: "Ni Luh Wonyoung",
    role: "Digital marketing strategist",
    description: "Digital marketing strategist dengan pengalaman selama 3 tahun dalam membangun strategi digital yang efektif untuk berbagai brand",
    color: "from-pink-500 to-pink-600",
    socialColor: "pink-500",
    photo: "/employee/wony.png",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-amber-400 tracking-[0.3em] text-sm font-medium">TIM KAMI</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Para <span className="text-gradient">Kreator</span> Handal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-amber-500/50 transition-colors duration-300 flex items-center justify-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Social Links */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className={`w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-${member.socialColor} transition-colors`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={`w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-${member.socialColor} transition-colors`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
              <p className={`text-${member.socialColor} text-sm mb-2`}>{member.role}</p>
              <p className="text-gray-500 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};