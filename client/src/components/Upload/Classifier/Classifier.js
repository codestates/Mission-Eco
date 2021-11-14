import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ml5 from "ml5";

import { Img } from "../../Loading/LoadingIndicator";

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  padding: 20px;
  background: #ffa928;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #ffa928;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

let classifier;

//user -> video click
const Classifier = ({ imageModelURL, setResults }) => {
  const videoRef = useRef();
  const [start, setStart] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //step1 모델 가져오기
    //모델이 로드되면 라이브 스트림에서 이미지를 수집할 수 있도록 웹캠 장치를 초기화
    classifier = ml5.imageClassifier(imageModelURL, () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(async (stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, [imageModelURL]);

  const classifyImg = () => {
    classifier
      .classify(videoRef.current, (err, classifiedResults) => {
        return classifiedResults;
      })
      .then((classifiedResults) => {
        setStart(!start);
        setResults(classifiedResults);
      });
  };

  const toggle = () => {
    classifyImg();
  };

  return (
    <>
      {!videoRef.current ? (
        <Img
          alt="now loading"
          src="gif/ms.gif"
          width="100px"
          height="100px"
          loaded={loaded}
        />
      ) : null}

      <Container>
        <video
          ref={videoRef}
          style={{ transform: "scale(-1, 1)" }}
          width="100%"
          height="300px"
        />
        {loaded && (
          <BtnBox>
            <Button onClick={toggle}>
              <p>확인하기</p>
            </Button>
          </BtnBox>
        )}
      </Container>
    </>
  );
};

export default Classifier;
