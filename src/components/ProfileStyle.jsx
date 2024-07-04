import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.25rem;
  overflow: hidden;
  padding-top: 4rem;
  position: relative; 
  
`;

export const Card = styled.div`
  margin: 4rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0,4);
  border: 2px solid #e2e8f0;
  position: relative; /* Ensure it's positioned */


  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const CardContent = styled.div`
display: flex;
  flex-direction: column;
  width:100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width:100%;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 2rem;
margin-top:-4rem;
  @media (min-width: 768px) {
    width: 33.333333%;
    margin-bottom: 0;
  }
`;

export const ProfileImage = styled.img`
  height: auto;
  border-radius: 35px;
`;

export const Button = styled.div`
  /* Add your button styles */
`;

export const IconWrapper = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;

  
    @media(max-width:768px){
    position:absolute;
  top:43%;
  left:7%;
    }
`;

export const IconLink = styled.a`
  color: #fcd34d;
  font-weight: bold;
`;

export const InfoWrapper = styled.div`

  }
`;

export const Header = styled.div`
  width: 100%;
  margin-top: 1rem;
  

  @media (min-width: 768px) {
    position: absolute;
    left: 500px;
    top: 10%;
    width:100%;
    
  }
`;
export const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display:inline;

  svg{display:inline}
  
`;

export const UserRole = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #6f7075;
`;

export const UserNMLS = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #6f7075;
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: flex-start;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    position: absolute;
    left: 500px;
    top: 30%;
    z-index: 1; /* Lower than navbar */
  }
`;

export const SectionTitle = styled.p`
  color: #B7CF53;
  font-weight: bold;
  width: 100%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;

color: #B7CF53;
flex: none;
order: 0;
flex-grow: 0;

`;

export const AboutText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-left: 0;

  @media (min-width: 768px) {
    position: absolute;
    top: 45%;
    left: 26.5%;
  }
`;

export const InfoBlock = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const InfoText = styled.p`
  color: #4b5563;
`;

export const Icons = styled.div`
  svg {
    width: 100%;
    max-width: 73px;
    height: auto;
    fill: none;
  }

  circle {
    fill: #f4f4f4;
  }

  path {
    stroke: #979797;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const Icon = styled.div`

`;

export const InfoIcons = styled.div`
  
`;
