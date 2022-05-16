import { useState } from 'react';
// import DateMenu from './DateMenu';
import RevGraph from './graphs/RevGraph';
// import SpendGraph from './graphs/SpendGraph';
import Graph from './graphs/Graph';
import card from '../../../styles/card.module.css';

export default function GraphCard({ data, page }) {
  const [graphs, setGraphs] = useState([])
  const [graph, setGraph] = useState(0);

  const rev = RevGraph(page);
  console.log(rev)


  return (
    <div className={card.container}>
      <div className={card.flex}>
        {/* <Graph /> */}
        {/* <div className={card.graphGroup}>
          <div className={card.graphTabs}>
            <button onClick={() => setGraph(0)}>Revenue</button>
            <button onClick={() => setGraph(1)}>Spend</button>
            <button>Compare</button>
          </div>
          <DateMenu />
        </div>
        <div className={card.graphBody}>
          {graph ? <RevGraph page={page} /> : <SpendGraph page={page} />}
        </div> */}
      </div>
    </div>
  )
}