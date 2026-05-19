import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const References = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const references = [
    { id: 1, title: "World Health Organization (2021). WHO global air quality guidelines: particulate matter (PM2.5 and PM10), ozone, nitrogen dioxide, sulfur dioxide and carbon monoxide." },
    { id: 2, title: "DENR-EMB (2019). National Ambient Air Quality Status Report. Environmental Management Bureau, Department of Environment and Natural Resources." },
    { id: 3, title: "UNEP (2019). Air Pollution in Asia and the Pacific: Science-based Solutions. United Nations Environment Programme." },
    { id: 4, title: "EPA (2023). Particulate Matter (PM) Pollution. United States Environmental Protection Agency." },
    { id: 5, title: "Republic Act No. 8749. Philippine Clean Air Act of 1999." },
    { id: 6, title: "Health Effects Institute (2020). State of Global Air 2020. Boston, MA: Health Effects Institute." },
    { id: 7, title: "Kim, K. H., Kabir, E., & Kabir, S. (2015). A review on the human health impact of airborne particulate matter. Environment International, 74, 136-143." },
    { id: 8, title: "Lelieveld, J., Evans, J. S., Fnais, M., Giannadaki, D., & Pozzer, A. (2015). The contribution of outdoor air pollution sources to premature mortality on a global scale. Nature, 525(7569), 367-371." },
    { id: 9, title: "Landrigan, P. J., et al. (2018). The Lancet Commission on pollution and health. The Lancet, 391(10119), 462-512." },
  ];

  const filteredReferences = references.filter(ref =>
    ref.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="section-title text-center">References</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          </p>
        </AnimatedSection>

        {/* Search Bar */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search references..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* References List */}
        <div className="max-w-4xl mx-auto">
          {filteredReferences.map((ref, idx) => (
            <AnimatedSection key={ref.id} delay={idx * 0.05}>
              <motion.div
                whileHover={{ x: 5 }}
                className="glass-card p-5 mb-4 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary-600" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                  {ref.title}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
            <p>All references are presented in APA format based on the manuscript sources.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default References;