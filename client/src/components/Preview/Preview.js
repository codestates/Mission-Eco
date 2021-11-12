import React, { useState } from "react";
import { useSelector } from "react-redux";
import ml5 from "ml5";

import {
  Container,
  PreviewCT,
  LogContent,
  LogHashP,
  NameNtime,
  LogP,
  LogH2,
  LogCardContatainer,
  LogImgContainer,
  LogImg,
  ResultBox,
  ServicesS,
  List,
  Item,
  Img,
} from "./PreviewStyle";
import Classifier from "../Upload/Classifier/Classifier";

const Preview = ({
  logs,
  selectedFile,
  imageModelURL,
  isVideo,
  results,
  setResults,
}) => {
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [isLoading, setLoading] = useState(false);
  const { challenge, contents } = logs;
  const { nickname } = userInfo;

  const missionName = challenge && challenge.split(",");

  //비디오 결과가 바뀔때 마다 결과 리셋 video ? setResults([])

  const classifyImg = () => {
    setLoading(true);
    const classifier = ml5.imageClassifier(imageModelURL, modelLoaded);
    function modelLoaded() {
      console.log("Model Loaded!");
    }

    const image = document.querySelector("#image");

    classifier
      .predict(image, 5, (err, classifiedResults) => {
        return classifiedResults;
      })
      .then((classifiedResults) => {
        setResults(classifiedResults);
        setLoading(false);
      });
  };

  return (
    <PreviewCT>
      <Container>
        {!selectedFile ? (
          <LogCardContatainer>
            {isVideo ? (
              <Classifier
                imageModelURL={imageModelURL}
                results={results}
                setResults={setResults}
              />
            ) : (
              <>
                <LogImgContainer>
                  <LogImg />
                </LogImgContainer>
                <LogContent>
                  <LogHashP>
                    {missionName ? missionName[0] : "챌린지를 선택하세요."}
                  </LogHashP>
                  <NameNtime>
                    <LogP>닉네임:{nickname ? nickname : "nickname"}</LogP>
                    <LogP className="time">time</LogP>
                  </NameNtime>
                  <LogH2>{contents ? contents : "내용을 입력해주세요."}</LogH2>
                </LogContent>
              </>
            )}
          </LogCardContatainer>
        ) : (
          <LogCardContatainer>
            <LogImgContainer>
              <LogImg
                src={selectedFile}
                id="image"
                onLoad={classifyImg}
                crossOrigin="anonymous"
              />
            </LogImgContainer>
            <LogContent>
              <LogHashP>
                {missionName ? missionName[0] : "챌린지를 선택하세요."}
              </LogHashP>
              <NameNtime>
                <LogP>닉네임:{nickname}</LogP>
                <LogP className="time">time</LogP>
              </NameNtime>
              <LogH2>{contents}</LogH2>
            </LogContent>
          </LogCardContatainer>
        )}

        {isLoading ? (
          <Img alt="now loading" src="gif/loading.gif" />
        ) : (
          <List>
            {results.length !== 0 && (
              <ResultBox>
                <ServicesS>이미지 예측결과</ServicesS>
                <Item>
                  1.{results[0].label}
                  {Math.floor(results[0].confidence * 100)}%
                </Item>
                <Item>
                  2.{results[1].label}
                  {Math.floor(results[1].confidence * 100)}%
                </Item>
                <Item>
                  3.{results[2].label}
                  {Math.floor(results[2].confidence * 100)}%
                </Item>
              </ResultBox>
            )}
          </List>
        )}
      </Container>
    </PreviewCT>
  );
};

export default Preview;
