import card from '../../../styles/card.module.css';

export default function GlanceCard({ data, page }) {
  const campaign = data[page - 1];
  const dataGlance = (
    <>
      <div>{campaign.ad_type}</div>
      <div>{campaign.marketplace}</div>
      <div>{campaign.average_ad_revenue}</div>
      <div>{campaign.average_ad_spend}</div>
    </>
  )

  return (
    <div className={card.container}>
      <div className={card.flex}>
        <div className={`${card.glance} ${card.glanceTitle}`}>
          <div>Type</div>
          <div>Marketplace</div>
          <div>Avg Revenue</div>
          <div>Avg Spend</div>
        </div>
        <div className={card.glance}>
          {dataGlance}
        </div>
      </div>
    </div>
  )
}