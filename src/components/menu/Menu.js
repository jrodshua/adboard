import styMenu from '../../styles/menu.module.css';

export default function Menu() {
  return (
    <nav className={styMenu.nav}>
      <div className={styMenu.flex}>
        <div className={styMenu.item}>
          adboard
        </div>
        <div className={styMenu.item}>
          Dashboard
        </div>
        <div className={styMenu.item}>
          Campaigns
        </div>
        <div className={styMenu.item}>
          Statistics
        </div>
        <div className={styMenu.item}>
          Settings
        </div>
      </div>
    </nav>
  )
}