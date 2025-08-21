import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';
import Icon from './AppIcon';
import geeApiService from '../utils/geeApiService';

const YieldPredictionTimeline = ({ location, selectedCrop, fieldSize }) => {
  const [timelineData, setTimelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('season');
  const [weatherData, setWeatherData] = useState(null);
  const [predictionConfidence, setPredictionConfidence] = useState(0);

  // Default location if none provided
  const defaultLocation = { lat: 19.0760, lng: 72.8777 }; // Mumbai coordinates
  const currentLocation = location || defaultLocation;

  useEffect(() => {
    generateYieldTimeline();
  }, [currentLocation, selectedCrop, selectedTimeframe]);

  const generateYieldTimeline = async () => {
    setIsLoading(true);
    
    try {
      // Get weather data for the location
      const weatherReport = await geeApiService.getAgriculturalWeatherReport(currentLocation);
      setWeatherData(weatherReport);

      // Generate timeline data based on selected timeframe
      const timeline = generateTimelineData(selectedTimeframe, weatherReport, selectedCrop, fieldSize);
      setTimelineData(timeline);

      // Calculate prediction confidence
      const confidence = calculatePredictionConfidence(weatherReport, selectedCrop);
      setPredictionConfidence(confidence);

    } catch (error) {
      console.error('Error generating yield timeline:', error);
      // Fallback to mock data
      const mockTimeline = generateMockTimelineData(selectedTimeframe, selectedCrop, fieldSize);
      setTimelineData(mockTimeline);
      setPredictionConfidence(85);
    } finally {
      setIsLoading(false);
    }
  };

  const generateTimelineData = (timeframe, weatherData, crop, fieldSize) => {
    const data = [];
    const baseYield = getBaseYieldForCrop(crop);
    const fieldSizeNum = parseFloat(fieldSize) || 10; // Default 10 hectares

    let periods, startDate;
    
    switch (timeframe) {
      case 'month':
        periods = 12;
        startDate = new Date();
        break;
      case 'season':
        periods = 6;
        startDate = new Date();
        break;
      case 'year':
        periods = 24;
        startDate = new Date();
        break;
      default:
        periods = 6;
        startDate = new Date();
    }

    for (let i = 0; i < periods; i++) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i);
      
      // Calculate weather impact on yield
      const weatherImpact = calculateWeatherImpact(weatherData, date, crop);
      const seasonalFactor = getSeasonalFactor(date, crop);
      const predictedYield = baseYield * weatherImpact * seasonalFactor * fieldSizeNum;
      
      data.push({
        period: date.toLocaleDateString('en-IN', { 
          month: 'short', 
          year: '2-digit' 
        }),
        date: date.toISOString(),
        predictedYield: Math.round(predictedYield),
        weatherImpact: Math.round(weatherImpact * 100),
        seasonalFactor: Math.round(seasonalFactor * 100),
        confidence: Math.round(predictionConfidence - (i * 2)), // Confidence decreases over time
        riskLevel: getRiskLevel(predictedYield, baseYield * fieldSizeNum),
        recommendations: generateRecommendations(date, weatherData, crop)
      });
    }

    return data;
  };

  const generateMockTimelineData = (timeframe, crop, fieldSize) => {
    const data = [];
    const baseYield = getBaseYieldForCrop(crop);
    const fieldSizeNum = parseFloat(fieldSize) || 10;

    let periods;
    switch (timeframe) {
      case 'month': periods = 12; break;
      case 'season': periods = 6; break;
      case 'year': periods = 24; break;
      default: periods = 6;
    }

    for (let i = 0; i < periods; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() + i);
      
      const seasonalFactor = getSeasonalFactor(date, crop);
      const weatherImpact = 0.85 + (Math.random() * 0.3); // Random weather impact
      const predictedYield = baseYield * weatherImpact * seasonalFactor * fieldSizeNum;
      
      data.push({
        period: date.toLocaleDateString('en-IN', { 
          month: 'short', 
          year: '2-digit' 
        }),
        date: date.toISOString(),
        predictedYield: Math.round(predictedYield),
        weatherImpact: Math.round(weatherImpact * 100),
        seasonalFactor: Math.round(seasonalFactor * 100),
        confidence: Math.max(60, 85 - (i * 2)),
        riskLevel: getRiskLevel(predictedYield, baseYield * fieldSizeNum),
        recommendations: generateMockRecommendations(date, crop)
      });
    }

    return data;
  };

  const getBaseYieldForCrop = (crop) => {
    const cropYields = {
      'corn': 85, // quintals per hectare
      'wheat': 45,
      'soybeans': 25,
      'cotton': 15,
      'rice': 40,
      'sugarcane': 700,
      'pulses': 12,
      'oilseeds': 18
    };
    return cropYields[crop?.toLowerCase()] || 50;
  };

  const calculateWeatherImpact = (weatherData, date, crop) => {
    if (!weatherData) return 0.9;

    const currentWeather = weatherData.currentWeather?.current;
    const forecast = weatherData.forecast?.forecast;
    
    if (!currentWeather || !forecast) return 0.9;

    let impact = 1.0;

    // Temperature impact
    const temp = currentWeather.temperature;
    if (temp < 10 || temp > 35) impact *= 0.8;
    else if (temp >= 20 && temp <= 30) impact *= 1.1;

    // Humidity impact
    const humidity = currentWeather.humidity;
    if (humidity < 40 || humidity > 80) impact *= 0.9;
    else if (humidity >= 50 && humidity <= 70) impact *= 1.05;

    // Soil moisture impact
    const soilMoisture = weatherData.soilMoisture?.surfaceMoisture;
    if (soilMoisture) {
      const moisture = parseFloat(soilMoisture);
      if (moisture < 20) impact *= 0.7;
      else if (moisture >= 25 && moisture <= 35) impact *= 1.1;
    }

    return Math.max(0.5, Math.min(1.3, impact));
  };

  const getSeasonalFactor = (date, crop) => {
    const month = date.getMonth();
    const cropSeasons = {
      'corn': { peak: [5, 6, 7], factor: 1.2 }, // May-July
      'wheat': { peak: [10, 11, 0], factor: 1.3 }, // Nov-Jan
      'soybeans': { peak: [7, 8, 9], factor: 1.1 }, // Aug-Oct
      'cotton': { peak: [8, 9, 10], factor: 1.15 }, // Sep-Nov
      'rice': { peak: [6, 7, 8], factor: 1.25 }, // Jul-Sep
      'sugarcane': { peak: [9, 10, 11], factor: 1.1 }, // Oct-Dec
      'pulses': { peak: [1, 2, 3], factor: 1.05 }, // Feb-Apr
      'oilseeds': { peak: [10, 11, 0], factor: 1.1 } // Nov-Jan
    };

    const season = cropSeasons[crop?.toLowerCase()];
    if (!season) return 1.0;

    if (season.peak.includes(month)) {
      return season.factor;
    } else if (season.peak.includes((month + 1) % 12) || season.peak.includes((month - 1 + 12) % 12)) {
      return 1.05; // Adjacent months
    }

    return 0.9; // Off-season
  };

  const getRiskLevel = (predictedYield, expectedYield) => {
    const ratio = predictedYield / expectedYield;
    if (ratio >= 1.1) return 'low';
    if (ratio >= 0.9) return 'moderate';
    return 'high';
  };

  const generateRecommendations = (date, weatherData, crop) => {
    const recommendations = [];
    const month = date.getMonth();

    // Seasonal recommendations
    if (month >= 5 && month <= 7) {
      recommendations.push('Monitor for monsoon-related diseases');
      recommendations.push('Ensure proper drainage systems');
    } else if (month >= 10 && month <= 12) {
      recommendations.push('Prepare for winter crop protection');
      recommendations.push('Consider frost protection measures');
    }

    // Weather-based recommendations
    if (weatherData?.currentWeather?.current?.temperature > 30) {
      recommendations.push('Increase irrigation frequency');
      recommendations.push('Monitor for heat stress');
    }

    if (weatherData?.soilMoisture?.surfaceMoisture < 25) {
      recommendations.push('Implement supplemental irrigation');
      recommendations.push('Consider drought-resistant varieties');
    }

    return recommendations.slice(0, 3); // Limit to 3 recommendations
  };

  const generateMockRecommendations = (date, crop) => {
    const month = date.getMonth();
    const recommendations = [];

    if (month >= 5 && month <= 7) {
      recommendations.push('Monitor monsoon conditions');
      recommendations.push('Ensure proper drainage');
    } else if (month >= 10 && month <= 12) {
      recommendations.push('Prepare for winter protection');
      recommendations.push('Monitor frost conditions');
    }

    recommendations.push('Regular soil testing recommended');
    return recommendations.slice(0, 3);
  };

  const calculatePredictionConfidence = (weatherData, crop) => {
    let confidence = 85;

    // Reduce confidence based on data availability
    if (!weatherData?.currentWeather) confidence -= 10;
    if (!weatherData?.soilMoisture) confidence -= 5;
    if (!weatherData?.vegetation) confidence -= 5;

    // Increase confidence for well-known crops
    const wellKnownCrops = ['wheat', 'corn', 'rice', 'sugarcane'];
    if (wellKnownCrops.includes(crop?.toLowerCase())) {
      confidence += 5;
    }

    return Math.max(60, Math.min(95, confidence));
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'low': return '#10b981';
      case 'moderate': return '#f59e0b';
      case 'high': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-border">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          <div className="space-y-1 text-sm">
            <p><span className="text-muted-foreground">Predicted Yield:</span> {data.predictedYield} quintals</p>
            <p><span className="text-muted-foreground">Weather Impact:</span> {data.weatherImpact}%</p>
            <p><span className="text-muted-foreground">Seasonal Factor:</span> {data.seasonalFactor}%</p>
            <p><span className="text-muted-foreground">Confidence:</span> {data.confidence}%</p>
            <p><span className="text-muted-foreground">Risk Level:</span> 
              <span className={`ml-1 px-2 py-1 rounded text-xs text-white`} 
                    style={{ backgroundColor: getRiskColor(data.riskLevel) }}>
                {data.riskLevel}
              </span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg harvest-shadow p-6">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-3 text-muted-foreground">Generating yield predictions...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Yield Prediction Timeline</h2>
          <p className="text-sm text-muted-foreground">
            {selectedCrop ? `${selectedCrop} yield predictions for ${currentLocation.name || 'your location'}` : 'Crop yield predictions over time'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="season">Season (6 months)</option>
            <option value="month">Monthly (12 months)</option>
            <option value="year">Yearly (24 months)</option>
          </select>
        </div>
      </div>

      {/* Confidence and Risk Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-primary/5 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Prediction Confidence</span>
          </div>
          <p className="text-2xl font-bold text-primary">{predictionConfidence}%</p>
          <p className="text-xs text-muted-foreground">Based on weather and soil data</p>
        </div>

        <div className="bg-accent/5 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Timeline Period</span>
          </div>
          <p className="text-2xl font-bold text-accent">{timelineData.length} periods</p>
          <p className="text-xs text-muted-foreground">{selectedTimeframe} view</p>
        </div>

        <div className="bg-success/5 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Average Yield</span>
          </div>
          <p className="text-2xl font-bold text-success">
            {Math.round(timelineData.reduce((sum, item) => sum + item.predictedYield, 0) / timelineData.length)} q/ha
          </p>
          <p className="text-xs text-muted-foreground">Expected average</p>
        </div>
      </div>

      {/* Yield Prediction Chart */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Yield Predictions Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="period" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              label={{ value: 'Yield (quintals/ha)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="predictedYield"
              stroke="var(--color-primary)"
              fill="var(--color-primary)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Weather Impact Analysis */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weather Impact Analysis</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="weatherImpact" fill="var(--color-accent)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Risk Assessment Timeline */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Risk Assessment Timeline</h3>
        <div className="space-y-3">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-foreground w-16">{item.period}</span>
                <span className="text-sm text-muted-foreground">{item.predictedYield} q/ha</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs text-muted-foreground">Confidence: {item.confidence}%</span>
                <span 
                  className={`px-2 py-1 rounded text-xs text-white`}
                  style={{ backgroundColor: getRiskColor(item.riskLevel) }}
                >
                  {item.riskLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      {timelineData.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timelineData[0]?.recommendations?.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                <Icon name="Lightbulb" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YieldPredictionTimeline;
