import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import CardFollowers from './components/CardFollowers';
import CardStats from './components/CardStats';
import Switch from './components/Switch';
import './App.css';
import Modal from './components/Modal';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';

const ThemeContext = createContext('light');

const GeneralContainer = styled.div`
  max-width: 1440px;
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f9faff;
  padding: 30px 150px;
  height: 180px;

  @media (max-width: 480px) {
    padding: 5px 20px;
    justify-content: flex-start;
    flex-direction: column;
  }
  @media (min-width: 481px) and (max-width: 610px) {
    padding: 5px 20px;
    justify-content: flex-start;
    flex-direction: column;
  }
  @media (min-width: 611px) and (max-width: 767px) {
    padding: 5px 20px;
    justify-content: flex-start;
    flex-direction: row;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 40px;
    justify-content: flex-start;
  }
  @media (min-width: 1025px) and (max-width: 1439px) {
    padding: 20px 80px;
    justify-content: flex-start;
  }
`;
const TitleGrid = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 0 30px 0;

  h2 {
    color: #63687e;
  }
`;

const Title = styled.h2`
  display: flex;
  margin: 0;
  color: #1e202a;
  font-size: 28px;
  padding-right: 20px;
`;

const Description = styled.h3`
  display: flex;
  margin: 0;
  color: #63687e;
  font-size: 14px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
  @media (min-width: 481px) and (max-width: 610px) {
    margin-bottom: 20px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 150px;
  margin-top: -130px;
  margin-bottom: 200px;

  @media (max-width: 480px) {
    padding: 5px 20px;
    margin-top: -50px;
  }
  @media (min-width: 481px) and (max-width: 610px) {
    justify-content: center;
    margin-top: -70px;
    padding: 5px 20px;
  }
  @media (min-width: 611px) and (max-width: 767px) {
    padding: 5px 20px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 40px;
  }
  @media (min-width: 1025px) and (max-width: 1439px) {
    padding: 20px 80px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 258px));
  grid-gap: 30px;
  width: 100%;

  @media (max-width: 480px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 370px));
  }
  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 370px));
  }

  &:last-child {
    margin-top: 25px;
  }
`;

function App() {
  const svgIcon = { facebook, instagram, twitter, youtube };

  const [theme, setTheme] = useState('light');
  const className = theme + '-mode';
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <GeneralContainer className={className}>
        <AppContainer>
          <Header className="header">
            <div>
              <Title>Social Media Dashboard</Title>
              <Description>Total Followers: 23,004</Description>
            </div>
            <Switch
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
            />
          </Header>
          <MainContent>
            <CardsContainer>
              <CardFollowers
                account="@nathanf"
                svg={svgIcon.facebook}
                followers="1987"
                stat="12"
                followText="FOLLOWERS"
                arrow="green"
                borderCss={{ borderTopColor: '#00BFFF' }}
                onClick={openModal}
              />
              <CardFollowers
                account="@nathanf"
                svg={svgIcon.twitter}
                followers="1044"
                stat="99"
                followText="FOLLOWERS"
                arrow="green"
                borderCss={{ borderTopColor: '#1CA0F2' }}
                onClick={openModal}
              />
              <CardFollowers
                account="@realnathanf"
                svg={svgIcon.instagram}
                followers="11K"
                stat="1099"
                followText="FOLLOWERS"
                arrow="green"
                borderCss={{
                  borderImage: 'linear-gradient(45deg, #FDC468, #DF4996) 1',
                  borderTopStyle: 'solid',
                  borderTopWidth: '3px',
                }}
                onClick={openModal}
              />
              <CardFollowers
                account="Nathan F."
                svg={svgIcon.youtube}
                followers="8239"
                stat="144"
                followText="SUSCRIBERS"
                borderCss={{ borderTopColor: '#C4032A' }}
                arrow="red"
                onClick={openModal}
              />
            </CardsContainer>
            <TitleGrid className="title-grid">
              <Title>Overview - Today</Title>
            </TitleGrid>
            <CardsContainer>
              <CardStats
                title="Page Views"
                svg={svgIcon.facebook}
                text={'87'}
                stat="3"
                arrow="green"
              />
              <CardStats
                title="Likes"
                svg={svgIcon.facebook}
                text={'52'}
                stat="2"
                arrow="red"
              />
              <CardStats
                title="Likes"
                svg={svgIcon.instagram}
                text={'5462'}
                stat="2257"
                arrow="green"
              />
              <CardStats
                title="Profile Views"
                svg={svgIcon.instagram}
                text={'52K'}
                stat="1357"
                arrow="green"
              />
            </CardsContainer>
            <CardsContainer>
              <CardStats
                title="Retweets"
                svg={svgIcon.twitter}
                text={'117'}
                stat="303"
                arrow="green"
              />
              <CardStats
                title="Likes"
                svg={svgIcon.twitter}
                text={'507'}
                stat="553"
                arrow="green"
              />
              <CardStats
                title="Likes"
                svg={svgIcon.youtube}
                text={'107'}
                stat="19"
                arrow="red"
              />
              <CardStats
                title="Total Views"
                svg={svgIcon.youtube}
                text={'1407'}
                stat="12"
                arrow="red"
              />
            </CardsContainer>
          </MainContent>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            account="@nathanf"
            svg={svgIcon.facebook}
            followers={'1987'}
            stat={'12'}
            weekStat={'81'}
            arrow={'green'}
          />
        </AppContainer>
      </GeneralContainer>
    </ThemeContext.Provider>
  );
}

export default App;
