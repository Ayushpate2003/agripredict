import React from 'react';
import Icon from '../../../components/AppIcon';


const RegionalOverview = ({ selectedRegion, regions }) => {
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">{region?.name}</h2>
          <p className="text-muted-foreground">{region?.description}</p>
        </div>
        <div className="w-16 h-16 agricultural-gradient rounded-full flex items-center justify-center">
          <Icon name="MapPin" size={32} color="white" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">{region?.totalFarms}</div>
          <div className="text-sm text-muted-foreground">Active Farms</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-secondary mb-1">{region?.totalAcres}</div>
          <div className="text-sm text-muted-foreground">Total Acres</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-accent mb-1">{region?.avgYield}</div>
          <div className="text-sm text-muted-foreground">Avg Yield (bu/acre)</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-success mb-1">{region?.successRate}%</div>
          <div className="text-sm text-muted-foreground">Success Rate</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Dominant Crops</h3>
          <div className="space-y-3">
            {region?.dominantCrops?.map((crop, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Wheat" size={16} color="var(--color-primary)" />
                  </div>
                  <span className="font-medium text-foreground">{crop?.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary">{crop?.percentage}%</div>
                  <div className="text-xs text-muted-foreground">{crop?.acres} acres</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Regional Highlights</h3>
          <div className="space-y-3">
            {region?.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                  <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                </div>
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalOverview;