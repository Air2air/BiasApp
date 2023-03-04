import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import { BREAKPOINT, COLOR_CHART_BAR } from "styles/Constants";
import { FONT_FAMILY_CONDENSED } from "styles/Text";

const ChartItem = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const options = {
    grid: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 0,
      show: false,
    },
    xAxis: {
      // show: true,
      // type: "category",
      data: props.chartData.map((item) => item.key),
      name: "date",
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(255,255,255,1)",
        location: "inside",
        padding: [8, 0, 0, 0],
      },
      axisLine: {
        show: false, // Hide full Line
      },
      axisTick: {
        show: false, // Hide full Line
      },
    },
    yAxis: {
      nameRotate: 90,
      show: false,
      nameLocation: "middle",
      nameGap: 40,
      type: "value",
      name: "Market Cap (USD)",
      nameTextStyle: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 19,
        color: "rgba(255,255,255,0.8)",
      },
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 16,
        color: "rgba(255,255,255,0.8)",
      },
      axisLine: {
        show: false, // Hide full Line
      },
      axisTick: {
        show: false, // Hide full Line
      },
    },
    series: [
      {
        data: props.chartData.map((item) => item.value),
        type: "bar",
        smooth: true,
        label: {
          fontFamily: FONT_FAMILY_CONDENSED,
          fontSize: 17,
          show: true,
          position: "inside",

        },
        showBackground: true,
        itemStyle: { color: COLOR_CHART_BAR},
        backgroundStyle: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
    ],
    // tooltip: {
    //   show: false,
    //   trigger: "axis",
    // },
  };

  return (
    <ReactECharts
      option={options}
      style={{
        padding: width > BREAKPOINT ? "12px 0" : "4px 0",
        height: "150px",
        width: "100%",
      }}
    />
  );
};

export default ChartItem ;
