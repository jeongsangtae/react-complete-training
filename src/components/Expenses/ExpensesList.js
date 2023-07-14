import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // if문의 조건을 만족했을 때 if문 내의 return에 있는 내용 출력
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">데이터 없음</h2>;
  }

  // if문의 조건을 만족하지 않았을 때 여기있는 return의 내용을 출력
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
