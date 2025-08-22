import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const HeroSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('madhya-pradesh');
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const regionOptions = [
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'maharashtra', label: 'Maharashtra' }
  ];

  const cropOptions = [
    { value: 'corn', label: 'Corn' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'rice', label: 'Rice' }
  ];

  const mockPredictions = {
    'madhya-pradesh-wheat': { yield: 220, confidence: 92, trend: 'up', change: '+10%' },
    'madhya-pradesh-soybean': { yield: 180, confidence: 90, trend: 'up', change: '+8%' },
    'madhya-pradesh-pulses': { yield: 140, confidence: 88, trend: 'stable', change: '+2%' },
    'uttar-pradesh-wheat': { yield: 210, confidence: 89, trend: 'up', change: '+7%' },
    'uttar-pradesh-sugarcane': { yield: 320, confidence: 91, trend: 'up', change: '+12%' },
    'uttar-pradesh-rice': { yield: 190, confidence: 87, trend: 'stable', change: '+3%' },
    'west-bengal-rice': { yield: 230, confidence: 93, trend: 'up', change: '+11%' },
    'west-bengal-jute': { yield: 150, confidence: 85, trend: 'stable', change: '+1%' },
    'west-bengal-potato': { yield: 170, confidence: 88, trend: 'up', change: '+5%' },
    'maharashtra-cotton': { yield: 200, confidence: 86, trend: 'down', change: '-3%' },
    'maharashtra-sugarcane': { yield: 310, confidence: 90, trend: 'up', change: '+9%' },
    'maharashtra-pulses': { yield: 160, confidence: 84, trend: 'stable', change: '+2%' }
  };

  const generatePrediction = () => {
    setIsLoading(true);
    setTimeout(() => {
      const key = `${selectedRegion}-${selectedCrop}`;
      const prediction = mockPredictions?.[key] || {
        yield: Math.floor(Math.random() * 100) + 120,
        confidence: Math.floor(Math.random() * 20) + 80,
        trend: ['up', 'stable', 'down']?.[Math.floor(Math.random() * 3)],
        change: `${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 15) + 1}%`
      };
      setPredictionData(prediction);
      setIsLoading(false);
    }, 1200);
  };

  // Helper functions for trend color and icon
  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-yellow-600';
  };
  const getTrendIcon = (trend) => {
    if (trend === 'up') return 'ArrowUpRight';
    if (trend === 'down') return 'ArrowDownRight';
    return 'Minus';
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/10 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#000000\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
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
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
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
          {/* Right Content - Live Prediction Demo */}
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
              <Button onClick={generatePrediction} disabled={isLoading} className="w-full">
                {isLoading ? 'Predicting...' : 'Get Prediction'}
              </Button>
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
                      {predictionData?.yield} bu/acre
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;