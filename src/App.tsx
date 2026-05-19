import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import LandingPage from './pages/LandingPage.tsx';
import AboutStudy from './pages/AboutStudy.tsx';
import AirQualityDashboard from './pages/AirQualityDashboard.tsx';
import Methodology from './pages/Methodology.tsx';
import ResultsDiscussion from './pages/ResultsDiscussion.tsx';
import ConclusionRecommendations from './pages/ConclusionRecommendations.tsx';
import References from './pages/References.tsx';

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