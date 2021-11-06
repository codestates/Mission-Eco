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
  Button,
  List,
  Item,
  Img,
} from "./PreviewStyle";
import Classifier from "../Upload/Classifier/Classifier";

const Preview = ({
  logs,
  selectedFile,
  imageModelURL,
  fileUploadHandler,
  isVideo,
}) => {
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { challenge, contents, fileName, fileURL } = logs;
  const { nickname } = userInfo;
  //const url = fileURL || DEFAULT_IMAGE;
  console.log(false === selectedFile);
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
        setLoading(false);
        setResults(classifiedResults);
      });
  };
  console.log(results[0]);
  return (
    <PreviewCT onSubmit={(e) => e.preventDefault()}>
      <Container>
        {!selectedFile ? (
          <LogCardContatainer>
            {isVideo ? (
              <Classifier imageModelURL={imageModelURL} />
            ) : (
              <>
                <LogImgContainer>
                  <LogImg />
                </LogImgContainer>
                <LogContent>
                  <LogHashP>
                    # {challenge ? challenge : "챌린지를 선택하세요."}
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
              <LogHashP># {challenge}</LogHashP>
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
              <>
                <Item>
                  {`예측결과 ${results[0].label}:
                    ${Math.floor(results[0].confidence * 100)}%,
                    ${results[1].label}:
                    ${Math.floor(results[1].confidence * 100)}%,
                    ${results[2].label}:
                    ${Math.floor(results[2].confidence * 100)}`}
                  %
                </Item>
              </>
            )}
            {/*results.length &&
              results.map((result, index) => {
                const { label, confidence } = result;
                return (
                  <Item key={index}>{`${
                    index + 1
                  }. Predictation : ${label} , ${Math.floor(
                    confidence * 100
                  )}%`}</Item>
                );
              })*/}
          </List>
        )}
      </Container>
    </PreviewCT>
  );
};

export default Preview;
