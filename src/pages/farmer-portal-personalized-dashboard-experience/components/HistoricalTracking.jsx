import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const HistoricalTracking = ({ historicalData, predictionAccuracy }) => {
  const [activeTab, setActiveTab] = useState('yield');

  const tabs = [
    { id: 'yield', label: 'Yield Trends', icon: 'TrendingUp' },
    { id: 'accuracy', label: 'Prediction Accuracy', icon: 'Target' },
    { id: 'weather', label: 'Weather Impact', icon: 'Cloud' }
  ];

  const renderYieldChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={historicalData?.yieldTrends}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          dataKey="season" 
          stroke="#666666"
          fontSize={12}
        />
        <YAxis 
          stroke="#666666"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="predicted" 
          stroke="#2D5016" 
          strokeWidth={2}
          strokeDasharray="5 5"
          name="Predicted Yield"
        />
        <Line 
          type="monotone" 
          dataKey="actual" 
          stroke="#8B4513" 
          strokeWidth={2}
          name="Actual Yield"
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderAccuracyChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={predictionAccuracy}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          dataKey="crop" 
          stroke="#666666"
          fontSize={12}
        />
        <YAxis 
          stroke="#666666"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Bar 
          dataKey="accuracy" 
          fill="#2D5016"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderWeatherChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={historicalData?.weatherImpact}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          dataKey="month" 
          stroke="#666666"
          fontSize={12}
        />
        <YAxis 
          stroke="#666666"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="rainfall" 
          stroke="#3B82F6" 
          strokeWidth={2}
          name="Rainfall (mm)"
        />
        <Line 
          type="monotone" 
          dataKey="temperature" 
          stroke="#EF4444" 
          strokeWidth={2}
          name="Avg Temperature (°F)"
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderChart = () => {
    switch (activeTab) {
      case 'yield': return renderYieldChart();
      case 'accuracy': return renderAccuracyChart();
      case 'weather': return renderWeatherChart();
      default: return renderYieldChart();
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-4 sm:mb-0">
          Historical Performance Tracking
        </h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>Last 5 seasons</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium growth-transition ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      <div className="w-full h-80">
        {renderChart()}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">94.2%</div>
          <div className="text-sm text-muted-foreground">Average Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success">+18%</div>
          <div className="text-sm text-muted-foreground">Yield Improvement</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">$12,450</div>
          <div className="text-sm text-muted-foreground">Revenue Increase</div>
        </div>
      </div>
    </div>
  );
};

export default HistoricalTracking;