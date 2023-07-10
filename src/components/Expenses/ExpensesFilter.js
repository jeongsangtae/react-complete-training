import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // Expenses 컴포넌트의 props로 전달된 onChangeFilter 콜백 함수를 호출해 select에서 선택된 값인 event.target.value를 가져오고 그 데이터를 Expenses.js에 인자로 전달
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* select를 통해서 선택한 값에서 filterChangeHandler 함수가 작동 */}
        {/* Expenses.js에서 받은 state 초기 값 설정 */}
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
