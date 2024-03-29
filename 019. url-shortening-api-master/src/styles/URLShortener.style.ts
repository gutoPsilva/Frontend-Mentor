import styled from "styled-components";
import DesktopBG from "../assets/images/bg-shorten-desktop.svg";
import MobileBG from "../assets/images/bg-shorten-mobile.svg";

export const URLContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background: hsl(257 27% 26%) url(${MobileBG}) no-repeat right top;

  @media (min-width: 768px) {
    background-image: url(${DesktopBG});
    background-size: cover;
    flex-direction: row;
    padding: 2rem;
  }

  @media (min-width: 1024px){
    padding: 2.5rem;
  }
`;

export const ErrorContainer = styled.span`
  font-style: italic;
  font-size: 14px;

  @media (min-width: 768px){
    position: absolute;
    font-size: 1rem;
    bottom: .4rem;
  }

  @media (min-width: 1024px){
    bottom: .75rem;
  }
`;

export const BreakLine = styled.hr`

  @media (min-width: 768px){
    display: none;
  }
`;