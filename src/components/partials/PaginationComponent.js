import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react';
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
    return (
      <ReactPaginate
      // key={currentPage}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        pageClassName={"page-item"}
        marginPagesDisplayed={2}
        breakLabel="..."
        onPageChange={onPageChange}
        nextLabel={<ChevronRightCircleIcon color={currentPage === pageCount ? 'gray' : 'blue'} size={20} className={currentPage === pageCount ? 'disabled' : ''}/>}
        nextClassName='next'
        previousLabel={<ChevronLeftCircleIcon color={currentPage <= 1 ? 'gray' : 'blue'} size={20} className={currentPage <= 1 ? 'disabled' : ''}/> }
        containerClassName={"pagination"}
        activeClassName={"active-page"}
      />
    );
  };
  
  export default Pagination;