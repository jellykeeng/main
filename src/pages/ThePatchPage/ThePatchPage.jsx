import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import { GradientText, PurpleButton } from "../../styles/common";
import patchImage from "../../assets/hero.png";

const SPECS = [
  { label: "Battery Life", value: "72 hours", desc: "Continuous operation" },
  { label: "Neural Bandwidth", value: "2.4 Tbps", desc: "Synaptic transfer rate" },
  { label: "Memory Capacity", value: "Unlimited", desc: "Cloud synchronized" },
  { label: "Biocompatibility", value: "Medical Grade", desc: "FDA approved materials" },
  { label: "Weight", value: "0.8g", desc: "Virtually imperceptible" },
  { label: "Charging", value: "Wireless", desc: "Qi-compatible" },
];

const FEATURES = [
  { title: "Triangular Design", desc: "Ergonomic shape fits naturally behind the ear, following the contour of your skin" },
  { title: "LED Ring Indicator", desc: "Subtle glow indicates device status during transfer (turns off during sleep)" },
  { title: "Safe Button", desc: "One-touch connection to the DreamNet app for easy experience selection" },
  { title: "Medical-Grade Adhesive", desc: "Self-adhesive layer base keeps the patch secure through the night, gentle on skin" },
  { title: "Skin-Colored Shell", desc: "Available in multiple skin tones to match your complexion perfectly" },
];

const STEPS = [
  { num: "01", title: "Apply", desc: "Place the patch behind your ear before sleep" },
  { num: "02", title: "Select", desc: "Choose your experience from the app" },
  { num: "03", title: "Sleep", desc: "The patch integrates memories during REM cycles" },
  { num: "04", title: "Remember", desc: "Wake with fully formed, emotionally rich memories" },
];

const STATS = [
  { value: "10,000+", label: "Clinical participants" },
  { value: "99.7%", label: "Safety rating" },
  { value: "Zero", label: "Adverse effects" },
];

