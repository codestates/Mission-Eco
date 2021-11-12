import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  H1,
  H2,
  MypageWrapper,
  MypageBtn,
  BtnLink,
  LinkCheckPassword,
  MypageContainer,
  TitleContainer,
  Container,
  Title,
  ListContainer,
  ListBadgeContainer,
} from "./MypageStyle";
import LikeList from "../../components/MyInfo/MypageLIke/LikeList/LikeList";
import MyLogList from "../../components/MyInfo/MypageLIke/MyLogList/MyLogList";
import MybadgeList from "../../components/MyInfo/Mybadge/MybadgeList";
import { getMyBadgeList } from "../../Redux/actions";
// import blob1 from "../../imges/blob1.svg";

const Mypage = () => {
  const dispatch = useDispatch();
  const Mybadge = useSelector((state) => state.infoReducer.myBadge);
  const userId = useSelector((state) => state.infoReducer.userInfo.id);

  useEffect(() => {
    dispatch(getMyBadgeList(userId));
  }, [dispatch]);

  const nickName = useSelector((state) => state.infoReducer.userInfo.nickname);
  // 뱃지 갯수 관리 상태

  return (
    <>
      <MypageContainer>
        <MypageWrapper>
          <H1>My Page</H1>
          {/* mypage-top-container ( 페이지 타이틀, 마이페이지 수정버튼 ) */}
          <MypageBtn>
            <BtnLink to="/checkpassword">
              <LinkCheckPassword>수정하기 ✍🏻</LinkCheckPassword>
            </BtnLink>
          </MypageBtn>

          {/* mypage-1st-container (유저 닉네임, 이 유저가 획득한 뱃지 갯수) */}
          <TitleContainer>
            <Title>닉네임 : {nickName}</Title>
            <Title>에코뱃지 : {Mybadge.length + 1}개</Title>
          </TitleContainer>

          {/* mypage-2nd-container ( 이 유저가 획득한 뱃지 이미지들 ) */}
          <Container>
            <H2>나의 에코뱃지</H2>
            <ListBadgeContainer>
              <MybadgeList />
            </ListBadgeContainer>
          </Container>

          {/* // * ================================================================================ */}
          {/* res에서 challengeLikeList만 솎아서 */}
          <Container>
            <H2>내가 좋아한 챌린지</H2>
            <ListContainer>
              <LikeList />
            </ListContainer>
          </Container>

          <Container>
            <H2>나의 챌린지 기록</H2>
            <ListContainer>
              <MyLogList />
            </ListContainer>
          </Container>
        </MypageWrapper>
      </MypageContainer>
    </>
  );
};

export default Mypage;
