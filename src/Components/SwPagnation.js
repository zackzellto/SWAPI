import { Pagination } from "react-bootstrap";


let active = 0;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const SwPagination = () => {
    return(
  <div className="d-flex justify-content-center">
    <Pagination>{items}</Pagination>
  </div>
    )
}

export default SwPagination;


