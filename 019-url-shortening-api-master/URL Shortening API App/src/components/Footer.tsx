import { FooterContainer, LinksList, LinkSection, LinksTitle, SocialMediaGroup, WhiteImage, LinksGroup } from "../styles/Footer.style";
import logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/icon-facebook.svg"
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

export const Footer = () => {
  return (
    <footer className="bg-very-d-violet py-12 flex justify-center px-8">
      <FooterContainer>
        <WhiteImage src={logo} alt="Shortly White Logo" className="mb-12 lg:mb-0" />
        <LinksGroup>
          <LinkSection>
            <LinksTitle>Features</LinksTitle>
            <LinksList className="text-gray">
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </LinksList>
          </LinkSection>
          <LinkSection>
            <LinksTitle>Resources</LinksTitle>
            <LinksList className="text-gray">
              <li>Blog</li>
              <li>
                <a href="https://github.com/gutoPsilva" target="_blank" rel="external">
                  Developers
                </a>
              </li>
              <li>Support</li>
            </LinksList>
          </LinkSection>
          <LinkSection>
            <LinksTitle>Company</LinksTitle>
            <LinksList className="text-gray">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </LinksList>
          </LinkSection>
        </LinksGroup>
        <SocialMediaGroup>
          <img src={Facebook} alt="Facebook Icon" />
          <img src={Twitter} alt="Twitter Icon" />
          <img src={Pinterest} alt="Pinterest Icon" />
          <img src={Instagram} alt="Instagram Icon" />
        </SocialMediaGroup>
      </FooterContainer>
    </footer>
  );
};
