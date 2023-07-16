import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

// props.dataPoints 배열은 ExpensesChart.js에서 Chart 컴포넌트로 전달된 dataPoints prop으로부터 받아온다. 이 배열에는 월별 데이터 객체들이 포함되어 있다.
const Chart = (props) => {
  // map() 함수가 props.dataPoints 배열의 각 원소를 순회하면서 해당 원소의 value 속성 값을 추출해 새로운 배열을 만든다. dataPointValues는 월별 지출 금액들로 이루어진 배열이 된다.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // ...dataPointValues는 배열의 요소를 개별적인 인수로 분리하는 "전개 연산자"인데 이를 통해 Math.max() 함수는 배열의 요소들을 개별적으로 처리하여 그 중 가장 큰 값을 반환한다.
  // totalMaximum에는 dataPointValues 배열에 포함된 월별 지출 금액들 중에서 가장 큰 값이 할당된다.
  const totalMaximum = Math.max(...dataPointValues);

  // 각 dataPoint마다 key, value, maxValue, label 해댱되는 prop들을 ChartBar에 전달
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
