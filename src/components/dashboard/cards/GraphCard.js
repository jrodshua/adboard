import { useState } from 'react';
import LineGraph from './graphs/LineGraph';
import DateMenu from './DateMenu';
import card from '../../../styles/card.module.css';

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
            <hr/>
          </div>
          <DateMenu start={graph.campaign_start_date} />
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