import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import RegionalOverview from './components/RegionalOverview';
import InteractiveMap from './components/InteractiveMap';
import SoilAnalysis from './components/SoilAnalysis';
import WeatherIntelligence from './components/WeatherIntelligence';
import SuccessStories from './components/SuccessStories';
import PeerComparison from './components/PeerComparison';
import SeasonalCalendar from './components/SeasonalCalendar';

const RegionalInsights = () => {
  const [selectedRegion, setSelectedRegion] = useState('maharashtra');
  const [activeSection, setActiveSection] = useState('overview');

  // Mock regional data for Indian states
  const regions = [
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      description: 'Leading agricultural state with diverse crop production and advanced farming practices',
      totalFarms: '15,847',
      totalHectares: '1.13M',
              avgYield: '45',
      successRate: 92,
      performance: 'high',
      dominantCrops: [
        { name: 'Sugarcane', percentage: 35, hectares: '396K' },
        { name: 'Cotton', percentage: 25, hectares: '283K' },
        { name: 'Soybean', percentage: 20, hectares: '227K' },
        { name: 'Other', percentage: 20, hectares: '227K' }
      ],
      highlights: [
        'Highest sugarcane production in India with optimal irrigation',
        'Advanced precision agriculture adoption rate of 65%',
        'Strong cooperative network and agricultural support services',
        'Excellent transportation infrastructure for crop marketing'
      ],
      soilData: {
        ph: 7.2,
        nitrogen: 28,
        phosphorus: 42,
        potassium: 245,
        organicMatter: 3.8
      },
      recommendedCrops: [
        { name: 'Sugarcane', suitability: 95 },
        { name: 'Cotton', suitability: 88 },
        { name: 'Soybean', suitability: 85 },
        { name: 'Wheat', suitability: 78 }
      ],
      soilImprovements: [
        'Consider cover crops to increase organic matter',
        'Monitor phosphorus levels to prevent runoff',
        'Implement variable rate fertilizer application',
        'Regular soil testing every 2-3 years recommended'
      ],
      weather: {
        precipitation: '4.2',
        temperature: 72,
        humidity: 68,
        growingDays: 180
      }
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      description: 'Diverse agricultural region with traditional and modern farming practices',
      totalFarms: '12,923',
      totalHectares: '1.30M',
              avgYield: '35',
      successRate: 78,
      performance: 'moderate',
      dominantCrops: [
        { name: 'Wheat', percentage: 40, hectares: '518K' },
        { name: 'Bajra', percentage: 25, hectares: '324K' },
        { name: 'Mustard', percentage: 20, hectares: '259K' },
        { name: 'Other', percentage: 15, hectares: '194K' }
      ],
      highlights: [
        'Leading wheat and mustard production with drought-resistant varieties',
        'Integrated crop-livestock systems provide diversification',
        'Strong potential for solar energy integration',
        'Excellent grain storage and transportation facilities'
      ],
      soilData: {
        ph: 8.1,
        nitrogen: 22,
        phosphorus: 32,
        potassium: 185,
        organicMatter: 2.4
      },
      recommendedCrops: [
        { name: 'Wheat', suitability: 92 },
        { name: 'Bajra', suitability: 88 },
        { name: 'Mustard', suitability: 85 },
        { name: 'Gram', suitability: 75 }
      ],
      soilImprovements: [
        'Increase organic matter through crop residue management',
        'Consider no-till practices to conserve moisture',
        'Monitor soil erosion on sloped fields',
        'Implement windbreaks for soil protection'
      ],
      weather: {
        precipitation: '2.8',
        temperature: 68,
        humidity: 52,
        growingDays: 160
      }
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      description: 'Progressive agricultural state with high-value crop production',
      totalFarms: '18,156',
      totalHectares: '850K',
              avgYield: '52',
      successRate: 88,
      performance: 'high',
      dominantCrops: [
        { name: 'Groundnut', percentage: 35, hectares: '297K' },
        { name: 'Cotton', percentage: 30, hectares: '255K' },
        { name: 'Wheat', percentage: 20, hectares: '170K' },
        { name: 'Other', percentage: 15, hectares: '127K' }
      ],
      highlights: [
        'Leading groundnut and cotton production with premium markets',
        'Advanced drip irrigation and precision agriculture',
        'Strong research partnerships with agricultural universities',
        'Excellent processing and export infrastructure'
      ],
      soilData: {
        ph: 7.5,
        nitrogen: 35,
        phosphorus: 48,
        potassium: 280,
        organicMatter: 3.2
      },
      recommendedCrops: [
        { name: 'Groundnut', suitability: 96 },
        { name: 'Cotton', suitability: 94 },
        { name: 'Wheat', suitability: 91 },
        { name: 'Sugarcane', suitability: 89 }
      ],
      soilImprovements: [
        'Address high pH through sulfur applications',
        'Improve organic matter with compost additions',
        'Monitor salinity levels in irrigated fields',
        'Consider cover crops in crop rotation'
      ],
      weather: {
        precipitation: '3.5',
        temperature: 74,
        humidity: 58,
        growingDays: 200
      }
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      description: 'Traditional agricultural powerhouse with diverse crop production',
      totalFarms: '25,654',
      totalHectares: '1.82M',
              avgYield: '40',
      successRate: 82,
      performance: 'moderate',
      dominantCrops: [
        { name: 'Rice', percentage: 35, hectares: '639K' },
        { name: 'Wheat', percentage: 30, hectares: '546K' },
        { name: 'Sugarcane', percentage: 20, hectares: '364K' },
        { name: 'Other', percentage: 15, hectares: '273K' }
      ],
      highlights: [
        'Strong rice and wheat production with traditional farming',
        'Diversified rotation systems improving soil health',
        'Growing adoption of modern agriculture technologies',
        'Excellent climate for multiple cropping opportunities'
      ],
      soilData: {
        ph: 6.8,
        nitrogen: 30,
        phosphorus: 38,
        potassium: 220,
        organicMatter: 3.5
      },
      recommendedCrops: [
        { name: 'Rice', suitability: 95 },
        { name: 'Wheat', suitability: 90 },
        { name: 'Sugarcane', suitability: 85 },
        { name: 'Maize', suitability: 80 }
      ],
      soilImprovements: [
        'Lime application to raise pH for optimal nutrient availability',
        'Increase potassium levels through targeted fertilization',
        'Implement cover crops to build organic matter',
        'Consider strip-till to reduce soil compaction'
      ],
      weather: {
        precipitation: '5.2',
        temperature: 72,
        humidity: 78,
        growingDays: 210
      }
    }
  ];

  const navigationSections = [
    { id: 'overview', label: 'Regional Overview', icon: 'MapPin' },
    { id: 'map', label: 'Interactive Map', icon: 'Map' },
    { id: 'soil', label: 'Soil Analysis', icon: 'TestTube' },
    { id: 'weather', label: 'Weather Intelligence', icon: 'CloudRain' },
    { id: 'stories', label: 'Success Stories', icon: 'Users' },
    { id: 'comparison', label: 'Peer Comparison', icon: 'BarChart3' },
    { id: 'calendar', label: 'Seasonal Calendar', icon: 'Calendar' }
  ];

  // Auto-scroll to section when activeSection changes
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Regional Agricultural Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover location-specific insights, soil analysis, weather patterns, and success stories 
              tailored to your farming region. Make informed decisions with hyperlocal agricultural data.
            </p>
            
            {/* Region Selector */}
            <div className="flex flex-wrap justify-center gap-3">
              {regions?.map((region) => (
                <button
                  key={region?.id}
                  onClick={() => setSelectedRegion(region?.id)}
                  className={`px-6 py-3 rounded-lg font-medium growth-transition ${
                    selectedRegion === region?.id
                      ? 'bg-primary text-white harvest-shadow'
                      : 'bg-white text-muted-foreground border border-border hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {region?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Quick Navigation */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Navigation" size={20} color="var(--color-primary)" />
              <span className="font-medium text-primary">Quick Navigation</span>
            </div>
            <div className="flex space-x-1 overflow-x-auto">
              {navigationSections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap growth-transition ${
                    activeSection === section?.id
                      ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={section?.icon} size={16} />
                  <span className="hidden sm:inline">{section?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Regional Overview */}
        <section id="overview" className="scroll-mt-32">
          <RegionalOverview selectedRegion={selectedRegion} regions={regions} />
        </section>

        {/* Interactive Map */}
        <section id="map" className="scroll-mt-32">
          <InteractiveMap 
            regions={regions} 
            selectedRegion={selectedRegion} 
            onRegionSelect={setSelectedRegion} 
          />
        </section>

        {/* Soil Analysis */}
        <section id="soil" className="scroll-mt-32">
          <SoilAnalysis selectedRegion={selectedRegion} regions={regions} />
        </section>

        {/* Weather Intelligence */}
        <section id="weather" className="scroll-mt-32">
          <WeatherIntelligence selectedRegion={selectedRegion} regions={regions} />
        </section>

        {/* Success Stories */}
        <section id="stories" className="scroll-mt-32">
          <SuccessStories selectedRegion={selectedRegion} regions={regions} />
        </section>

        {/* Peer Comparison */}
        <section id="comparison" className="scroll-mt-32">
          <PeerComparison selectedRegion={selectedRegion} regions={regions} />
        </section>

        {/* Seasonal Calendar */}
        <section id="calendar" className="scroll-mt-32">
          <SeasonalCalendar selectedRegion={selectedRegion} regions={regions} />
        </section>
      </main>
      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Optimize Your Regional Strategy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get personalized insights for your specific location and crops. 
            Join thousands of farmers making data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 growth-transition harvest-shadow">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={20} />
                <span>Get Regional Forecast</span>
              </div>
            </button>
            <button className="px-8 py-4 bg-white text-primary border border-primary rounded-lg font-semibold hover:bg-primary/5 growth-transition">
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Contact Local Expert</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Sprout" size={20} color="white" />
                </div>
                <span className="text-xl font-bold">AgriPredict</span>
              </div>
              <p className="text-white/80 mb-4">
                Empowering farmers with AI-driven regional insights for smarter agricultural decisions.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-white/60 hover:text-white cursor-pointer growth-transition" />
                <Icon name="Twitter" size={20} className="text-white/60 hover:text-white cursor-pointer growth-transition" />
                <Icon name="Linkedin" size={20} className="text-white/60 hover:text-white cursor-pointer growth-transition" />
                <Icon name="Youtube" size={20} className="text-white/60 hover:text-white cursor-pointer growth-transition" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Regional Services</h3>
              <ul className="space-y-2 text-white/80">
                <li>Soil Analysis</li>
                <li>Weather Intelligence</li>
                <li>Crop Recommendations</li>
                <li>Peer Benchmarking</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/80">
                <li>Regional Experts</li>
                <li>Technical Support</li>
                <li>Training Resources</li>
                <li>Community Forum</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date()?.getFullYear()} AgriPredict. All rights reserved. Cultivating intelligence for sustainable agriculture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegionalInsights;