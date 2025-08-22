import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: 'Brain',
      title: 'AI-Powered Forecasting',
      description: 'Advanced machine learning models analyze weather patterns, soil conditions, and historical data to predict crop yields with unprecedented accuracy.',
      benefits: [
        'Real-time weather integration',
        'Multi-factor analysis engine',
        'Seasonal pattern recognition',
        'Climate change adaptation'
      ],
      visualization: {
        type: 'weather-to-yield',
        data: [
          { month: 'Mar', weather: 65, yield: 120 },
          { month: 'Apr', weather: 72, yield: 135 },
          { month: 'May', weather: 78, yield: 150 },
          { month: 'Jun', weather: 85, yield: 165 },
          { month: 'Jul', weather: 88, yield: 180 },
          { month: 'Aug', weather: 82, yield: 175 }
        ]
      },
      link: '/forecast-dashboard-ai-prediction-interface'
    },
    {
      icon: 'Map',
      title: 'Regional Intelligence',
      description: 'Location-specific insights that understand your local microclimate, soil composition, and regional growing conditions for precise recommendations.',
      benefits: [
        'Hyperlocal weather data',
        'Soil composition analysis',
        'Regional crop optimization',
        'Peer comparison metrics'
      ],
      visualization: {
        type: 'crop-zones',
        data: [
          { region: 'Midwest', corn: 185, soybeans: 52, wheat: 45 },
          { region: 'Great Plains', corn: 165, soybeans: 48, wheat: 55 },
          { region: 'California', corn: 210, soybeans: 45, wheat: 42 },
          { region: 'Southeast', corn: 175, soybeans: 50, wheat: 48 }
        ]
      },
      link: '/regional-insights-location-specific-intelligence'
    },
    {
      icon: 'BookOpen',
      title: 'Scientific Transparency',
      description: 'Complete visibility into our methodology, data sources, and model performance. Understand exactly how predictions are generated and validated.',
      benefits: [
        'Open methodology documentation',
        'Model accuracy tracking',
        'Data source transparency',
        'Peer-reviewed research'
      ],
      visualization: {
        type: 'confidence-indicators',
        data: [
          { model: 'Weather Integration', accuracy: 94, confidence: 'High' },
          { model: 'Soil Analysis', accuracy: 89, confidence: 'High' },
          { model: 'Historical Patterns', accuracy: 92, confidence: 'High' },
          { model: 'Climate Adaptation', accuracy: 87, confidence: 'Medium' }
        ]
      },
      link: '/about-methodology-scientific-transparency'
    }
  ];

  const renderVisualization = (feature) => {
    const { visualization } = feature;
    
    if (visualization?.type === 'weather-to-yield') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Weather Favorability</span>
            <span>Predicted Yield</span>
          </div>
          {visualization?.data?.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium">{item?.month}</div>
              <div className="flex-1 bg-muted rounded-full h-2 relative">
                <div 
                  className="bg-primary h-2 rounded-full growth-transition"
                  style={{ width: `${(item?.weather / 100) * 100}%` }}
                />
              </div>
              <div className="w-16 text-sm font-medium text-right">{item?.yield} bu</div>
            </div>
          ))}
        </div>
      );
    }
    
    if (visualization?.type === 'crop-zones') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {visualization?.data?.map((region, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="font-medium text-sm">{region?.region}</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Corn:</span>
                  <span className="font-medium">{region?.corn} bu/acre</span>
                </div>
                <div className="flex justify-between">
                  <span>Soybeans:</span>
                  <span className="font-medium">{region?.soybeans} bu/acre</span>
                </div>
                <div className="flex justify-between">
                  <span>Wheat:</span>
                  <span className="font-medium">{region?.wheat} bu/acre</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (visualization?.type === 'confidence-indicators') {
      return (
        <div className="space-y-3">
          {visualization?.data?.map((model, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{model?.model}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  model?.confidence === 'High' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                }`}>
                  {model?.confidence}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full growth-transition"
                    style={{ width: `${model?.accuracy}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-12">{model?.accuracy}%</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="bg-muted/20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Core Capabilities That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three pillars of agricultural intelligence working together to transform your farming decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl harvest-shadow p-8 space-y-6 growth-transition cursor-pointer ${
                activeFeature === index ? 'ring-2 ring-primary/20 seasonal-hover' : 'hover:seasonal-hover'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center">
                    <Icon name={feature?.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature?.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature?.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                <ul className="space-y-2">
                  {feature?.benefits?.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visualization */}
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm font-medium text-foreground mb-4">Live Preview:</div>
                {renderVisualization(feature)}
              </div>

              <Link to={feature?.link}>
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Explore Feature
                </Button>
              </Link>
            </div>
          ))}
        </div>

  {/* Bottom CTA removed as per request */}
      </div>
    </section>
  );
};

export default FeaturesSection;