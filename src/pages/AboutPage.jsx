import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import {
  MISSIONS,
  ETHICS,
  LEADERS,
  BELIEFS,
  STORY_PARAGRAPHS,
} from "../data/aboutData.js";

const AboutPage = () => (
  <>
    <Header />
    <main className="min-h-screen relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/[0.06] blur-3xl pointer-events-none" />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-32">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 mb-6 text-sm opacity-70">
              About DreamNet
            </div>
            <h1 className="text-6xl md:text-7xl mb-8 tracking-tight leading-tight">
              Expanding what it means
              <br />
              <span className="text-purple-400">to be human</span>
            </h1>
            <p className="text-xl opacity-70 leading-relaxed max-w-3xl mx-auto">
              We believe every person deserves access to the full spectrum of
              human experience. DreamNet makes this possible through the
              careful, ethical application of advanced neurotechnology.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ===== MISSION ===== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4">Our Mission</h2>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                To democratize transformative experiences and enrich lives
                through memory technology
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {MISSIONS.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 opacity-70" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{m.title}</h3>
                    <p className="opacity-60 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl mb-12 text-center">
              Our Story
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-8 text-lg opacity-70 leading-relaxed">
              {STORY_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ETHICS & SAFETY ===== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-purple-950/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4">Ethics & Safety</h2>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                Our commitment to responsible innovation guides every decision
                we make
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
  {ETHICS.map((e, i) => (
    <FadeIn key={e.title} delay={i * 0.08} style={{ height: "100%" }}>
      <div className="p-8 rounded-2xl border border-purple-500/20 bg-[#1a1f3a]/20 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/40 h-full">
                  <h3 className="text-lg mb-3">{e.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4">Leadership</h2>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                Guided by pioneers in neuroscience, technology, and ethics
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {LEADERS.map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/20 to-violet-600/20 mx-auto mb-6 flex items-center justify-center border border-purple-500/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 opacity-30" />
                  </div>
                  <h3 className="text-lg mb-1">{l.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{l.role}</p>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BELIEVE ===== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl mb-8">What We Believe</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-lg opacity-70 leading-relaxed text-left">
              {BELIEFS.map((b) => (
                <p key={b.title}>
                  <span className="text-purple-400">{b.title}</span> {b.desc}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-32 px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
              Join us in expanding
              <br />
              human experience
            </h2>
            <p className="text-lg opacity-60 mb-12">
              Whether as a user, researcher, or partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/experiences"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-lg shadow-lg shadow-purple-500/40 transition-all duration-500 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="#"
                className="px-10 py-5 rounded-full border border-purple-500/30 backdrop-blur-sm text-lg hover:bg-purple-500/10 hover:border-purple-500/60 transition-all duration-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutPage;