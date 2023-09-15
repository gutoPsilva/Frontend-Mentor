import styled from "styled-components";

export const GeneralContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 1152px){
    gap: 7rem;
  }
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-inline: 2rem;

  @media (min-width: 768px){
    padding-left: 1rem;
    align-items: start;
    text-align: left;
  }
`;