/** @format */

import React from "react";
import userData from "../assets/data/user.json";
import Contact from "./Contact";
import styled from "styled-components";
import contactSVG from '../assets/svg/profileSVGs/contact.svg';
import facebookSVG from '../assets/svg/profileSVGs/facebook.svg'
import instagramSVG from '../assets/svg/profileSVGs/instagram.svg'
import linkedinSVG from '../assets/svg/profileSVGs/linkdin.svg'
import youtubeSVG  from '../assets/svg/profileSVGs/youtupe.svg';
import searchSVG from '../assets/svg/profileSVGs/search-icon.svg'
import shareSVG from '../assets/svg/profileSVGs/share.svg'
import heartSVG from '../assets/svg/profileSVGs/heart.svg'


const Container = styled.div`
  padding-top: 4rem;
  margin-bottom: 1.25rem;
  overflow: hidden;
  position: relative;
`;

const Card = styled.div`
  margin: 4rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Reduced opacity for better appearance */
  border: 2px solid #e2e8f0;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: -4rem;
  
  @media (min-width: 768px) {
    width: 33.333333%;
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%; /* Ensures the image scales appropriately */
  border-radius: 35px;
`;

const Button = styled.div`
  /* Add styles for the button if needed */
`;

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
  gap: 1%;

  @media (max-width: 768px) {
    position: absolute;
    top: 43%;
    left: 7%;
  }
`;

const IconLink = styled.a`
  color: #fcd34d;
  font-weight: bold;
`;

const Header = styled.div`
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    position: absolute;
    left: 42%;
    top: 10%;
    width: 100%;
  }
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: inline;

  img {
    position: absolute;
    display: inline;
    top: 28%;
  }
`;

const UserRole = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #6f7075;
`;

const UserNMLS = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #6f7075;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    position: absolute;
    left: 42%;
    top: 30%;
    z-index: 1;
  }
`;

const SectionTitle = styled.p`
  color: #b7cf53;
  font-weight: bold;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const AboutText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (min-width: 768px) {
    position: absolute;
    padding-top: 3%;
    top: 45%;
    left: 42%;
  }
`;

const InfoBlock = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const InfoText = styled.p`
  color: #4b5563;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 11px;

  position: absolute;
  right:0;
  top: 100%; /* Adjusted to a relative value for better positioning */

  @media (max-width: 768px) {
    right: -120%;
    top: 80%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    right: -80%;
    top: 90%;
  }

  @media (min-width: 1024px) {
    right: -120%;
    top: 85%;
  }
`;
/*
sm:
@media (min-width: 640px) { ... }	
md:
@media (min-width: 768px) { ... }	
lg:
@media (min-width: 1024px) { ... }	
xl:
@media (min-width: 1280px) { ... }	
2xl:
@media (min-width: 1536px) { ... }

*/ 

const Icon = styled.div``;

const InfoIcons = styled.div``;

const ProfileCard = () => {
    return (
        <Container>
            <Card>
                <CardContent>
                    <div>
                        <ImageWrapper>
                            <ProfileImage src={userData.image} alt='Profile' />
                        </ImageWrapper>
                        <IconWrapper>
                            <Button onClick={Contact}   role="button">
                                <img src={contactSVG} alt='contact icon '/>
                            </Button>
                            <IconLink href='#'>
                                <img src={facebookSVG} alt='facebook icon'/>
                            </IconLink>
                            <IconLink href='#'>
                                <img src={youtubeSVG} alt='youtube icon' />
                            </IconLink>
                            <IconLink href='#'>
                                <img src={linkedinSVG} alt='linkedin icon ' />
                            </IconLink>
                            <IconLink href='#'>
                                <img src={instagramSVG} alt='instagram icon ' />
                            </IconLink>
                        </IconWrapper>
                    </div>
                        <Header>
                            <UserName>
                            
                                    {userData.name}{" "}
                            
                                    <img src={searchSVG} alt='search icon' />
                                
                                
                            </UserName>
                            <div>
                                <UserRole>{userData.role}</UserRole>
                                <UserNMLS>{userData.nmls}</UserNMLS>
                            </div>
                        </Header>
                        <AboutSection>
                            <SectionTitle>About</SectionTitle>
                            <AboutText>{userData.about}</AboutText>
                        </AboutSection>
                        <InfoSection>
                            <InfoBlock>
                                <SectionTitle>Language</SectionTitle>
                                <InfoText>{userData.language}</InfoText>
                            </InfoBlock>
                            <InfoBlock>
                                <SectionTitle>Service Area</SectionTitle>
                                <InfoText>{userData.serviceArea}</InfoText>
                            </InfoBlock>
                            
                            <InfoBlock>
                                <SectionTitle>Phone</SectionTitle>
                                <InfoText>{userData.phone}</InfoText>
                            </InfoBlock>
                            <InfoBlock>
                                <SectionTitle>Email</SectionTitle>
                                <InfoText>{userData.email}</InfoText>
                            </InfoBlock>
                            <Icons>
                                <img src={heartSVG} alt = 'heart icon'/>
                                <img src={shareSVG} alt = 'search icon'/>
                            </Icons>
                            
                        </InfoSection>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProfileCard;
