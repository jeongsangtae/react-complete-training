import React from "react";

import "./ChartBar.css";

// Chart 컴포넌트로부터 전달받은 value, maxValue, label prop을 이용해 특정 월의 데이터를 막대 그래프로 구성
const ChartBar = (props) => {
  let barFillHeight = "0%";

  // 최대값이 0보다 클 경우에만 막대 그래프의 높이를 계산하고 설정한다.
  // 지출 금액을 최대값으로 나누어 비율을 계산하고, 100을 곱해 퍼센트로 변환해 지출 금액이 최대값에 대해 어느정도 비율을 차지하는지를 구함
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  // 계산된 barFillHeight를 이용해 막대 그래프를 시각화하는 코드
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} // style 속성을 추가해 barFillHeight 값을 적용시켜 막대 그래프의 높이가 지출 금액에 따라 동적으로 변한다.
        ></div>
      </div>
      {/* 월별 라벨을 표시 */}
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
