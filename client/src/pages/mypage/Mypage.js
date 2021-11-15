import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MypageContainer,
  H1,
  H2,
  MypageWrapper,
  MypageBtn,
  BtnLink,
  LinkCheckPassword,
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

const Mypage = () => {
  const dispatch = useDispatch();
  const Mybadge = useSelector((state) => state.infoReducer.myBadge);
  const userId = useSelector((state) => state.infoReducer.userInfo.id);

  useEffect(() => {
    dispatch(getMyBadgeList(userId));
  }, [dispatch]);

  const nickName = useSelector((state) => state.infoReducer.userInfo.nickname);

  return (
    <>
      <MypageContainer>
        <MypageWrapper>
          <H1>My Page</H1>
          <MypageBtn>
            <BtnLink to="/checkpassword">
              <LinkCheckPassword>수정하기 ✍🏻</LinkCheckPassword>
            </BtnLink>
          </MypageBtn>
          <TitleContainer>
            <Title>닉네임 : {nickName}</Title>
            <Title>에코뱃지 : {Mybadge.length + 1}개</Title>
          </TitleContainer>

          <Container>
            <H2>나의 에코뱃지</H2>
            <ListBadgeContainer>
              <MybadgeList />
            </ListBadgeContainer>
          </Container>

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
