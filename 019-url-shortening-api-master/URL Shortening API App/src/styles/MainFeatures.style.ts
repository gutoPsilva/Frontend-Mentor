import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const StatisticsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 9rem 0rem 1.5rem 0rem; // top = 80px + 4rem, half URLShortener + 1.5 margin.
  text-align: center;
  max-width: 33rem;

  @media (min-width: 768px) {
    margin-top: 7.125rem; // 50px + 4rem
  }
`;

export const FeaturesContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1152px) {
    flex-direction: row;
    height: 384px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const ImageContainer = styled.div`
  padding: 1.5rem;
  border-radius: 50%;
  aspect-ratio: 1;
  margin-bottom: -44px;
  z-index: 20;

  @media (min-width: 1152px){
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
  border-radius: .5rem;

  @media (min-width: 1152px){
    text-align: left;
    padding-inline: 1.75rem;
  }
`;

export const ConnectionLine = styled.hr`
  border: none;
  position: absolute;
  height: 0.5rem;
  width: 900px;
  transform: rotate(90deg);
  z-index: 10;

  @media (min-width: 1152px) {
    top: calc(50%-0.5rem);
    transform: rotate(0);
    width: 90%;
  }
`;