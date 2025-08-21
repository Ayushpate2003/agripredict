import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeHeader = ({ farmer, currentSeason, weatherAlert }) => {
  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={farmer?.avatar}
              alt={farmer?.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, {farmer?.name}
            </h1>
            <p className="text-muted-foreground">
              {farmer?.location} • {farmer?.farmSize} hectares • {currentSeason} Season
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {weatherAlert && (
            <div className="flex items-center space-x-2 px-3 py-2 bg-warning/10 text-warning rounded-md">
              <Icon name="AlertTriangle" size={16} />
              <span className="text-sm font-medium">{weatherAlert}</span>
            </div>
          )}
          <div className="flex items-center space-x-2 px-3 py-2 bg-primary/10 text-primary rounded-md">
            <Icon name="Calendar" size={16} />
            <span className="text-sm font-medium">Last updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;