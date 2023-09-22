import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {GrFormPrevious, GrFormNext} from "react-icons/gr"

// Example items, to simulate fetching from another resources.

function PaginatedItems({ itemsPerPage, totalPages, setCurrentPage }) {
  const items = Array.from({ length: totalPages }, (_, index) => index + 1);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    window.scrollTo(0, 500);
    setCurrentPage(event.selected+1)
  };

  return (
    <div className="flex justify-center px-4 py-16">
      <ReactPaginate
        breakLabel="...."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default PaginatedItems;
