import React from "react";

import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
