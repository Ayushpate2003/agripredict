import React from 'react';
import Icon from '../../../components/AppIcon';

const CropOverviewCards = ({ crops }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'text-success bg-success/10';
      case 'Good': return 'text-primary bg-primary/10';
      case 'Fair': return 'text-warning bg-warning/10';
      case 'Poor': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Excellent': return 'TrendingUp';
      case 'Good': return 'CheckCircle';
      case 'Fair': return 'AlertCircle';
      case 'Poor': return 'AlertTriangle';
      default: return 'Minus';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {crops?.map((crop) => (
        <div key={crop?.id} className="bg-white rounded-lg harvest-shadow p-6 seasonal-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 agricultural-gradient rounded-lg flex items-center justify-center">
                <Icon name={crop?.icon} size={24} color="white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{crop?.name}</h3>
                <p className="text-sm text-muted-foreground">{crop?.variety}</p>
              </div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(crop?.status)}`}>
              <div className="flex items-center space-x-1">
                <Icon name={getStatusIcon(crop?.status)} size={12} />
                <span>{crop?.status}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Planted Area</span>
                              <span className="font-medium">{crop?.plantedArea} hectares</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Growth Stage</span>
              <span className="font-medium">{crop?.growthStage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Expected Yield</span>
              <span className="font-medium text-primary">{crop?.expectedYield}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Harvest Date</span>
              <span className="font-medium">{crop?.harvestDate}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Prediction Accuracy</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-primary rounded-full growth-transition"
                    style={{ width: `${crop?.accuracy}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{crop?.accuracy}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CropOverviewCards;