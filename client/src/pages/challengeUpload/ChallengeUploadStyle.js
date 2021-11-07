import styled from "styled-components";
import blob1 from "../../imges/blob1.svg";

export const ChallengeUploadCT = styled.div`
  background-image: url(${blob1});
  min-height: 100%;
  //min-height: 1800px;
  background-position: center;
  background-size: cover;

  background-size: cover;

  // background-attachment: fixed;
  z-index: -1;
`;

export const ServicesContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  min-height: 100vh;
  // background-image: url(${blob1});

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
  background: transparent;
`;

export const UploaderWrapper = styled.div`
  display: grid;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 36em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #dbe6fd;
  @media screen and (max-width: 768px) {
    width: 500px;
    height: 60em;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 480px) {
    width: 340px;
    height: 60em;
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
export const BtnWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  height: 4em;
  margin: 0 13em 1em;
  background: #005792;
  white-space: nowrap;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  //transition: all 0.2s ease-in-out;

  &:hover {
    // transition: all 0.2s ease-in-out;
    background: #f0a500;
  }
  @media screen and (max-width: 768px) {
    padding: 0 5em;
    margin: 1em 2em;
  }

  @media screen and (max-width: 480px) {
    padding: 0 2em;
    margin: 0 1em 1em;
  }
`;

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
