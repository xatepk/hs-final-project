interface UsePaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
}

function Pagination({ page, totalPages, gaps, setPage }: UsePaginationProps) {
  // debugger;
  return (
    <ul className="pagination pagination__list">
      <li
        className={`pagination__item ${page === 1 && "pagination__item_disabled"}`}
        onClick={() => setPage(1)}>1</li>
      {gaps.before ? "..." : null}
      {gaps.paginationGroup.map((el: number) => (
        <li
          onClick={() => setPage(el)}
          key={el}
          className={`pagination__item ${page === el ? "pagination__item_active" : ""}`}
        >
          {el}
        </li>
      ))}
      {gaps.after ? "..." : null}
      <li
        onClick={() => setPage(totalPages)}
        className={`pagination__item ${page === totalPages && "pagination__item_disabled"}`}
      >
        {totalPages}
      </li>
    </ul>
  );
}

export default Pagination;
