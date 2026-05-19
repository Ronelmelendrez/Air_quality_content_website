import { TrendingUp, AlertCircle, BarChart3, Factory, Car, Users } from 'lucide-react';
import { PM25TrendChart } from '../charts/PM25TrendChart';
import { PM10TrendChart } from '../charts/PM10TrendChart';
import { AnimatedSection } from '../components/AnimatedSection';

const ResultsDiscussion = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="section-title text-center">Results and Discussion</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Comprehensive analysis of PM₂.₅ and PM₁₀ concentrations from 2014 to 2024
          </p>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Overview of Findings</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              The results indicate that PM₂.₅ and PM₁₀ concentrations consistently complied with Philippine standards 
              but exceeded WHO guideline values throughout the study period.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Trend analyses revealed fluctuations in pollutant concentrations with increasing trends observed after 2021.
            </p>
          </div>
        </AnimatedSection>

        {/* PM2.5 Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary-600" />
                PM₂.₅ Results
              </h2>
              <PM25TrendChart />
              <div className="mt-4 space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  PM₂.₅ concentrations decreased around 2016–2017 and 2020 but increased in recent years.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  The increasing trend suggests possible impacts from:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4">
                  <li>Urbanization</li>
                  <li>Transportation emissions</li>
                  <li>Human activities</li>
                  <li>Environmental conditions</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* PM10 Results */}
          <AnimatedSection delay={0.3}>
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-secondary-600" />
                PM₁₀ Results
              </h2>
              <PM10TrendChart />
              <div className="mt-4 space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  PM₁₀ concentrations showed noticeable variability across the years.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  <span className="font-semibold">Higher levels observed in:</span> 2015, 2019
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Lower levels occurred in:</span> 2017, 2022
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Environmental Discussion */}
        <AnimatedSection delay={0.4}>
          <div className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Factory className="w-5 h-5 text-gray-600" />
              Environmental Discussion
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              The study highlights the influence of:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                <p className="text-sm">Residential growth</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Factory className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                <p className="text-sm">Commercial activities</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Car className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                <p className="text-sm">Vehicular emissions</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                <p className="text-sm">Population increase</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              on air quality conditions in Barangay Doongan.
            </p>
          </div>
        </AnimatedSection>

        {/* Public Health Implications */}
        <AnimatedSection delay={0.5}>
          <div className="glass-card p-6 border-l-4 border-red-500">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              Public Health Implications
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Although pollutant levels met Philippine standards, exceeding WHO limits may still pose long-term health risks 
              for residents exposed to particulate matter over extended periods.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ResultsDiscussion;