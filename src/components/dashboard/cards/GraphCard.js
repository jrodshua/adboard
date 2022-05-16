import { useState } from 'react';
import LineGraph from './graphs/LineGraph';
import DateMenu from './DateMenu';
import card from '../../../styles/card.module.css';

const data1 = {"trend":[{"date":"2022-04-01","value":1023.25},{"date":"2022-04-02","value":1036.01},{"date":"2022-04-03","value":999.1},{"date":"2022-04-04","value":1010.22},{"date":"2022-04-05","value":1003.86},{"date":"2022-04-06","value":1044.64},{"date":"2022-04-07","value":1059.94},{"date":"2022-04-08","value":1113.02}]};

const data2 = {"trend":[{"date":"2022-04-01","value":101.22},{"date":"2022-04-02","value":111.83},{"date":"2022-04-03","value":103.23},{"date":"2022-04-04","value":105.34},{"date":"2022-04-05","value":104.89},{"date":"2022-04-06","value":89.46},{"date":"2022-04-07","value":93.47},{"date":"2022-04-08","value":99.36}]};

export default function GraphCard({ data, page }) {
  const [graphType, setGraphType] = useState("rev")

  const graph = data[page - 1];

  let revData = [
    {
      x: graph.revenue_list.map(x => x.date),
      y: graph.revenue_list.map(y => y.value),
      type: 'scatter'
    },
  ];

  let spendData = [
    {
      x: graph.spend_list.map(x => x.date),
      y: graph.spend_list.map(y => y.value),
      type: 'scatter'
    },
  ];

  const handleGraphType = (event) => {
    if (event.target.name === graphType) return;
    setGraphType(event.target.name);
  }

  return (
    <div className={card.container}>
      <div className={card.flex}>
        <div className={card.graphGroup}>
          <div className={card.graphTabs}>
            <button 
              onClick={(e) => handleGraphType(e)}
              name="rev"
            >Revenue</button>
            <button 
              onClick={(e) => handleGraphType(e)}
              name="spend"
            >Spend</button>
            <button>Compare</button>
          </div>
          <DateMenu />
        </div>
        <div className={card.graphBody}>
          <LineGraph 
            data={graphType === "rev" ? revData : spendData}
            title={graphType === "rev" ? "Ad Rev" : "Ad Spend"}
          />
        </div>
      </div>
    </div>
  )
}