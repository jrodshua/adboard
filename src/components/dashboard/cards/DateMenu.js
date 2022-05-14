import { useState } from 'react';
import card from '../../../styles/card.module.css';

export default function DateMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={card.graphDate}>
      <button className={card.dateBtn} onClick={() => setMenuOpen(!menuOpen)}>
        <div>Campaign Start Date ▼</div>
      </button>
      {menuOpen && (
        <div className={card.dateList}>
          <button>Previous Weeks 1</button>
          <button>Previous Weeks 2</button>
          <button>Previous Weeks 3</button>
        </div>
      )}
    </div>
  )
}