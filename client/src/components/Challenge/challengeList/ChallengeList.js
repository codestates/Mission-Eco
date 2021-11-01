import React, { useEffect, useState } from "react";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";

import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  Subbar,
  Select,
  Button,
} from "./ChallengeListStyle";
import axios from "axios";

const ChallengeList = () => {
  const [allLists, setAllLists] = useState([]); // ? allLists의 기본값은 빈배열이며, setAllLists가 이를 갱신할 예정.
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    // ? 이 페이지가 렌더링 될 때 handleRequesetList함수가 발동된다.
    handleRequsetList();
  }, []);

  const handleRequsetList = () => {
    // ? handleRequesetList함수는=======================================================
    axios
      .get(`${process.env.REACT_APP_API_URL}/challenge`, {
        // ? 이 엔드포인트로 get요청을 보낸다.
        withCredentials: true,
      })
      .then((res) => {
        console.log("res--", res.data.challengeList); // ? 응답으로 서버에서 받아온 data 중 challengeList
        setAllLists(res.data.challengeList); // ? 그것을 setAllLists에 전달 --> listItems는 빈배열이 아닌 challengeList로 채워짐.
        setListItems(res.data.challengeList);
      })
      .catch((err) => console.log("challengeList.js 오류", err));
  }; // ? 여기까지 handleRequesetList 함수 =============================================================================

  const handleRequsetLevelList = (e) => {
    // ? handleRequesetLevelList 함수 =======================================================
    const level = e.target.value;
    //해당레벨 버튼을 누르면 list state에 저장된 list값들중 해당레벨을 찾아서 setList로 바꾼다.
    let listItem = allLists.map((list) => list); // ? allList를 map돌려서 list 뽑아낸다.
    let itemLevel = listItem.filter((el) => el.level === Number(level));
    setListItems(itemLevel);
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
        {listItems.map((list, idx) => {
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
