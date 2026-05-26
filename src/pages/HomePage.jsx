import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import { FEATURES, SAMPLE_EXPERIENCES } from "../data/homeData.js";

const HomePage = () => (
  <>
    <Header />
    <main className="min-h-screen overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-[0.15]">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20400%20400%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/70 to-[#000814]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/[0.08] blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl mb-6 tracking-tight leading-none">
              Experience{"\n"}
              <span className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
                What Never Was
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed">
              DreamNet creates vivid, emotionally resonant memories
              <br />
              <span className="inline-block mx-1 opacity-100 text-purple-400">
                you've never lived
              </span>
              <br />
              through advanced neural synchronization
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/experiences"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white min-w-[200px] shadow-lg shadow-purple-500/40 transition-all duration-500 hover:scale-105"
              >
                Explore Experiences
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-4 rounded-full border border-purple-500/30 backdrop-blur-sm min-w-[200px] opacity-70 hover:opacity-100 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-700"
              >
                How It Works
              </Link>
            </div>

            <div className="mt-24 opacity-40">
              <div className="w-px h-16 mx-auto bg-gradient-to-b from-transparent via-foreground to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-purple-950/5" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
                Expand Your Experience
              </h2>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                Live moments that shape who you are, without the constraints of
                time or reality
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="relative p-8 rounded-2xl border border-[rgba(139,92,246,0.1)] backdrop-blur-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:border-[rgba(139,92,246,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-purple-500/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 opacity-70" />
                    </div>
                    <h3 className="mb-3 opacity-90 text-lg">{f.title}</h3>
                    <p className="opacity-60 leading-relaxed text-sm">
                      {f.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAMPLE EXPERIENCES ===== */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
                Sample Experiences
              </h2>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                A glimpse into our curated library of over 10,000 crafted
                moments
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {SAMPLE_EXPERIENCES.map((exp, i) => (
              <FadeIn key={exp.title} delay={i * 0.1}>
                <div className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <span className="inline-block self-start px-3 py-1 rounded-full backdrop-blur-xl bg-white/30 mb-4 text-xs tracking-wide text-white">
                      {exp.tag}
                    </span>
                    <h3 className="text-3xl mb-2 text-white">{exp.title}</h3>
                    <p className="text-white opacity-80 leading-relaxed text-sm">
                      {exp.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-16">
              <Link
                to="/experiences"
                className="inline-block px-8 py-4 rounded-full border border-purple-500/30 backdrop-blur-sm opacity-70 hover:opacity-100 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-700"
              >
                Browse Full Library
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default HomePage;