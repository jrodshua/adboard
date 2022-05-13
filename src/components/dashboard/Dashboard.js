import dash from '../../styles/dash.module.css';

export default function Dashboard() {
  return (
    <main className={dash.main}>
      <div className={dash.container}>
        <div className={dash.mainFlex}>
          <div className={dash.topRow}>
            <div className={dash.topColFlex}>
              <div className={dash.card}>Type Marketplace Avg Rev Avg Spend</div>
              <div className={dash.graph}>Line Graph goes here</div>
            </div>
            <div>
              <div>Top Campaigns component</div>
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