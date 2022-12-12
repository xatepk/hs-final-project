interface UsePaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  gaps: { before: number[]; paginationGroup: number[]; after: number[] };
}

function Pagination({ page, totalPages, gaps, setPage }: UsePaginationProps) {
  return (
    <ul className="pagination pagination__list">
      <li
        className={`pagination__item ${page === 1 && "pagination__item_active"}`}
        onClick={() => setPage(gaps.before[0])}>{gaps.before[0]}</li>
      {gaps.before.length > 1 ? <span className="pagination__dotes">...</span> : null}
      {gaps.paginationGroup.map((el: number) => (
        <li
          onClick={() => setPage(el)}
          key={el}
          className={`pagination__item ${page === el ? "pagination__item_active" : ""}`}
        >
          {el}
        </li>
      ))}
      {gaps.after.length > 1 ? <span className="pagination__dotes">...</span> : null}
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
