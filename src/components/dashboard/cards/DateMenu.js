import { useState } from 'react';
import card from '../../../styles/card.module.css';

export default function DateMenu({ start }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={card.graphDate}>
      <button className={card.dateBtn} onClick={() => setMenuOpen(!menuOpen)}>
        <div>{start} ▼</div>
      </button>
      {menuOpen && (
        <div className={card.dateList}>
          <button>Placeholder Week 1</button>
          <button>Placeholder Week 2</button>
          <button>Placeholder Week 3</button>
        </div>
      )}
    </div>
  )
}