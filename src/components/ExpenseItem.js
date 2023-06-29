import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        {props.date.getFullYear()}년 {props.date.getMonth() + 1}월
        {props.date.getDate()}일
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
