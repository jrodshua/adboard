import Dropdown from './Dropdown';
import GlanceCard from './cards/GlanceCard';
import GraphCard from './cards/GraphCard';
import TopCampCard from './cards/TopCampCard';
import dash from '../../styles/dash.module.css';

export default function Dashboard() {
  return (
    <main className={dash.main}>
      <div className={dash.container}>
        <Dropdown />
        <div className={dash.mainFlex}>
          <div className={dash.topRow}>
            <div className={dash.topColFlex}>
              <div className={dash.card}>
                <GlanceCard />
              </div>
              <div className={dash.graph}>
                <GraphCard />
              </div>
            </div>
            <div className={dash.topColRight}>
              <TopCampCard />
            </div>
          </div>
          <div>
            <div>campaign data table</div>
          </div>
        </div>
      </div>
    </main>
  )
}