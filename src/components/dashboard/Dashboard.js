import { useState } from 'react';
import Dropdown from './Dropdown';
import GlanceCard from './cards/GlanceCard';
import GraphCard from './cards/GraphCard';
import TopCampCard from './cards/TopCampCard';
import Table from './table/Table';
import dash from '../../styles/dash.module.css';

export default function Dashboard({ data }) {
  const [page, setPage] = useState(1);

  return (
    <main className={dash.main}>
      <div className={dash.container}>
        <Dropdown data={data} page={page} setPage={setPage} />
        <div className={dash.mainFlex}>
          <div className={dash.topRow}>
            <div className={dash.topColFlex}>
              <div className={dash.card}>
                <GlanceCard data={data} page={page} />
              </div>
              <div className={dash.graph}>
                <GraphCard data={data} page={page} />
              </div>
            </div>
            <div className={dash.topColRight}>
              <TopCampCard />
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </main>
  )
}