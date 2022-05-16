import { useState, useEffect } from 'react';
// import GetRevenue from './getRevenue';
// import GetSpend from './getSpend';

const END_POINT = "camp.json";

export default function GetCampaigns() {
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(END_POINT);
      if (!response.ok) {
        throw new Error("Campaigns: Error with network response...")
      }
      const campaigns = await response.json();
      
      for (let i = 0; i < campaigns.length; i++) {
        let campaign = campaigns[i];
        let rev = await fetchRev(campaign.campaign_id);
        let spend = await fetchSpend(campaign.campaign_id)
        campaign.revenue_list = rev;
        campaign.spend_list = spend;
      }

      setCampaignData(campaigns);
      setLoading(false);
    }

    fetchData();
  }, [])

  const fetchRev = async (id) => {
    const response = await fetch(`rev${id}.json`);
    const res = await response.json();
    return res.trend;
  }

  const fetchSpend = async (id) => {
    const response = await fetch(`spend${id}.json`);
    const res = await response.json();
    return res.trend;
  }

  return { campaignData, loading }
}

// export default function GetCampaigns() {
//   const [campaignData, setCampaignData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(END_POINT);
//         const res = await response.json();
//         setCampaignData(res);
//         setLoading(false);
//       } catch (error) {
//         console.log("error", error);
//       }
//     }

//     fetchData();
//   }, [])

//   return { campaignData, error, loading }
// }

