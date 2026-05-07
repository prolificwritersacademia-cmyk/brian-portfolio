"use client";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur z-50">
      <h1 className="font-bold text-cyan-400">Brian Portfolio</h1>

      <div className="flex gap-6 text-slate-300">
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen scroll-smooth">

        {/* HERO */}
        {/* HERO */}
<section className="px-6 py-24 md:py-32">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div>
      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
        Graduate Engineer of the Year 2026
      </p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
        Brian Onchuru Omaanya
      </h1>

      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Agricultural Engineer specializing in irrigation systems,
        wastewater treatment, climate-smart agriculture,
        renewable energy, and sustainable infrastructure development.
      </p>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          View Projects
        </button>

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          Contact Me
        </button>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex justify-center">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md shadow-2xl">

        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto mb-6 flex items-center justify-center text-5xl font-black text-black">
          BO
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Graduate Engineer of the Year 2026
        </h2>

        <p className="text-slate-300 text-center leading-relaxed">
          Winner at EPC 2026 under the Engineering Recognition and Excellence Awards organized by the Engineers Board of Kenya.
        </p>

      </div>
    </div>

  </div>
</section>

        {/* ABOUT */}
        <section id="contact" className="px-6 py-20 text-center">
  <h2 className="text-3xl font-bold text-cyan-400 mb-6">
    Contact Me
  </h2>

  <p className="text-slate-300 mb-2">
    Email: brianomaanya@gmail.com
  </p>
<p className="text-slate-300 mb-2">
    Telephone No: +254 702 878 624
  </p>
  <p className="text-slate-300 mb-2">
    Nairobi: Kenya
  </p>

  <p className="text-slate-300">
    Open to engineering collaborations, innovation projects, and research opportunities.
  </p>
</section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 py-20 bg-slate-900">
          <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">
            Projects
          </h2>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 hover:scale-105 transition duration-300">
  <h3 className="text-xl font-bold mb-3">
    Automated Solar Wastewater Treatment System
  </h3>
  <p className="text-slate-300">
    Solar-powered electrolysis system designed to treat wastewater for reuse in irrigation and domestic applications.
  </p>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">
                Solar Electrolysis System
              </h3>
              <p className="text-slate-300">
                Automated wastewater treatment using solar energy for reuse in irrigation and domestic use.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">
                Irrigation Development
              </h3>
              <p className="text-slate-300">
                Sustainable irrigation systems and watershed restoration projects in rural communities.
              </p>
            </div>

          </div>
        </section>
{/* SKILLS */}
<section className="px-6 py-20 bg-slate-900/50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">
      Skills & Expertise
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {[
        "Irrigation Engineering",
        "Water Systems",
        "Wastewater Treatment",
        "Climate-Smart Agriculture",
        "Renewable Energy",
        "Sustainable Land Management",
        "Hydraulic Systems",
        "Engineering Innovation",
      ].map((skill) => (
        <div
          key={skill}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-400 hover:scale-105 transition duration-300"
        >
          <p className="font-semibold text-slate-200">
            {skill}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
        {/* CONTACT */}
        <section id="contact" className="px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Contact Me
          </h2>

          <p className="text-slate-300 mb-2">
            Email: brianomaanya@gmail.com
          </p>

          <p className="text-slate-300">
            Location: Kenya
          </p>
        </section>

      </main>
    </>
  );
}