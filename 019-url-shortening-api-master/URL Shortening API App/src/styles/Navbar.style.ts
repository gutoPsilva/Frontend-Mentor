import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  position: relative;
  width: 100%;
`;

export const DeskContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 0.75rem;
  @media (max-width: 700px){
    display: none;
  }
`;

export const MenuContainer = styled.section`
  display: none;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 700px){
    display: flex;
    width: 100%;
  }
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const MenuButton = styled.button`
  @media (min-width: 701px){
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-radius: .5rem;
  position: absolute;
  margin-top: 3rem;

  @media (min-width: 701px) {
    display: none;
  }
`;