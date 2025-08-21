import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const WeatherImpactAnalysis = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');

  const weatherImpactData = [
    { factor: 'Temperature', impact: 85, status: 'optimal', description: 'Ideal growing conditions' },
    { factor: 'Rainfall', impact: 72, status: 'moderate', description: 'Slightly below average' },
    { factor: 'Humidity', impact: 90, status: 'optimal', description: 'Perfect moisture levels' },
    { factor: 'Wind Speed', impact: 65, status: 'moderate', description: 'Moderate wind conditions' },
    { factor: 'Soil Moisture', impact: 78, status: 'good', description: 'Good retention levels' },
    { factor: 'Sunlight Hours', impact: 88, status: 'optimal', description: 'Excellent sun exposure' }
  ];

  const getBarColor = (status) => {
    switch (status) {
      case 'optimal': return 'var(--color-primary)';
      case 'good': return 'var(--color-accent)';
      case 'moderate': return 'var(--color-warning)';
      case 'poor': return 'var(--color-error)';
      default: return 'var(--color-muted)';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'optimal': return 'CheckCircle';
      case 'good': return 'ThumbsUp';
      case 'moderate': return 'AlertTriangle';
      case 'poor': return 'AlertCircle';
      default: return 'Minus';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-white p-4 rounded-lg harvest-shadow border border-border max-w-xs">
          <p className="font-medium text-foreground mb-2">{label}</p>
          <p className="text-sm text-muted-foreground mb-2">{data?.description}</p>
          <p className="text-sm">
            <span className="font-medium">Impact Score: </span>
            <span className="text-primary">{data?.impact}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
              <Icon name="CloudRain" size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Weather Impact Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Environmental factors affecting crop yield potential
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSelectedTimeframe('7days')}
              className={`px-3 py-1 rounded-md text-sm font-medium growth-transition ${
                selectedTimeframe === '7days' ?'bg-primary text-white' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setSelectedTimeframe('30days')}
              className={`px-3 py-1 rounded-md text-sm font-medium growth-transition ${
                selectedTimeframe === '30days' ?'bg-primary text-white' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              30 Days
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="h-64 w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weatherImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="factor" 
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Impact Score (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="impact" radius={[4, 4, 0, 0]}>
                {weatherImpactData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry?.status)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weatherImpactData?.map((item, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={getStatusIcon(item?.status)} 
                    size={16} 
                    className={`${
                      item?.status === 'optimal' ? 'text-primary' :
                      item?.status === 'good' ? 'text-accent' :
                      item?.status === 'moderate'? 'text-warning' : 'text-error'
                    }`}
                  />
                  <span className="text-sm font-medium text-foreground">{item?.factor}</span>
                </div>
                <span className="text-sm font-bold text-foreground">{item?.impact}%</span>
              </div>
              <p className="text-xs text-muted-foreground">{item?.description}</p>
              <div className="mt-2 w-full bg-border rounded-full h-2">
                <div 
                  className="h-2 rounded-full growth-transition"
                  style={{ 
                    width: `${item?.impact}%`,
                    backgroundColor: getBarColor(item?.status)
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-primary/5 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-primary mb-1">Weather Insights</p>
              <p className="text-xs text-muted-foreground">
                Current conditions are favorable for crop growth. Monitor rainfall levels over the next 2 weeks as slight deficit may impact yield potential. Consider supplemental irrigation if dry conditions persist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherImpactAnalysis;