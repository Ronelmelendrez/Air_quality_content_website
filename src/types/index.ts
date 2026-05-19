export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  color?: 'green' | 'blue' | 'yellow' | 'red';
}

export interface ResearchData {
  year: number;
  pm25: number;
  pm10: number;
}