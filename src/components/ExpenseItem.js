import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>2023년 6월 29일</div>
      <div className="expense-item__description">
        <h2>자동차 보험</h2>
        <div className="expense-item__price">294000원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
