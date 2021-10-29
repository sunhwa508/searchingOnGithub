import styled from "styled-components";

export const Container = styled.div`
  z-index: 32;
  display: flex;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #24292f;
  align-items: center;
  & svg {
    fill: #fff;
    margin-right: 10px;
  }
  & h1 {
    color: white;
    font-weight: bold;
  }
`;
