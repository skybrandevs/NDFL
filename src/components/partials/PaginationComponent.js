import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react';
import previous from '../../images/previous.svg';
import next from '../../images/next.svg';
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
        nextLabel={<img src={next} color={currentPage === pageCount ? 'gray' : 'blue'} className={currentPage === pageCount ? 'disabled' : 'size'}/>} 
        previousLabel={<img src={previous} color={currentPage <= 1 ? 'gray' : 'blue'}  className={currentPage <= 1 ? 'disabled' : ''}/> }
        containerClassName={"pagination"}
        activeClassName={"active-page"}
      />
    );
  };
  
  export default Pagination;