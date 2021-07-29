import React from 'react';

export const Pagination = ({ heroesPerPage, totalHeroes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex justify-content-center mt-3 mb-5">
      <ul className='pagination col-10 flex-wrap justify-content-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item' style={{cursor: 'pointer'}}>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
