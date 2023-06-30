import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
