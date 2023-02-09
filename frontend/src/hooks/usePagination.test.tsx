import App from "../App";
import usePagination from "./usePagination";
import { render } from '@testing-library/react';

describe('usePagination tests', () => {
  test('1', () => {
    render(<App />);
    const { totalPages } = usePagination({
      contentPerPage: 3,
      count: 12,
    });
    expect(totalPages).toEqual(4);
  });
});
