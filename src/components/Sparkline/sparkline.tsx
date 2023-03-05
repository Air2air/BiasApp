import React from "react";

interface Props {
  data: {
    name: string;
    range: number;
    value: number;
  };
}

const Sparkline: React.FC<Props> = ({ data }) => {
  let percentage = Math.round((data.value / data.range) * 100);

  if (percentage < 0) {
    percentage = Math.abs(percentage);
  }

  return (
    <>


    <div className="flex flex-row items-center justify-center">
        {data.name}
      {data.value < 0 ? (
        <progress
          className="progress progress-error w-12 h-3"
          value={percentage}
          max="100"
        ></progress>
      ) : (
        <progress
          className="progress progress-success w-12 h-3"
          value={percentage}
          max="100"
        ></progress>
      )}
      {percentage}
      </div>
    </>
  );
};

export default Sparkline;
