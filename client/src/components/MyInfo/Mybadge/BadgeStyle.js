import styled from "styled-components";

export const BadgeWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

export const BadgeContainer = styled.div`
width: 15%;
margin: .4em .4rem 1rem;
padding: 0 .5rem;
box-sizing: border-box;
text-align: center; 


> div {
    width: 100%;
    height: 120px;

  > img {
      width: 100%;
      height: 100%;
  }
}

> div.colorOn {
    padding:2rem;
    background-color: green;
}

> div.colorOff {
    padding:2rem;
    background-color: grey;
}

> span {
    display:block;
    padding-top: .6rem;
    font-size: .9rem;
    font-weight: bold;
    color: #333;
}

> span.colorOn {
    color: #333;
}

> span.colorOff {
    color: #999;
}
`
