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
  }, []); // 페이지가 로딩됨과 동시에 handleRequestLog함수가 발동된다.

  const handleRequsetLog = () => {
    axios // handleRequestLog함수는 challenge-log엔드포인트로 get요청을 보낸 뒤
      .get(`${process.env.REACT_APP_API_URL}/challenge-log`, {
        withCredentials: true,
      })
      .then((res) => {
        // challenge-log엔드포인트로부터 온 응답에 담긴 data의 challengeLogList를 setAllLists의 인자로 전달 ---> allList의 값 갱신
        setAllLists(res.data.challengeLogList);
      })
      .catch((err) => console.log("challengeLogList.js 오류", err));
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
          // allList를 map(로그, 인덱스)돌려서 ChallengeLogItem의
          return <ChallengeLogItem log={log} key={idx} />;
        })}

        {/* // ! 👇🏻 효영님 refactoring중 👇🏻 =========================================================================== */}
        {/*

        {all
          ? allLists.map((list, idx) => {
              //console.log("lllllll", list);
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  liked={list.challengelikes}
                  isLogin={isLogin.isLogin}
                />
              );
            })
          : listItems.map((list, idx) => {
              //console.log("lllllll", list);
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  liked={list.challengelikes}
                  isLogin={isLogin.isLogin}
                  //click={click}

                  // likeList={likeList}
                  //render={() => setRender(!render)}
                />
              );
            })}
        
        */}
        {/* // ! ==================================================================================================== */}

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
