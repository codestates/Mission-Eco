import React, { useState, useRef } from "react";
import AddChallenge from "../AddChallenge/AddChallenge";
import ChallengeItem from "../ChallengeItem/ChallengeItem";
import { useSelector } from "react-redux";
import {
  ChallengeContainer,
  Container,
  TitleWrapper,
  Title1,
  Title2,
  AddWrapper,
  ListWrapper,
  ListTitle,
  Btn,
  Table,
  TR,
  TH,
} from "./ChallengeEditStyle";
import Pagination from "../../../Pagination/Pagination";

const ChallengeEdit = () => {
  const challengeList = useSelector(
    (state) => state.infoReducer.adminChallengeList
  ).sort(function (a, b) {
    return b.id - a.id;
  });
  const [crtList, setCrtList] = useState(challengeList.slice(0, 5));

  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit(true);
  };
  const pageHandler = (num) => {
    setCrtList(challengeList.slice(num * 5 - 5, num * 5));
  };

  return (
    <Container>
      <TitleWrapper>
        <Title1 to="/admin/log">Log 관리</Title1>
        <Title2 to="/admin/challenge">Challenge 관리</Title2>
      </TitleWrapper>

      {isEdit ? (
        <ChallengeContainer>
          <AddChallenge />
        </ChallengeContainer>
      ) : (
        <ChallengeContainer>
          <ListWrapper>
            <AddWrapper>
              <ListTitle>challenge List</ListTitle>
              <Btn onClick={editHandler}> 챌린지 추가하기</Btn>
            </AddWrapper>

            <Table>
              <thead>
                <TR>
                  <TH>id</TH>
                  <TH>name</TH>
                  <TH>contents</TH>
                  <TH>Level</TH>
                  <TH>img</TH>
                </TR>
              </thead>
              <tbody>
                {crtList.map((challenge, idx) => {
                  return <ChallengeItem key={idx} challenge={challenge} />;
                })}
              </tbody>
            </Table>
            <Pagination
              pageHandler={pageHandler}
              totalList={challengeList.length}
            />
          </ListWrapper>
        </ChallengeContainer>
      )}
    </Container>
  );
};
export default ChallengeEdit;
