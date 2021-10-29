import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  z-index: 33;
  top: 20px;
  border-radius: 10px;
  border: 1px solid #57606a;
  width: 500px;
  & label {
    padding: 0;
    font-weight: 400;
    color: #ffffff;
    vertical-align: middle;
    background-color: #24292f;
    box-shadow: none;
  }
  & input {
    padding-left: 5px;
    min-height: 28px;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    color: #ffffff;
    background: none;
    border: 0;
  }
`;
