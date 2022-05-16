import { useState, useEffect } from 'react';
import LineGraph from './LineGraph';

const END_POINT = "https://aexdujsae7.execute-api.us-west-1.amazonaws.com/prod/ad-spend-trend/";

export default function SpendGraph({ page }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(END_POINT + page);
        const res = await response.json();
        setData(res.trend);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [page])

  let graphData;
  if (!loading) {
    graphData = [
      {
        x: data.map(x => x.date),
        y: data.map(y => y.value),
        type: 'scatter'
      },
    ]
  }
  
  return (
    <>
      {data && (
        <LineGraph 
          data={graphData}
          title="Ad Spend"
        />
      )}
    </>
  )
}