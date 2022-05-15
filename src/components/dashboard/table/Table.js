import tab from '../../../styles/tab.module.css';

export default function Table() {
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
            <tr>
              <td>4/1/22</td>
              <td>$103.99</td>
              <td>$53.43</td>
            </tr>
            <tr>
              <td>4/3/22</td>
              <td>$83.29</td>
              <td>$43.44</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}