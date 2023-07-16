import React from "react";

import Chart from "../Chart/Chart";

// Expenses.js에서 expenses prop을 받는다. (선택된 연도의 지출 내역을 담고 있음)
// chartDataPoints 배열을 초기화해 1~12월까지의 월별 데이터를 담는다.
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  // for 루프를 이용해 expenses prop의 각 지출 항목에서 월을 추출한다.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    // 추출한 월에 해당하는 인덱스의 chartDataPoints 배열 항목에 해당 월의 지출 금액을 누적한다.
    chartDataPoints[expenseMonth].value += expense.price;
  }

  // 모든 지출 항목을 처리해 Chart 컴포넌트에 chartDataPoints를 dataPoints라는 이름의 prop으로 전달한다.
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
