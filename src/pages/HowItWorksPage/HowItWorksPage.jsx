import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { media } from "../../styles/theme";
import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import FadeIn from "../../components/common/FadeIn.jsx";
import { ChevronDown, Cpu, Zap, Shield, Wifi, Heart, Eye, Hand, Clock as ClockIcon } from "lucide-react";

const STATS = [
  { value: "99.8%", label: "Success rate", desc: "Memory integration accuracy across all participants" },
  { value: "0.2%", label: "Side effects", desc: "Mild, temporary disorientation reported in clinical trials" },
  { value: "12M+", label: "Memories created", desc: "Experiences generated worldwide since launch" },
];

const FAQS = [
  {
    q: "How does neural synchronization work?",
    a: "DreamNet uses advanced brainwave mapping to identify and replicate the neural patterns associated with memory formation. During REM sleep, the patch emits precisely calibrated electromagnetic pulses that guide your brain to create new synaptic connections indistinguishable from natural memories.",
  },
  {
    q: "Is the technology safe?",
    a: "Absolutely. DreamNet has undergone extensive clinical trials with over 10,000 participants and received FDA approval. Our neural synchronization protocols are designed to work within the brain's natural memory consolidation processes, with zero reported adverse effects in clinical studies.",
  },
  {
    q: "How long does a memory last?",
    a: "Memories created by DreamNet are permanent and integrate with your existing memory structures. They decay at the same rate as natural memories, meaning they feel authentic and can be recalled just like any experience you've lived.",
  },
  {
    q: "Can I choose what memories to add?",
    a: "Yes. Browse our library of over 10,000 curated experiences, or use our custom generator to create personalized memories tailored to your preferences, emotional needs, and life goals.",
  },
  {
    q: "What if I don't like a memory?",
    a: "While memories cannot be removed once integrated, you can choose to focus on other experiences. Most users report that unwanted memories naturally fade over time, just like disappointing real-life experiences.",
  },
  {
    q: "How many memories can I add?",
    a: "There's no limit. Your brain has virtually unlimited capacity for memory storage. However, we recommend spacing new memories to allow proper integration—typically 2-3 experiences per week for optimal results.",
  },
];

const PATCH_FEATURES = [
  { icon: Cpu, title: "Neural sensors", desc: "64-channel EEG array captures brainwave patterns with medical precision" },
  { icon: Zap, title: "Electromagnetic field generator", desc: "Precisely calibrated pulses guide memory formation" },
  { icon: Shield, title: "Biocompatible adhesive", desc: "Medical-grade materials safe for extended skin contact" },
  { icon: Wifi, title: "Wireless connectivity", desc: "Seamless pairing with the DreamNet mobile app" },
];

const MEMORY_FEATURES = [
  { icon: Heart, title: "Emotional authenticity", desc: "Full spectrum of human emotion, from joy to melancholy" },
  { icon: Eye, title: "Sensory richness", desc: "Visual, auditory, tactile, and olfactory details" },
  { icon: Hand, title: "Narrative coherence", desc: "Memories that fit naturally into your life story" },
  { icon: ClockIcon, title: "Temporal integration", desc: "Experiences feel like they happened at the right time" },
];

