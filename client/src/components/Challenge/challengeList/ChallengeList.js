import React, { useEffect, useState } from "react";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";
import Icon1 from "../../../imges/svg-1.svg";
import Icon2 from "../../../imges/svg-2.svg";
import Icon3 from "../../../imges/svg-3.svg";
import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Subbar,
  Select,
  ServicesCardColor,
  Button,
} from "./ChallengeListStyle";
import axios from "axios";

const ChallengeList = () => {
  const [lists, setLists] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleRequsetList();
  }, []);

  const handleRequsetList = () => {
    axios
      .get("https://localhost:4000/challenge/all-level", {
        withCredentials: true,
      })
      .then((res) => {
        setLists(res.data.challengeList);
        setItems(res.data.challengeList);
      });
  };
  const handleRequsetLevelList = (e) => {
    const level = e.target.value;
    console.log(level);
    //해당레벨 버튼을 누르면 list state에 저장된 list값들중 해당레벨을 찾아서 setList로 바꾼다.
    let a = lists.map((list) => list);
    let b = a.filter((el) => el.level === Number(level));
    setItems(b);
  };

  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission List</ServicesH1>
      <Subbar>
        <Select>
          <Button onClick={handleRequsetList}>All</Button>
        </Select>
        <Select>
          <Button value="1" onClick={(e) => handleRequsetLevelList(e)}>
            Level 1
          </Button>
        </Select>
        <Select>
          <Button value="2" onClick={(e) => handleRequsetLevelList(e)}>
            Level 2
          </Button>
        </Select>
        <Select>
          <Button value="3" onClick={(e) => handleRequsetLevelList(e)}>
            Level 3
          </Button>
        </Select>
        <Select>
          <Button>미션후기작성</Button>
        </Select>
      </Subbar>
      <ServicesWrapper>
        {items.map((list, idx) => {
          return <ChallengeListItem list={list} key={idx} />;
        })}
      </ServicesWrapper>

      {/**
        <ServicesCard>
          <ServicesIcon src={Icon1} />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
        </ServicesCard>
        <ServicesCardColor>
          <ServicesH2>캔뿌셔</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCardColor>
        <ServicesCard>
          <ServicesH2>플로깅</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>분리수거</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Reduce waste</ServicesH2>
          <ServicesP>We help waste your trash and help earth.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Reduce waste</ServicesH2>
          <ServicesP>We help waste your trash and help earth.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Reduce waste</ServicesH2>
          <ServicesP>We help waste your trash and help earth.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Reduce waste</ServicesH2>
          <ServicesP>We help waste your trash and help earth.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Reduce waste</ServicesH2>
          <ServicesP>We help waste your trash and help earth.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Reduce waste</ServicesH2>
          <ServicesP>We help waste your trash and help earth.</ServicesP>
        </ServicesCard>
      </ServicesWrapper> */}
    </ServicesContiner>
  );
};

export default ChallengeList;
