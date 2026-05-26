import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import { SPECS, FEATURES, STEPS, STATS } from "../data/patchData.js";
import patchImage from "../assets/hero.png";

const ThePatchPage = () => (
  <>
    <Header />
    <main className="min-h-screen relative overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 mb-6 text-sm opacity-70">
              Neural Interface Technology
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 tracking-tight leading-tight">
              A patch
              <br />
              <span className="text-purple-400">the future</span>
              <br />
              of memory
            </h1>
            <p className="text-lg opacity-60 mb-8 leading-relaxed max-w-lg">
              The DreamNet Patch uses advanced neural synchronization to
              seamlessly integrate artificial memories into your consciousness.
              Wear it, dream it, remember it.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-105">
              Order Now — $299
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-transparent backdrop-blur-sm p-8">
              <img
                src={patchImage}
                alt="DreamNet Neural Patch"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SPECS ===== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">
              Technical Specifications
            </h2>
            <p className="opacity-60">
              Engineered for seamless neural integration
            </p>
          </div>
        </FadeIn>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {SPECS.map((spec, i) => (
            <FadeIn key={spec.label} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-[#1a1f3a]/20 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/40">
                <div className="text-sm opacity-50 mb-2">{spec.label}</div>
                <div className="text-3xl mb-1 text-purple-400">
                  {spec.value}
                </div>
                <div className="text-sm opacity-60">{spec.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">
              Discreet & Comfortable
            </h2>
            <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
              Designed to be virtually invisible. The skin-toned patch sits
              comfortably behind your ear, blending seamlessly with your natural
              skin tone.
            </p>
          </div>
        </FadeIn>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <FadeIn direction="right">
              <h3 className="text-3xl mb-8">Key Features</h3>
            </FadeIn>
            <div className="space-y-6">
              {FEATURES.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.1} direction="right">
                  <div className="border-l-2 border-purple-400/30 pl-6">
                    <div className="text-lg mb-1 text-purple-400">
                      {f.title}
                    </div>
                    <div className="opacity-60 text-sm leading-relaxed">
                      {f.desc}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/10 rounded-3xl blur-3xl" />
              <div className="relative grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-[#1a1f3a]/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ))}
              </div>
              <p className="text-center text-sm opacity-50 mt-6">
                Representative images showing device placement
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-5xl mb-8">How it works</h2>
            </FadeIn>
            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="text-4xl font-light text-purple-400 opacity-30 group-hover:opacity-60 transition-opacity duration-500 min-w-12">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{step.title}</h3>
                      <p className="opacity-60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative h-[500px] rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-[#1c0338]/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-2 border-purple-500/30 animate-spin-slow" />
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/30 to-transparent blur-xl animate-pulse" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-purple-950/5 to-transparent">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">
              Rigorously tested, clinically proven
            </h2>
            <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
              DreamNet technology has undergone extensive clinical trials with
              over 10,000 participants. Our neural synchronization protocols are
              certified safe by leading neuroscience institutions worldwide.
            </p>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.15}>
              <div className="text-center">
                <div className="text-5xl mb-2 text-purple-400">{s.value}</div>
                <div className="opacity-60">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-32 px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl leading-tight mb-6">
              Order the Patch.
              <br />
              Expand your memory.
            </h2>
            <p className="text-lg opacity-60 mb-12">
              Limited availability. Ships within 2 weeks.
            </p>
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-lg shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-105">
              Pre-Order Now — $299
            </button>
            <p className="text-sm opacity-40 mt-6">
              30-day money-back guarantee
            </p>
          </div>
        </FadeIn>
      </section>
    </main>
    <Footer />
  </>
);

export default ThePatchPage;