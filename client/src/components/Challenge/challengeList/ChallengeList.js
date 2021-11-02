import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeList } from "../../../Redux/actions";
import ChallengeListItem from "../ChallengeListItem/ChallengeListItem";

import {
  ServicesContiner,
  ServicesH1,
  ServicesWrapper,
  Subbar,
  Select,
  Button,
} from "./ChallengeListStyle";

const ChallengeList = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  console.log(userInfo);
  const [listItems, setListItems] = useState([]);
  const [render, setRender] = useState(false);
  const [all, setAll] = useState(true);
  const challengeList = useSelector((state) => state.infoReducer.challengeList);

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getChallengeList());
  }, [dispatch]);

  useEffect(() => {}, [challengeList]);
=======
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
>>>>>>> google-login

  const handleRequsetLevelList = (e) => {
    const level = e.target.value;
    console.log(level);
    if (Number(level) === 0) {
      setAll(true);
    } else {
      const itemLevel = challengeList.filter(
        (el) => el.level === Number(level)
      );
      setListItems(itemLevel);
      setAll(false);
    }
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
        {challengeList && all
          ? challengeList.map((list, idx) => {
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  userId={userInfo.id}
                  isLogin={isLogin}
                  render={() => setRender(!render)}
                />
              );
            })
<<<<<<< HEAD
          : listItems.map((list, idx) => {
=======
          : listItems && listItems.map((list, idx) => {
              //console.log("lllllll", list);
>>>>>>> google-login
              return (
                <ChallengeListItem
                  list={list}
                  key={idx}
                  userId={userInfo.id}
                  isLogin={isLogin}
                  render={() => setRender(!render)}
                />
              );
            })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default ChallengeList;
