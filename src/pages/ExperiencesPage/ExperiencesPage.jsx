import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../styles/theme";
import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import FadeIn from "../../components/common/FadeIn.jsx";
import { CATEGORIES, EXPERIENCES } from "../../data/experiences.js";
import { Brain, Sparkles, Search, Clock, TrendingUp, Star } from "lucide-react";

const PROMPTS = [
  "A perfect afternoon that never happened",
  "The conversation you wish you'd had",
  "A place you've always belonged",
  "The moment everything made sense",
  "A friendship that transcends time",
];

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

  return (
    <>
      <Header />
      <PageWrapper>
        <BgGlow1 />
        <BgGlow2 />
        <Inner>
          <FadeIn>
            <TopRow>
              <div>
                <Badge><Brain size={16} strokeWidth={1.5} /> 10,247 curated memories</Badge>
                <PageTitle>Experience Library</PageTitle>
                <PageDesc>
                  Browse our collection of moments, or generate a custom memory
                  tailored to you
                </PageDesc>
              </div>
              <GenerateBtn onClick={() => setShowGenerate(true)}>
                <Sparkles size={16} strokeWidth={1.5} /> Generate Custom
              </GenerateBtn>
            </TopRow>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SearchRow>
              <SearchWrapper>
                <SearchIconWrapper><Search size={20} strokeWidth={1.5} /></SearchIconWrapper>
                <SearchInput
                  type="text"
                  placeholder="Search experiences..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </SearchWrapper>
            </SearchRow>
          </FadeIn>

          <FadeIn delay={0.15}>
            <FilterRow>
              {CATEGORIES.map((cat) => (
                <FilterBtn
                  key={cat}
                  $active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </FilterBtn>
              ))}
            </FilterRow>
          </FadeIn>

          <Grid>
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
                  <Card onClick={() => setSelectedId(exp.id)}>
                    <CardImage
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                    />
                    <CardOverlay />
                    <CardContent>
                      <CardTop>
                        <CardTag>{exp.category}</CardTag>
                      </CardTop>
                      <CardBottom>
                        <CardMeta>
                          <MetaItem><Clock size={14} /> {exp.duration}</MetaItem>
                          <MetaItem><TrendingUp size={14} /> {exp.intensity}</MetaItem>
                        </CardMeta>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDesc>{exp.desc}</CardDesc>
                        <CardStats>
                          <StatRating><Star size={14} fill="rgba(255,255,255,0.7)" stroke="none" /> {exp.rating}</StatRating>
                          <span>•</span>
                          <span>{exp.users} experiences</span>
                        </CardStats>
                      </CardBottom>
                    </CardContent>
                    <CardBottomLine />
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </Grid>
        </Inner>
      </PageWrapper>

      {/* ===== EXPERIENCE DETAIL MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <ModalContent
              as={motion.div}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalClose onClick={() => setSelectedId(null)}>✕</ModalClose>
              <ModalImage src={selected.image} alt={selected.title} />
              <ModalBody>
                <ModalTag>{selected.category}</ModalTag>
                <ModalTitle>{selected.title}</ModalTitle>
                <ModalMeta>
                  <ModalMetaItem><Clock size={14} strokeWidth={1.5} /> {selected.duration}</ModalMetaItem>
                  <ModalMetaItem><TrendingUp size={14} strokeWidth={1.5} /> {selected.intensity}</ModalMetaItem>
                  <ModalMetaItem><Star size={14} fill="rgba(255,255,255,0.7)" stroke="none" /> {selected.rating}</ModalMetaItem>
                  <span>{selected.users} experiences</span>
                </ModalMeta>
                <ModalLongDesc>{selected.longDesc}</ModalLongDesc>
                <ModalInfoGrid>
                  <ModalInfoItem>
                    <ModalInfoLabel>Emotional Profile</ModalInfoLabel>
                    <ModalInfoValue>
                      {selected.emotionalProfile}
                    </ModalInfoValue>
                  </ModalInfoItem>
                  <ModalInfoItem>
                    <ModalInfoLabel>Neural Depth</ModalInfoLabel>
                    <ModalInfoValue>{selected.neuralDepth}</ModalInfoValue>
                  </ModalInfoItem>
                </ModalInfoGrid>
                <ModalCTA>Download Experience</ModalCTA>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {/* ===== GENERATE CUSTOM MODAL ===== */}
      <AnimatePresence>
        {showGenerate && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGenerate(false)}
          >
            <GenerateModal
              as={motion.div}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalClose onClick={() => setShowGenerate(false)}>✕</ModalClose>

              <GenHeader>
                <GenTitle>Generate Custom Memory</GenTitle>
                <GenDesc>
                  Describe a moment, feeling, or experience you'd like to have
                </GenDesc>
              </GenHeader>

              <GenField>
                <GenLabel>Your Memory Prompt</GenLabel>
                <GenTextarea
                  rows={4}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </GenField>

              <GenPromptSection>
                <GenPromptLabel>Try these prompts:</GenPromptLabel>
                <GenPromptTags>
                  {PROMPTS.map((p) => (
                    <GenPromptTag key={p} onClick={() => setPrompt(p)}>
                      {p}
                    </GenPromptTag>
                  ))}
                </GenPromptTags>
              </GenPromptSection>

              <GenSubmitBtn>Generate Memory</GenSubmitBtn>
            </GenerateModal>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default ExperiencesPage;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const PageWrapper = styled.main`
  min-height: 100vh;
  padding: 6rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;
`;

const BgGlow1 = styled.div`
  position: absolute;
  top: 10rem;
  right: 10rem;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  background: rgba(124, 58, 237, 0.1);
  filter: blur(64px);
`;

const BgGlow2 = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 10rem;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  background: rgba(139, 92, 246, 0.1);
  filter: blur(64px);
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  ${media.md} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  background: rgba(26, 31, 58, 0.3);
  backdrop-filter: blur(8px);
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  margin-bottom: 0.75rem;
  letter-spacing: -0.025em;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  }
`;

const PageDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.6;
  max-width: 42rem;
`;

const GenerateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  background: linear-gradient(to right, #7c3aed, #7c3aed);
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.4);
  align-self: flex-start;
  transition: all 500ms ease;

  svg {
    transition: transform 500ms ease;
  }

  &:hover {
    transform: scale(1.05);

    svg {
      transform: rotate(12deg);
    }
  }

  ${media.md} {
    align-self: flex-end;
  }
`;

const SearchRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.4;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border-radius: 9999px;
  background: rgba(26, 31, 58, 0.4);
  border: 1px solid rgba(124, 58, 237, 0.2);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.foreground};
  transition: all 500ms ease;

  &:focus {
    border-color: rgba(124, 58, 237, 0.5);
    background: rgba(26, 31, 58, 0.6);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.foreground};
    opacity: 0.4;
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: all 500ms ease;

  ${({ $active }) =>
    $active
      ? `
    background: linear-gradient(to right, #7c3aed, #7c3aed);
    color: white;
    box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
    opacity: 1;
  `
      : `
    background: rgba(26, 31, 58, 0.4);
    border: 1px solid rgba(124, 58, 237, 0.2);
    opacity: 0.7;
    &:hover {
      opacity: 1;
      background: rgba(26, 31, 58, 0.6);
      border-color: rgba(124, 58, 237, 0.4);
    }
  `}
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  height: 24rem;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3),
    transparent
  );
`;

const CardContent = styled.div`
  position: relative;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  margin-bottom: auto;
`;

const CardTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  backdrop-filter: blur(24px);
  background: rgba(255, 255, 255, 0.3);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.025em;
  color: white;
`;

const CardBottom = styled.div``;

const CardMeta = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.8;
  color: white;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  margin-bottom: 0.5rem;
  color: white;
`;

const CardDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.625;
  margin-bottom: 1rem;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.7);
`;

const CardBottomLine = styled.div`
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
  transform: scaleX(0);
  transition: transform 500ms ease;

  ${Card}:hover & {
    transform: scaleX(1);
  }
`;

/* ----- Experience Detail Modal ----- */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  border: 1px solid rgba(124, 58, 237, 0.2);
  background: ${({ theme }) => theme.colors.card};

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(124, 58, 237, 0.3);
    border-radius: 2px;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: background 300ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;

  ${media.md} {
    height: 20rem;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(124, 58, 237, 0.2);
  color: ${({ theme }) => theme.colors.purple400};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
`;

const ModalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
`;

const ModalLongDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.75;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const ModalInfoGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;

  ${media.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ModalInfoItem = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(124, 58, 237, 0.15);
  background: rgba(26, 31, 58, 0.3);
`;

const ModalInfoLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.5;
  margin-bottom: 0.375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ModalInfoValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.purple400};
`;

const ModalCTA = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 9999px;
  background: linear-gradient(to right, #7c3aed, #7c3aed);
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.base};
  box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.5);
  }
`;

/* ----- Generate Custom Modal ----- */
const GenerateModal = styled.div`
  position: relative;
  width: 100%;
  max-width: 44rem;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  border: 1px solid rgba(124, 58, 237, 0.2);
  background: ${({ theme }) => theme.colors.card};
  padding: 2.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(124, 58, 237, 0.3);
    border-radius: 2px;
  }
`;

const GenHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const GenTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
`;

const GenDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
  line-height: 1.625;
`;

const GenField = styled.div`
  margin-bottom: 1rem;
`;

const GenLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const GenTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(26, 31, 58, 0.4);
  border: 1px solid rgba(124, 58, 237, 0.2);
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.625;
  resize: none;
  transition: border-color 500ms ease;

  &:focus {
    border-color: rgba(124, 58, 237, 0.5);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.foreground};
    opacity: 0.3;
  }
`;

const GenPromptSection = styled.div`
  margin-bottom: 1.5rem;
`;

const GenPromptLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  margin-bottom: 0.75rem;
`;

const GenPromptTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const GenPromptTag = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: rgba(26, 31, 58, 0.2);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  transition: all 300ms ease;
  text-align: left;

  &:hover {
    opacity: 1;
    background: rgba(26, 31, 58, 0.4);
  }
`;

const GenSubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const StatRating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ModalMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;