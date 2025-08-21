import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import FarmerPortalDashboard from './pages/farmer-portal-personalized-dashboard-experience';
import AboutMethodologyPage from './pages/about-methodology-scientific-transparency';
import Homepage from './pages/homepage-agricultural-intelligence-platform';
import RegionalInsights from './pages/regional-insights-location-specific-intelligence';
import ForecastDashboard from './pages/forecast-dashboard-ai-prediction-interface';
import ContactSupportPage from './pages/contact-support-agricultural-community-connection';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutMethodologyPage />} />
        <Route path="/farmer-portal-personalized-dashboard-experience" element={<FarmerPortalDashboard />} />
        <Route path="/about-methodology-scientific-transparency" element={<AboutMethodologyPage />} />
        <Route path="/homepage-agricultural-intelligence-platform" element={<Homepage />} />
        <Route path="/regional-insights-location-specific-intelligence" element={<RegionalInsights />} />
        <Route path="/forecast-dashboard-ai-prediction-interface" element={<ForecastDashboard />} />
        <Route path="/contact-support-agricultural-community-connection" element={<ContactSupportPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
