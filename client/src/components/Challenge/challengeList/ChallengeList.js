import React, { useEffect } from "react";
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
  useEffect(() => {
    handelRequsetList();
  }, []);
  const handelRequsetList = () => {
    axios
      .get("https://localhost:4000/challenge/all-level", {
        withCredentials: true,
      })
      .then((res) => console.log(res));
  };
  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission List</ServicesH1>
      <Subbar>
        <Select>
          <Button>All</Button>
        </Select>
        <Select>
          <Button>Level 1</Button>
        </Select>
        <Select>
          <Button>Level 2</Button>
        </Select>
        <Select>
          <Button>Level 3</Button>
        </Select>
        <Select>
          <Button>미션후기작성</Button>
        </Select>
      </Subbar>
      <ChallengeListItem />
      {/**<ServicesWrapper>
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
