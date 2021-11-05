import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ml5 from "ml5";

import { Img } from "../../Loading/LoadingIndicator";

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  padding: 10px;
  background: #ffa928;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #e7e7e7;
  }
`;

const List = styled.ul`
  margin-top: 50px;
`;

const Item = styled.li`
  list-style-type: none;
`;

const H3 = styled.h3`
  text-align: center;
`;

let classifier;

const Classifier = ({ imageModelURL }) => {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier(imageModelURL, () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(async (stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
          setIsLoading(true);
        });
    });
  }, []);

  const classifyImg = () => {
    setIsLoading(true);
    console.log(isLoading, classifier, start);
    if (classifier && start) {
      classifier
        .predict(videoRef.current, (err, classifiedResults) => {
          return classifiedResults;
        })
        .then((classifiedResults) => {
          setStart(!start);
          setIsLoading(false);
          setResults(classifiedResults);
        });
    }
  };

  const toggle = () => {
    setStart(!start);
    console.log("a");
    classifyImg();
    setResults([]);
  };

  return (
    <>
      <Container>
        <Img
          alt="now loading"
          src="gif/ms.gif"
          width="200px"
          height="200px"
          loaded={loaded}
        />
        <video
          ref={videoRef}
          style={{ transform: "scale(-1, 1)" }}
          width="300"
          height="350"
        />
        {loaded && (
          <Button onClick={() => toggle()}>
            {start ? "확인하기" : "캡쳐하기"}
          </Button>
        )}
        <List>
          {results.length > 0 &&
            results.map((result, index) => {
              const { label, confidence } = result;
              return (
                <Item key={index}>{`${
                  index + 1
                }. Predictation : ${label} , ${Math.floor(
                  confidence * 100
                )}%`}</Item>
              );
            })}
        </List>
      </Container>
    </>
  );
};

export default Classifier;
