import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Upload = styled.input`
  border: 1px solid black;
  width: 16rem;
  height: 2rem;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Uploader = ({ setImg, fileSelectedHandler }) => {
  const changeImage = (e) => {
    e.preventDefault();

    const imgSrc = e.target.value;
    console.log(imgSrc);
    setImg(imgSrc);
  };

  const resetInput = (e) => {
    e.target.value = "";
  };

  return (
    <>
      <Container>
        <H1>Uploader component</H1>

        <Upload
          type="text"
          onChange={changeImage}
          placeholder="Insert Image Url"
          onClick={resetInput}
        />
        <input
          type="file"
          accept="image/*"
          onChange={fileSelectedHandler}
        ></input>
      </Container>
    </>
  );
};

export default Uploader;
