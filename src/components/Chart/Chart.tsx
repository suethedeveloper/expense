import ChartBar from './ChartBar';
import './Chart.css';
import {ChartType} from "../../interface";

const Chart = (props: {dataPoints: ChartType[]}
  ) => {
  const dataPointValues = props.dataPoints.map( (dataPoint: ChartType) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint: ChartType) => (
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