import card from '../../../styles/card.module.css';

export default function GlanceCard() {
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
          <div>Sponsored</div>
          <div>Amazon</div>
          <div>$800</div>
          <div>$600</div>
        </div>
      </div>
    </div>
  )
}