const ThePatchPage = () => (
  <>
    <Header />
    <PageWrapper>
      {/* ===== HERO ===== */}
      <HeroSection>
        <HeroGradientOverlay />
        <HeroInner>
          <HeroContent>
            <HeroBadge>Neural Interface Technology</HeroBadge>
            <HeroTitle>
              A patch<br />
              <GradientText>the future</GradientText><br />
              of memory
            </HeroTitle>
            <HeroDesc>
              The DreamNet Patch uses advanced neural synchronization to
              seamlessly integrate artificial memories into your consciousness.
              Wear it, dream it, remember it.
            </HeroDesc>
            <PurpleButton>Order Now — $299</PurpleButton>
          </HeroContent>

          <HeroImageWrapper>
            <HeroImageGlow />
            <HeroImageBox>
              <img src={patchImage} alt="DreamNet Neural Patch" />
            </HeroImageBox>
          </HeroImageWrapper>
        </HeroInner>
      </HeroSection>

      {/* ===== SPECS ===== */}
      <SpecsSection>
        <SectionCenter>
          <SectionTitle>Technical Specifications</SectionTitle>
          <SectionDesc>Engineered for seamless neural integration</SectionDesc>
        </SectionCenter>
        <SpecsGrid>
          {SPECS.map((spec) => (
            <SpecCard key={spec.label}>
              <SpecLabel>{spec.label}</SpecLabel>
              <SpecValue>{spec.value}</SpecValue>
              <SpecDesc>{spec.desc}</SpecDesc>
            </SpecCard>
          ))}
        </SpecsGrid>
      </SpecsSection>

      {/* ===== FEATURES ===== */}
      <FeaturesSection>
        <SectionCenter>
          <SectionTitle>Discreet & Comfortable</SectionTitle>
          <SectionDescWide>
            Designed to be virtually invisible. The skin-toned patch sits
            comfortably behind your ear, blending seamlessly with your natural
            skin tone.
          </SectionDescWide>
        </SectionCenter>
        <FeaturesGrid>
          <FeaturesLeft>
            <FeaturesHeading>Key Features</FeaturesHeading>
            <FeaturesList>
              {FEATURES.map((f) => (
                <FeatureItem key={f.title}>
                  <FeatureTitle>{f.title}</FeatureTitle>
                  <FeatureDesc>{f.desc}</FeatureDesc>
                </FeatureItem>
              ))}
            </FeaturesList>
          </FeaturesLeft>
          <FeaturesRight>
            <FeaturesImageGlow />
            <FeaturesImageGrid>
              {[1, 2, 3, 4].map((i) => (
                <ImagePlaceholder key={i}>
                  <PlaceholderOverlay />
                </ImagePlaceholder>
              ))}
            </FeaturesImageGrid>
            <FeaturesCaption>
              Representative images showing device placement
            </FeaturesCaption>
          </FeaturesRight>
        </FeaturesGrid>
      </FeaturesSection>

      {/* ===== HOW IT WORKS ===== */}
      <HowSection>
        <HowGrid>
          <HowLeft>
            <SectionTitle style={{ marginBottom: "2rem" }}>
              How it works
            </SectionTitle>
            <StepsList>
              {STEPS.map((step) => (
                <StepItem key={step.num}>
                  <StepNum>{step.num}</StepNum>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </HowLeft>
          <HowRight>
            <HowVisual>
              <HowCircle />
              <HowGlow />
            </HowVisual>
          </HowRight>
        </HowGrid>
      </HowSection>

      {/* ===== CLINICAL STATS ===== */}
      <StatsSection>
        <SectionCenter>
          <SectionTitle>Rigorously tested, clinically proven</SectionTitle>
          <SectionDescWide>
            DreamNet technology has undergone extensive clinical trials with
            over 10,000 participants. Our neural synchronization protocols are
            certified safe by leading neuroscience institutions worldwide.
          </SectionDescWide>
        </SectionCenter>
        <StatsGrid>
          {STATS.map((s) => (
            <StatItem key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* ===== CTA ===== */}
      <CTASection>
        <SectionCenter>
          <CTATitle>
            Order the Patch.<br />Expand your memory.
          </CTATitle>
          <CTADesc>Limited availability. Ships within 2 weeks.</CTADesc>
          <PurpleButton $large>Pre-Order Now — $299</PurpleButton>
          <CTASmall>30-day money-back guarantee</CTASmall>
        </SectionCenter>
      </CTASection>
    </PageWrapper>
    <Footer />
  </>
);

export default ThePatchPage;

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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 1.5rem;
`;

const HeroGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 5, 51, 0.2),
    transparent,
    transparent
  );
`;

const HeroInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 10;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroContent = styled.div``;

const HeroBadge = styled.div`
  display: inline-block;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.15;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  }
`;

const HeroDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  margin-bottom: 2rem;
  line-height: 1.625;
  max-width: 32rem;
`;

const HeroImageWrapper = styled.div`
  position: relative;
`;

const HeroImageGlow = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(124, 58, 237, 0.2);
  border-radius: 9999px;
  filter: blur(64px);
`;

const HeroImageBox = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  overflow: hidden;
  border: 1px solid rgba(124, 58, 237, 0.2);
  background: linear-gradient(
    to bottom right,
    rgba(26, 5, 51, 0.2),
    transparent
  );
  backdrop-filter: blur(8px);
  padding: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

/* ----- Specs ----- */
const SpecsSection = styled.section`
  position: relative;
  padding: 8rem 1.5rem;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(26, 5, 51, 0.05),
    transparent
  );
`;

const SectionCenter = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  margin-bottom: 1rem;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
`;

const SectionDesc = styled.p`
  opacity: 0.6;
`;

const SectionDescWide = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.625;
`;

const SpecsGrid = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SpecCard = styled.div`
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  border: 1px solid rgba(124, 58, 237, 0.2);
  background: rgba(26, 31, 58, 0.2);
  backdrop-filter: blur(8px);
  transition: border-color 500ms ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.4);
  }
`;

const SpecLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.5;
  margin-bottom: 0.5rem;
`;

const SpecValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.purple400};
`;

const SpecDesc = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
`;

/* ----- Features ----- */
const FeaturesSection = styled.section`
  position: relative;
  padding: 8rem 3rem;

  ${media.lg} {
    padding: 8rem 6rem;
  }
`;

const FeaturesGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 5rem;
  align-items: center;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const FeaturesLeft = styled.div``;

const FeaturesHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  margin-bottom: 2rem;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  border-left: 2px solid rgba(167, 139, 250, 0.3);
  padding-left: 1.5rem;
`;

const FeatureTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.purple400};
`;

const FeatureDesc = styled.div`
  opacity: 0.6;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.625;
`;

const FeaturesRight = styled.div`
  position: relative;
`;

const FeaturesImageGlow = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(124, 58, 237, 0.1);
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  filter: blur(64px);
`;

const FeaturesImageGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const ImagePlaceholder = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  overflow: hidden;
  border: 1px solid rgba(124, 58, 237, 0.2);
  background: linear-gradient(
    to bottom right,
    rgba(26, 5, 51, 0.3),
    rgba(26, 31, 58, 0.2)
  );
`;

const PlaceholderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
`;

const FeaturesCaption = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.5;
  margin-top: 1.5rem;
`;

/* ----- How it works ----- */
const HowSection = styled.section`
   position: relative;
  padding: 8rem 3rem;

  ${media.lg} {
    padding: 8rem 6rem;
  }
`;

const HowGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: 5rem;
  align-items: center;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const HowLeft = styled.div``;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StepItem = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

const StepNum = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.purple400};
  opacity: 0.3;
  transition: opacity 500ms ease;
  min-width: 3rem;

  ${StepItem}:hover & {
    opacity: 0.6;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  opacity: 0.6;
  line-height: 1.625;
`;

const HowRight = styled.div``;

const HowVisual = styled.div`
  position: relative;
  height: 500px;
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  border: 1px solid rgba(124, 58, 237, 0.2);
  background: linear-gradient(
    to bottom right,
    rgba(26, 5, 51, 0.2),
    rgba(28, 3, 56, 0.2)
  );
  backdrop-filter: blur(8px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HowCircle = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 9999px;
  border: 2px solid rgba(124, 58, 237, 0.3);
  animation: spin 20s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const HowGlow = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  background: linear-gradient(
    to bottom right,
    rgba(124, 58, 237, 0.3),
    transparent
  );
  filter: blur(24px);
  animation: pulse 4s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.3); opacity: 0.8; }
  }
`;

/* ----- Stats ----- */
const StatsSection = styled.section`
  position: relative;
  padding: 8rem 1.5rem;
  background: linear-gradient(
    to bottom,
    rgba(26, 5, 51, 0.05),
    transparent
  );
`;

const StatsGrid = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.purple400};
`;

const StatLabel = styled.div`
  opacity: 0.6;
`;

/* ----- CTA ----- */
const CTASection = styled.section`
  position: relative;
  padding: 8rem 1.5rem;
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

const CTASmall = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.4;
  margin-top: 1.5rem;
`;