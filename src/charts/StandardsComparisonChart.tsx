import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAveragePM25, getAveragePM10, philippineStandards, whoStandards } from '../data/airQualityData';

export const StandardsComparisonChart = () => {
  const data = [
    {
      name: 'PM₂.₅',
      'Average Measured': getAveragePM25(),
      'Philippine Standard': philippineStandards.pm25,
      'WHO Guideline': whoStandards.pm25,
    },
    {
      name: 'PM₁₀',
      'Average Measured': getAveragePM10(),
      'Philippine Standard': philippineStandards.pm10,
      'WHO Guideline': whoStandards.pm10,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Average Measured" fill="#00af69" />
        <Bar dataKey="Philippine Standard" fill="#eab308" />
        <Bar dataKey="WHO Guideline" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
};