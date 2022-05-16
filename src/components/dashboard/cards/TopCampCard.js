import card from '../../../styles/card.module.css';

export default function TopCampCard({ data }) {
  const topCampaigns = data.map((d, i) => (
    <div key={d.name}>
      <span>{i + 1}</span>
      {d.name}
    </div>
  ))

  return (
    <div className={`${card.container} ${card.camp}`}>
      <div className={card.flexCamp}>
        <div className={card.topCamp}>
          <div>Top Campaigns</div>
        </div>
        <div className={card.botCamp}>
          {topCampaigns}
        </div>
      </div>
    </div>
  )
}