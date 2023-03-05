import ReactECharts from "echarts-for-react";
import { FONT_FAMILY_CONDENSED } from "../../styles/Text";

const ChartSummary = ({ data }) => {
  const sortedData = data.sort((a, b) => a.value - b.value);

  const options = {
    grid: {
      top: 0,
      right: 10,
      bottom: 30,
      left: 250,
      show: false,
    },
    xAxis: {
      type: "value",
      show: false,

      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(0,0,0,1)",
        location: "inside",
        padding: [8, 0, 0, 0],
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: sortedData.map((item) => item.key),
      nameLocation: "right",
      name: "",
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(0,0,0,0.8)",
        location: "inside",
        padding: [0, 0, 0, 0],
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    series: [
      {
        labelLine: false,
        name: "Market size (in billions of USD)",
        type: "bar",
        data: sortedData.map((item) => item.value),
        label: {
          fontFamily: FONT_FAMILY_CONDENSED,
          fontSize: 17,
          show: true,
          position: "inside",
        },
        showBackground: true,
        itemStyle: {
          color: function (params) {
            return params.data < 0 ? "red" : "green";
          },
        },
        backgroundStyle: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
    ],
  };

  return (
    <>
      <ReactECharts
        notMerge={true}
        lazyUpdate={true}
        option={options}
        style={{
          height: "260px",
          width: "100%",
        }}
      />
    </>
  );
};

export default ChartSummary;
