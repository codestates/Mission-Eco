import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ml5 from "ml5";

import { Img } from "../../Loading/LoadingIndicator";

const Container = styled.div`
  //display: flex;

  position: relative;
`;

const Button = styled.button`
  padding: 20px;
  background: #ffa928;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  :hover {
    background-color: #e7e7e7;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

let classifier;

const Classifier = ({ imageModelURL, setResults }) => {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  //const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier(imageModelURL, () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(async (stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
          // setIsLoading(true);
        });
    });
  }, [imageModelURL]);

  const classifyImg = () => {
    // setIsLoading(true);
    //console.log(isLoading, classifier, start);
    if (classifier && start) {
      classifier
        .predict(videoRef.current, (err, classifiedResults) => {
          return classifiedResults;
        })
        .then((classifiedResults) => {
          setStart(!start);
          //  setIsLoading(false);
          setResults(classifiedResults);
        });
    }
  };

  const toggle = () => {
    setStart(!start);
    classifyImg();
    setResults([]);
  };
  console.log(videoRef);

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
            <Button onClick={() => toggle()}>
              <p>{start ? "확인하기" : "캡쳐하기"}</p>
            </Button>
          </BtnBox>
        )}
      </Container>
    </>
  );
};

export default Classifier;
