import Menu from './components/menu/Menu';
import Dashboard from './components/dashboard/Dashboard';
import style from './styles/styles.module.css';

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <div className={style.menu}>
          <Menu />
        </div>
        <div className={style.dashboard}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
