import { useState } from 'react';
import dash from '../../styles/dash.module.css';

export default function Dropdown() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={dash.companyCamp}>
      <button className={dash.companyBtn} onClick={() => setMenuOpen(!menuOpen)}>
        <div>Daisy Pretzel's ▼</div>
      </button>
      {menuOpen && (
        <div className={dash.companies}>
          <button>Previous Weeks 1</button>
          <button>Previous Weeks 2</button>
          <button>Previous Weeks 3</button>
        </div>
      )}
    </div>
  )
}