import { useState } from 'react';
import LineGraph from './LineGraph';
import DateMenu from '../DateMenu';
import card from '../../../../styles/card.module.css';

export default function Graph({ graphs }) {
  const [graphView, setGraphView] = useState(0)

  let graphData;
  if (graphView === 0) {
    graphData = [
      {
        x: graphs[0].map(x => x.date),
        y: graphs[0].map(y => y.value),
        type: 'scatter'
      },
    ];
  } else {
    graphData = [
      {
        x: graphs[1].map(x => x.date),
        y: graphs[1].map(y => y.value),
        type: 'scatter'
      }
    ]
  }

  return (
    <>
      <div className={card.graphGroup}>
        <div className={card.graphTabs}>
          <button onClick={() => setGraphView(0)}>Revenue</button>
          <button onClick={() => setGraphView(1)}>Spend</button>
          <button>Compare</button>
        </div>
        <DateMenu />
      </div>
      <div className={card.graphBody}>
        <LineGraph 
          data={graphData}
          title="Weekly Trend"
        />
      </div>
    </>
  )
}