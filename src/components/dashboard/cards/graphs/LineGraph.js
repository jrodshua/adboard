import Plot from 'react-plotly.js';

export default function LineGraph({ data, title }) {
  return (
    <>
      <Plot
        data={data}
        layout={{ title }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%", maxHeight: 360 }}
      />
    </>
  )
}