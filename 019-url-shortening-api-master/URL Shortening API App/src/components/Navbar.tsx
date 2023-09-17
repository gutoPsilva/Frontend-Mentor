import { NavbarContainer, DeskContainer, MenuContainer, NavbarInnerContainer, NavbarExtendedContainer, MenuButton } from "../styles/Navbar.style";
import { AiOutlineMenu } from "react-icons/ai";
import LogoIMG from "../assets/images/logo.svg";
import { useState } from "react";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <img src={LogoIMG} alt="Shortly logo" className="mr-4" />
        <DeskContainer>
          <ul className="text-grayish-violet flex gap-6">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <section className="flex gap-6">
            <button className="text-grayish-violet">Login</button>
            <button className="text-white bg-cyan px-5 py-1 rounded-full">Sign Up</button>
          </section>
        </DeskContainer>
        <MenuContainer>
          <MenuButton
            className="text-grayish-violet"
            onClick={() => {
              setExtendNavbar(cur => !cur);
            }}>
            <AiOutlineMenu size={32} />
          </MenuButton>
        </MenuContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer className="bg-dark-violet text-white">
          <ul className="flex flex-col items-center gap-7">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <hr className="w-full text-grayish-violet my-7" />
          <section className="flex flex-col items-center w-full gap-7">
            <button>Login</button>
            <button className=" bg-cyan px-5 py-2 rounded-full w-full">Sign Up</button>
          </section>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
