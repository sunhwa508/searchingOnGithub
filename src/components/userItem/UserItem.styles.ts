import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  & h2 {
    cursor: pointer;
  }
  & div {
    padding: 10px;
  }
`;
export const Wrapper = styled.div`
  border: 1px solid #eaeaea;
  min-width: 500px;
  display: flex;
`;
