import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const [allLists, setAllLists] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [render, setRender] = useState(false);
  const [all, setAll] = useState(false);

  useEffect(() => {
    const list = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/challenge`,
        {
          withCredentials: true,
        }
      );

      //console.log("res", res.data.data);
      if (res.status === 200) {
        setAllLists(res.data.data);
        setListItems(res.data.data);
      } 
    };
    list();
  }, [render]);

  const handleRequsetLevelList = (e) => {
    const level = e.target.value;

    if (Number(level) === 0) {
      setAll(true);
    } else {
      setAll(false);
      let listItems = allLists.map((list) => list);
      let itemLevel = listItems.filter((el) => el.level === Number(level));
      setListItems(itemLevel);
    }
    //해당레벨 버튼을 누르면 list state에 저장된 list값들중 해당레벨을 찾아서 setList로 바꾼다.
    //let listItem = allLists.map((list) => list);
  };

  return (
    <ServicesContiner id="services">
      <ServicesH1>Mission List</ServicesH1>
      <Subbar>
        <Select>
          <Button value="0" onClick={(e) => handleRequsetLevelList(e)}>
            All
          </Button>
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
        {all
          ? allLists.map((list, idx) => {
              //console.log("lllllll", list);
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  liked={list.challengelikes}
                  isLogin={isLogin}
                  render={() => setRender(!render)}
                />
              );
            })
          : listItems && listItems.map((list, idx) => {
              //console.log("lllllll", list);
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  liked={list.challengelikes}
                  isLogin={isLogin}
                  //click={click}
                  // likeList={likeList}
                  render={() => setRender(!render)}
                />
              );
            })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeList;
