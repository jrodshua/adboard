import card from '../../../styles/card.module.css';

export default function TopCampCard() {
  return (
    <div className={`${card.container} ${card.camp}`}>
      <div className={card.flexCamp}>
        <div className={card.topCamp}>
          <div>Top Campaigns</div>
        </div>
        <div className={card.botCamp}>
          <div><span>1</span>Dot's Pretzel</div>
          <div><span>2</span>Willey Wallabey</div>
          <div><span>3</span>Placeholder</div>
          <div><span>4</span>Placeholder</div>
          <div><span>5</span>Placeholder</div>
        </div>
      </div>
    </div>
  )
}