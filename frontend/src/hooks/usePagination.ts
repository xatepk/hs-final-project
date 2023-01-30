import { useState, useEffect } from "react";
import { UsePagination } from "../models/models";

interface Gap {
  before: number[];
  paginationGroup: number[];
  after: number[];
}
const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const [gaps, setGaps] = useState<Gap>({
    before: [],
    paginationGroup: [],
    after: [],
  });
  // определим количество страниц
  const pageCount = Math.ceil(count / contentPerPage);
  // индекс последнего элемента страницы
  const lastContentIndex = page * contentPerPage;
  // индекс первого элемента страницы
  const firstContentIndex = lastContentIndex - contentPerPage;
  // страницы между первой и последней страницой
  const [pagesInBetween, setPagesInBetween] = useState<number[]>([]);

  useEffect(() => {
    if (pageCount > 2) {
      const temp = new Array(pageCount).fill(1).map((_, i) => i + 1);
      setPagesInBetween(temp);
    } else setPagesInBetween([]);
  }, [pageCount]);

  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup:number[] = [];
    let before:number[] = [];
    let after:number[] = [];

    if (pagesInBetween.length && pagesInBetween.length <= 10 && currentLocation !== -1) {
      before = pagesInBetween.slice(0, 1);
      paginationGroup = pagesInBetween.slice(1, -1);
      after = pagesInBetween.slice(-1);
    } else if (currentLocation !== -1 && pagesInBetween.length > 10) {

      if (currentLocation <= 5) {
        before = pagesInBetween.slice(0, 1);
        paginationGroup = pagesInBetween.slice(1, 7);
        after = pagesInBetween.slice(7);

      } else if (currentLocation >= (pagesInBetween.length - 5)) {
        before = pagesInBetween.slice(0, pagesInBetween.length - 7);
        paginationGroup = pagesInBetween.slice(pagesInBetween.length - 7, -1);
        after = pagesInBetween.slice(-1);

      } else {
        before = pagesInBetween.slice(0, currentLocation - 3);
        paginationGroup = pagesInBetween.slice(currentLocation - 3, currentLocation + 3);
        after = pagesInBetween.slice(currentLocation + 3);
      }

    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);

  const setPageSAFE = (num: number) => {
    setPage(num);
  };

  const changePage = (direction: boolean) => {
    setPage((state) => {
      // move forward
      if (direction) {
        // if page is the last page, do nothing
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // go back
      } else {
        // if page is the first page, do nothing
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default usePagination;
