import { ChartSkeleton } from "components/Chart/chartComponents";
import { FetchData } from "fetch/fetch";
import { TrendsProps } from "./interface";
import TrendsItem from "./trendsItem";

const TrendsList = ({ jsonFile }) => {
  const { data, loading, error } = FetchData({
    file: jsonFile,
  });
  if (loading) {
    return <ChartSkeleton />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data && data.length > 0 ? (
        data.map((props: TrendsProps, index) => {
          return <TrendsItem {...props} key={index} />;
        })
      ) : (
        <div style={{ color: "white" }}>Data Fetch error in TrendsList component</div>
      )}
    </>
  );
};

export default TrendsList;
