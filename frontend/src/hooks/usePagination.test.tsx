import usePagination from "./usePagination";
import { act, renderHook } from '@testing-library/react';

const NUMBER_OF_ITEMS = 50;
const ITEMS_PER_PAGE = 5;

describe('usePagination tests', () => {
  test('should return correct initial values', () => {
    const { result: { current } } = renderHook(() => usePagination({
      contentPerPage: ITEMS_PER_PAGE,
      count: NUMBER_OF_ITEMS,
    }));
    expect(current.totalPages).toEqual(NUMBER_OF_ITEMS/ITEMS_PER_PAGE);
    expect(current.page).toEqual(1);
    expect(current.firstContentIndex).toEqual(0);
    expect(current.lastContentIndex).toEqual(5);
  });
  test('should set page correctly and recalculate related data', () => {
    const hook = renderHook(() => usePagination({
      contentPerPage: ITEMS_PER_PAGE,
      count: NUMBER_OF_ITEMS,
    }));

    act(() => {
      hook.result.current.setPage(3);
    });
    hook.rerender(true);
    const { page, firstContentIndex, lastContentIndex } = hook.result.current;
    expect(page).toEqual(3);
    expect(firstContentIndex).toEqual(10);
    expect(lastContentIndex).toEqual(15);
  });
  test('should switch pages correctly using nextPage/prevPage and recalculate related data', () => {
    const hook = renderHook(() => usePagination({
      contentPerPage: ITEMS_PER_PAGE,
      count: NUMBER_OF_ITEMS,
    }));

    act(() => {
      hook.result.current.setPage(3);
      hook.result.current.nextPage();
    });
    hook.rerender(true);
    const secondRender = hook.result.current;
    expect(secondRender.page).toEqual(4);
    expect(secondRender.firstContentIndex).toEqual(15);
    expect(secondRender.lastContentIndex).toEqual(20);

    act(() => {
      hook.result.current.prevPage();
    });
    hook.rerender(true);
    const thirdRender = hook.result.current;
    expect(thirdRender.page).toEqual(3);
    expect(thirdRender.firstContentIndex).toEqual(10);
    expect(thirdRender.lastContentIndex).toEqual(15);
  });
});
