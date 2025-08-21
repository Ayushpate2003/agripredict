import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const MetricsBar = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    acres: 0,
    accuracy: 0,
    improvement: 0,
    farmers: 0
  });

  const targetMetrics = {
    acres: 2.3,
    accuracy: 94,
    improvement: 15,
    farmers: 10000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedMetrics({
        acres: Math.min(targetMetrics?.acres * progress, targetMetrics?.acres),
        accuracy: Math.min(targetMetrics?.accuracy * progress, targetMetrics?.accuracy),
        improvement: Math.min(targetMetrics?.improvement * progress, targetMetrics?.improvement),
        farmers: Math.min(targetMetrics?.farmers * progress, targetMetrics?.farmers)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num, suffix = '') => {
    if (suffix === 'M') {
      return `${num?.toFixed(1)}${suffix}`;
    } else if (suffix === 'K') {
      return `${(num / 1000)?.toFixed(0)}${suffix}`;
    } else if (suffix === '%') {
      return `${Math.round(num)}${suffix}`;
    }
    return Math.round(num)?.toString();
  };

  const metrics = [
    {
      icon: 'MapPin',
      value: formatNumber(animatedMetrics?.acres, 'M'),
              label: 'Hectares Analyzed',
      description: 'Agricultural land under AI monitoring',
      color: 'text-primary'
    },
    {
      icon: 'Target',
      value: formatNumber(animatedMetrics?.accuracy, '%'),
      label: 'Prediction Accuracy',
      description: 'Verified against actual harvest data',
      color: 'text-success'
    },
    {
      icon: 'TrendingUp',
      value: formatNumber(animatedMetrics?.improvement, '%'),
      label: 'Average Yield Improvement',
      description: 'Reported by farmers using our platform',
      color: 'text-accent'
    },
    {
      icon: 'Users',
      value: formatNumber(animatedMetrics?.farmers, 'K'),
      label: 'Farmers Served',
      description: 'Growing community of agricultural professionals',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Agricultural Professionals Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time platform statistics demonstrating our impact on modern agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics?.map((metric, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 growth-transition group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white harvest-shadow group-hover:scale-110 growth-transition`}>
                <Icon 
                  name={metric?.icon} 
                  size={24} 
                  className={metric?.color}
                />
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-foreground">
                  {metric?.value}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {metric?.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric?.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Update Indicator */}
        <div className="flex items-center justify-center space-x-2 mt-8 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Live data • Updated every 5 minutes</span>
          <Icon name="RefreshCw" size={14} className="animate-spin" />
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;