const STEPS = [
  { num: "01", title: "Choose your experience", desc: "Browse our library or create a custom memory using AI-assisted generation. Each experience includes detailed previews of emotional tone, duration, and key moments." },
  { num: "02", title: "Prepare for sleep", desc: "Apply the patch behind your ear 30 minutes before bed. The device will sync with your selected memory and calibrate to your unique brainwave patterns." },
  { num: "03", title: "REM integration", desc: "During REM sleep, the patch guides your brain through memory formation. The process takes 15-45 minutes depending on experience complexity." },
  { num: "04", title: "Wake and remember", desc: "Upon waking, the memory feels like a vivid dream at first, then solidifies over hours into a fully integrated experience indistinguishable from reality." },
];

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Header />
      <PageWrapper>
        {/* ===== HERO ===== */}
        <HeroSection>
          <FadeIn>
            <HeroCenter>
              <HeroBadge>The Science Behind DreamNet</HeroBadge>
              <HeroTitle>
                Four decades of<br />
                <HeroAccent>neuroscience</HeroAccent>
              </HeroTitle>
              <HeroDesc>
                From theoretical research to revolutionary reality, DreamNet
                represents the culmination of breakthrough discoveries in memory
                formation, neural plasticity, and consciousness studies.
              </HeroDesc>
            </HeroCenter>
          </FadeIn>
        </HeroSection>

        {/* ===== STATS ===== */}
        <StatsSection>
          <StatsGrid>
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.15}>
                <StatCard>
                  <StatValue>{s.value}</StatValue>
                  <StatLabel>{s.label}</StatLabel>
                  <StatDesc>{s.desc}</StatDesc>
                </StatCard>
              </FadeIn>
            ))}
          </StatsGrid>
        </StatsSection>

        {/* ===== FAQ ===== */}
        <FaqSection>
          <FadeIn>
            <SectionCenter>
              <SectionTitle>
                Want to know
              </SectionTitle>
              <SectionDesc>Common questions about DreamNet technology</SectionDesc>
            </SectionCenter>
          </FadeIn>
          <FaqList>
            {FAQS.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <FaqItem>
                  <FaqQuestion onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <FaqChevron $open={openFaq === i}>
                      <ChevronDown size={20} strokeWidth={1.5} />
                    </FaqChevron>
                  </FaqQuestion>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <FaqAnswer>{faq.a}</FaqAnswer>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FaqItem>
              </FadeIn>
            ))}
          </FaqList>
        </FaqSection>

        {/* ===== THE PATCH & THE MEMORY ===== */}
        <TwoColSection>
          <TwoColGrid>
            <FadeIn direction="right">
              <InfoCard>
                <InfoCardHeader>
                  <InfoCardTitle>The Patch</InfoCardTitle>
                  <InfoCardDesc>
                    A medical-grade neural interface no larger than a coin. The
                    DreamNet Patch adheres behind your ear, using biocompatible
                    sensors to monitor and modulate brainwave activity during sleep.
                  </InfoCardDesc>
                </InfoCardHeader>
                <FeatureList>
                  {PATCH_FEATURES.map((f) => (
                    <FeatureRow key={f.title}>
                      <FeatureIcon>
                        <f.icon size={18} strokeWidth={1.5} />
                      </FeatureIcon>
                      <div>
                        <FeatureTitle>{f.title}</FeatureTitle>
                        <FeatureDesc>{f.desc}</FeatureDesc>
                      </div>
                    </FeatureRow>
                  ))}
                </FeatureList>
              </InfoCard>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <InfoCard>
                <InfoCardHeader>
                  <InfoCardTitle>The Memory</InfoCardTitle>
                  <InfoCardDesc>
                    Each DreamNet experience is crafted by neuroscientists, writers,
                    and memory engineers to create emotionally resonant,
                    psychologically authentic moments that integrate seamlessly with
                    your existing memories.
                  </InfoCardDesc>
                </InfoCardHeader>
                <FeatureList>
                  {MEMORY_FEATURES.map((f) => (
                    <FeatureRow key={f.title}>
                      <FeatureIcon>
                        <f.icon size={18} strokeWidth={1.5} />
                      </FeatureIcon>
                      <div>
                        <FeatureTitle>{f.title}</FeatureTitle>
                        <FeatureDesc>{f.desc}</FeatureDesc>
                      </div>
                    </FeatureRow>
                  ))}
                </FeatureList>
              </InfoCard>
            </FadeIn>
          </TwoColGrid>
        </TwoColSection>

        {/* ===== THE PROCESS ===== */}
        <ProcessSection>
          <FadeIn>
            <SectionCenter>
              <SectionTitle>The Process</SectionTitle>
              <SectionDesc>From selection to integration</SectionDesc>
            </SectionCenter>
          </FadeIn>
          <StepsList>
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <StepRow>
                  <StepNum>{step.num}</StepNum>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepContent>
                </StepRow>
              </FadeIn>
            ))}
          </StepsList>
        </ProcessSection>

        {/* ===== CTA ===== */}
        <CTASection>
          <FadeIn>
            <CTACenter>
              <CTATitle>
                Ready to expand<br />
                <HeroAccent>your experience?</HeroAccent>
              </CTATitle>
              <CTADesc>Start your journey with DreamNet today</CTADesc>
              <CTAButtons>
                <CTAPrimary as={Link} to="/experiences">Browse Experiences</CTAPrimary>
                <CTAOutline as={Link} to="/patch">Order The Patch</CTAOutline>
              </CTAButtons>
            </CTACenter>
          </FadeIn>
        </CTASection>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default HowItWorksPage;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const PageWrapper = styled.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

