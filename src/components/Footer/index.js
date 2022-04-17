import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Product</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">For Developers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">Company</FooterLink>
                <FooterLink to="/signin">FAQS</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Blog</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Legal</FooterLinkTitle>
                <FooterLink to="/signin">Priivacy Policy</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Join our Telegram Community</FooterLink>
                <FooterLink to="/signin">Say hi! +234800000000</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                loob
              </SocialLogo>
              <WebsiteRights>
                loob &copy; {new Date().getFullYear()} All Rights Reserved
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
