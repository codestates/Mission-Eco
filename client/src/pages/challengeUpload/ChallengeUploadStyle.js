import styled from "styled-components";
import blob1 from "../../imges/blob1.svg";

export const ServicesContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  min-height: 100%;
  background-position: center;
  background-size: cover;

  z-index: -1;

  background-image: url(${blob1});
  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;
export const Container = styled.div`
  /*
  max-width: 1024px;
  margin: 0 auto;
  padding: 10.5rem 0.5rem 5rem 0.5rem;
  */
  /*
  margin: 200px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 50em;
  display: grid;
  grid-template-columns: 1fr 1fr;*/
  display: flex;
  margin: 200px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const UploaderWrapper = styled.div`
  display: grid;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 50em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #d0e2ff;
  @media screen and (max-width: 768px) {
    width: 500px;
    height: 60em;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 480px) {
    width: 340px;
    height: 62em;
    grid-template-columns: 1fr;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const H1 = styled.h1``;
export const Input = styled.input`
  border: none;
  width: 16rem;
  height: 2rem;
`;
export const Img = styled.img``;
export const UploadBtn = styled.button`
  width: 50%;
  height: 2em;
  background-color: blueviolet;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
