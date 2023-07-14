import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // 콜백 함수
  // ExpenseForm.js 컴포넌트에서 전달된 expenseData를 enteredExpenseData라는 매개변수로 사용
  // enteredExpenseData라는 매개변수를 받는데 이 매개변수는 ExpenseForm.js 컴포넌트에서 사용자가 입력한 데이터 (ExpenseForm.js의 expenseData 객체)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // expenseData 라는 새로운 객체를 만들고, 그 안에 enteredExpenseData를 복사하고 추가 속성인 'id'를 할당
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // NewExpense 컴포넌트의 props로 전달된 onAddExpense 콜백 함수를 호출하고, 입력된 내용에 id를 추가한 expenseData를 App.js에 인자로 전달
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        //ExpenseForm.js에 onSaveExpenseData라는 이름의 prop으로 saveExpenseDataHandler라는 콜백 함수 전달
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
