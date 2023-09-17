import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1130px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

export const WhiteImage = styled.img`
  filter: brightness(10);
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: 7rem;
  }
`;

export const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: center;

  @media (min-width: 768px){
    text-align: left;
  }
`;

export const LinksTitle = styled.h3`
  color: hsl(0, 0%, 100%);
  font-weight: 700;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const SocialMediaGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 4rem;

  @media (min-width: 1024px){
    margin-top: 0;
  }
`;