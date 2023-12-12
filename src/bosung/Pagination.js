import React, { useState } from 'react';

const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [color, setColor] = useState()

  return (
    <nav className='phan-trang-right'>
      <ul className='pagination'>
        {/* <button className='btn-item' onClick={back()}>back</button> */}
        {pageNumbers.map(number => (
          <li key={number} className='page-item' style={{ backgroundColor: color }}>
            <div onClick={() => props.paginate(number)} className='page-link'>
              {number}
            </div>
          </li>
        ))}
        {/* <button className='btn-item' onClick={next()}>next</button> */}
      </ul>
    </nav>
  );
};

export default Pagination;