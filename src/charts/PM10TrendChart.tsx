import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { airQualityData, philippineStandards, whoStandards } from '../data/airQualityData';

export const PM10TrendChart = () => {
  const dataWithStandards = airQualityData.map(item => ({
    year: item.year,
    'PM₁₀ (μg/m³)': item.pm10,
    'Philippine Standard (60)': philippineStandards.pm10,
    'WHO Guideline (15)': whoStandards.pm10,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dataWithStandards} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="year" stroke="#888888" />
        <YAxis stroke="#888888" domain={[0, 70]} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="PM₁₀ (μg/m³)"
          stroke="#196ef5"
          strokeWidth={3}
          dot={{ fill: '#196ef5', r: 5 }}
          activeDot={{ r: 7 }}
        />
        <Line
          type="monotone"
          dataKey="Philippine Standard (60)"
          stroke="#eab308"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="WHO Guideline (15)"
          stroke="#ef4444"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};