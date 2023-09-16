import styled from "styled-components";

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
  gap: 1.5rem;
  padding-inline: 1rem;

  @media (min-width: 640px) {
    align-items: start;
    text-align: left;
  }

  @media (min-width: 1152px) {
    padding-left: 0;
  }
`;