import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const HeroSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('maharashtra');
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const regionOptions = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' }
  ];

  const cropOptions = [
    { value: 'sugarcane', label: 'Sugarcane' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'rice', label: 'Rice' },
    { value: 'groundnut', label: 'Groundnut' }
  ];

  const mockPredictions = {
    'maharashtra-sugarcane': { yield: 45, confidence: 94, trend: 'up', change: '+12%' },
    'maharashtra-cotton': { yield: 35, confidence: 91, trend: 'up', change: '+8%' },
    'rajasthan-wheat': { yield: 40, confidence: 89, trend: 'stable', change: '+3%' },
    'gujarat-groundnut': { yield: 52, confidence: 96, trend: 'up', change: '+15%' },
    'uttar-pradesh-rice': { yield: 42, confidence: 87, trend: 'down', change: '-2%' }
  };

  const generatePrediction = () => {
    setIsLoading(true);
    setTimeout(() => {
      const key = `${selectedRegion}-${selectedCrop}`;
      const prediction = mockPredictions?.[key] || {
        yield: Math.floor(Math.random() * 30) + 35,
        confidence: Math.floor(Math.random() * 20) + 80,
        trend: ['up', 'stable', 'down']?.[Math.floor(Math.random() * 3)],
        change: `${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 15) + 1}%`
      };
      setPredictionData(prediction);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    generatePrediction();
  }, [selectedRegion, selectedCrop]);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/10 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>AI-Powered Agricultural Intelligence</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Intelligent farming starts with{' '}
                <span className="text-primary">intelligent forecasting</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform complex crop yield data into actionable insights. Make confident farming decisions with AI-powered predictions that adapt to your local conditions and climate patterns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Zap"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                Try Free Prediction
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                View Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>USDA Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Award" size={16} className="text-primary" />
                <span>University Research Backed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Users" size={16} className="text-primary" />
                <span>10,000+ Farmers Trust Us</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="bg-white rounded-2xl harvest-shadow p-6 lg:p-8 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Live Prediction Demo</h3>
              <p className="text-muted-foreground">Select your region and crop to see instant AI predictions</p>
            </div>

            <div className="space-y-4">
              <Select
                label="Select Region"
                options={regionOptions}
                value={selectedRegion}
                onChange={setSelectedRegion}
              />

              <Select
                label="Select Crop"
                options={cropOptions}
                value={selectedCrop}
                onChange={setSelectedCrop}
              />
            </div>

            {/* Prediction Results */}
            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <span className="text-muted-foreground">Analyzing conditions...</span>
                  </div>
                </div>
              ) : predictionData ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {predictionData?.yield} q/ha
                    </div>
                    <div className="text-sm text-muted-foreground">Predicted Yield</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg font-semibold text-foreground">
                        {predictionData?.confidence}%
                      </div>
                      <div className="text-xs text-muted-foreground">Confidence</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className={`flex items-center justify-center space-x-1 text-lg font-semibold ${getTrendColor(predictionData?.trend)}`}>
                        <Icon name={getTrendIcon(predictionData?.trend)} size={16} />
                        <span>{predictionData?.change}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">vs Last Year</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>Updated 2 minutes ago</span>
                  </div>
                </div>
              ) : null}
            </div>

            <Link to="/forecast-dashboard-ai-prediction-interface">
              <Button variant="outline" fullWidth iconName="ArrowRight" iconPosition="right">
                View Full Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;