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

  // 내가 짠 코드
  // const selectedExpensesYear = props.items.filter(
  //   (expense) => expense.date.getFullYear().toString() === filteredYear
  // );

  // 강의 코드
  // {}, return을 추가해 함수의 명확성과 가독성을 높임
  const selectedExpensesYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* ExpenseFilter.js에 onChangeFilter라는 이름의 prop으로 filterChangeHandler라는 콜백 함수 전달 */}
        {/* selsected라는 이름의 prop을 "2023"이 초기 값으로 설정되어있는 state를 ExpenseFilter.js에 전달 */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*  */}
        {/*  */}
        {selectedExpensesYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
