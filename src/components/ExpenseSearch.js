import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ExpenseSearch({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
  };

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search expenses"
      />
      <Button variant="outline-primary" onClick={handleSearchClick} className='m-1'>Search by Expenses</Button>
    </div>
  );
}

export default ExpenseSearch;
