import React, { useEffect, useState } from "react";
import { ReactComponent as UpBtn } from "../../imges/Upbtn.svg";
import styled from "styled-components";

const ScrollBtnContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;
const ScrollBtn = styled.button`
  // position: fixed;
  position: fixed;
  opacity: 0;
  bottom: 20rem;
  right: 3rem;
  z-index: -10;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 0 none;
  background: #c1ffd7;
  color: blueviolet;
  letter-spacing: -0.06em;
  box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: opacity 0.3s ease-in;

  &.visible {
    z-index: 1;
    opacity: 1;
  }
`;

export const ScrollTopBtn = () => {
  const [isVisable, setIsVisible] = useState(false);

  const togggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", togggleVisibility);

    return () => {
      window.removeEventListener("scroll", togggleVisibility);
    };
  }, []);

  return (
    <>
      <ScrollBtnContainer>
        <ScrollBtn
          type="button"
          onClick={scrollToTop}
          className={isVisable ? "visible" : ""}
        >
          <UpBtn fill="#39A388" width="40" height="40" />
        </ScrollBtn>
      </ScrollBtnContainer>
    </>
  );
};
