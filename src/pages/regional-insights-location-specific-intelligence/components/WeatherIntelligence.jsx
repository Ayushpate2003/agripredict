import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';

const WeatherIntelligence = ({ selectedRegion, regions }) => {
  const [activeTab, setActiveTab] = useState('precipitation');
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  const precipitationData = [
    { month: 'Jan', current: 2.1, historical: 2.5, forecast: 2.3 },
    { month: 'Feb', current: 2.8, historical: 2.9, forecast: 3.1 },
    { month: 'Mar', current: 3.5, historical: 3.2, forecast: 3.8 },
    { month: 'Apr', current: 4.2, historical: 3.8, forecast: 4.5 },
    { month: 'May', current: 4.8, historical: 4.5, forecast: 5.1 },
    { month: 'Jun', current: 3.9, historical: 4.1, forecast: 4.2 },
    { month: 'Jul', current: 3.2, historical: 3.5, forecast: 3.4 },
    { month: 'Aug', current: 3.1, historical: 3.3, forecast: 3.2 },
    { month: 'Sep', current: 3.8, historical: 3.6, forecast: 3.9 },
    { month: 'Oct', current: 2.9, historical: 3.1, forecast: 3.0 },
    { month: 'Nov', current: 2.4, historical: 2.7, forecast: 2.6 },
    { month: 'Dec', current: 2.2, historical: 2.4, forecast: 2.3 }
  ];

  const temperatureData = [
    { month: 'Jan', high: 42, low: 28, avg: 35 },
    { month: 'Feb', high: 48, low: 32, avg: 40 },
    { month: 'Mar', high: 58, low: 40, avg: 49 },
    { month: 'Apr', high: 68, low: 48, avg: 58 },
    { month: 'May', high: 78, low: 58, avg: 68 },
    { month: 'Jun', high: 85, low: 65, avg: 75 },
    { month: 'Jul', high: 88, low: 68, avg: 78 },
    { month: 'Aug', high: 86, low: 66, avg: 76 },
    { month: 'Sep', high: 79, low: 59, avg: 69 },
    { month: 'Oct', high: 68, low: 48, avg: 58 },
    { month: 'Nov', high: 55, low: 38, avg: 46 },
    { month: 'Dec', high: 45, low: 30, avg: 37 }
  ];

  const weatherRisks = [
    { risk: 'Drought Risk', level: 'Low', probability: '15%', impact: 'Minimal yield impact expected', icon: 'Sun' },
    { risk: 'Flood Risk', level: 'Moderate', probability: '35%', impact: 'Potential 10-15% yield reduction', icon: 'CloudRain' },
    { risk: 'Frost Risk', level: 'High', probability: '65%', impact: 'Critical for early plantings', icon: 'Snowflake' },
    { risk: 'Heat Stress', level: 'Low', probability: '20%', impact: 'Late season concern only', icon: 'Thermometer' }
  ];

  const getRiskColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'low': return 'text-success bg-success/10';
      case 'moderate': return 'text-warning bg-warning/10';
      case 'high': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const tabs = [
    { id: 'precipitation', label: 'Precipitation', icon: 'CloudRain' },
    { id: 'temperature', label: 'Temperature', icon: 'Thermometer' },
    { id: 'risks', label: 'Climate Risks', icon: 'AlertTriangle' }
  ];

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Weather Intelligence</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="RefreshCw" size={16} />
          <span>Updated 2 hours ago</span>
        </div>
      </div>
      {/* Weather Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-primary/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="CloudRain" size={20} color="var(--color-primary)" />
            <span className="text-xs text-primary font-medium">This Month</span>
          </div>
          <div className="text-2xl font-bold text-primary mb-1">{region?.weather?.precipitation}"</div>
          <div className="text-sm text-muted-foreground">Precipitation</div>
        </div>

        <div className="bg-secondary/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Thermometer" size={20} color="var(--color-secondary)" />
            <span className="text-xs text-secondary font-medium">Average</span>
          </div>
          <div className="text-2xl font-bold text-secondary mb-1">{region?.weather?.temperature}°F</div>
          <div className="text-sm text-muted-foreground">Temperature</div>
        </div>

        <div className="bg-accent/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Wind" size={20} color="var(--color-accent)" />
            <span className="text-xs text-accent font-medium">Current</span>
          </div>
          <div className="text-2xl font-bold text-accent mb-1">{region?.weather?.humidity}%</div>
          <div className="text-sm text-muted-foreground">Humidity</div>
        </div>

        <div className="bg-success/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Sun" size={20} color="var(--color-success)" />
            <span className="text-xs text-success font-medium">Growing Days</span>
          </div>
          <div className="text-2xl font-bold text-success mb-1">{region?.weather?.growingDays}</div>
          <div className="text-sm text-muted-foreground">This Season</div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium growth-transition ${
              activeTab === tab?.id
                ? 'bg-white text-primary harvest-shadow'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {activeTab === 'precipitation' && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Precipitation Patterns</h3>
          <div className="w-full h-80" aria-label="Precipitation Chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={precipitationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis label={{ value: 'Inches', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="historical" 
                  stroke="var(--color-muted-foreground)" 
                  strokeDasharray="5 5"
                  name="Historical Average"
                />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                  name="Current Year"
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="var(--color-accent)" 
                  strokeWidth={2}
                  name="Forecast"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      {activeTab === 'temperature' && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Temperature Trends</h3>
          <div className="w-full h-80" aria-label="Temperature Chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis label={{ value: '°F', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="high" fill="var(--color-error)" name="High" />
                <Bar dataKey="avg" fill="var(--color-primary)" name="Average" />
                <Bar dataKey="low" fill="var(--color-primary)" opacity={0.5} name="Low" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      {activeTab === 'risks' && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Climate Risk Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weatherRisks?.map((risk, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Icon name={risk?.icon} size={20} color="var(--color-muted-foreground)" />
                    <span className="font-medium text-foreground">{risk?.risk}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(risk?.level)}`}>
                    {risk?.level}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Probability:</span>
                    <span className="font-medium text-foreground">{risk?.probability}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{risk?.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherIntelligence;