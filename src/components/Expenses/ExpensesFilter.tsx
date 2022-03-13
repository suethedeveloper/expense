import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props: {
  selected: string;
  onChangeFilter: (data: string) => void;
}) => {
  const dropdownChangeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLTextAreaElement;
    props.onChangeFilter(target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;