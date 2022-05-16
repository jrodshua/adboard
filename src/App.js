import Menu from './components/menu/Menu';
import DashboardParent from './components/dashboard/DashboardParent';
import style from './styles/styles.module.css';

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <div className={style.menu}>
          <Menu />
        </div>
        <div className={style.dashboard}>
          <DashboardParent />
        </div>
      </div>
    </div>
  );
}

export default App;
