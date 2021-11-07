import React, { useEffect, useState } from "react";
import ChallengeEdit from "../ChallengeEdit/ChallengeEdit";
import LogEdit from "../LogEdit/LogEdit";
import { useDispatch, useSelector } from "react-redux";
import {
  getChallengeList,
  getChallengeLogList,
} from "../../../../Redux/actions";
import LoadingIndicator from "../../../Loading/LoadingIndicator";

const AdminWrapper = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const List = useSelector((state) => state.infoReducer.challengeLogList);
  const { challengeLogList, challengeList } = List;

  useEffect(() => {
    setIsLoading(true);
    dispatch(getChallengeList())
      .then(() => dispatch(getChallengeLogList()))
      .then(() => setIsLoading(false));
  }, [dispatch]);

  useEffect(() => {}, [challengeList]);

  return (
    <div>
      {isLoading ? (
        <div>
          <LoadingIndicator />
        </div>
      ) : (
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <h1>Log 관리</h1>
          <LogEdit logList={challengeLogList} />
          <h1>Challenge 관리</h1>
          <ChallengeEdit challengeList={challengeList} />
        </div>
      )}
    </div>
  );
};

export default AdminWrapper;
