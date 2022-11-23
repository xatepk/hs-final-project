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
    }
  }, [pageCount]);

  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup:number[] = [];
    let before:number[] = [];
    let after:number[] = [];

    if (pagesInBetween.length && pagesInBetween.length <= 10) {
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

  return {
    totalPages: pageCount,
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default usePagination;
