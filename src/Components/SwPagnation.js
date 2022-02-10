import { Pagination, Button } from "react-bootstrap";

const SwPagination = ({
  pageCount,
  setPageNumber,
  paginate,
  paginationClicks,
}) => {
  let active = 0;
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Button
          variant="primary"
          id="pagination-prev"
          onClick={(e) => paginationClicks(e.target.textContent)}
        >
          Prev
        </Button>

        <Pagination
          onClick={(e) => {
            setPageNumber(Number(e.target.textContent));
            paginate(e.target.textContent);
          }}
        >
          {items}
        </Pagination>
        <Button
          variant="primary"
          id="pagination-next"
          onClick={(e) => paginationClicks(e.target.textContent)}
        >
          Next
        </Button>
      </Pagination>
    </div>
  );
};

export default SwPagination;
