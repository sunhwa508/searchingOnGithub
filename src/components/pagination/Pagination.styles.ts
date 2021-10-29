import styled from "styled-components";

type StyledProps = {
  isFocused?: boolean;
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  overflow: hidden;
  background-color: #fff;
  & ul {
    list-style: none;
  }
`;

export const Li = styled.li`
  float: left;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props: StyledProps) => (props.isFocused ? "bold" : "300")};
  border: 1px solid #eaeaea;
  & img {
    height: 16px;
  }
`;
