import { Activity, Wind, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { PM25TrendChart } from '../charts/PM25TrendChart';
import { PM10TrendChart } from '../charts/PM10TrendChart';
import { StandardsComparisonChart } from '../charts/StandardsComparisonChart';
import { ComplianceChart } from '../charts/ComplianceChart';
import { 
  airQualityData, 
  getAveragePM25, 
  getAveragePM10, 
  getPM25Trend, 
  philippineStandards,
  whoStandards 
} from '../data/airQualityData';
import { AnimatedSection } from '../components/AnimatedSection';

const AirQualityDashboard = () => {
  const avgPM25 = getAveragePM25();
  const avgPM10 = getAveragePM10();
  const pm25Trend = getPM25Trend();
  const latestPM25 = airQualityData[airQualityData.length - 1].pm25;

  const riskLevel = latestPM25 > whoStandards.pm25 * 3 ? "High" : latestPM25 > whoStandards.pm25 * 2 ? "Moderate" : "Low";

  const stats = [
    { title: "Average PM₂.₅", value: `${avgPM25} μg/m³`, icon: <Wind className="w-6 h-6" />, status: avgPM25 <= philippineStandards.pm25 ? "compliant" : "non-compliant" },
    { title: "Average PM₁₀", value: `${avgPM10} μg/m³`, icon: <Activity className="w-6 h-6" />, status: avgPM10 <= philippineStandards.pm10 ? "compliant" : "non-compliant" },
    { title: "Air Quality Risk Level", value: riskLevel, icon: <AlertTriangle className="w-6 h-6" />, status: riskLevel === "Low" ? "good" : riskLevel === "Moderate" ? "moderate" : "bad" },
    { title: "Pollution Trend", value: pm25Trend === "increasing" ? "↑ Increasing" : "↓ Decreasing", icon: pm25Trend === "increasing" ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />, status: pm25Trend === "increasing" ? "bad" : "good" },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="section-title text-center">Air Quality Dashboard</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            The Air Quality Dashboard presents annual PM₂.₅ and PM₁₀ concentrations from 2014 to 2024 and compares them with Philippine and WHO air quality standards.
            The dashboard visualizes pollution trends, compliance status, and potential environmental health risks.
          </p>
        </AnimatedSection>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="stat-card">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    stat.status === 'compliant' || stat.status === 'good' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                    stat.status === 'moderate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' :
                    'bg-red-100 dark:bg-red-900/30 text-red-600'
                  }`}>
                    {stat.icon}
                  </div>
                  {stat.status === 'compliant' && <CheckCircle className="w-5 h-5 text-green-500" />}
                </div>
                <h3 className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">PM₂.₅ Trend (2014-2024)</h2>
              <PM25TrendChart />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                PM₂.₅ concentrations showed fluctuations throughout the study period. Lower concentrations were observed around 2016–2017 and 2020, 
                while increasing levels were recorded after 2021.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">PM₁₀ Trend (2014-2024)</h2>
              <PM10TrendChart />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                PM₁₀ levels fluctuated between 2014 and 2024. Higher concentrations were observed in 2015 and 2019, 
                while lower concentrations occurred in 2017 and 2022.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.4}>
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Standards Comparison</h2>
              <StandardsComparisonChart />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Compliance Status</h2>
              <ComplianceChart />
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-700 dark:text-green-300 text-sm">✓ All PM₂.₅ and PM₁₀ concentrations complied with Philippine air quality standards.</p>
              </div>
              <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-red-700 dark:text-red-300 text-sm">⚠ All recorded pollutant values exceeded WHO guideline limits, indicating possible long-term health risks.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Health Risk Section */}
        <AnimatedSection delay={0.6}>
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Health Risk Assessment
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Long-term exposure to PM₂.₅ and PM₁₀ may contribute to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Respiratory diseases</li>
              <li>Asthma</li>
              <li>Reduced lung function</li>
              <li>Cardiovascular complications</li>
              <li>Increased environmental health risks</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AirQualityDashboard;