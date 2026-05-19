export interface AirQualityRecord {
  year: number;
  pm25: number;
  pm10: number;
}

export const airQualityData: AirQualityRecord[] = [
  { year: 2014, pm25: 15.881, pm10: 32 },
  { year: 2015, pm25: 17.797, pm10: 35 },
  { year: 2016, pm25: 14.007, pm10: 29 },
  { year: 2017, pm25: 13.731, pm10: 27 },
  { year: 2018, pm25: 14.616, pm10: 28 },
  { year: 2019, pm25: 16.68, pm10: 32 },
  { year: 2020, pm25: 13.198, pm10: 26 },
  { year: 2021, pm25: 15.177, pm10: 27 },
  { year: 2022, pm25: 15.534, pm10: 24 },
  { year: 2023, pm25: 17.978, pm10: 26 },
  { year: 2024, pm25: 17.978, pm10: 28 },
];

export const whoStandards = {
  pm25: 5,
  pm10: 15,
};

export const philippineStandards = {
  pm25: 25,
  pm10: 60,
};

export const getAveragePM25 = (): number => {
  const sum = airQualityData.reduce((acc, record) => acc + record.pm25, 0);
  return parseFloat((sum / airQualityData.length).toFixed(2));
};

export const getAveragePM10 = (): number => {
  const sum = airQualityData.reduce((acc, record) => acc + record.pm10, 0);
  return parseFloat((sum / airQualityData.length).toFixed(2));
};

export const getPM25Trend = (): string => {
  const recentYears = airQualityData.slice(-5);
  const firstHalf = recentYears.slice(0, 2);
  const secondHalf = recentYears.slice(-2);
  const avgFirst = firstHalf.reduce((s, r) => s + r.pm25, 0) / firstHalf.length;
  const avgSecond = secondHalf.reduce((s, r) => s + r.pm25, 0) / secondHalf.length;
  return avgSecond > avgFirst ? "increasing" : "decreasing";
};

export const getPM10Trend = (): string => {
  const recentYears = airQualityData.slice(-5);
  const firstHalf = recentYears.slice(0, 2);
  const secondHalf = recentYears.slice(-2);
  const avgFirst = firstHalf.reduce((s, r) => s + r.pm10, 0) / firstHalf.length;
  const avgSecond = secondHalf.reduce((s, r) => s + r.pm10, 0) / secondHalf.length;
  return avgSecond > avgFirst ? "increasing" : "decreasing";
};