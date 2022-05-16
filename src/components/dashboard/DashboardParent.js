import GetCampaigns from '../../api/getCampaigns';
import Loading from './Loading';
import Dashboard from './Dashboard';


export default function DashboardParent() {
  const { campaignData, loading } = GetCampaigns();

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Dashboard data={campaignData} />
    </>
  )
}