import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, TrendingUp, Shield, BookOpen, MapPin } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import studyAreaImage from '../assets/image/pic.jpg';

const AccordionItem = ({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span>{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutStudy = () => {
  const objectives = [
    { icon: <Target className="w-5 h-5" />, title: "Air Pollutant Measurement", desc: "Measure the amount of common air pollutants present in the area, particularly PM₂.₅ and PM₁₀." },
    { icon: <Shield className="w-5 h-5" />, title: "Standards Compliance", desc: "Determine whether air quality levels meet Philippine National Ambient Air Quality Standards and WHO guidelines." },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Trend Analysis", desc: "Compare air quality levels over time to identify increasing or decreasing pollution trends." },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="section-title text-center">About the Study</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Comprehensive analysis of air quality conditions in Barangay Doongan, Butuan City from 2014 to 2024
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <h2 className="section-subtitle">Background of the Study</h2>
              <div className="glass-card p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Air quality plays an important role in maintaining environmental balance and public health. Exposure to polluted air, 
                  especially particulate matter such as PM₂.₅ and PM₁₀, can contribute to respiratory illnesses, cardiovascular diseases, 
                  and other health complications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  In developing communities such as Barangay Doongan, Butuan City, increasing transportation activities, residential growth, 
                  and commercial development may contribute to higher concentrations of particulate matter in the atmosphere.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Despite the possible environmental risks, localized air quality data in the barangay remains limited. This study was 
                  conducted to evaluate PM₂.₅ and PM₁₀ concentrations and identify long-term trends in air pollution from 2014–2024.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The findings aim to support environmental awareness, local policy development, and future environmental monitoring efforts.
                </p>
              </div>

              <h2 className="section-subtitle">General Objective</h2>
              <div className="glass-card p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-400 text-lg italic">
                  "To determine the current air quality status and observe changes in air quality over time in Barangay Doongan, Butuan City."
                </p>
              </div>

              <h2 className="section-subtitle">Specific Objectives</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {objectives.map((obj, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-5 text-center hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      {obj.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{obj.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{obj.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.2}>
              <AccordionItem title="Significance of the Study" icon={<BookOpen className="w-5 h-5" />}>
                <p className="mb-3">This research provides localized environmental data that can help residents, researchers, and local government units better understand the air quality condition in Barangay Doongan.</p>
                <p className="mb-2 font-semibold">The study contributes to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Environmental awareness</li>
                  <li>Public health understanding</li>
                  <li>Community-based environmental monitoring</li>
                  <li>Future air quality research</li>
                  <li>Environmental policy development</li>
                </ul>
                <p className="mt-3">It also serves as baseline information for future studies involving additional pollutants, wider geographical coverage, and seasonal analysis.</p>
              </AccordionItem>

              <AccordionItem title="Scope and Limitations" icon={<MapPin className="w-5 h-5" />}>
                <p className="mb-3">The study focuses on PM₂.₅ and PM₁₀ concentrations in Barangay Doongan, Butuan City.</p>
                <p className="mb-2 font-semibold">It includes:</p>
                <ul className="list-disc list-inside mb-3">
                  <li>Urban areas</li>
                  <li>Urbanizing areas</li>
                  <li>Rural areas</li>
                </ul>
                <p className="mb-2 font-semibold">Limitations include:</p>
                <ul className="list-disc list-inside">
                  <li>Selected sampling points only</li>
                  <li>No seasonal monitoring</li>
                  <li>Cross-sectional analysis</li>
                  <li>Exclusion of other air pollutants</li>
                  <li>Reliance on secondary data</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Study Area" icon={<MapPin className="w-5 h-5" />}>
                <p className="mb-4">Barangay Doongan, Butuan City contains urban environments, urbanizing communities, and rural locations. These land-use characteristics influence transportation activity, population density, and pollutant generation.</p>
                <img 
                  src={studyAreaImage} 
                  alt="Study Area - Barangay Doongan, Butuan City" 
                  className="w-full rounded-lg object-cover shadow-lg"
                />
              </AccordionItem>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStudy;