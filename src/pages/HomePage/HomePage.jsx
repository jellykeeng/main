import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/theme";
import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import { PurpleButton } from "../../styles/common";

const FEATURES = [
  {
    title: "Neural Synchronization",
    desc: "Advanced brainwave mapping creates seamless integration with your existing memory pathways",
  },
  {
    title: "Emotional Authenticity",
    desc: "Each memory carries the full spectrum of human emotion, indistinguishable from lived experience",
  },
  {
    title: "Curated Moments",
    desc: "Choose from thousands of experiences, from peaceful to profound, all designed to enrich your life",
  },
  {
    title: "Persistent Recall",
    desc: "Memories integrate naturally, accessible through normal recall without conscious effort",
  },
];

const EXPERIENCES = [
  {
    tag: "Peaceful",
    title: "First Snow",
    desc: "Wake up to untouched powder, the silence of a world made new",
    image:
      "https://images.unsplash.com/photo-1488164841856-b181b52ceb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    tag: "Nostalgic",
    title: "Late Summer Drive",
    desc: "Windows down, golden hour light, a song you forgot you loved",
    image:
      "https://images.unsplash.com/photo-1776331149094-9d90115155df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    tag: "Emotional",
    title: "The Reunion",
    desc: "Someone you've never met, but somehow always known",
    image:
      "https://images.unsplash.com/photo-1768508664523-b705fbc07dcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    tag: "Sublime",
    title: "Ocean at Midnight",
    desc: "Bioluminescent waves, infinite stars, perfect solitude",
    image:
      "https://images.unsplash.com/photo-1671960957672-b102253b4a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const HomePage = () => (
  <>
    <Header />
    <PageWrapper>
      {/* ===== HERO ===== */}
      <HeroSection>
        <HeroBgNoise />
        <HeroBgGradient />
        <HeroOrb1 />
        <HeroOrb2 />
        <HeroOrb3 />

        <HeroContent>
          <HeroTitle>
            Experience{"\n"}
            <HeroTitleAccent>What Never Was</HeroTitleAccent>
          </HeroTitle>
          <HeroDesc>
            DreamNet creates vivid, emotionally resonant memories
            <br />
            <HeroDescHighlight>you've never lived</HeroDescHighlight>
            <br />
            through advanced neural synchronization
          </HeroDesc>
          <HeroButtons>
            <PurpleButton as={Link} to="/experiences" style={{ minWidth: "200px", textDecoration: "none", padding: "1rem 2rem" }}>
              Explore Experiences
            </PurpleButton>
            <OutlineButton as={Link} to="/how-it-works">
              <OutlineButtonText>How It Works</OutlineButtonText>
            </OutlineButton>
          </HeroButtons>

          <ScrollIndicator>
            <ScrollLine />
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>

      {/* ===== FEATURES ===== */}
      <FeaturesSection>
        <FeaturesBgGlow1 />
        <FeaturesBgGlow2 />
        <FeaturesInner>
          <SectionCenter>
            <SectionTitle>Expand Your Experience</SectionTitle>
            <SectionDesc>
              Live moments that shape who you are, without the constraints of
              time or reality
            </SectionDesc>
          </SectionCenter>

          <FeaturesGrid>
            {FEATURES.map((f) => (
              <FeatureCard key={f.title}>
                <FeatureCardHover />
                <FeatureCardContent>
                  <FeatureIconCircle>
                    <FeatureIconDot />
                  </FeatureIconCircle>
                  <FeatureTitle>{f.title}</FeatureTitle>
                  <FeatureDesc>{f.desc}</FeatureDesc>
                </FeatureCardContent>
                <FeatureCardLine />
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesInner>
      </FeaturesSection>

      {/* ===== SAMPLE EXPERIENCES ===== */}
      <ExperiencesSection>
        <ExperiencesInner>
          <SectionCenter>
            <SectionTitle>Sample Experiences</SectionTitle>
            <SectionDesc>
              A glimpse into our curated library of over 10,000 crafted moments
            </SectionDesc>
          </SectionCenter>

          <ExperiencesGrid>
            {EXPERIENCES.map((exp) => (
              <ExperienceCard key={exp.title}>
                <ExperienceImage src={exp.image} alt={exp.title} />
                <ExperienceOverlay />
                <ExperienceHoverOverlay />
                <ExperienceContent>
                  <ExperienceTag>{exp.tag}</ExperienceTag>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceDesc>{exp.desc}</ExperienceDesc>
                </ExperienceContent>
                <ExperienceBottomLine />
              </ExperienceCard>
            ))}
          </ExperiencesGrid>

          <BrowseCenter>
            <BrowseButton as={Link} to="/experiences">
              <BrowseButtonText>Browse Full Library</BrowseButtonText>
            </BrowseButton>
          </BrowseCenter>
        </ExperiencesInner>
      </ExperiencesSection>
    </PageWrapper>
    <Footer />
  </>
);

export default HomePage;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const PageWrapper = styled.main`
  min-height: 100vh;
  overflow: hidden;
`;

/* ----- Hero ----- */
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBgNoise = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
`;

const HeroBgGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 8, 20, 0.7),
    ${({ theme }) => theme.colors.background}
  );
`;

const HeroOrb1 = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent 70%);
  filter: blur(64px);
`;

const HeroOrb2 = styled.div`
  position: absolute;
  bottom: 33%;
  right: 25%;
  width: 31rem;
  height: 31rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%);
  filter: blur(64px);
`;

const HeroOrb3 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37rem;
  height: 37rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.08), transparent 70%);
  filter: blur(64px);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 64rem;
  margin: 0 auto;
  padding: 8rem 1.5rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1;
  white-space: pre-line;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["8xl"]};
  }
`;

const HeroTitleAccent = styled.span`
  display: inline-block;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.purple400}, #c084fc, ${({ theme }) => theme.colors.purple400});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  margin-bottom: 3rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.625;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const HeroDescHighlight = styled.span`
  display: inline-block;
  margin: 0 0.25rem;
  opacity: 1;
  color: ${({ theme }) => theme.colors.purple400};
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  ${media.sm} {
    flex-direction: row;
  }
`;

const OutlineButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: 1rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  backdrop-filter: blur(8px);
  text-decoration: none;
  transition: all 700ms ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.6);
    background: rgba(124, 58, 237, 0.1);
  }
`;

const OutlineButtonText = styled.span`
  opacity: 0.7;
  transition: opacity 700ms ease;

  ${OutlineButton}:hover & {
    opacity: 1;
  }
`;

const ScrollIndicator = styled.div`
  margin-top: 6rem;
  opacity: 0.4;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 4rem;
  margin: 0 auto;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.foreground},
    transparent
  );
`;

/* ----- Features ----- */
const FeaturesSection = styled.section`
  position: relative;
  padding: 8rem 1.5rem;
  overflow: hidden;
`;

const FeaturesBgGlow1 = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  background: rgba(124, 58, 237, 0.1);
  filter: blur(64px);
`;

const FeaturesBgGlow2 = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  background: rgba(139, 92, 246, 0.1);
  filter: blur(64px);
`;

const FeaturesInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const SectionCenter = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
`;

const SectionDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  max-width: 42rem;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureCard = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  border: 1px solid rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(8px);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 500ms ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
  }
`;

const FeatureCardHover = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(26, 31, 58, 0.2),
    transparent,
    transparent
  );
  opacity: 0;
  transition: opacity 500ms ease;

  ${FeatureCard}:hover & {
    opacity: 1;
  }
`;

const FeatureCardContent = styled.div`
  position: relative;
  z-index: 10;
`;

const FeatureIconCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: rgba(124, 58, 237, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: background 300ms ease;

  ${FeatureCard}:hover & {
    background: rgba(124, 58, 237, 0.1);
  }
`;

const FeatureIconDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.purple400}, ${({ theme }) => theme.colors.violet500});
  opacity: 0.7;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.75rem;
  opacity: 0.9;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const FeatureDesc = styled.p`
  opacity: 0.6;
  line-height: 1.625;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const FeatureCardLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(240, 244, 248, 0.2),
    transparent
  );
  opacity: 0;
  transition: opacity 500ms ease;

  ${FeatureCard}:hover & {
    opacity: 1;
  }
`;

