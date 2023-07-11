import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: "e1", title: "휴지", price: `18,000`, date: new Date(2021, 2, 21) },
  { id: "e2", title: "TV", price: `800,000`, date: new Date(2022, 0, 30) },
  {
    id: "e3",
    title: "자동차 보험",
    price: `294,000`,
    date: new Date(2023, 5, 30),
  },
  { id: "e4", title: "책상", price: `120,000`, date: new Date(2023, 4, 30) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // 콜백 함수
  // NewExpense.js 컴포넌트에서 전달된 expenseData를 expense라는 매개변수로 사용해 데이터 출력
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // 구 프로젝트 셋업
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // 최신 프로젝트 셋업
  return (
    <div>
      {/* NewExpense.js에 onAddExpense라는 이름의 prop으로 addExpenseHandler라는 콜백 함수 전달 */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
