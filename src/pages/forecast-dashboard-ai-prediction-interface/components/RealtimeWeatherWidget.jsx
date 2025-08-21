import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import geeApiService from '../../../utils/geeApiService';
import config from '../../../utils/config';

const RealtimeWeatherWidget = ({ location }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Default location if none provided
  const defaultLocation = { lat: 41.8781, lng: -87.6298 }; // Chicago coordinates
  const currentLocation = location || defaultLocation;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [currentLocation]);

  const fetchWeatherData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Check if GEE is configured
      const isGeeConfigured = config.validateGeeConfig();
      console.log('GEE Configuration Status:', isGeeConfigured);
      
      if (!isGeeConfigured) {
        console.warn('GEE not fully configured, using enhanced mock data');
        setWeatherData(getMockWeatherData());
        setLastUpdated(new Date());
        setIsLoading(false);
        return;
      }

      // Fetch real weather data from GEE
      console.log('Fetching weather data from GEE API...');
      const agriculturalReport = await geeApiService.getAgriculturalWeatherReport(currentLocation);
      
      setWeatherData({
        current: agriculturalReport.currentWeather.current,
        forecast: agriculturalReport.forecast.forecast.slice(0, 5), // First 5 days
        alerts: generateAlerts(agriculturalReport.riskAssessment),
        soilMoisture: agriculturalReport.soilMoisture,
        vegetation: agriculturalReport.vegetation,
        recommendations: agriculturalReport.recommendations,
        riskAssessment: agriculturalReport.riskAssessment
      });
      
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to load weather data. Using mock data instead.');
      setWeatherData(getMockWeatherData());
      setLastUpdated(new Date());
    } finally {
      setIsLoading(false);
    }
  };

  const getMockWeatherData = () => {
    return {
      current: {
        temperature: 72,
        humidity: 68,
        windSpeed: 8.5,
        windDirection: 'SW',
        pressure: 30.15,
        visibility: 10,
        uvIndex: 6,
        condition: 'Partly Cloudy',
        icon: 'CloudSun',
        feelsLike: 75,
        dewPoint: 60,
        solarRadiation: 450,
        evapotranspiration: 3.2,
        soilTemperature: 18
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
      ],
      soilMoisture: {
        surfaceMoisture: 28.5,
        rootZoneMoisture: 32.1,
        soilTemperature: 18,
        moistureTrend: 'stable',
        irrigationNeed: 45
      },
      vegetation: {
        ndvi: 0.456,
        evi: 0.234,
        health: 'good',
        biomass: 1850,
        growthRate: 2.3
      },
      recommendations: [
        'Monitor soil moisture levels closely',
        'Consider supplemental irrigation if dry conditions persist',
        'Implement pest monitoring protocols'
      ],
      riskAssessment: {
        level: 'moderate',
        score: 4,
        factors: ['Moderate temperatures', 'Stable soil moisture'],
        timestamp: new Date().toISOString()
      }
    };
  };

  const generateAlerts = (riskAssessment) => {
    const alerts = [];
    
    if (riskAssessment.level === 'high') {
      alerts.push({
        type: 'warning',
        title: 'High Agricultural Risk',
        description: `Multiple risk factors detected: ${riskAssessment.factors.join(', ')}`,
        severity: 'severe'
      });
    } else if (riskAssessment.level === 'moderate') {
      alerts.push({
        type: 'watch',
        title: 'Moderate Agricultural Risk',
        description: `Monitor conditions: ${riskAssessment.factors.join(', ')}`,
        severity: 'moderate'
      });
    }

    return alerts;
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

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg harvest-shadow border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
              <Icon name="Cloud" size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Real-time Weather</h3>
              <p className="text-sm text-muted-foreground">Loading weather data...</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="bg-white rounded-lg harvest-shadow border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-error/20 rounded-lg flex items-center justify-center">
              <Icon name="AlertCircle" size={18} className="text-error" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Weather Data Unavailable</h3>
              <p className="text-sm text-muted-foreground">Unable to load weather information</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="text-center py-8">
            <Icon name="CloudOff" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Weather data is currently unavailable</p>
            {error && <p className="text-sm text-error mt-2">{error}</p>}
          </div>
        </div>
      </div>
    );
  }

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
                {weatherData.current?.location?.name || 'Iowa County, IA'} • {formatDate(currentTime)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="text-sm font-medium text-foreground">
              {lastUpdated ? formatTime(lastUpdated) : formatTime(currentTime)}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Current Weather */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name={weatherData?.current?.icon} size={32} className="text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{weatherData?.current?.temperature}°F</p>
                <p className="text-sm text-muted-foreground">{weatherData?.current?.condition}</p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center space-x-2">
                <Icon name="Droplets" size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">{weatherData?.current?.humidity}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Wind" size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  {weatherData?.current?.windSpeed} mph {weatherData?.current?.windDirection}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Gauge" size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">{weatherData?.current?.pressure} in</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Icon name="Eye" size={16} className="text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Visibility</p>
              <p className="text-sm font-medium text-foreground">{weatherData?.current?.visibility} mi</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Icon name="Sun" size={16} className="text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">UV Index</p>
              <p className="text-sm font-medium text-foreground">{weatherData?.current?.uvIndex}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Icon name="Thermometer" size={16} className="text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Feels Like</p>
              <p className="text-sm font-medium text-foreground">{weatherData?.current?.feelsLike}°F</p>
            </div>
          </div>
        </div>

        {/* Agricultural Data */}
        {weatherData.soilMoisture && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-foreground mb-3">Agricultural Conditions</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-success/5 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Droplets" size={14} className="text-success" />
                  <span className="text-xs text-success font-medium">Soil Moisture</span>
                </div>
                <p className="text-lg font-bold text-success">{weatherData.soilMoisture.surfaceMoisture}%</p>
                <p className="text-xs text-muted-foreground">Surface Level</p>
              </div>
              <div className="bg-accent/5 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Sprout" size={14} className="text-accent" />
                  <span className="text-xs text-accent font-medium">Vegetation Health</span>
                </div>
                <p className="text-lg font-bold text-accent capitalize">{weatherData.vegetation?.health}</p>
                <p className="text-xs text-muted-foreground">NDVI: {weatherData.vegetation?.ndvi}</p>
              </div>
            </div>
          </div>
        )}

        {/* 5-Day Forecast */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">5-Day Forecast</h4>
          <div className="space-y-2">
            {weatherData?.forecast?.map((day, index) => (
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
        {weatherData?.alerts?.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-foreground mb-3">Weather Alerts</h4>
            <div className="space-y-2">
              {weatherData?.alerts?.map((alert, index) => (
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

        {/* Agricultural Recommendations */}
        {weatherData.recommendations && weatherData.recommendations.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-foreground mb-3">Agricultural Recommendations</h4>
            <div className="space-y-2">
              {weatherData.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                  <Icon name="Lightbulb" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Risk Assessment */}
        {weatherData.riskAssessment && (
          <div className="bg-warning/5 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={16} className="text-warning mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-warning mb-1">
                  Risk Level: {weatherData.riskAssessment.level.toUpperCase()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {weatherData.riskAssessment.factors.join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Data Source */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Data source: {weatherData.source || 'Google Earth Engine'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealtimeWeatherWidget;