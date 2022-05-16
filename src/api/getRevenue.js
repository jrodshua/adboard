import { useState, useEffect } from 'react';

// const END_POINT = "https://aexdujsae7.execute-api.us-west-1.amazonaws.com/prod/ad-revenue-trend/";

export default function GetRevenue(campaignId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`rev${campaignId}.json`);
      if (!response.ok) {
        throw new Error("Rev: Error with network response...")
      }
      const revenue = await response.json();
      setData(revenue.trend);
      setLoading(false);
    }

    fetchData();
  }, [])

  return { data, loading }
}

// export default function GetRevenue(campaignId) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(END_POINT + campaignId);
//         const res = await response.json();
//         setData(res);
//         setLoading(false);
//       } catch (error) {
//         console.log("error", error);
//       }
//     }

//     fetchData();
//   }, [campaignId])

//   return { data, error, loading }
// }

