import { useState, useEffect } from 'react';

const END_POINT = "camp.json";

export default function GetCampaigns() {
  const [campaignData, setCampaignData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(END_POINT);
        const res = await response.json();
        setCampaignData(res);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [])

  return { campaignData, error, loading }
}

