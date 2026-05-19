import { motion } from 'framer-motion';
import { CheckCircle, Monitor, Gavel, Megaphone, Bus, Beaker } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const ConclusionRecommendations = () => {
  const recommendations = [
    { icon: <Monitor className="w-6 h-6" />, title: "Continuous Monitoring", desc: "Establish long-term air quality monitoring programs within Barangay Doongan." },
    { icon: <Gavel className="w-6 h-6" />, title: "Environmental Regulations", desc: "Strengthen enforcement of regulations related to vehicular emissions and open burning." },
    { icon: <Megaphone className="w-6 h-6" />, title: "Community Awareness", desc: "Conduct public awareness campaigns regarding air pollution and health risks." },
    { icon: <Bus className="w-6 h-6" />, title: "Sustainable Practices", desc: "Promote cleaner transportation systems and proper waste management practices." },
    { icon: <Beaker className="w-6 h-6" />, title: "Future Research", desc: "Expand future studies to include additional pollutants, seasonal monitoring, wider locations, and epidemiological analysis." },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="section-title text-center">Conclusion and Recommendations</h1>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-primary-600" />
              Conclusion
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                The study concluded that air quality in Barangay Doongan remained within Philippine standards from 2014–2024.
              </p>
              <p>
                However, PM₂.₅ and PM₁₀ concentrations consistently exceeded WHO guideline limits, indicating possible long-term health risks.
              </p>
              <p>
                Increasing pollution trends in recent years suggest that urbanization, transportation, and human activities continue to influence air quality conditions.
              </p>
              <p className="font-semibold pt-2">
                Continuous environmental monitoring and stronger pollution control strategies are necessary to protect public health.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Recommendations */}
        <AnimatedSection delay={0.2}>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {rec.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{rec.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{rec.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ConclusionRecommendations;