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
  // Indian states as regions
  const regions = [
    {
      id: 'madhya-pradesh',
      name: 'Madhya Pradesh',
      description: 'Heart of India, major producer of wheat, soybean, and pulses.',
      totalFarms: '3,200',
      totalAcres: '1.5M',
      avgYield: '220',
      successRate: 90,
      performance: 'high',
      dominantCrops: [
        { name: 'Wheat', percentage: 40, acres: '600K' },
        { name: 'Soybean', percentage: 30, acres: '450K' },
        { name: 'Pulses', percentage: 20, acres: '300K' },
        { name: 'Other', percentage: 10, acres: '150K' }
      ],
      highlights: [
        'Largest wheat producer in India',
        'Significant soybean and pulse cultivation',
        'Rich black soil (regur) ideal for crops',
        'Rapid adoption of modern irrigation'
      ],
      soilData: {
        ph: 6.7,
        nitrogen: 30,
        phosphorus: 40,
        potassium: 250,
        organicMatter: 3.8
      },
      recommendedCrops: [
        { name: 'Wheat', suitability: 97 },
        { name: 'Soybean', suitability: 92 },
        { name: 'Gram', suitability: 88 },
        { name: 'Mustard', suitability: 80 }
      ],
      soilImprovements: [
        'Promote organic manure for soil health',
        'Monitor irrigation to prevent waterlogging',
        'Adopt crop rotation for sustainability',
        'Regular soil testing recommended'
      ],
      weather: {
        precipitation: '4.2',
        temperature: 27,
        humidity: 60,
        growingDays: 180
      }
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      description: 'India’s most populous state, major producer of sugarcane, rice, and wheat.',
      totalFarms: '4,100',
      totalAcres: '2.0M',
      avgYield: '210',
      successRate: 85,
      performance: 'moderate',
      dominantCrops: [
        { name: 'Sugarcane', percentage: 35, acres: '700K' },
        { name: 'Wheat', percentage: 30, acres: '600K' },
        { name: 'Rice', percentage: 25, acres: '500K' },
        { name: 'Other', percentage: 10, acres: '200K' }
      ],
      highlights: [
        'Largest sugarcane producer in India',
        'Extensive canal irrigation network',
        'Diverse cropping patterns',
        'High population density and small farm holdings'
      ],
      soilData: {
        ph: 7.1,
        nitrogen: 28,
        phosphorus: 36,
        potassium: 210,
        organicMatter: 2.9
      },
      recommendedCrops: [
        { name: 'Sugarcane', suitability: 95 },
        { name: 'Wheat', suitability: 90 },
        { name: 'Rice', suitability: 85 },
        { name: 'Potato', suitability: 80 }
      ],
      soilImprovements: [
        'Promote green manuring',
        'Improve drainage in low-lying areas',
        'Adopt integrated pest management',
        'Increase organic matter with compost'
      ],
      weather: {
        precipitation: '5.0',
        temperature: 25,
        humidity: 68,
        growingDays: 170
      }
    },
    {
      id: 'west-bengal',
      name: 'West Bengal',
      description: 'Eastern state, leading in rice and jute production, fertile alluvial plains.',
      totalFarms: '2,800',
      totalAcres: '1.1M',
      avgYield: '230',
      successRate: 88,
      performance: 'high',
      dominantCrops: [
        { name: 'Rice', percentage: 50, acres: '550K' },
        { name: 'Jute', percentage: 20, acres: '220K' },
        { name: 'Potato', percentage: 15, acres: '165K' },
        { name: 'Other', percentage: 15, acres: '165K' }
      ],
      highlights: [
        'Top rice and jute producer',
        'Fertile Ganges delta soil',
        'High rainfall and humidity',
        'Strong tradition of fish farming (pisciculture)'
      ],
      soilData: {
        ph: 6.5,
        nitrogen: 34,
        phosphorus: 38,
        potassium: 230,
        organicMatter: 4.1
      },
      recommendedCrops: [
        { name: 'Rice', suitability: 98 },
        { name: 'Jute', suitability: 90 },
        { name: 'Potato', suitability: 85 },
        { name: 'Mustard', suitability: 80 }
      ],
      soilImprovements: [
        'Promote organic farming',
        'Improve drainage in waterlogged areas',
        'Adopt SRI for rice',
        'Increase use of biofertilizers'
      ],
      weather: {
        precipitation: '6.1',
        temperature: 26,
        humidity: 75,
        growingDays: 200
      }
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      description: 'Western state, major producer of cotton, sugarcane, and pulses.',
      totalFarms: '3,500',
      totalAcres: '1.8M',
      avgYield: '200',
      successRate: 82,
      performance: 'moderate',
      dominantCrops: [
        { name: 'Cotton', percentage: 35, acres: '630K' },
        { name: 'Sugarcane', percentage: 30, acres: '540K' },
        { name: 'Pulses', percentage: 20, acres: '360K' },
        { name: 'Other', percentage: 15, acres: '270K' }
      ],
      highlights: [
        'Largest cotton producer in India',
        'Significant sugarcane and pulse cultivation',
        'Diverse agro-climatic zones',
        'Rapid mechanization in agriculture'
      ],
      soilData: {
        ph: 7.3,
        nitrogen: 26,
        phosphorus: 32,
        potassium: 220,
        organicMatter: 2.7
      },
      recommendedCrops: [
        { name: 'Cotton', suitability: 94 },
        { name: 'Sugarcane', suitability: 89 },
        { name: 'Tur (Pigeon Pea)', suitability: 85 },
        { name: 'Soybean', suitability: 80 }
      ],
      soilImprovements: [
        'Promote drip irrigation',
        'Adopt crop diversification',
        'Increase organic matter',
        'Monitor for salinity in irrigated areas'
      ],
      weather: {
        precipitation: '3.5',
        temperature: 28,
        humidity: 58,
        growingDays: 160
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
        <div className="flex items-center space-x-3 mb-4">
          <img src="/assets/images/krishi-drishti-footer-logo.png" alt="Krishi-Drishti Logo" className="h-10 w-auto bg-white rounded-lg p-1" style={{background: 'transparent'}} />
          <span className="text-xl font-bold">Krishi-Drishti</span>
        </div>
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