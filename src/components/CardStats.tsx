import React from 'react';
import styled from 'styled-components';
import arrowUp from '../images/icon-up.svg';
import arrowDown from '../images/icon-down.svg';

interface CardStatsProps {
  title: string;
  svg: string;
  text: string;
  stat: string;
  arrow: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: #f3f6fc;

  &:hover {
    background-color: #e7e8f4;
  }

  p {
    font-size: 14px;
  }
`;
const Account = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #63687e;
    font-weight: 700;
    margin: 0;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  h3 {
    font-size: 30px;
    letter-spacing: -2px;
    color: #1e202a;
    line-height: 30px;
    margin: 0;
  }
`;

const StatsNum = styled.div`
  display: flex;
  align-items: center;
  color: hsl(163, 72%, 41%);
`;
const Icon = styled.img`
  width: 8px;
  height: 4px;
  margin-right: 2px;
`;
const StatsText = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const CardStats: React.FC<CardStatsProps> = ({
  title,
  svg,
  text,
  onClick,
  stat,
  arrow,
}) => {
  let arrowIcon = arrow === 'green' ? arrowUp : arrowDown;
  arrow = arrow === 'green' ? '#1EB589' : '#DC414C';
  return (
    <CardContainer className="card-stats">
      <Account>
        {title && <p>{title}</p>}
        <img src={svg} alt="account" />
      </Account>
      <Stats>
        <h3>{text}</h3>
        <StatsNum style={{ color: arrow }}>
          <Icon src={arrowIcon} alt="Icon" />
          <StatsText>{stat}%</StatsText>
        </StatsNum>
      </Stats>
    </CardContainer>
  );
};

export default CardStats;
