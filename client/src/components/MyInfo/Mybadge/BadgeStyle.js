import styled from "styled-components";

export const BadgeWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

export const BadgeContainer = styled.div`
width: 16%;
margin: 1rem;
border: 1px solid red;
background-color: blue;
box-sizing: border-box;
text-align: center; 

> div.colorOn {
    padding:2rem;
    background-color: grey;
}

> div.colorOff {
    padding:2rem;
    background-color: green;
}
`
