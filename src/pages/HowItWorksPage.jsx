import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import {
  STATS,
  FAQS,
  PATCH_FEATURES,
  MEMORY_FEATURES,
  PROCESS_STEPS,
} from "../data/howItWorksData.js";

/* ===== Animated Background ===== */
const AnimatedBackground = () => {
  const [scanY, setScanY] = useState(0);

  useEffect(() => {
    let animationId;
    const speed = 0.15;

    const animate = () => {
      setScanY((prev) => {
        const next = prev + speed;
        return next > 100 ? 0 : next;
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              opacity: 0.1 + (i % 5) * 0.08,
              animation: `float ${8 + (i % 5) * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Scan line */}
      <div
        className="fixed left-0 right-0 h-px pointer-events-none z-0"
        style={{
          top: `${scanY}%`,
          background:
            "linear-gradient(to right, transparent, rgba(96, 165, 250, 0.6), rgba(255, 255, 255, 0.8), rgba(96, 165, 250, 0.6), transparent)",
          boxShadow: "0 0 20px rgba(96, 165, 250, 0.8), 0 0 60px rgba(96, 165, 250, 0.3)",
        }}
      />
    </>
  );
};

/* ===== Concentric Rings Visual ===== */
const ConcentricRings = () => (
  <div className="relative h-[400px] rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/20 to-violet-950/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-blue-400/10"
        style={{
          width: `${(i + 1) * 60}px`,
          height: `${(i + 1) * 60}px`,
          animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20 blur-xl animate-pulse" />
  </div>
);

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Header />
      <AnimatedBackground />

      <main className="min-h-screen relative z-10">
        {/* Background orbs */}
        <div className="fixed top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/[0.06] blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/[0.04] blur-3xl pointer-events-none z-0" />

        {/* ===== HERO ===== */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 mb-6 text-sm opacity-70">
                The Science Behind DreamNet
              </div>
              <h1 className="text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
                Four decades of
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  neuroscience
                </span>
              </h1>
              <p className="text-lg opacity-60 leading-relaxed max-w-2xl mx-auto">
                From theoretical research to revolutionary reality, DreamNet
                represents the culmination of breakthrough discoveries in memory
                formation, neural plasticity, and consciousness studies.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ===== STATS ===== */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.15}>
                <div className="text-center p-10 rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/20 to-transparent backdrop-blur-sm">
                  <div className="text-5xl mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-lg mb-2">{s.label}</div>
                  <div className="text-sm opacity-60">{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-32 px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">Want to know</h2>
              <p className="text-lg opacity-60">
                Common questions about DreamNet technology
              </p>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-blue-400/20 rounded-2xl bg-[#1a1f3a]/20 backdrop-blur-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`flex-shrink-0 opacity-50 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""
                        }`}
                    >
                      <ChevronDown size={20} strokeWidth={1.5} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6 text-sm opacity-60 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===== THE PATCH ===== */}
        {/* ===== THE PATCH ===== */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="text-right">
                <h2 className="text-4xl md:text-5xl mb-6">The Patch</h2>
                <p className="text-lg opacity-70 mb-8 leading-relaxed ml-auto max-w-lg">
                  A medical-grade neural interface no larger than a coin. The
                  DreamNet Patch adheres behind your ear, using biocompatible
                  sensors to monitor and modulate brainwave activity during
                  sleep.
                </p>
                <div className="space-y-6">
                  {PATCH_FEATURES.map((f) => (
                    <div key={f.title} className="border-r-2 border-blue-400/30 pr-6">
                      <div className="text-lg mb-1 text-blue-400">{f.title}</div>
                      <div className="opacity-60 text-sm leading-relaxed">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-blue-400/20 bg-gradient-to-br from-blue-950/20 to-transparent backdrop-blur-sm p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent" />
                <div className="relative aspect-square rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-950/30 to-[#0a1128] flex items-center justify-center">
                  <div className="w-32 h-20 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg shadow-blue-500/10" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== THE MEMORY ===== */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <ConcentricRings />
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl mb-6">The Memory</h2>
                <p className="text-lg opacity-70 mb-8 leading-relaxed">
                  Each DreamNet experience is crafted by neuroscientists,
                  writers, and memory engineers to create emotionally resonant,
                  psychologically authentic moments that integrate seamlessly
                  with your existing memories.
                </p>
                <div className="space-y-6">
                  {MEMORY_FEATURES.map((f) => (
                    <div key={f.title} className="border-l-2 border-blue-400/30 pl-6">
                      <div className="text-lg mb-1 text-blue-400">
                        {f.title}
                      </div>
                      <div className="opacity-60 text-sm leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== THE PROCESS ===== */}
        <section className="py-32 px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4">The Process</h2>
              <p className="text-lg opacity-60">
                From selection to integration
              </p>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-16">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="flex gap-8 group">
                  <div className="text-6xl font-light text-blue-400/30 group-hover:text-blue-400/60 transition-colors duration-700 flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl mb-3">{step.title}</h3>
                    <p className="text-lg opacity-60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-32 px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
                Ready to expand
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  your experience?
                </span>
              </h2>
              <p className="text-lg opacity-60 mb-12">
                Start your journey with DreamNet today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/experiences"
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg shadow-lg shadow-blue-500/40 transition-all duration-500 hover:scale-105"
                >
                  Browse Experiences
                </Link>
                <Link
                  to="/patch"
                  className="px-10 py-5 rounded-full border border-blue-400/30 backdrop-blur-sm text-lg hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-700"
                >
                  Order The Patch
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HowItWorksPage;