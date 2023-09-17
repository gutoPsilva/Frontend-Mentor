import { FooterContainer, LinksList, LinkSection, LinksTitle, SocialMediaGroup, WhiteImage, LinksGroup, SocialLinks } from "../styles/Footer.style";
import logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/icon-facebook.svg"
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

export const Footer = () => {
  return (
    <footer className="bg-very-d-violet py-12 flex justify-center px-8">
      <FooterContainer>
        <a href="#" className="mb-12 lg:mb-0">
          <WhiteImage src={logo} alt="Shortly White Logo" />
        </a>
        <LinksGroup>
          <LinkSection>
            <LinksTitle>Features</LinksTitle>
            <LinksList className="text-gray">
              <li>
                <a href="#url" className="hover:text-cyan focus:text-cyan outline-none transition">
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">
                  Analytics
                </a>
              </li>
            </LinksList>
          </LinkSection>
          <LinkSection>
            <LinksTitle>Resources</LinksTitle>
            <LinksList className="text-gray">
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">Blog</a>
              </li>
              <li title="That's my github ;]">
                <a href="https://github.com/gutoPsilva" target="_blank" rel="external" className="hover:text-cyan focus:text-cyan outline-none transition">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">Support</a>
              </li>
            </LinksList>
          </LinkSection>
          <LinkSection>
            <LinksTitle>Company</LinksTitle>
            <LinksList className="text-gray">
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">Our Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan focus:text-cyan outline-none transition">Contact</a>
              </li>
            </LinksList>
          </LinkSection>
        </LinksGroup>
        <SocialMediaGroup>
          <SocialLinks href="https://www.facebook.com/" target="_blank" rel="external" className="grid place-content-center">
            <img src={Facebook} alt="Facebook Icon" />
          </SocialLinks>
          <SocialLinks href="https://pinterest.com/" target="_blank" rel="external" className="grid place-content-center">
            <img src={Twitter} alt="Twitter Icon" />
          </SocialLinks>
          <SocialLinks href="https://twitter.com/" target="_blank" rel="external" className="grid place-content-center">
            <img src={Pinterest} alt="Pinterest Icon" />
          </SocialLinks>
          <SocialLinks href="https://www.instagram.com/" target="_blank" rel="external" className="grid place-content-center">
            <img src={Instagram} alt="Instagram Icon" />
          </SocialLinks>
        </SocialMediaGroup>
      </FooterContainer>
    </footer>
  );
};
