import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const PerformanceDashboard = () => {
  const [activeMetric, setActiveMetric] = useState('accuracy');

  const accuracyData = [
    { month: 'Jan', accuracy: 94.2, predictions: 1250 },
    { month: 'Feb', accuracy: 95.1, predictions: 1180 },
    { month: 'Mar', accuracy: 96.3, predictions: 1420 },
    { month: 'Apr', accuracy: 95.8, predictions: 1680 },
    { month: 'May', accuracy: 97.1, predictions: 2100 },
    { month: 'Jun', accuracy: 96.9, predictions: 2350 },
    { month: 'Jul', accuracy: 95.4, predictions: 2200 },
    { month: 'Aug', accuracy: 94.8, predictions: 1950 },
    { month: 'Sep', accuracy: 96.2, predictions: 1800 },
    { month: 'Oct', accuracy: 95.7, predictions: 1650 },
    { month: 'Nov', accuracy: 94.9, predictions: 1400 },
    { month: 'Dec', accuracy: 95.3, predictions: 1200 }
  ];

  const cropAccuracyData = [
    { crop: 'Corn', accuracy: 97.2, color: '#2D5016' },
    { crop: 'Wheat', accuracy: 96.8, color: '#8B4513' },
    { crop: 'Soybeans', accuracy: 95.4, color: '#F4A460' },
    { crop: 'Rice', accuracy: 94.9, color: '#4CAF50' },
    { crop: 'Cotton', accuracy: 93.7, color: '#FF9800' },
    { crop: 'Barley', accuracy: 92.3, color: '#9C27B0' }
  ];

  const regionalData = [
    { name: 'North America', value: 96.2, color: '#2D5016' },
    { name: 'Europe', value: 95.8, color: '#8B4513' },
    { name: 'Asia', value: 94.6, color: '#F4A460' },
    { name: 'South America', value: 95.1, color: '#4CAF50' },
    { name: 'Africa', value: 93.4, color: '#FF9800' },
    { name: 'Oceania', value: 96.7, color: '#9C27B0' }
  ];

  const metrics = [
    {
      id: 'accuracy',
      title: 'Model Accuracy',
      icon: 'Target',
      value: '95.3%',
      change: '+2.1%',
      description: 'Average prediction accuracy across all models'
    },
    {
      id: 'predictions',
      title: 'Monthly Predictions',
      icon: 'TrendingUp',
      value: '18.2K',
      change: '+15.3%',
      description: 'Total predictions generated this month'
    },
    {
      id: 'farmers',
      title: 'Active Farmers',
      icon: 'Users',
      value: '15,847',
      change: '+8.7%',
      description: 'Farmers using our platform monthly'
    },
    {
      id: 'coverage',
      title: 'Geographic Coverage',
      icon: 'Globe',
      value: '23',
      change: '+2',
      description: 'Countries with active predictions'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
              <Icon name="BarChart3" size={24} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Performance Dashboard</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time metrics and performance indicators showing the accuracy and impact of our AI models
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics?.map((metric) => (
            <div key={metric?.id} className="bg-card rounded-xl p-6 harvest-shadow border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 agricultural-gradient rounded-lg flex items-center justify-center">
                  <Icon name={metric?.icon} size={20} color="white" />
                </div>
                <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                  {metric?.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{metric?.value}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-2">{metric?.title}</p>
              <p className="text-xs text-muted-foreground">{metric?.description}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Accuracy Trend Chart */}
          <div className="bg-card rounded-xl p-6 harvest-shadow border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Monthly Accuracy Trend</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Calendar" size={16} />
                <span>Last 12 months</span>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#666666" />
                  <YAxis domain={[90, 100]} stroke="#666666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="#2D5016" 
                    strokeWidth={3}
                    dot={{ fill: '#2D5016', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Crop-Specific Accuracy */}
          <div className="bg-card rounded-xl p-6 harvest-shadow border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Crop-Specific Accuracy</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Wheat" size={16} />
                <span>By crop type</span>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cropAccuracyData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis type="number" domain={[90, 100]} stroke="#666666" />
                  <YAxis dataKey="crop" type="category" stroke="#666666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="accuracy" fill="#2D5016" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Regional Performance */}
          <div className="bg-card rounded-xl p-6 harvest-shadow border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Regional Performance</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Globe" size={16} />
                <span>By region</span>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionalData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {regionalData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Model Updates Timeline */}
          <div className="bg-card rounded-xl p-6 harvest-shadow border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Recent Model Updates</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Last updated 2 hours ago</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  date: '2025-01-20',
                  title: 'Corn Model v3.2 Released',
                  description: 'Improved accuracy for drought conditions',
                  impact: '+1.2% accuracy'
                },
                {
                  date: '2025-01-18',
                  title: 'Weather Data Integration Update',
                  description: 'Added 500 new weather stations',
                  impact: 'Better coverage'
                },
                {
                  date: '2025-01-15',
                  title: 'Soil Analysis Enhancement',
                  description: 'Enhanced soil composition analysis',
                  impact: '+0.8% accuracy'
                },
                {
                  date: '2025-01-12',
                  title: 'Regional Model Calibration',
                  description: 'Calibrated models for Southeast Asia',
                  impact: '+2.1% regional accuracy'
                }
              ]?.map((update, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{update?.title}</h4>
                      <span className="text-xs text-muted-foreground">{update?.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{update?.description}</p>
                    <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                      {update?.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;