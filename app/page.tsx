"use client";

import {
  Award,
  Mail,
  Linkedin,
  Download,
  Leaf,
  Droplets,
  Cpu,
  Trophy,
  MapPin,
} from "lucide-react";

export default function PortfolioWebsite() {
  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-cyan-400">
            Brian Onchuru
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#awards" className="hover:text-cyan-400">
              Achievements
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400 px-4 py-2 rounded-full mb-8">
              <Award className="text-cyan-400 w-5 h-5" />
              <span className="text-cyan-300 font-medium">
                Graduate Engineer of the Year 2026
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Brian Onchuru
              <span className="block text-cyan-400">Omaanya</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Award-winning Agricultural Engineer passionate about sustainable
              engineering, water systems, climate-smart agriculture, wastewater
              treatment innovation, and community-centered development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-4 rounded-2xl font-bold transition"
              >
                Explore Projects
              </a>

              <a
                href="/Brian_Onchuru_CV.pdf"
                download
                className="border border-cyan-400 text-cyan-300 px-7 py-4 rounded-2xl font-bold hover:bg-cyan-500 hover:text-black transition flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-4xl font-black text-cyan-400">5+</h2>
                <p className="text-slate-400">Engineering Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-cyan-400">3+</h2>
                <p className="text-slate-400">Innovation Awards</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-cyan-400">2026</h2>
                <p className="text-slate-400">EPC Winner</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src="/profile.jpg"
                alt="Brian Onchuru"
                className="relative w-[400px] h-[400px] object-cover rounded-[3rem] border-4 border-cyan-400 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-cyan-400 mb-14">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg leading-relaxed text-slate-300 mb-6">
                I am Brian Onchuru Omaanya, an Agricultural Engineer driven by
                a passion for sustainable engineering solutions that improve
                lives and strengthen communities.
              </p>

              <p className="text-lg leading-relaxed text-slate-300 mb-6">
                My work combines innovation, field implementation, renewable
                energy, irrigation engineering, wastewater treatment, and
                environmental sustainability.
              </p>

              <p className="text-lg leading-relaxed text-slate-300">
                I believe engineering should go beyond technical systems and
                become a force for sustainable transformation and climate
                resilience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                "Water Systems",
                "Irrigation Engineering",
                "Wastewater Treatment",
                "Renewable Energy",
                "Climate-Smart Agriculture",
                "Environmental Sustainability",
                "Agricultural Engineering",
                "Engineering Innovation",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-cyan-400 mb-14">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* PROJECT 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-cyan-400 transition">
              <img
                src="/water-treatment.jpg"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Droplets className="text-cyan-400" />
                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm">
                    Innovation Project
                  </p>
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Automated Solar-Powered Electrolysis Wastewater Treatment
                  System
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Innovative wastewater treatment technology designed to convert
                  wastewater into reusable water for irrigation, commercial, and
                  domestic applications using solar-powered electrolysis.
                </p>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-cyan-400 transition">
              <img
                src="/irrigation.jpg"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Leaf className="text-cyan-400" />
                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm">
                    Field Engineering
                  </p>
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Sustainable Land Management & Irrigation Development
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Contributed to watershed restoration, climate resilience,
                  irrigation development, and sustainable agricultural
                  infrastructure initiatives in Kisii County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        id="awards"
        className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-cyan-400 mb-14">
            Awards & Recognition
          </h2>

          <div className="space-y-8">
            {[
              "Graduate Engineer of the Year 2026 – EPC 2026 Winner",
              "VIJANAA AND DADA Sanitation Innovation Award – 1st Position",
              "IKO SAFI Innovation Award – 2nd Runners-Up",
              "Conference Presenter – Kenya Sanitation Conference",
              "Innovation Showcase – Kenyatta University Innovation Day",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex items-center gap-5 hover:border-cyan-400 transition"
              >
                <Trophy className="text-cyan-400" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-cyan-400 mb-8">
            Let’s Connect
          </h2>

          <p className="text-xl text-slate-300 mb-12">
            Open to collaborations, engineering projects, conferences,
            innovation partnerships, and sustainability initiatives.
          </p>

          <div className="space-y-5 text-lg">
            <div className="flex justify-center items-center gap-3">
              <Mail className="text-cyan-400" />
              <p>your@email.com</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <Linkedin className="text-cyan-400" />
              <p>linkedin.com/in/yourprofile</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <MapPin className="text-cyan-400" />
              <p>Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}