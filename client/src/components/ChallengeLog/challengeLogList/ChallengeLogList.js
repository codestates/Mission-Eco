import axios from "axios";
import React, { useState, useEffect } from "react";
import ChallengeLogItem from "../ChallengeLogItem/ChallengeLogItem";
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
  Button,
} from "./ChallengeLogListStyle";

const ChallengeLogList = () => {
  const [allLists, setAllLists] = useState([]);

  useEffect(() => {
    handleRequsetLog();
  }, []);

  const handleRequsetLog = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/challenge-log`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllLists(res.data.challengeLogList);
      })
      .cath((err) => console.log('challengeLogList.js 오류', err));
  };

  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission Log</ServicesH1>
      <Subbar>
        <Select>
          <Button>
            <ServicesP>All</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>Level 1</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>Level 2</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>Level 3</ServicesP>
          </Button>
        </Select>
        <Select>
          <Button>
            <ServicesP>미션후기작성</ServicesP>
          </Button>
        </Select>
      </Subbar>
      <ServicesWrapper>
        {allLists.map((log, idx) => {
          return <ChallengeLogItem log={log} key={idx} />;
        })}

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
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeLogList;
