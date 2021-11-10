import styled from "styled-components";
import blob1 from "../../../imges/blob1.svg";

export const MypageEditContainer = styled.div`
  padding: 5em 10em;

  @media screen and (max-width: 768px) {
    padding: 5em;
  }

  @media screen and (max-width: 480px) {
    padding: 5em 30px;
  }

  background-image: url(${blob1});
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4em;
  justify-content: center;
  margin-bottom: 0.5em;
  /* font-size: 2.5em; */
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const MypageEditWrap = styled.div`
  border: solid #aaa;
  border-radius: 20px;
  padding: 50px;
  background-color: #ddede0;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    border: solid #aaa;
    border-radius: 20px;
    padding: 30px;
    background-color: #ddede0;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    border: solid #aaa;
    border-radius: 20px;
    padding: 20px;
    background-color: #ddede0;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const TitleH1 = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  font-size: 2.2em;

  @media screen and (max-width: 768px) {
    font-size: 2em;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.8em;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  border: solid silver;
  border-radius: 20px;
  margin-bottom: 50px;
  padding: 50px;
  background-color: #f9f9f9;

  /* border: solid silver;
  border-radius: 20px;
  padding: 20px; */

  @media screen and (max-width: 768px) {
    border: solid silver;
    border-radius: 20px;
    margin-bottom: 50px;
    padding: 30px;
    background-color: #f9f9f9;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const TitleH2 = styled.h2`
  margin: 0.5em 0 1.5em 0;
  color: #555;
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    margin: 0 0 2em 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.35em;
    margin: 0 0 2em 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  text-align: left;
  color: #aaa;
  margin: 1.6rem 0 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin: 2rem 0 5px 0;
  }
`;

export const FormInput = styled.input`
  /* margin: 1em; */
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #aaa;
  background-color: #f9f9f9;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 100%;
    padding: 0.4rem;
    border: none;
    border-bottom: 1px solid #aaa;
    background-color: #f9f9f9;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    width: 100%;
    padding: 0.4rem;
    border: none;
    border-bottom: 1px solid #aaa;
    background-color: #f9f9f9;
  }
`;
export const Span = styled.span`
  display: block;
  text-align: left;
  color: #aaa;
  font-size: 15px;
  margin: 15px 0 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  /* padding: 0 0 50px 0; */
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 30px;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const Btn = styled.button`
  margin: 1em;
  border: none;
  border-radius: 4px;
  background: #9dbfa5;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f9f9f9;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
    color: #555;
    cursor: pointer;
    border-radius: 4px;
    background-color: #cbddd0;
  }

  @media screen and (max-width: 768px) {
    margin: 0.5em;
    border: none;
    border-radius: 4px;
    background: #9dbfa5;
    white-space: nowrap;
    padding: 10px 20px;
    color: #f9f9f9;
    font-size: 13px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 150px;
    &:hover {
      transition: 0.2s;
      color: #555;
      cursor: pointer;
      border-radius: 4px;
      background-color: #cbddd0;
    }
  }
  @media screen and (max-width: 480px) {
    border: none;
    border-radius: 4px;
    background: #9dbfa5;
    white-space: nowrap;
    padding: 8px 20px;
    color: #f9f9f9;
    font-size: 13px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 120px;
    &:hover {
      transition: 0.2s;
      color: #555;
      cursor: pointer;
      border-radius: 4px;
      background-color: #cbddd0;
    }
  }
`;

export const DelUserBtnWrapper = styled.div`
  @media screen and (max-width: 400px) {
    height: 80%;
  }
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;

export const DelUserBtn = styled.button`
  /* margin: 1em; */
  /* border: solid #9dbfa5; */
  border: none;
  border-radius: 4px;
  background: #9dbfa5;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f9f9f9;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
    color: #f9f9f9;
    cursor: pointer;
    border-radius: 4px;
    background-color: gray;
  }
`;
