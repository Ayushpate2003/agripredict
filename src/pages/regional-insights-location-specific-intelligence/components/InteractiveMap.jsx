import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = ({ regions, selectedRegion, onRegionSelect }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Regional Performance Map</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-xs text-muted-foreground">High Performance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span className="text-xs text-muted-foreground">Moderate Performance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-error rounded-full"></div>
            <span className="text-xs text-muted-foreground">Needs Attention</span>
          </div>
        </div>
      </div>
      <div className="relative bg-muted rounded-lg p-8 min-h-96">
        {/* Interactive Map Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Agricultural Regions Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=40.7128,-74.0060&z=6&output=embed"
            className="rounded-lg"
          />
        </div>

        {/* Region Markers */}
        <div className="absolute inset-0 pointer-events-none">
          {regions?.map((region, index) => (
            <div
              key={region?.id}
              className={`absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                index === 0 ? 'top-1/4 left-1/4' :
                index === 1 ? 'top-1/3 right-1/4' :
                index === 2 ? 'bottom-1/3 left-1/3': 'bottom-1/4 right-1/3'
              }`}
              onClick={() => onRegionSelect(region?.id)}
              onMouseEnter={() => setHoveredRegion(region?.id)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center growth-transition ${
                selectedRegion === region?.id 
                  ? 'bg-primary scale-125' 
                  : region?.performance === 'high' ?'bg-success' 
                    : region?.performance === 'moderate' ?'bg-warning' :'bg-error'
              } ${hoveredRegion === region?.id ? 'scale-110' : ''}`}>
                <Icon name="MapPin" size={16} color="white" />
              </div>
              
              {(hoveredRegion === region?.id || selectedRegion === region?.id) && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg harvest-shadow p-3 min-w-48 z-10">
                  <div className="text-sm font-semibold text-foreground mb-1">{region?.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">{region?.description}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Avg Yield:</span>
                    <span className="font-medium text-primary">{region?.avgYield} q/ha</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions?.map((region) => (
          <button
            key={region?.id}
            onClick={() => onRegionSelect(region?.id)}
            className={`p-4 rounded-lg border growth-transition text-left ${
              selectedRegion === region?.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-foreground">{region?.name}</span>
              <div className={`w-3 h-3 rounded-full ${
                region?.performance === 'high' ? 'bg-success' :
                region?.performance === 'moderate' ? 'bg-warning' : 'bg-error'
              }`}></div>
            </div>
            <div className="text-sm text-muted-foreground">{region?.totalFarms} farms</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;