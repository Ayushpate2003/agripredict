import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const YieldPredictionChart = ({ predictionData, selectedCrop }) => {
  const mockPredictionData = [
    { month: 'Mar', predicted: 45, confidence: 85, historical: 42 },
    { month: 'Apr', predicted: 78, confidence: 88, historical: 75 },
    { month: 'May', predicted: 125, confidence: 92, historical: 118 },
    { month: 'Jun', predicted: 165, confidence: 94, historical: 158 },
    { month: 'Jul', predicted: 185, confidence: 96, historical: 178 },
    { month: 'Aug', predicted: 195, confidence: 94, historical: 188 },
    { month: 'Sep', predicted: 198, confidence: 92, historical: 192 },
    { month: 'Oct', predicted: 200, confidence: 90, historical: 195 }
  ];

  const data = predictionData || mockPredictionData;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-4 rounded-lg harvest-shadow border border-border">
          <p className="font-medium text-foreground mb-2">{`${label} Projection`}</p>
          <div className="space-y-1">
            <p className="text-sm text-primary">
              <span className="inline-block w-3 h-3 bg-primary rounded-full mr-2"></span>
              Predicted: {payload?.[0]?.value} q/ha
            </p>
            <p className="text-sm text-secondary">
              <span className="inline-block w-3 h-3 bg-secondary rounded-full mr-2"></span>
              Historical: {payload?.[1]?.value} q/ha
            </p>
            <p className="text-sm text-accent">
              Confidence: {payload?.[0]?.payload?.confidence}%
            </p>
          </div>
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
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Yield Prediction Timeline</h3>
              <p className="text-sm text-muted-foreground">
                {selectedCrop || 'Corn'} yield forecast vs historical performance
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">AI Prediction</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Historical</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="month" 
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Yield (q/ha)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="var(--color-primary)"
                strokeWidth={3}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="historical"
                stroke="var(--color-secondary)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'var(--color-secondary)', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Target" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Peak Yield</span>
            </div>
            <p className="text-2xl font-bold text-foreground">48 q/ha</p>
            <p className="text-xs text-muted-foreground">Expected in October</p>
          </div>

          <div className="bg-accent/10 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Improvement</span>
            </div>
            <p className="text-2xl font-bold text-foreground">+2.6%</p>
            <p className="text-xs text-muted-foreground">vs last year</p>
          </div>

          <div className="bg-success/10 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">Confidence</span>
            </div>
            <p className="text-2xl font-bold text-foreground">94%</p>
            <p className="text-xs text-muted-foreground">Model accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldPredictionChart;