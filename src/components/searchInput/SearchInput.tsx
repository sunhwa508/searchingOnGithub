import React from "react";
import * as Styled from "./SearchInput.styles";

interface Props {
  handleForm: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const SearchInput = ({ handleForm, handleChange, search }: Props) => {
  return (
    <Styled.Form name="search" onSubmit={event => handleForm(event)}>
      <label htmlFor="search" />
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
        value={search}
        placeholder={"사용자 이름을 입력해주세요"}
      />
    </Styled.Form>
  );
};

export { SearchInput };
