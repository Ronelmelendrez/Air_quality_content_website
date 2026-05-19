import { motion } from 'framer-motion';
import { Search, Map, Database, BarChart3, ShieldCheck, Clock } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const Methodology = () => {
  const steps = [
    { icon: <Search className="w-8 h-8" />, title: "Research Design", desc: "Quantitative descriptive and trend analysis research design to evaluate air quality status and long-term PM₂.₅ and PM₁₀ patterns." },
    { icon: <Map className="w-8 h-8" />, title: "Study Area", desc: "Barangay Doongan, Butuan City covering urban, urbanizing, and rural environments with varying land-use characteristics." },
    { icon: <Database className="w-8 h-8" />, title: "Data Collection", desc: "Secondary air quality data from 2014–2024 obtained from existing environmental monitoring records and reports." },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Data Analysis", desc: "Descriptive statistics, time-series analysis, trend analysis, and comparison with Philippine and WHO standards." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Ethical Considerations", desc: "Publicly available secondary data used solely for academic and environmental research purposes." },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="section-title text-center">Methodology</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            A systematic approach to evaluating air quality status and long-term particulate matter patterns
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 mb-6 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
                <div className="flex-shrink-0 text-primary-400 font-bold text-2xl hidden md:block">{(idx + 1).toString().padStart(2, '0')}</div>
              </motion.div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.5}>
            <div className="glass-card p-6 mt-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Study Period
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                The study analyzed air quality data spanning eleven years from 2014 to 2024, providing a comprehensive view of long-term trends and fluctuations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Methodology;