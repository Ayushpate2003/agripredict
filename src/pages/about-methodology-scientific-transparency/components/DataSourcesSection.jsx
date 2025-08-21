import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DataSourcesSection = () => {
  const dataSources = [
    {
      category: 'Weather & Climate',
      icon: 'Cloud',
      sources: [
        {
          name: 'NOAA (National Oceanic and Atmospheric Administration)',
          description: 'Comprehensive weather data, climate records, and atmospheric monitoring',
          coverage: 'Global coverage with 15,000+ stations',
          logo: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'European Space Agency (ESA)',
          description: 'Satellite imagery and earth observation data for crop monitoring',
          coverage: 'Global satellite coverage, 10m resolution',
          logo: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'Weather Underground',
          description: 'Real-time weather data and hyperlocal weather station network',
          coverage: '250,000+ personal weather stations',
          logo: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        }
      ]
    },
    {
      category: 'Agricultural Data',
      icon: 'Wheat',
      sources: [
        {
          name: 'USDA National Agricultural Statistics Service',
          description: 'Crop production data, yield statistics, and farming practice surveys',
          coverage: 'US agricultural data since 1866',
          logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'FAO (Food and Agriculture Organization)',
          description: 'Global agricultural statistics and food security data',
          coverage: '195 countries, 50+ years of data',
          logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'Regional Agricultural Cooperatives',
          description: 'Local farming data, best practices, and yield records',
          coverage: '500+ cooperatives globally',
          logo: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        }
      ]
    },
    {
      category: 'Soil & Environment',
      icon: 'Mountain',
      sources: [
        {
          name: 'ISRIC World Soil Information',
          description: 'Global soil property maps and soil health indicators',
          coverage: 'Global soil data at 250m resolution',
          logo: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'NASA Soil Moisture Active Passive',
          description: 'Soil moisture measurements and drought monitoring',
          coverage: 'Global coverage every 2-3 days',
          logo: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
          name: 'National Soil Survey Centers',
          description: 'Detailed soil composition and classification data',
          coverage: '50+ countries with detailed surveys',
          logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        }
      ]
    }
  ];

  const partnerships = [
    {
      name: 'University of California, Davis',
      type: 'Research Partnership',
      focus: 'Crop yield modeling and climate adaptation',
      duration: 'Since 2021',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Stanford AI Lab',
      type: 'Technology Partnership',
      focus: 'Machine learning model development',
      duration: 'Since 2020',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Cornell Agricultural Research',
      type: 'Validation Partnership',
      focus: 'Field testing and model validation',
      duration: 'Since 2022',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'International Rice Research Institute',
      type: 'Data Partnership',
      focus: 'Rice cultivation and yield optimization',
      duration: 'Since 2021',
      logo: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
              <Icon name="Database" size={24} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Data Sources & Partnerships</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our predictions are powered by trusted data sources and validated through partnerships with leading agricultural institutions
          </p>
        </div>

        {/* Data Sources */}
        <div className="space-y-12 mb-20">
          {dataSources?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl harvest-shadow overflow-hidden">
              <div className="bg-primary/5 px-8 py-6 border-b border-border">
                <div className="flex items-center">
                  <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
                    <Icon name={category?.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category?.category}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category?.sources?.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 growth-transition">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image 
                            src={source?.logo}
                            alt={`${source?.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{source?.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{source?.description}</p>
                          <div className="flex items-center space-x-2">
                            <Icon name="MapPin" size={14} className="text-primary" />
                            <span className="text-xs font-medium text-primary">{source?.coverage}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Partnerships */}
        <div className="bg-white rounded-2xl harvest-shadow overflow-hidden">
          <div className="bg-primary/5 px-8 py-6 border-b border-border">
            <div className="flex items-center">
              <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
                <Icon name="Users" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Research Partnerships</h3>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {partnerships?.map((partnership, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-xl">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src={partnership?.logo}
                      alt={`${partnership?.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{partnership?.name}</h4>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {partnership?.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{partnership?.focus}</p>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{partnership?.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Quality Assurance */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Data Quality Assurance</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              All data sources undergo rigorous validation processes including cross-referencing, 
              outlier detection, and quality scoring to ensure the highest accuracy in our predictions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Automated Validation</h4>
                <p className="text-sm text-muted-foreground">Real-time data quality checks and anomaly detection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="RefreshCw" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Continuous Updates</h4>
                <p className="text-sm text-muted-foreground">Data refreshed every 6 hours for maximum accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quality Scoring</h4>
                <p className="text-sm text-muted-foreground">Each data point receives a quality score for transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSourcesSection;