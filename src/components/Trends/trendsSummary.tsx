import { FetchData } from "../../fetch/fetch";
import ChartSummary from "./chartSummary";

const TrendsSummary = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ChartSummary data={data} />
    </>
  );
};

export default TrendsSummary;
