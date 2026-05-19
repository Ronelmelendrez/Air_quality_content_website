import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { ScrollToTop } from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import AboutStudy from './pages/AboutStudy';
import AirQualityDashboard from './pages/AirQualityDashboard';
import Methodology from './pages/Methodology';
import ResultsDiscussion from './pages/ResultsDiscussion';
import ConclusionRecommendations from './pages/ConclusionRecommendations';
import References from './pages/References';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutStudy />} />
          <Route path="dashboard" element={<AirQualityDashboard />} />
          <Route path="methodology" element={<Methodology />} />
          <Route path="results" element={<ResultsDiscussion />} />
          <Route path="conclusion" element={<ConclusionRecommendations />} />
          <Route path="references" element={<References />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;