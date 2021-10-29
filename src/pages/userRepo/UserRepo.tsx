import React, { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import * as Styled from "./UserRepo.styles";
import { globalEnv } from "../../config/env";
import { IUserRepoItemType } from "../../models";
import { Spinner } from "../../components/index";

const UserRepo = ({ location }: RouteComponentProps) => {
  const [pageNumber, setPageNumber] = useState(10);
  const [isRefetching, setIsRefetching] = useState(false);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery("userRepo", () =>
    axios
      .get(globalEnv.API_ENDPOINT + `/users/${location.pathname.split("/")[3]}/repos?per_page=${pageNumber}`, {
        headers: {
          accept: "application/vnd.github.v3+json",
          Authorization: `token ${globalEnv.GITHUB_TOKEN}`,
        },
      })
      .then(res => {
        setIsRefetching(true);
        return res.data as IUserRepoItemType[];
      }),
  );

  const prefetchRepo = async () => {
    setIsRefetching(false);
    await queryClient.prefetchQuery("userRepo");
  };

  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && pageNumber === data?.length) {
        setPageNumber(prevPageNumber => prevPageNumber + 5);
        prefetchRepo();
      }
    });

    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [target.current, data, history]);

  return (
    <Styled.Container>
      <h1>{location.pathname.split("/")[3]}님의 Repo 목록</h1>
      <Styled.Wrapper>
        <thead>
          <tr className="table_header">
            <th>repository</th>
            <th>language</th>
            <th>owner</th>
            <th>created</th>
            <th>updated</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: IUserRepoItemType, index) => (
            <tr key={item.id} className={index % 2 !== 0 ? "odd_color" : ""}>
              <td>
                <p ref={target} key={item.id}>
                  {item.name}
                </p>
              </td>
              <td>
                <p>{item.language}</p>
              </td>
              <td>
                <p>{item.owner.login}</p>
              </td>
              <td>
                <span>{dayjs(item.created_at).format("YYYY-MM-DD h:mm A")}</span>
              </td>
              <td>
                <span>{dayjs(item.updated_at).format("YYYY-MM-DD h:mm A")}</span>
              </td>
              <td className={"desc"}>
                <p>{item.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Styled.Wrapper>
      {(!isRefetching || isLoading) && <Spinner />}
    </Styled.Container>
  );
};

export { UserRepo };
