import React from 'react';
import styled from 'styled-components';
import arrowUp from '../images/icon-up.svg';
import arrowDown from '../images/icon-down.svg';

interface CardFollowersProps {
  account: string;
  svg: string;
  followers: string;
  stat: string;
  followText: string;
  borderCss: React.CSSProperties;
  arrow: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 25px 50px;
  border-radius: 4px;
  border-top: 3px solid red;
  background-color: #f3f6fc;

  &:last-child {
    grid-gap: 0;
  }

  &:hover {
    background-color: #e7e8f4;
  }

  p,
  h2 {
    margin: 0;
  }
`;
const Followers = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  h2 {
    font-size: 60px;
    letter-spacing: -2px;
    color: #1e202a;
  }
  p {
    color: #63687e;
    font-size: 12px;
    letter-spacing: 5px;
  }
`;
const TitleCard = styled.div`
  display: flex;

  img {
    margin-right: 8px;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    color: #63687e;
    font-weight: 700;
  }
`;
const Stats = styled.div`
  display: flex;
  place-items: center;
  color: hsl(163, 72%, 41%);
`;

const Icon = styled.img`
  width: 8px;
  height: 4px;
  margin-right: 4px;
`;
const StatsText = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const CardFollowers: React.FC<CardFollowersProps> = ({
  account,
  svg,
  followers,
  stat,
  followText,
  borderCss,
  arrow,
  onClick,
}) => {
  let arrowIcon = arrow === 'green' ? arrowUp : arrowDown;
  arrow = arrow === 'green' ? '#1EB589' : '#DC414C';
  return (
    <CardContainer
      className="card-follower"
      style={borderCss}
      onClick={onClick}
    >
      <TitleCard>
        <img src={svg} alt="account" />
        {account && <p>{account}</p>}
      </TitleCard>
      <Followers>
        <h2>{followers}</h2>
        <p>{followText}</p>
      </Followers>
      <Stats style={{ color: arrow }}>
        <Icon src={arrowIcon} alt="Icon" />
        <StatsText>{stat} Today</StatsText>
      </Stats>
    </CardContainer>
  );
};

export default CardFollowers;
