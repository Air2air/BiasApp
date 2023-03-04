import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import { BREAKPOINT, COLOR_CHART_BAR, COLOR_GREEN } from "styles/Constants";
import { FONT_FAMILY_CONDENSED } from "styles/Text";

const ChartSummary = ({ data, xAxisType }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /*Todd Dunning
using ReactECharts, render a chart from the following json object so that:
1. the y axis shows the title value
2. the X axis shows either the cap_current values or cagr_current values.  This value is switched by the user with a button.
*/


  const sortedData = data.sort((a, b) => a[xAxisType] - b[xAxisType]);

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
      name:
        xAxisType === "cap_current"
          ? "Market Cap (in billions USD)"
          : "CAGR (%)",
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(255,255,255,1)",
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
      data: sortedData.map((item) => item.title),
      nameLocation: "right",
      name: "",
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(255,255,255,0.8)",
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
        data: sortedData.map((item) => item[xAxisType]),
        label: {
          fontFamily: FONT_FAMILY_CONDENSED,
          fontSize: 17,
          show: true,
          position: "inside",
        },
        showBackground: true,
        itemStyle: {
          color: xAxisType === "cagr_current" ? COLOR_GREEN : COLOR_CHART_BAR,
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
          padding: width > BREAKPOINT ? "10px 0" : "4px 0",
          height: "460px",
          width: "100%",
        }}
      />
    </>
  );
};

export default ChartSummary;