/* ----- Experiences ----- */
const ExperiencesSection = styled.section`
  position: relative;
  padding: 8rem 1.5rem;
`;

const ExperiencesInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const ExperiencesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  height: 20rem;
  border-radius: ${({ theme }) => theme.radii["3xl"]};
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

const ExperienceImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease;
`;

const ExperienceOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.2),
    transparent
  );
`;

const ExperienceHoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(124, 58, 237, 0.3),
    transparent
  );
  opacity: 0;
  transition: opacity 500ms ease;

  ${ExperienceCard}:hover & {
    opacity: 1;
  }
`;

const ExperienceContent = styled.div`
  position: relative;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ExperienceTag = styled.span`
  display: inline-block;
  align-self: flex-start;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  backdrop-filter: blur(24px);
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.025em;
  color: white;
`;

const ExperienceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  margin-bottom: 0.5rem;
  color: white;
`;

const ExperienceDesc = styled.p`
  color: white;
  opacity: 0.8;
  line-height: 1.625;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ExperienceBottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  opacity: 0;
  transition: opacity 500ms ease;

  ${ExperienceCard}:hover & {
    opacity: 1;
  }
`;

const BrowseCenter = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const BrowseButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  backdrop-filter: blur(8px);
  text-decoration: none;
  transition: all 700ms ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.6);
    background: rgba(124, 58, 237, 0.1);
  }
`;

const BrowseButtonText = styled.span`
  opacity: 0.7;
  transition: opacity 700ms ease;

  ${BrowseButton}:hover & {
    opacity: 1;
  }
`;