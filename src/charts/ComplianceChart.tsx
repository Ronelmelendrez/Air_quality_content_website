import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { airQualityData, philippineStandards, whoStandards } from '../data/airQualityData';

export const ComplianceChart = () => {
  const pm25Compliant = airQualityData.every(record => record.pm25 <= philippineStandards.pm25);
  const pm25WhoExceed = airQualityData.every(record => record.pm25 > whoStandards.pm25);
  const pm10Compliant = airQualityData.every(record => record.pm10 <= philippineStandards.pm10);
  const pm10WhoExceed = airQualityData.every(record => record.pm10 > whoStandards.pm10);

  const data = [
    { name: 'Philippine Standards Met', value: (pm25Compliant ? 1 : 0) + (pm10Compliant ? 1 : 0) },
    { name: 'WHO Guidelines Exceeded', value: (pm25WhoExceed ? 1 : 0) + (pm10WhoExceed ? 1 : 0) },
  ];

  const COLORS = ['#00af69', '#ef4444'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};