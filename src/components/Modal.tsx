import React from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import arrowUp from '../images/icon-up.svg';
import arrowDown from '../images/icon-down.svg';

export interface ModalProps {
  isOpen: boolean;
  account: string;
  svg: string;
  followers: string;
  stat: string;
  weekStat: string;
  arrow: string;
  onClose: () => void;
}

const ModalShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const HeaderModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9faff;
  padding: 25px 65px 0 65px;
  border-radius: 12px 12px 0 0;
`;
const XButton = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #63687e;
  margin-right: -40px;
  transform: scale(1.6, 1.2);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const Title = styled.h2`
  display: flex;
  margin: 0;
  color: #1e202a;
  font-size: 28px;
`;
const Account = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    margin-right: 8px;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    color: #7f859d;
    font-weight: 700;
    margin: 0;
  }
`;
const Stats = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 25px 0;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 481px) and (max-width: 610px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 611px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const TotalNumber = styled.div`
  display: flex;
  margin-right: 40px;

  h2 {
    font-size: 36px;
    color: #63687e;
    margin: 0;
    margin-right: 20px;
    line-height: 40px;
  }
  p {
    color: #63687e;
    font-size: 14px;
    max-width: 60px;
    margin: 0;
  }
`;
const Stat = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #63687e;
    font-size: 14px;
    max-width: 120px;
    margin: 0;
  }
`;
const Icon = styled.img`
  width: 12px;
  height: 6px;
  margin-right: 8px;
`;
const Num = styled.span`
  font-size: 36px;
  margin: 0;
  margin-right: 20px;
  font-weight: 700;
`;
const Day = styled.p`
  margin: 0;
  padding: 30px 65px;
  font-size: 18px;
  color: #63687e;
`;
const ChartContainer = styled.div`
  padding: 0 25px 45px 25px;
`;

const Modal = ({
  isOpen,
  onClose,
  svg,
  account,
  followers,
  arrow,
  stat,
  weekStat,
}: ModalProps) => {
  if (!isOpen) return null;

  let arrowIcon = arrow === 'green' ? arrowUp : arrowDown;
  arrow = arrow === 'green' ? '#05c3aa' : '#DC414C';
  return (
    <ModalShadow onClick={onClose}>
      <ModalContent className="modal" onClick={(e) => e.stopPropagation()}>
        <HeaderModal className="header">
          <XButton onClick={onClose}>X</XButton>
          <Title>Facebook followers</Title>
          <Account>
            <img src={svg} alt="account" />
            {account && <p>{account}</p>}
          </Account>
          <Stats>
            <TotalNumber>
              <h2>{followers}</h2>
              <p>Total Followers</p>
            </TotalNumber>
            <Stat>
              <Icon src={arrowIcon} alt="Icon" />
              <Num style={{ color: arrow }}>{weekStat}</Num>
              <p>New followers in the past 10 days</p>
            </Stat>
            <Stat>
              <Icon src={arrowIcon} alt="Icon" />
              <Num style={{ color: arrow }}>{stat}</Num>
              <p>New followers TODAY</p>
            </Stat>
          </Stats>
        </HeaderModal>
        <Day className="day-section">May 4 - May 13</Day>
        <ChartContainer className="chart-section">
          <Chart />
        </ChartContainer>
      </ModalContent>
    </ModalShadow>
  );
};

export default Modal;
