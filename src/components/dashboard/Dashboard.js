import { useState } from 'react';
import Loading from './Loading';
import GetCampaigns from '../../api/getCampaigns';
import Dropdown from './Dropdown';
import GlanceCard from './cards/GlanceCard';
import GraphCard from './cards/GraphCard';
import TopCampCard from './cards/TopCampCard';
import Table from './table/Table';
import dash from '../../styles/dash.module.css';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const { campaignData, error, loading } = GetCampaigns();

  if (error) {
    return <h2>error...</h2>
  }

  if (loading) {
    return <Loading />
  }
  console.log(campaignData)
  return (
    <main className={dash.main}>
      <div className={dash.container}>
        <Dropdown data={campaignData} page={page} setPage={setPage} />
        <div className={dash.mainFlex}>
          <div className={dash.topRow}>
            <div className={dash.topColFlex}>
              <div className={dash.card}>
                <GlanceCard data={campaignData} page={page} />
              </div>
              <div className={dash.graph}>
                <GraphCard data={campaignData} page={page} />
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