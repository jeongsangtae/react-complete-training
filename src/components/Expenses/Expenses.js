import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  // ExpensesFilter.js에 "2023"이 초기 값으로 설정되는 값 지정
  const [filteredYear, setFilteredYear] = useState("2023");

  // 콜백 함수
  // ExpenseFilter.js 컴포넌트에서 전달된 filter의 값인 event.target.value를 매개변수 selectedYear로 저장하고 useState로 데이터 출력
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        {/* ExpenseFilter.js에 onChangeFilter라는 이름의 prop으로 filterChangeHandler라는 콜백 함수 전달 */}
        {/* selsected라는 이름의 prop을 "2023"이 초기 값으로 설정되어있는 state를 ExpenseFilter.js에 전달 */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
