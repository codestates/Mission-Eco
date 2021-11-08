import React, { useState } from "react";
import LoadingIndicator from "../../Loading/LoadingIndicator";
import styled from "styled-components";
import ml5 from "ml5";

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 10rem;
  width: 20rem;
`;

const List = styled.ul`
  margin-top: 20px;
`;

const Item = styled.li`
  list-style-type: none;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Classifier1 = ({ img, imageModelURL, selectedFile }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

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

  console.log("result", results);

  return (
    <>
      <Container>
        <H1>Classifier component</H1>
        <Image
          src={selectedFile}
          id="image"
          onLoad={classifyImg}
          crossOrigin="anonymous"
        />

        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <List>
            {results.map((result, index) => {
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
        )}
      </Container>
    </>
  );
};

export default Classifier1;
