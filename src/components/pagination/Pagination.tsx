import React, { useState, useEffect, Dispatch, SetStateAction, useCallback } from "react";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import * as Styled from "./Pagination.styles";

interface Props {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalItems: number;
  search: string;
}
const Pagination = ({ totalItems, currentPage, setCurrentPage, search }: Props) => {
  const [firstBottomNumber, setFirstBottomNumber] = useState(1);
  const [lastBottomNumber, setLastBottomNumber] = useState(5);
  const history = useHistory();

  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    setCurrentPage(Number(history.location.pathname.split("/")[2]));
  }, [history.location.pathname]);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, leftOrRight?: string) => {
    const eventTarget = e.target as HTMLElement;
    if (e && !leftOrRight) {
      setCurrentPage(() => Number(eventTarget.innerText));
      history.push(
        search.length === 0 ? `/user/${eventTarget.innerText}` : `/user/${eventTarget.innerText}/search/${search}`,
      );
    }
    if (leftOrRight === "toLeft") {
      setCurrentPage((prev: number) => prev - 1);
      history.push(search.length !== 0 ? `/user/${currentPage - 1}/search/${search}` : `/user/${currentPage - 1}`);
    }
    if (leftOrRight === "toRight") {
      setCurrentPage((prev: number) => prev + 1);
      history.push(search.length !== 0 ? `/user/${currentPage + 1}/search/${search}` : `/user/${currentPage + 1}`);
    }
  };
  const getLastPageNumber = (total: number) => {
    if (total <= 5) {
      return 1;
    }
    if (total <= 10) {
      return 2;
    }
    if (total <= 15) {
      return 3;
    }
    if (total <= 20) {
      return 4;
    }
    if (total > 20) {
      return 5;
    }
    return 1;
  };

  useEffect(() => {
    if (lastBottomNumber > totalItems / 5) setLastBottomNumber(Math.ceil(totalItems / 5));
    if (currentPage > 2 && currentPage <= Math.ceil(totalItems / 5) - 2) {
      setLastBottomNumber(currentPage + 2);
      setFirstBottomNumber(currentPage - 2);
    }
    if (currentPage === 2) {
      setLastBottomNumber(currentPage + 3);
      setFirstBottomNumber(currentPage - 1);
    }
    if (currentPage === 1) {
      setFirstBottomNumber(currentPage);
      setLastBottomNumber(getLastPageNumber(totalItems));
    }
  }, [currentPage, lastBottomNumber, firstBottomNumber, totalItems]);

  const getPagination = useCallback(() => {
    const result = [];
    for (let i = firstBottomNumber; i <= lastBottomNumber; i++) {
      i === currentPage
        ? result.push(
            <Styled.Li key={shortid.generate()} isFocused={true} onClick={e => handleClick(e)}>
              {i}
            </Styled.Li>,
          )
        : result.push(
            <Styled.Li key={shortid.generate()} onClick={e => handleClick(e)}>
              {i}
            </Styled.Li>,
          );
    }
    return result;
  }, [currentPage, lastBottomNumber, firstBottomNumber, totalItems]);

  return (
    <>
      {totalItems !== 1001 && (
        <Styled.Container>
          <ul>
            {currentPage > 1 && (
              <Styled.Li isFocused={true} onClick={e => handleClick(e, "toLeft")}>
                PREV
              </Styled.Li>
            )}
            {getPagination()}
            {currentPage < totalItems / 5 && (
              <Styled.Li isFocused={true} onClick={e => handleClick(e, "toRight")}>
                NEXT
              </Styled.Li>
            )}
          </ul>
        </Styled.Container>
      )}
    </>
  );
};
export { Pagination };
