import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Wind, Award, TrendingUp, Droplets, AlertTriangle } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { getAveragePM25, getAveragePM10, philippineStandards, whoStandards } from '../data/airQualityData';

const LandingPage = () => {
  const avgPM25 = getAveragePM25();
  const avgPM10 = getAveragePM10();

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Particles Effect */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-400/20 dark:bg-primary-500/10"
              style={{
                width: Math.random() * 100 + 20,
                height: Math.random() * 100 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6">
              Air Quality Status and Trends in <span className="text-primary-600">Barangay Doongan</span>, Butuan City
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              A Capstone Research Study on PM₂.₅ and PM₁₀ Air Pollution Trends and Environmental Health Risks from 2014–2024
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Air quality is a critical environmental factor that directly affects human health and ecosystem stability. 
              This study evaluates the concentrations and trends of PM₂.₅ and PM₁₀ in Barangay Doongan, Butuan City to 
              determine compliance with Philippine and WHO air quality standards.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Dashboard <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/results"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                Explore Findings
              </Link>
              <Link
                to="/methodology"
                className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Read Methodology
              </Link>
            </div>
          </motion.div>

          {/* Research Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 glass-card p-6 max-w-2xl mx-auto"
          >
            <h3 className="font-semibold text-center text-gray-700 dark:text-gray-300 mb-4">Research Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center text-sm">
              <div>Jay Alfonso</div>
              <div>Justin Baay</div>
              <div>Irene Mae Bihag</div>
              <div>Marymatthiemay Clavaton</div>
              <div>Alexandrix Ruelle Juaton</div>
            </div>
            <div className="text-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Caraga State University – Main Campus | BS Environmental Science | 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="section-title text-center">Key Findings at a Glance</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <AnimatedSection delay={0.1}>
              <div className="stat-card text-center">
                <Wind className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{avgPM25} μg/m³</h3>
                <p className="text-gray-600 dark:text-gray-400">Average PM₂.₅</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">✓ Within Philippine Standards</p>
                <p className="text-xs text-red-500 mt-1">⚠ Exceeds WHO Guidelines</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="stat-card text-center">
                <Droplets className="w-10 h-10 text-secondary-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{avgPM10} μg/m³</h3>
                <p className="text-gray-600 dark:text-gray-400">Average PM₁₀</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">✓ Compliant with National Standards</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="stat-card text-center">
                <Award className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">WHO Guideline</h3>
                <p className="text-gray-600 dark:text-gray-400">All values exceeded limits</p>
                <p className="text-xs text-red-500 mt-2">PM₂.₅ > 5 μg/m³ | PM₁₀ > 15 μg/m³</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="stat-card text-center">
                <TrendingUp className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Environmental Trend</h3>
                <p className="text-gray-600 dark:text-gray-400">Increasing after 2021</p>
                <p className="text-xs text-gray-500 mt-2">Urbanization impact observed</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;