/* ----- Hero ----- */
const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 1.5rem;
`;

const HeroCenter = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const HeroBadge = styled.div`
  display: inline-block;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(96, 165, 250, 0.3);
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.15;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  }
`;

const HeroAccent = styled.span`
  background: linear-gradient(to right, #60a5fa, #22d3ee, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  line-height: 1.625;
  max-width: 42rem;
  margin: 0 auto;
`;

/* ----- Stats ----- */
const StatsSection = styled.section`
  padding: 0 1.5rem 5rem;
`;

const StatsGrid = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  border: 1px solid rgba(96, 165, 250, 0.2);
  background: linear-gradient(to bottom right, rgba(23, 37, 84, 0.2), transparent);
  backdrop-filter: blur(8px);
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 0.5rem;
`;

const StatDesc = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
`;

/* ----- FAQ ----- */
const FaqSection = styled.section`
  padding: 5rem 1.5rem;
`;

const SectionCenter = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  margin-bottom: 1rem;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
`;

const SectionDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
`;

const FaqList = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItem = styled.div`
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  background: rgba(26, 31, 58, 0.2);
  backdrop-filter: blur(8px);
  overflow: hidden;
`;

const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-align: left;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }
`;

const FaqChevron = styled.div`
  flex-shrink: 0;
  opacity: 0.5;
  transition: transform 300ms ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0)")};
`;

const FaqAnswer = styled.div`
  padding: 0 1.5rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
  line-height: 1.75;
`;

/* ----- Two Col (Patch & Memory) ----- */
const TwoColSection = styled.section`
  padding: 5rem 1.5rem;
`;

const TwoColGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoCard = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  border: 1px solid rgba(96, 165, 250, 0.2);
  background: linear-gradient(to bottom right, rgba(23, 37, 84, 0.2), transparent);
  backdrop-filter: blur(8px);
  padding: 3rem;
  overflow: hidden;
`;

const InfoCardHeader = styled.div`
  margin-bottom: 2rem;
`;

const InfoCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  margin-bottom: 1rem;
`;

const InfoCardDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
  line-height: 1.625;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const FeatureIcon = styled.div`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(96, 165, 250, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60a5fa;
`;

const FeatureTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 0.25rem;
  color: #60a5fa;
`;

const FeatureDesc = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
  line-height: 1.625;
`;

/* ----- Process ----- */
const ProcessSection = styled.section`
  padding: 5rem 1.5rem;
`;

const StepsList = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StepRow = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const StepNum = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 300;
  color: rgba(96, 165, 250, 0.3);
  flex-shrink: 0;
  line-height: 1;
  transition: color 700ms ease;

  ${StepRow}:hover & {
    color: rgba(96, 165, 250, 0.6);
  }
`;

const StepContent = styled.div`
  flex: 1;
  padding-top: 0.5rem;
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  margin-bottom: 0.75rem;
`;

const StepDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  line-height: 1.625;
`;

/* ----- CTA ----- */
const CTASection = styled.section`
  padding: 5rem 1.5rem 8rem;
`;

const CTACenter = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  line-height: 1.15;
  margin-bottom: 1.5rem;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  }
`;

const CTADesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  margin-bottom: 3rem;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  ${media.sm} {
    flex-direction: row;
  }
`;

const CTAPrimary = styled.button`
  padding: 1.25rem 2.5rem;
  border-radius: 9999px;
  background: linear-gradient(to right, #3b82f6, #22d3ee);
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
  text-decoration: none;
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CTAOutline = styled.button`
  padding: 1.25rem 2.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(96, 165, 250, 0.3);
  backdrop-filter: blur(8px);
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: none;
  transition: all 700ms ease;

  &:hover {
    background: rgba(96, 165, 250, 0.1);
    border-color: rgba(96, 165, 250, 0.6);
  }
`;