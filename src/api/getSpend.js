import { useState, useEffect } from 'react';

const END_POINT = "https://aexdujsae7.execute-api.us-west-1.amazonaws.com/prod/ad-spend-trend/";

export default function GetSpend({campaignId}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(END_POINT + campaignId);
        const res = await response.json();
        setData(res);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [campaignId])

  return { data, error, loading }
}

