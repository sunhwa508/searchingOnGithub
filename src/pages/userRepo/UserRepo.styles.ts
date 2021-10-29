import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    color: #fff;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    margin-top: 10px;
  }
`;

export const Wrapper = styled.table`
  border-collapse: collapse;
  margin-top: 30px;
  width: 70%;
  & .table_header {
    background-color: #ccc;
  }
  & th {
    border: solid 2px #000;
    padding: 10px;
  }
  & td {
    border: solid 2px #000;
    padding: 10px;
  }
  & .odd_color {
    background-color: #eee;
  }
`;
