import styMenu from '../../styles/menu.module.css';

export default function Menu() {
  return (
    <nav className={styMenu.nav}>
      <div className={styMenu.flex}>
        <div className={styMenu.item}>
          <a className={styMenu.logo} href="/">
            <span>Ad</span>board
          </a>
        </div>
        <div className={`${styMenu.item} ${styMenu.active}`}>
          <a href="/">Dashboard</a>
        </div>
        <div className={styMenu.item}>
          <a href="/">Campaigns</a>
        </div>
        <div className={styMenu.item}>
          <a href="/">Statistics</a>
        </div>
        <div className={styMenu.item}>
          <a href="/">Settings</a>
        </div>
      </div>
    </nav>
  )
}