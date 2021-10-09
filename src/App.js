import React, { useState } from "react";
import styled from "styled-components";
import thieve from "./assets/img/thieve.png";
import warrior from "./assets/img/warrior.png";
import { CalcAtk, CalcDef, CalcHitRate, CalcLife, CalcMagicDef } from "./calc";

function App() {
  const [hero, setHero] = useState("warrior");
  const [lvl, setLvl] = useState(1);
  const [str, setStr] = useState(0);
  const [agi, setAgi] = useState(0);
  const [cons, setCons] = useState(0);
  const [will, setWill] = useState(0);
  const [int, setInt] = useState(0);
  const [spi, setSpi] = useState(0);
  const [enemyAgi, setEnemyAgi] = useState(0);

  const CalcAtkDamage = () => {
    let mainAttr;

    if (hero === "warrior") {
      mainAttr = str;
    }
    if (hero === "mage") {
      mainAttr = int;
    }
    if (hero === "thief") {
      mainAttr = agi;
    }
    if (hero === "hunter") {
      mainAttr = str;
    }
    return CalcAtk(lvl, mainAttr);
  };

  return (
    <AppContainer>
      <Card>
        <Title> Battle Calculator </Title>
        <Hr />
        <HeroContainer>
          <StatusText>
            <select
              value={hero}
              onChange={(e) => setHero(e.target.value)}
              type="select"
            >
              <option value="warrior">Warrior</option>
              <option value="thief">Thief</option>
              <option value="mage">Mage</option>
              <option value="hunter">Hunter</option>
            </select>
          </StatusText>
        </HeroContainer>
        <StatusContainer>
          <StatusText>
            <p>LEVEL</p>
            <input
              value={lvl}
              onChange={(e) =>
                setLvl(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={lvl * 8.33 + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Strength</p>
            <input
              value={str}
              onChange={(e) =>
                setStr(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={str + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Agility</p>
            <input
              value={agi}
              onChange={(e) =>
                setAgi(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={agi + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Constitution</p>
            <input
              value={cons}
              onChange={(e) =>
                setCons(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={cons + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Willpower</p>
            <input
              value={will}
              onChange={(e) =>
                setWill(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={will + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Intelligence</p>
            <input
              value={int}
              onChange={(e) =>
                setInt(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={int + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Spirit</p>
            <input
              value={spi}
              onChange={(e) =>
                setSpi(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={spi + "%"}>
            <div></div>
          </StatusBar>
        </StatusContainer>
        <StatusContainer>
          <StatusText>
            <p>Enemy Agility</p>
            <input
              value={enemyAgi}
              onChange={(e) =>
                setEnemyAgi(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
              type="number"
            />
          </StatusText>
          <StatusBar porcentage={enemyAgi + "%"}>
            <div></div>
          </StatusBar>

          <BattleStatus>
            <div>Life: {CalcLife(lvl, cons)}</div>
            <div>Atk: {CalcAtkDamage()}</div>
            <div>Def: {CalcDef(lvl, will)}</div>
            <div>Magic Def: {CalcMagicDef(lvl, spi)}</div>
            <div>Hit Rate: {CalcHitRate(agi, enemyAgi)}</div>
          </BattleStatus>
        </StatusContainer>
      </Card>
      <Thieve src={thieve} />
      <Warrior src={warrior} />

      <Donation>
        Help this project to encourage future updates:
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "0x12FA2f4121D995914E6708746bd5F131c8D9Af6c"
            );
          }}
        >
          0x12FA2f4121D995914E6708746bd5F131c8D9Af6c
        </button>
      </Donation>
    </AppContainer>
  );
}

const Donation = styled.div`
  color: white;
  position: absolute;
  bottom: 10px;
  button {
    background: transparent;
    border: none;
    color: white;
    margin-left: 10px;
    border-bottom: solid 1px white;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    font-size: 12px;
    text-align: center;
  }
`;

const BattleStatus = styled.div`
  color: white;
  padding-top: 50px;
  justify-content: space-between;
  display: flex;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const StatusContainer = styled.div`
  width: 100%;
  margin: 15px 0;

  @media (max-width: 1200px) {
    margin: 10px 0;
  }
`;

const HeroContainer = styled.div`
  width: 100px;
  margin: 15px 0;

  select {
    color: ${(props) => props.theme.colors.primary};
    outline: none;
    padding: 5px;
  }
`;

const Hr = styled.hr`
  width: 100%;
  margin: 5px;
  border: 1px solid ${(props) => props.theme.colors.text};
  opacity: 0.2;
`;

const StatusBar = styled.div`
  height: 8px;
  background: hsla(0, 0%, 100%, 0.1);
  width: 100%;

  div {
    background: linear-gradient(90.7deg, #f6465d 0.15%, #f15f40 101.76%);
    height: 100%;
    border-radius: 8px 8px 8px;
    width: ${(props) => props.porcentage};
  }
`;

const StatusText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: white;
    font-size: 16px;
    padding-bottom: 5px;
  }

  input {
    text-align: center;
    width: 50px;
    color: white;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AppContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  height: 650px;
  width: 500px;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  background: ${(props) => props.theme.colors.card};
`;

const Title = styled.h1`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;

const Thieve = styled.img`
  position: absolute;
  bottom: 30px;
  right: 100px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Warrior = styled.img`
  position: absolute;
  bottom: 30px;
  left: 100px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default App;
