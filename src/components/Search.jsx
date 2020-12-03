import React from 'react';

export default function Search({search, searchInput, handleSearch}) {
  return (
    <div className='search d-flex justify-content-center align-items-center mt-4 col-4 offset-4'>
      <input
        className='form-control'
        placeholder='Search character'
        type='text'
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}
