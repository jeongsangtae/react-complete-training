import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "자동차 보험";
  const expensePrice = 294000;

  return (
    <div className="expense-item">
      <div>
        {expenseDate.getFullYear()}년 {expenseDate.getMonth() + 1}월
        {expenseDate.getDate()}일
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
