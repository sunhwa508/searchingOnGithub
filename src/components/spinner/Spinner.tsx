import React from "react";
import * as Styled from "./Spinner.styles";

const Spinner = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Before></Styled.Before>
        <Styled.After></Styled.After>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export { Spinner };
