import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "react-avatar";

import { IUserItemType } from "../../models";
import * as Styled from "./UserItem.styles";
interface Props {
  item: IUserItemType;
}

const UserItem = ({ item }: Props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/user/repos/${item.login}`);
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Avatar name={item.login} src={item.avatar_url} alt={item.gravatar_id} round={true} />
        <div>
          <h2 onClick={handleClick}>{item.login}</h2>
          <p>{item.type}</p>
          <a href={item.html_url} target="_blank" rel="noreferrer">
            <p>{item.html_url}</p>
          </a>
        </div>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export { UserItem };
