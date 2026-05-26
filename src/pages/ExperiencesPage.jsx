import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Sparkles, Search, Clock, TrendingUp, Star } from "lucide-react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import { CATEGORIES, EXPERIENCES, PROMPTS } from "../data/experiences.js";

const ExperiencesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Experiences");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showGenerate, setShowGenerate] = useState(false);
  const [prompt, setPrompt] = useState("");

  const filtered = useMemo(() => {
    return EXPERIENCES.filter((exp) => {
      const matchCat =
        activeCategory === "All Experiences" || exp.category === activeCategory;
      const matchSearch =
        !search ||
        exp.title.toLowerCase().includes(search.toLowerCase()) ||
        exp.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const selected = EXPERIENCES.find((e) => e.id === selectedId);

  useEffect(() => {
    if (selectedId || showGenerate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId, showGenerate]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10" />
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-40 left-40 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1f3a]/30 backdrop-blur-sm mb-4 text-sm opacity-70">
                  <Brain size={16} strokeWidth={1.5} />
                  <span>10,247 curated memories</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-3 tracking-tight">
                  Experience Library
                </h1>
                <p className="text-lg opacity-60 max-w-2xl">
                  Browse our collection of moments, or generate a custom memory
                  tailored to you
                </p>
              </div>
              <button
                onClick={() => setShowGenerate(true)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white flex items-center gap-2 self-start md:self-end shadow-lg shadow-purple-500/40 transition-all duration-500 hover:scale-105 group"
              >
                <Sparkles
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:rotate-12"
                />
                Generate Custom
              </button>
            </div>
          </FadeIn>

          {/* Search */}
          <FadeIn delay={0.1}>
            <div className="relative flex-1 mb-4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 flex items-center">
                <Search size={20} strokeWidth={1.5} />
              </div>
              <input
                type="text"
                placeholder="Search experiences..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#1a1f3a]/40 border border-purple-500/20 backdrop-blur-sm focus:border-purple-500/50 focus:bg-[#1a1f3a]/60 outline-none transition-all duration-500 text-[#f0f4f8] placeholder:text-[#f0f4f8]/40"
              />
            </div>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.15}>
            <div className="flex gap-2 mb-10 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm transition-all duration-500 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-[#1a1f3a]/40 border border-purple-500/20 opacity-70 hover:opacity-100 hover:bg-[#1a1f3a]/60 hover:border-purple-500/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div
                    onClick={() => setSelectedId(exp.id)}
                    className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="relative h-full p-6 flex flex-col">
                      <div className="flex items-start justify-between mb-auto">
                        <span className="px-3 py-1 rounded-full backdrop-blur-xl bg-white/30 text-xs tracking-wide text-white">
                          {exp.category}
                        </span>
                      </div>

                      <div>
                        <div className="flex gap-3 mb-3 text-xs opacity-80">
                          <span className="flex items-center gap-1.5 text-white">
                            <Clock size={14} strokeWidth={1.5} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5 text-white">
                            <TrendingUp size={14} strokeWidth={1.5} />
                            {exp.intensity}
                          </span>
                        </div>
                        <h3 className="text-2xl mb-2 text-white">
                          {exp.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {exp.desc}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-white/70">
                          <span className="flex items-center gap-1">
                            <Star
                              size={14}
                              strokeWidth={1.5}
                              fill="rgba(255,255,255,0.7)"
                              stroke="none"
                            />
                            {exp.rating}
                          </span>
                          <span>•</span>
                          <span>{exp.users} experiences</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* ===== EXPERIENCE DETAIL MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-purple-500/20 bg-[#0a1128]"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center text-xl hover:bg-black/70 transition-colors duration-300"
              >
                ✕
              </button>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 md:h-80 object-cover"
              />

              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs mb-4">
                  {selected.category}
                </span>
                <h2 className="text-4xl mb-4 tracking-tight">
                  {selected.title}
                </h2>
                <div className="flex flex-wrap gap-4 mb-6 text-sm opacity-70">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} strokeWidth={1.5} /> {selected.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TrendingUp size={14} strokeWidth={1.5} />{" "}
                    {selected.intensity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star
                      size={14}
                      strokeWidth={1.5}
                      fill="rgba(255,255,255,0.7)"
                      stroke="none"
                    />{" "}
                    {selected.rating}
                  </span>
                  <span>{selected.users} experiences</span>
                </div>

                <p className="text-base leading-relaxed opacity-80 mb-8">
                  {selected.longDesc}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl border border-purple-500/15 bg-[#1a1f3a]/30">
                    <div className="text-xs opacity-50 uppercase tracking-wider mb-1">
                      Emotional Profile
                    </div>
                    <div className="text-sm text-purple-400">
                      {selected.emotionalProfile}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-purple-500/15 bg-[#1a1f3a]/30">
                    <div className="text-xs opacity-50 uppercase tracking-wider mb-1">
                      Neural Depth
                    </div>
                    <div className="text-sm text-purple-400">
                      {selected.neuralDepth}
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/50">
                  Download Experience
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== GENERATE CUSTOM MODAL ===== */}
      <AnimatePresence>
        {showGenerate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGenerate(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-purple-500/20 bg-[#0a1128] p-10"
            >
              <button
                onClick={() => setShowGenerate(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center text-xl hover:bg-black/70 transition-colors duration-300"
              >
                ✕
              </button>

              <div className="text-center mb-8">
                <h2 className="text-2xl mb-3 tracking-tight">
                  Generate Custom Memory
                </h2>
                <p className="text-sm opacity-60 leading-relaxed">
                  Describe a moment, feeling, or experience you'd like to have
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm opacity-80 mb-2">
                  Your Memory Prompt
                </label>
                <textarea
                  rows={4}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-4 rounded-xl bg-[#1a1f3a]/40 border border-purple-500/20 text-[#f0f4f8] text-sm leading-relaxed resize-none outline-none transition-all duration-500 focus:border-purple-500/50 placeholder:text-[#f0f4f8]/30"
                />
              </div>

              <div className="mb-8">
                <p className="text-sm opacity-70 mb-3">Try these prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPrompt(p)}
                      className="px-4 py-2 rounded-full bg-[#1a1f3a]/20 text-sm opacity-70 hover:opacity-100 hover:bg-[#1a1f3a]/40 transition-all duration-300 text-left"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-purple-600 text-white transition-all duration-500 hover:scale-[1.02]">
                Generate Memory
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default ExperiencesPage;