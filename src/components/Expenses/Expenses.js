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
  // filter를 사용해 props.items 배열의 내용에서 현재 선택된 년도의 데이터만 따로 뽑아 새로운 배열을 만들어 준다.
  // 여기서 년도 데이터는 문자열로 되어있기 때문에 toString을 사용해 비교한다.
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
        {/* selectedExpensesYear 변수에서 따로 뽑아낸 배열 데이터를 map 메소드와 함께 사용해 ExpenseItem 컴포넌트에 전달해 렌더링 해준다. */}
        {/* key props를 사용해 성능 문제와 React 경고 메시지를 처리 */}
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
