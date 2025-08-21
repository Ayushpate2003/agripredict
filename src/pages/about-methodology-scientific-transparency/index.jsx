import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import MethodologySection from './components/MethodologySection';
import PerformanceDashboard from './components/PerformanceDashboard';
import DataSourcesSection from './components/DataSourcesSection';
import TeamSection from './components/TeamSection';
import ResearchSection from './components/ResearchSection';

const AboutMethodologyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <MethodologySection />
        <PerformanceDashboard />
        <DataSourcesSection />
        <TeamSection />
        <ResearchSection />
      </main>
    </div>
  );
};

export default AboutMethodologyPage;