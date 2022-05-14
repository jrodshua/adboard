import Plot from 'react-plotly.js';

export default function LineGraph({ data, width, height, title }) {
  return (
    <div>
      <Plot
        data={data}
        layout={{ width, height, title }}
      />
    </div>
  )
}