import React, { useEffect } from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeLogList } from "../../Redux/actions";

export const ServicesContiner = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d6d3ce;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
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

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const SubH2 = styled.h2`
  color: white;
  font-size: 1rem;
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
  //  border: 1px solid #11324d;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  background: ${(props) => props.background || "white"};
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

const MainInfo3 = () => {
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
    <ServicesContiner id="services">
      <Tween
        from={{
          opacity: 0,
          duration: 1,
          x: "0px",
          scrollTrigger: {
            trigger: ".title",
            start: "-10px center",
            end: "30px center",
            scrub: 1,
            ease: "power4.out",
          },
        }}
      >
        <ServicesH1 className="title">Our Missions</ServicesH1>
      </Tween>
      <Tween
        from={{
          opacity: 0,
          duration: 1,
          x: "0px",
          scrollTrigger: {
            trigger: ".sub",
            start: "-100px center",
            end: "30px center",
            scrub: 1,
            ease: "power4.out",
          },
        }}
      >
        <SubH2 className="sub">
          환경을 위하는 우리, 우리의 이야기를 공유해요
        </SubH2>
      </Tween>

      <ServicesWrapper className="wrapper">
        {challengeLogs &&
          challengeLogs.map((log, idx) => {
            return (
              <Tween
                from={{
                  opacity: 0,
                  duration: 1,
                  x: "-200px",
                  scrollTrigger: {
                    trigger: ".box",
                    start: "10px center",
                    end: "150px center",
                    scrub: 1,
                    ease: "power4.out",
                  },
                }}
              >
                <LogCardContatainer className="box">
                  <LogImgContainer background={log.img}>
                    <LogImg />
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
              </Tween>
            );
          })}
      </ServicesWrapper>
    </ServicesContiner>
  );
};

export default MainInfo3;
