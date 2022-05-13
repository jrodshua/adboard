import load from '../../styles/load.module.css';

export default function Loading() {
  return (
    <div className={load.loadWrapper}>
      <div className={load.loading}></div>
    </div>
  )
}