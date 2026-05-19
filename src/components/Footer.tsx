import { Wind } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wind className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <span className="font-bold text-lg">Air Quality Dashboard</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Air Quality Status and Trends in Barangay Doongan, Butuan City
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-white">Researchers</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jay Alfonso<br />
              Justin Baay<br />
              Irene Mae Bihag<br />
              Marymatthiemay Clavaton<br />
              Alexandrix Ruelle Juaton
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-white">Institution</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Caraga State University – Main Campus<br />
              Bachelor of Science in Environmental Science<br />
              2026
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2026 Capstone Research Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};