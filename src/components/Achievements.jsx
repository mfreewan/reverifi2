/** @format */

import React from "react";
import styled from "styled-components";
import achievementsData from "../assets/data/achivements.json";
import silverBadge from "../assets/images/silver1.png";
import goldBadge from "../assets/images/gold1.png";
import bronzeBadge from "../assets/images/bronze1.png";
import shaves from "../assets/images/shaves.png";
import pointSVG from "../assets/svg/achivementsSVGs/point.svg";
import badgeSVG from "../assets/svg/achivementsSVGs/badge.svg";

const Container = styled.div`
  width: 100%;

 
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1%;
`;

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 39px;
  color: black;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap:1rem;
  margin-bottom: 1%;
  div {
    border-radius: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    padding: 0.2rem;
    background: white;
    span {
      margin-left: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
const AchievementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem;  /* Adjust margin for spacing between cards */
  width: 17%;  /* Set a fixed width for consistency */
`;

const AchievementImage = styled.img`
  width: 40%; /* Set width for the image */
  height: auto;
  margin-bottom: 16px; /* Space between image and title */
`;

const AchievementTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Center align text */
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 15px;

  h3 {
    margin: 0;
    font-size: 16px; /* Adjust title font size */
    font-weight: 600; /* Adjust title font weight */
  }

  p {
    margin: 8px 0 0; /* Space between title and date */
    font-weight: 500;
    font-size: 14px; /* Adjust date font size */
    color: #6F7075;
  }
`;

const AchievementsGrid = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap; /
  gap: 1rem; 
`;

const Achievements = () => {
    const getBadgeImage = (badge) => {
        switch (badge) {
            case "silver":
                return silverBadge;
            case "gold":
                return goldBadge;
            case "bronze":
                return bronzeBadge;
            case "shaves":
                return shaves;
            default:
                return null;
        }
    };

    return (
        <Container>
            <Header>
                <Title>Achievements</Title>
                <BadgeContainer>
                    <div>
                        <img src={badgeSVG} alt='badge svg' />
                        <span>3300 Points</span>
                    </div>
                    <div>
                        <img src={pointSVG} alt='point svg' />
                        <span>8 Badges</span>
                    </div>
                </BadgeContainer>
            </Header>
            <AchievementsGrid>
                {achievementsData.map((achievement) => (
                    <AchievementCard key={achievement.id}>
                        <AchievementImage
                            src={getBadgeImage(achievement.badge)}
                            alt={achievement.title}
                        />
                        <AchievementTitle>
                            <h3 >{achievement.title}</h3>
                            <p >{achievement.date}</p>
                        </AchievementTitle>
                    </AchievementCard>
                ))}
            </AchievementsGrid>
        </Container>
    );
};

export default Achievements;
