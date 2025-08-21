import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MethodologySection = () => {
  const [activeTab, setActiveTab] = useState('data-collection');

  const methodologyTabs = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: 'Database',
      content: {
        overview: `Our data collection process aggregates information from over 50,000 weather stations, 
                  satellite imagery from NASA and ESA, soil composition databases, and historical yield records 
                  spanning 30+ years across multiple geographic regions.`,
        details: [
          {
            title: 'Weather Data Sources',
            description: 'Real-time and historical weather data from NOAA, Weather Underground, and regional meteorological services',
            metrics: '50,000+ stations globally'
          },
          {
            title: 'Satellite Imagery',
            description: 'High-resolution multispectral imagery for crop health monitoring and growth stage analysis',
            metrics: '10m resolution, updated weekly'
          },
          {
            title: 'Soil Data',
            description: 'Comprehensive soil composition, pH levels, nutrient content, and drainage characteristics',
            metrics: '2.3M soil samples analyzed'
          },
          {
            title: 'Historical Yields',
            description: 'Crop yield records from agricultural departments, farming cooperatives, and research institutions',
            metrics: '30+ years of historical data'
          }
        ]
      }
    },
    {
      id: 'ml-models',
      title: 'ML Models',
      icon: 'Brain',
      content: {
        overview: `Our ensemble approach combines multiple machine learning algorithms including Random Forest, 
                  Gradient Boosting, and Deep Neural Networks, each optimized for specific crop types and 
                  environmental conditions to maximize prediction accuracy.`,
        details: [
          {
            title: 'Ensemble Architecture',
            description: 'Multiple algorithms working together to provide robust predictions with uncertainty quantification',
            metrics: '7 core algorithms combined'
          },
          {
            title: 'Crop-Specific Models',
            description: 'Specialized models trained for different crop types, accounting for unique growth patterns and requirements',
            metrics: '45+ crop-specific models'
          },
          {
            title: 'Feature Engineering',
            description: 'Advanced feature extraction from raw data including weather patterns, soil interactions, and seasonal trends',
            metrics: '200+ engineered features'
          },
          {
            title: 'Continuous Learning',
            description: 'Models automatically retrain with new data to adapt to changing climate patterns and farming practices',
            metrics: 'Updated every 48 hours'
          }
        ]
      }
    },
    {
      id: 'validation',
      title: 'Validation',
      icon: 'CheckCircle',
      content: {
        overview: `Our rigorous validation process includes cross-validation, out-of-sample testing, and 
                  real-world validation with partner farms to ensure our predictions maintain high accuracy 
                  across diverse agricultural conditions.`,
        details: [
          {
            title: 'Cross-Validation',
            description: 'K-fold cross-validation across different geographic regions and time periods to test model robustness',
            metrics: '10-fold validation standard'
          },
          {
            title: 'Backtesting',
            description: 'Historical prediction accuracy testing using past data to validate model performance over time',
            metrics: '5-year backtest period'
          },
          {
            title: 'Field Validation',
            description: 'Real-world testing with partner farms to compare predictions against actual harvest outcomes',
            metrics: '500+ validation farms'
          },
          {
            title: 'Peer Review',
            description: 'Independent validation by agricultural scientists and statisticians from partner universities',
            metrics: '12 peer-reviewed studies'
          }
        ]
      }
    },
    {
      id: 'accuracy',
      title: 'Accuracy Metrics',
      icon: 'Target',
      content: {
        overview: `Our models achieve industry-leading accuracy rates with continuous monitoring and 
                  improvement. We provide transparent accuracy metrics and confidence intervals for 
                  all predictions to help farmers make informed decisions.`,
        details: [
          {
            title: 'Overall Accuracy',
            description: 'Mean absolute percentage error across all crop types and regions with 95% confidence intervals',
            metrics: '95.3% average accuracy'
          },
          {
            title: 'Crop-Specific Performance',
            description: 'Detailed accuracy metrics for individual crop types showing model strengths and limitations',
            metrics: '92-98% range by crop'
          },
          {
            title: 'Regional Variations',
            description: 'Accuracy analysis across different climate zones and geographic regions',
            metrics: '94-97% regional accuracy'
          },
          {
            title: 'Seasonal Adjustments',
            description: 'Performance tracking across different seasons and weather conditions',
            metrics: '±2% seasonal variance'
          }
        ]
      }
    }
  ];

  const activeContent = methodologyTabs?.find(tab => tab?.id === activeTab);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
              <Icon name="Cog" size={24} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Methodology</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the scientific rigor and advanced technology behind AgriPredict's AI-powered crop yield predictions
          </p>
        </div>

        <div className="bg-white rounded-2xl harvest-shadow overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-border">
            <div className="flex overflow-x-auto">
              {methodologyTabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-3 px-6 py-4 text-sm font-medium whitespace-nowrap growth-transition ${
                    activeTab === tab?.id
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Icon name={activeContent?.icon} size={24} className="mr-3 text-primary" />
                {activeContent?.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeContent?.content?.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeContent?.content?.details?.map((detail, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{detail?.title}</h4>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {detail?.metrics}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{detail?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;