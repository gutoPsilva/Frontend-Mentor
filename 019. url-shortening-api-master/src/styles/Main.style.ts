import styled from "styled-components";
import SectionMobBG from "../assets/images/bg-boost-mobile.svg";
import SectionDesBG from "../assets/images/bg-boost-desktop.svg";

export const GeneralContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  text-align: center;
  padding-bottom: 4rem;

  @media (min-width: 640px) {
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 2rem;
    gap: 2rem;
  }

  @media (min-width: 1152px) {
    gap: 7rem;
  }
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    align-items: start;
    text-align: left;
    padding-left: 0;
  }
`;

export const StartedButton = styled.button`
  color: hsl(0, 0%, 100%);
  border-radius: 9999px;
  padding: .6em 2em;
  width: fit-content;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 4rem 1rem;
  gap: 2rem;
  width: 100%;
`;

export const StatisticsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  text-align: center;
  max-width: 33rem;

  @media (min-width: 768px) {
    margin-top: 3.125rem;
  }
`;

export const FeaturesContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 384px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  max-width: 33rem;
`;

export const ImageContainer = styled.div`
  padding: 1.5rem;
  border-radius: 50%;
  aspect-ratio: 1;
  margin-bottom: -44px;
  z-index: 20;

  @media (min-width: 1024px) {
    align-self: flex-start;
    margin-left: 1.75rem;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  background-color: hsl(0, 0%, 100%);
  padding: 4.25rem 1.25rem 2rem 1.25rem;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    text-align: left;
    padding-inline: 1.75rem;
  }
`;

export const ConnectionLine = styled.hr`
  border: none;
  position: absolute;
  margin-top: 27rem;
  height: 0.5rem;
  width: 800px;
  transform: rotate(90deg);
  z-index: 0;

  @media (min-width: 1024px) {
    margin-top: 0;
    transform: rotate(0);
    width: 90%;
  }
`;

export const BoostContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 4.5rem 1rem;
  background: hsl(257 27% 26%) url(${SectionMobBG}) no-repeat right;
  background-size: cover;
  text-align: center;

  @media (min-width: 1024px){
    background-image: url(${SectionDesBG});
    padding-block: 3rem;
    gap: 1.75rem;
  }
`;