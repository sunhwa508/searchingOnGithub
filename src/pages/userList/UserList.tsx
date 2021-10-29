import React, { useEffect, useState } from "react";
import axios from "axios";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import { globalEnv } from "../../config/env";
import { UserItem, Pagination, Spinner, SearchInput } from "../../components/index";
import { IUserType, IUserItemType } from "../../models";
import * as Styled from "./UserList.styles";
import { GITHUB_TOKEN } from "../../shared/constants";

const UserList = ({ location }: RouteComponentProps) => {
  const [currentPage, setCurrentPage] = useState(Number(location.pathname.split("/")[2]));
  const [search, setSearch] = useState(location.pathname.split("/")[4] || "");
  const queryClient = useQueryClient();
  const history = useHistory();

  const { data, isLoading } = useQuery("userList", () =>
    axios
      .get(globalEnv.API_ENDPOINT + `/search/users?&q=type:user+${search}`, {
        params: { per_page: 5, page: currentPage },
        headers: {
          accept: "application/vnd.github.v3+json",
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      .then(res => {
        return res.data as IUserType;
      }),
  );

  useEffect(() => {
    prefetchUsers();
  }, [currentPage]);

  useEffect(() => {
    prefetchUsers(Number(history.location.pathname.split("/")[2]));
  }, [history.location.pathname]);

  const prefetchUsers = async (page?: number) => {
    await queryClient.prefetchQuery("userList", () =>
      axios
        .get(globalEnv.API_ENDPOINT + `/search/users?&q=type:user+${search}`, {
          params: { per_page: 5, page: page || currentPage },
          headers: {
            accept: "application/vnd.github.v3+json",
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        })
        .then(res => {
          return res.data as IUserType;
        }),
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(search.length === 0 ? `/user/1` : `/user/1/search/${search}`);
    setCurrentPage(1);
    prefetchUsers(1);
  };

  return (
    <Styled.Container>
      {data?.total_count === 0 ? (
        <h1>We couldn’t find any wiki pages matching {search}</h1>
      ) : (
        <>
          <SearchInput handleForm={handleForm} handleChange={handleChange} search={search} />
          {isLoading && <Spinner />}
          {data?.items.map((item: IUserItemType) => (
            <UserItem key={item.id} item={item} />
          ))}
          <Pagination
            search={search}
            totalItems={
              data?.total_count && data?.total_count < 1000 ? data?.total_count : data?.total_count === 0 ? 1001 : 1000
            }
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Styled.Container>
  );
};

export { UserList };
