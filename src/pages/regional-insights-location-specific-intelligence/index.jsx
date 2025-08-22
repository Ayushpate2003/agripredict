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
  const [selectedRegion, setSelectedRegion] = useState('midwest-corn-belt');
  const [activeSection, setActiveSection] = useState('overview');

  // Mock regional data
  const regions = [
    {
      id: 'midwest-corn-belt',
      name: 'Midwest Corn Belt',
      description: 'Prime agricultural region known for high-yield corn and soybean production',
      totalFarms: '2,847',
      totalAcres: '1.2M',
      avgYield: '185',
      successRate: 92,
      performance: 'high',
      dominantCrops: [
        { name: 'Corn', percentage: 45, acres: '540K' },
        { name: 'Soybeans', percentage: 35, acres: '420K' },
        { name: 'Wheat', percentage: 15, acres: '180K' },
        { name: 'Other', percentage: 5, acres: '60K' }
      ],
      highlights: [
        'Highest corn yields in the nation with optimal soil conditions',
        'Advanced precision agriculture adoption rate of 78%',
        'Strong cooperative network and agricultural support services',
        'Excellent transportation infrastructure for grain marketing'
      ],
      soilData: {
        ph: 6.8,
        nitrogen: 32,
        phosphorus: 45,
        potassium: 280,
        organicMatter: 4.2
      },
      recommendedCrops: [
        { name: 'Corn (Field)', suitability: 95 },
        { name: 'Soybeans', suitability: 92 },
        { name: 'Winter Wheat', suitability: 85 },
        { name: 'Alfalfa', suitability: 78 }
      ],
      soilImprovements: [
        'Consider cover crops to increase organic matter',
        'Monitor phosphorus levels to prevent runoff',
        'Implement variable rate fertilizer application',
        'Regular soil testing every 2-3 years recommended'
      ],
      weather: {
        precipitation: '3.8',
        temperature: 68,
        humidity: 72,
        growingDays: 165
      }
    },
    {
      id: 'great-plains',
      name: 'Great Plains',
      description: 'Extensive wheat and cattle region with diverse agricultural opportunities',
      totalFarms: '1,923',
      totalAcres: '2.1M',
      avgYield: '165',
      successRate: 85,
      performance: 'moderate',
      dominantCrops: [
        { name: 'Wheat', percentage: 55, acres: '1.16M' },
        { name: 'Corn', percentage: 25, acres: '525K' },
        { name: 'Sorghum', percentage: 15, acres: '315K' },
        { name: 'Other', percentage: 5, acres: '105K' }
      ],
      highlights: [
        'Leading wheat production region with drought-resistant varieties',
        'Integrated crop-livestock systems provide diversification',
        'Strong wind energy potential for additional farm income',
        'Excellent grain storage and transportation facilities'
      ],
      soilData: {
        ph: 7.2,
        nitrogen: 28,
        phosphorus: 38,
        potassium: 245,
        organicMatter: 3.1
      },
      recommendedCrops: [
        { name: 'Winter Wheat', suitability: 98 },
        { name: 'Grain Sorghum', suitability: 88 },
        { name: 'Corn', suitability: 75 },
        { name: 'Sunflowers', suitability: 82 }
      ],
      soilImprovements: [
        'Increase organic matter through crop residue management',
        'Consider no-till practices to conserve moisture',
        'Monitor soil erosion on sloped fields',
        'Implement windbreaks for soil protection'
      ],
      weather: {
        precipitation: '2.4',
        temperature: 62,
        humidity: 58,
        growingDays: 145
      }
    },
    {
      id: 'california-central-valley',
      name: 'California Central Valley',
      description: 'Intensive specialty crop production with advanced irrigation systems',
      totalFarms: '3,156',
      totalAcres: '850K',
      avgYield: '220',
      successRate: 88,
      performance: 'high',
      dominantCrops: [
        { name: 'Almonds', percentage: 30, acres: '255K' },
        { name: 'Grapes', percentage: 25, acres: '213K' },
        { name: 'Tomatoes', percentage: 20, acres: '170K' },
        { name: 'Other', percentage: 25, acres: '212K' }
      ],
      highlights: [
        'World-class specialty crop production with premium markets',
        'Advanced drip irrigation and precision agriculture',
        'Strong research partnerships with UC Davis',
        'Excellent processing and export infrastructure'
      ],
      soilData: {
        ph: 7.8,
        nitrogen: 45,
        phosphorus: 52,
        potassium: 320,
        organicMatter: 2.8
      },
      recommendedCrops: [
        { name: 'Almonds', suitability: 96 },
        { name: 'Wine Grapes', suitability: 94 },
        { name: 'Processing Tomatoes', suitability: 91 },
        { name: 'Pistachios', suitability: 89 }
      ],
      soilImprovements: [
        'Address high pH through sulfur applications',
        'Improve organic matter with compost additions',
        'Monitor salinity levels in irrigated fields',
        'Consider cover crops in tree crop alleys'
      ],
      weather: {
        precipitation: '1.2',
        temperature: 75,
        humidity: 45,
        growingDays: 280
      }
    },
    {
      id: 'southeast-cotton-belt',
      name: 'Southeast Cotton Belt',
      description: 'Traditional cotton and peanut region adapting to modern agriculture',
      totalFarms: '1,654',
      totalAcres: '980K',
      avgYield: '145',
      successRate: 78,
      performance: 'moderate',
      dominantCrops: [
        { name: 'Cotton', percentage: 40, acres: '392K' },
        { name: 'Peanuts', percentage: 25, acres: '245K' },
        { name: 'Corn', percentage: 20, acres: '196K' },
        { name: 'Other', percentage: 15, acres: '147K' }
      ],
      highlights: [
        'Strong cotton production with modern ginning facilities',
        'Diversified rotation systems improving soil health',
        'Growing adoption of precision agriculture technologies',
        'Excellent climate for double-cropping opportunities'
      ],
      soilData: {
        ph: 6.2,
        nitrogen: 24,
        phosphorus: 35,
        potassium: 185,
        organicMatter: 2.9
      },
      recommendedCrops: [
        { name: 'Cotton', suitability: 93 },
        { name: 'Peanuts', suitability: 90 },
        { name: 'Sweet Corn', suitability: 82 },
        { name: 'Soybeans', suitability: 78 }
      ],
      soilImprovements: [
        'Lime application to raise pH for optimal nutrient availability',
        'Increase potassium levels through targeted fertilization',
        'Implement cover crops to build organic matter',
        'Consider strip-till to reduce soil compaction'
      ],
      weather: {
        precipitation: '4.8',
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