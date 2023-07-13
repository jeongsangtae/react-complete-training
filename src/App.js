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
    // setExpenses 함수를 통해 expenses 값을 업데이트하고, 업데이트된 값을 expenses 변수에 할당해 컴포넌트의 상태가 업데이트되는 것
    // 새로 form을 통해 추가된 expense, 그리고 기존에 존재하는 데이터 ...prevExpenses를 합쳐서 새로운 배열을 만들어 expenses 변수에 할당해 업데이트
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
      {/* Expenses.js에 items라는 이름의 prop으로 expenses 변수를 전달하는데 이 내용은 useState에서 최신 상태로 업데이트된 expenses 내용을 전달 */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
