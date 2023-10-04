import cx from "classnames";
import ReactPaginate from "react-paginate";

import "./Pagination.css";
import dynamic from "next/dynamic";

/**
 * This is 0-indexed, so currentPage = 0 is the first page
 */
function Pagination({
  currentPage,
  pageCount,
  onPageChange,
  className = "",
}: {
  currentPage: number | string;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  if (typeof currentPage === "string") currentPage = parseInt(currentPage);

  const disabled = pageCount < 2;
  console.log({ disabled, pageCount, currentPage });

  return (
    <div className={cx("root", className)}>
      <ReactPaginate
        pageCount={5}
        forcePage={currentPage}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageLabelBuilder={(page) => `${page}`}
        onPageChange={({ selected }) => onPageChange(selected)}
        // styling
        containerClassName={"container"}
        pageLinkClassName={cx("page", disabled && "disabled")}
        activeLinkClassName={cx(!disabled && "active")}
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
      />
    </div>
  );
}

export default dynamic(() => Promise.resolve(Pagination), { ssr: false });
