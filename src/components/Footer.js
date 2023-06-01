import React from 'react'
//import { animateScroll as scroll } from 'react-scroll'
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

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
} from './Footer/FooterElements'

const Footer = () => {
  const toggleHome = () => {
    // scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='# '>How it works</FooterLink>
              <FooterLink to='# '>Testimonials</FooterLink>
              <FooterLink to='# '>Careers</FooterLink>
              <FooterLink to='#'>Blog</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to='#'>Contact</FooterLink>
              <FooterLink to='#'>Support</FooterLink>
              <FooterLink to='# '>Counties</FooterLink>
              <FooterLink to='#'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Our Customers</FooterLinkTitle>
              <FooterLink to='#'>Artisans</FooterLink>
              <FooterLink to='#'> Creators</FooterLink>
              <FooterLink to='#'> Service Providers</FooterLink>
              <FooterLink to='# '>Professionals</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Our Patners</FooterLinkTitle>
              <FooterLink to='# '>NGOs</FooterLink>
              <FooterLink to='#'>Trade Associations</FooterLink>
              <FooterLink to='#'>Local Businesses</FooterLink>
              <FooterLink to='#'>Local Government</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <p>Ongata Rongai Online</p>

            <WebsiteRights>
              {' '}
              Ongata Rongai Online {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com//'
                target='_blank '
                arial-label='Facebook'
              >
                {' '}
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank ' arial-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/'
                target='_blank '
                arial-label='Youtube'
              >
                {' '}
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.twitter.com// '
                target='_blank '
                arial-label='Twitter'
              >
                {' '}
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/company//'
                target='_blank '
                arial-label='LinkedIn'
              >
                {' '}
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
