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
  background: hsl(257 27% 26%) url(${MobileBG}) no-repeat right;
  background-size: contain;

  @media (min-width: 768px) {
    background-image: url(${DesktopBG});
    background-size: cover;
    flex-direction: row;
    padding: 1.75rem;
  }
`;