import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const RealtimeWeatherWidget = ({ location }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const mockWeatherData = {
    current: {
      temperature: 72,
      humidity: 68,
      windSpeed: 8.5,
      windDirection: 'SW',
      pressure: 30.15,
      visibility: 10,
      uvIndex: 6,
      condition: 'Partly Cloudy',
      icon: 'CloudSun'
    },
    forecast: [
      { day: 'Today', high: 78, low: 65, condition: 'Partly Cloudy', icon: 'CloudSun', precipitation: 10 },
      { day: 'Tomorrow', high: 82, low: 68, condition: 'Sunny', icon: 'Sun', precipitation: 0 },
      { day: 'Wed', high: 79, low: 66, condition: 'Scattered Showers', icon: 'CloudRain', precipitation: 40 },
      { day: 'Thu', high: 75, low: 62, condition: 'Thunderstorms', icon: 'CloudLightning', precipitation: 80 },
      { day: 'Fri', high: 77, low: 64, condition: 'Partly Cloudy', icon: 'CloudSun', precipitation: 20 }
    ],
    alerts: [
      {
        type: 'watch',
        title: 'Thunderstorm Watch',
        description: 'Severe thunderstorms possible Thursday afternoon',
        severity: 'moderate'
      }
    ]
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  };

  const getAlertColor = (severity) => {
    switch (severity) {
      case 'severe': return 'bg-error/10 border-error text-error';
      case 'moderate': return 'bg-warning/10 border-warning text-warning';
      case 'minor': return 'bg-accent/10 border-accent text-accent';
      default: return 'bg-muted/10 border-muted text-muted-foreground';
    }
  };

  const getAlertIcon = (severity) => {
    switch (severity) {
      case 'severe': return 'AlertTriangle';
      case 'moderate': return 'AlertCircle';
      case 'minor': return 'Info';
      default: return 'Bell';
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
              <Icon name="Cloud" size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Real-time Weather</h3>
              <p className="text-sm text-muted-foreground">
                {location || 'Iowa County, IA'} • {formatDate(currentTime)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="text-sm font-medium text-foreground">{formatTime(currentTime)}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Current Weather */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name={mockWeatherData?.current?.icon} size={32} className="text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{mockWeatherData?.current?.temperature}°F</p>
                <p className="text-sm text-muted-foreground">{mockWeatherData?.current?.condition}</p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center space-x-2">
                <Icon name="Droplets" size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">{mockWeatherData?.current?.humidity}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Wind" size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  {mockWeatherData?.current?.windSpeed} mph {mockWeatherData?.current?.windDirection}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Gauge" size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">{mockWeatherData?.current?.pressure} in</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Icon name="Eye" size={16} className="text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Visibility</p>
              <p className="text-sm font-medium text-foreground">{mockWeatherData?.current?.visibility} mi</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Icon name="Sun" size={16} className="text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">UV Index</p>
              <p className="text-sm font-medium text-foreground">{mockWeatherData?.current?.uvIndex}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Icon name="Thermometer" size={16} className="text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Feels Like</p>
              <p className="text-sm font-medium text-foreground">75°F</p>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">5-Day Forecast</h4>
          <div className="space-y-2">
            {mockWeatherData?.forecast?.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 growth-transition">
                <div className="flex items-center space-x-3">
                  <Icon name={day?.icon} size={20} className="text-primary" />
                  <span className="text-sm font-medium text-foreground w-16">{day?.day}</span>
                  <span className="text-sm text-muted-foreground">{day?.condition}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="CloudRain" size={12} className="text-accent" />
                    <span className="text-xs text-muted-foreground">{day?.precipitation}%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-foreground">{day?.high}°</span>
                    <span className="text-sm text-muted-foreground">/{day?.low}°</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Alerts */}
        {mockWeatherData?.alerts?.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-foreground mb-3">Weather Alerts</h4>
            <div className="space-y-2">
              {mockWeatherData?.alerts?.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getAlertColor(alert?.severity)}`}>
                  <div className="flex items-start space-x-3">
                    <Icon name={getAlertIcon(alert?.severity)} size={16} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium mb-1">{alert?.title}</p>
                      <p className="text-xs opacity-80">{alert?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 bg-primary/5 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Sprout" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-primary mb-1">Crop Impact</p>
              <p className="text-xs text-muted-foreground">
                Current conditions are favorable for crop development. Expected rainfall midweek will benefit soil moisture levels. Monitor for potential storm damage on Thursday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeWeatherWidget;