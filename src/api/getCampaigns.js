import { useState, useEffect } from 'react';

const END_POINT = "https://aexdujsae7.execute-api.us-west-1.amazonaws.com/prod/campaigns";
const EP_REV = "https://aexdujsae7.execute-api.us-west-1.amazonaws.com/prod/ad-revenue-trend/";
const EP_SPND = "https://aexdujsae7.execute-api.us-west-1.amazonaws.com/prod/ad-spend-trend/"

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
    const response = await fetch(`${EP_REV}${id}`);
    const res = await response.json();
    return res.trend;
  }

  const fetchSpend = async (id) => {
    const response = await fetch(`${EP_SPND}${id}`);
    const res = await response.json();
    return res.trend;
  }

  return { campaignData, loading }
}
