import { useState } from 'react';
import dash from '../../styles/dash.module.css';

export default function Dropdown({ data, page, setPage }) {
  const [menu, setMenu] = useState(false);

  const handleDropDown = (id) => {
    setMenu(!menu);
    if (id === page) return;
    setPage(id);
  }
  
  const currMenuItem = (
      <button className={dash.companyBtn} onClick={() => handleDropDown(page)}>
        <div>{data[page - 1].name} ▼</div>
      </button>
  )

  const restOfMenu = (
    <div className={dash.companies}>
      {data.map(d => {
        return d.campaign_id !== page ?
        <button key={d.campaign_id} className={dash.companyBtns} onClick={() => handleDropDown(d.campaign_id)}>
          {d.name}
        </button>
      :
        ""
      })}
    </div>
  )

  return (
    <div className={dash.companyCamp}>
      {currMenuItem}
      {menu ? restOfMenu : ""}
    </div>
  )
}