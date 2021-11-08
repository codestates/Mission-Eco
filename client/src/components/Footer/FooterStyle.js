import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  align-items: center;
  margin: 30px;
`;

export const Icon = styled.img`
  align-items: center;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px;
`;

export const ServicesCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 50px;
`;

export const Name = styled.p`
  align-items: center;
`;

export const Position = styled.p`
  align-items: center;
`;

export const GithubBadge = styled.img`
  display: flex;
  align-items: center;
`;
export const AdminLogin = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
