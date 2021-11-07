import React, { useState } from "react";
import ml5 from "ml5";

import {
  Container,
  PreviewCT,
  Title,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
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
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { nickname, challenge, contents, fileName, fileURL } = logs;
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
          <ServicesCard>
            {isVideo ? (
              <Classifier imageModelURL={imageModelURL} />
            ) : (
              <>
                <ServicesIcon />
                <ServicesP>#{challenge}</ServicesP>
                <ServicesH2>{contents}</ServicesH2>
                <ServicesP>닉네임:{nickname}</ServicesP>
                <ServicesP>time:21.11.16</ServicesP>
              </>
            )}
          </ServicesCard>
        ) : (
          <ServicesCard>
            <ServicesIcon
              src={selectedFile}
              id="image"
              onLoad={classifyImg}
              crossOrigin="anonymous"
            />

            <ServicesP>#{challenge}</ServicesP>
            <ServicesH2>{contents}</ServicesH2>
            <ServicesP>닉네임:{nickname}</ServicesP>
            <ServicesP>time:21.11.16</ServicesP>
          </ServicesCard>
        )}

        {isLoading ? (
          <Img alt="now loading" src="gif/loading.gif" />
        ) : (
          <List>
            {results.length && (
              <>
                <Item>{results[0].label}</Item>
                <Item>{Math.floor(results[0].confidence * 100)}%</Item>
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
        {!isVideo ? null : (
          <>
            {results.length &&
            results[0].label === "천연 수세미" &&
            results[0].confidence > 0.8 ? (
              <Button onClick={fileUploadHandler}>업로드</Button>
            ) : (
              <span>해당 이미지는 입니다.</span>
            )}
          </>
        )}
      </Container>
    </PreviewCT>
  );
};

export default Preview;
