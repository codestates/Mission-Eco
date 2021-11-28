import React, { useEffect } from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeLogList } from "../../Redux/actions";
import { Link as LinkR } from "react-router-dom";

export const InfoLogContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefbf3;
  @media screen and (max-width: 768px) {
    height: 1500px;
  }
  @media screen and (max-width: 480px) {
    height: 1800px;
  }
`;

export const InfoLogWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const InfoLogH1 = styled.h1`
  line-height: 2.6rem;
  color: #2b2b2b;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 1.6rem;
  }
`;
export const SubH2 = styled.p`
  color: #555;
  //font-size: 1rem;
  margin-bottom: 40px;
`;
export const LogCardContatainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
  border-radius: 6px;
  //width: 280px;
  max-height: 400px; //왜 주석을 풀면 이미지크기가 달라질까?
  padding-bottom: 14px;
  overflow: hidden;
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 420px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 460px;
  }
`;

export const LogImgContainer = styled.div`
  width: 290px;
  min-height: 280px;
  margin-bottom: 1em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  //background: ${(props) => props.background || "white"};
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 340px;
  }
  @media screen and (max-width: 480px) {
    //height: 300px;
    width: 320px;
  }
`;

export const LogImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogContent = styled.div`
  padding: 0 0.5em;
`;

export const LogH2 = styled.span`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  text-align: left;
  font-weight: 500;
`;

export const LogP = styled.p`
  font-size: 0.8rem;
  color: #010101;
  &.time {
    color: #9a9483;
  }
`;

export const LogHashP = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1.2rem;
  color: #121b74;
  font-weight: 600;
`;

export const NameNtime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.4rem;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;
export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#9dbfa5" : "#0106")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    border: 2px solid #9dbfa5;
  }
`;

const MainInfo3 = ({ topLine1, topLine2, headline, primary, dark, dark2 }) => {
  const logList = useSelector((state) => state.infoReducer.challengeLogList);
  const dispatch = useDispatch();
  const { challengeLogList } = logList;
  const challengeLogs =
    challengeLogList &&
    challengeLogList
      .sort(function (a, b) {
        return b.id - a.id;
      })
      .slice(0, 3);

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [dispatch]);

  useEffect(() => {}, [logList]);

  return (
    <InfoLogContainer id="infoLog">
      <Tween
        from={{
          opacity: 0,
          duration: 1,
          x: "0px",
          scrollTrigger: {
            trigger: ".title",
            start: "-600px center",
            end: "30px center",
            scrub: 1,
            ease: "power4.out",
            // markers: 1,
          },
        }}
      >
        <InfoLogH1 className="title">
          <span>{topLine1}</span>
          <br />
          <span>{topLine2}</span>
          <br />
        </InfoLogH1>
        <SubH2 className="title">{headline}</SubH2>
      </Tween>
      <Tween
        from={{
          opacity: 0,
          duration: 2,
          x: "-300px",
          scrollTrigger: {
            trigger: ".wrapper",
            start: "-600px center",
            end: "-300px center",
            scrub: 2.5,
            ease: "power4.out",
            // markers: true,
          },
        }}
      >
        <InfoLogWrapper className="wrapper">
          {challengeLogs &&
            challengeLogs.map((log, idx) => {
              return (
                <LogCardContatainer className="box" key={idx}>
                  <LogImgContainer>
                    <LogImg src={log.img} />
                  </LogImgContainer>
                  <LogContent>
                    <LogHashP> {log.challenge.name}</LogHashP>
                    <NameNtime>
                      <LogP>닉네임:{log.user.nickname}</LogP>
                      <LogP className="time">
                        {log.createdAt.substring(0, 10)}
                      </LogP>
                    </NameNtime>
                    <LogH2>{log.challengelog_contents}</LogH2>
                  </LogContent>
                </LogCardContatainer>
              );
            })}
        </InfoLogWrapper>
      </Tween>
      <Tween
        from={{
          opacity: 0,
          duration: 1,
          x: "0px",
          scrollTrigger: {
            trigger: ".btn",
            start: "-600px center",
            end: "-300px center",
            scrub: 1,
            // markers: true,
          },
        }}
      >
        <BtnWrap className="btn">
          <Button
            to="/log"
            //smooth={true}
            duration={500}
            // spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            Log 보러가기
          </Button>
        </BtnWrap>
      </Tween>
    </InfoLogContainer>
  );
};

export default MainInfo3;
