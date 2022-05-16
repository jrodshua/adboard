import tab from '../../../styles/tab.module.css';

export default function Table({ data, page }) {
  const campaign = data[page - 1];

  const metrics = campaign.revenue_list.map((camp, i) => (
    <tr key={campaign.name + camp.date}>
      <td>{camp.date}</td>
      <td>{camp.value}</td>
      <td>{campaign.spend_list[i].value}</td>
    </tr>
  ))

  return (
    <div className={tab.container}>
      <div className={tab.spacing}>
        <table className={tab.table}>
          <caption>Campaign Activity</caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Spend</th>
            </tr>
          </thead>
          <tbody>
            {metrics}
          </tbody>
        </table>
      </div>
    </div>
  )
}