import React, { useState } from 'react';
import Icon from './AppIcon';

const LocationSelector = ({ onLocationChange, currentLocation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    { 
      name: 'Mumbai, Maharashtra', 
      lat: 19.0760, 
      lng: 72.8777, 
      region: 'India',
      climate: 'Tropical',
      avgTemp: '27°C'
    },
    { 
      name: 'Delhi, Delhi', 
      lat: 28.7041, 
      lng: 77.1025, 
      region: 'India',
      climate: 'Semi-arid',
      avgTemp: '25°C'
    },
    { 
      name: 'Bangalore, Karnataka', 
      lat: 12.9716, 
      lng: 77.5946, 
      region: 'India',
      climate: 'Tropical',
      avgTemp: '24°C'
    },
    { 
      name: 'Chennai, Tamil Nadu', 
      lat: 13.0827, 
      lng: 80.2707, 
      region: 'India',
      climate: 'Tropical',
      avgTemp: '28°C'
    },
    { 
      name: 'Kolkata, West Bengal', 
      lat: 22.5726, 
      lng: 88.3639, 
      region: 'India',
      climate: 'Tropical',
      avgTemp: '26°C'
    },
    { 
      name: 'Hyderabad, Telangana', 
      lat: 17.3850, 
      lng: 78.4867, 
      region: 'India',
      climate: 'Semi-arid',
      avgTemp: '26°C'
    },
    { 
      name: 'Pune, Maharashtra', 
      lat: 18.5204, 
      lng: 73.8567, 
      region: 'India',
      climate: 'Tropical',
      avgTemp: '24°C'
    },
    { 
      name: 'Ahmedabad, Gujarat', 
      lat: 23.0225, 
      lng: 72.5714, 
      region: 'India',
      climate: 'Semi-arid',
      avgTemp: '27°C'
    },
    { 
      name: 'Jaipur, Rajasthan', 
      lat: 26.9124, 
      lng: 75.7873, 
      region: 'India',
      climate: 'Desert',
      avgTemp: '25°C'
    },
    { 
      name: 'Lucknow, Uttar Pradesh', 
      lat: 26.8467, 
      lng: 80.9462, 
      region: 'India',
      climate: 'Humid subtropical',
      avgTemp: '25°C'
    },
    { 
      name: 'Iowa County, IA', 
      lat: 41.8781, 
      lng: -87.6298, 
      region: 'USA',
      climate: 'Humid continental',
      avgTemp: '10°C'
    },
    { 
      name: 'Madison County, IL', 
      lat: 38.6270, 
      lng: -90.1994, 
      region: 'USA',
      climate: 'Humid subtropical',
      avgTemp: '13°C'
    },
    { 
      name: 'Johnson County, KS', 
      lat: 38.8858, 
      lng: -94.8191, 
      region: 'USA',
      climate: 'Humid subtropical',
      avgTemp: '13°C'
    },
    { 
      name: 'Lancaster County, NE', 
      lat: 40.8136, 
      lng: -96.7026, 
      region: 'USA',
      climate: 'Humid continental',
      avgTemp: '10°C'
    },
    { 
      name: 'Dakota County, MN', 
      lat: 44.6719, 
      lng: -93.0616, 
      region: 'USA',
      climate: 'Humid continental',
      avgTemp: '7°C'
    }
  ];

  const getCurrentLocationName = () => {
    if (!currentLocation) return 'Select Location';
    
    const location = locations.find(loc => 
      loc.lat === currentLocation.lat && loc.lng === currentLocation.lng
    );
    
    return location ? location.name : 'Custom Location';
  };

  const handleLocationSelect = (location) => {
    onLocationChange(location);
    setIsOpen(false);
  };

  const getRegionColor = (region) => {
    return region === 'India' ? 'text-orange-600' : 'text-blue-600';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted/30 transition-colors"
      >
        <Icon name="MapPin" size={16} className="text-primary" />
        <span className="text-sm font-medium text-foreground">
          {getCurrentLocationName()}
        </span>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-muted-foreground" 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-3 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Select Farm Location</h3>
            <p className="text-xs text-muted-foreground">Temperature varies by location and season</p>
          </div>
          
          <div className="divide-y divide-border">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationSelect(location)}
                className="w-full p-3 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-foreground">
                        {location.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getRegionColor(location.region)} bg-muted/30`}>
                        {location.region}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-muted-foreground">
                        Climate: {location.climate}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Avg: {location.avgTemp}
                      </span>
                    </div>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-3 border-t border-border bg-muted/10">
            <p className="text-xs text-muted-foreground">
              💡 Tip: Select different locations to see how temperature and weather conditions change
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
