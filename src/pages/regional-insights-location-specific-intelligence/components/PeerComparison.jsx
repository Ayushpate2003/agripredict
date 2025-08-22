import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';

const PeerComparison = ({ selectedRegion, regions }) => {
  const [selectedMetric, setSelectedMetric] = useState('yield');
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  const comparisonData = [
    { category: 'Top 10%', yield: 185, cost: 420, profit: 1250, efficiency: 92 },
    { category: 'Top 25%', yield: 165, cost: 450, profit: 1100, efficiency: 85 },
    { category: 'Average', yield: 145, cost: 480, profit: 950, efficiency: 78 },
    { category: 'Your Farm', yield: 158, cost: 445, profit: 1080, efficiency: 82 },
    { category: 'Bottom 25%', yield: 125, cost: 520, profit: 750, efficiency: 68 }
  ];

  const performanceData = [
    { name: 'Yield', value: 82, fill: 'var(--color-primary)' },
    { name: 'Cost Efficiency', value: 75, fill: 'var(--color-secondary)' },
    { name: 'Profit Margin', value: 88, fill: 'var(--color-accent)' },
    { name: 'Sustainability', value: 79, fill: 'var(--color-success)' }
  ];

  const benchmarkMetrics = [
    {
      title: 'Yield per Acre',
      yourValue: '158 bu/acre',
      regionAvg: '145 bu/acre',
      topPerformers: '185 bu/acre',
      percentile: '68th',
      trend: 'up',
      improvement: '+9%',
      icon: 'BarChart3'
    },
    {
      title: 'Production Cost',
      yourValue: '$445/acre',
      regionAvg: '$480/acre',
      topPerformers: '$420/acre',
      percentile: '72nd',
      trend: 'down',
      improvement: '-7%',
      icon: 'DollarSign'
    },
    {
      title: 'Profit Margin',
      yourValue: '$1,080/acre',
      regionAvg: '$950/acre',
      topPerformers: '$1,250/acre',
      percentile: '75th',
      trend: 'up',
      improvement: '+14%',
      icon: 'TrendingUp'
    },
    {
      title: 'Resource Efficiency',
      yourValue: '82%',
      regionAvg: '78%',
      topPerformers: '92%',
      percentile: '65th',
      trend: 'up',
      improvement: '+5%',
      icon: 'Zap'
    }
  ];

  const improvementOpportunities = [
    {
      area: 'Fertilizer Optimization',
      potential: '+12% yield',
      investment: '$25/acre',
      payback: '1.2 seasons',
      difficulty: 'Easy',
      description: 'Adjust nitrogen timing based on soil tests and weather patterns'
    },
    {
      area: 'Irrigation Efficiency',
      potential: '-15% water use',
      investment: '$180/acre',
      payback: '2.8 seasons',
      difficulty: 'Moderate',
      description: 'Install precision irrigation system with soil moisture sensors'
    },
    {
      area: 'Seed Variety Selection',
      potential: '+8% yield',
      investment: '$15/acre',
      payback: '1 season',
      difficulty: 'Easy',
      description: 'Switch to varieties better suited for local soil conditions'
    },
    {
      area: 'Harvest Timing',
      potential: '+5% quality premium',
      investment: '$0/acre',
      payback: 'Immediate',
      difficulty: 'Easy',
      description: 'Use weather forecasts to optimize harvest timing'
    }
  ];

  const metrics = [
    { id: 'yield', label: 'Yield', unit: 'bu/acre' },
    { id: 'cost', label: 'Cost', unit: '$/acre' },
    { id: 'profit', label: 'Profit', unit: '$/acre' },
    { id: 'efficiency', label: 'Efficiency', unit: '%' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-success bg-success/10';
      case 'moderate': return 'text-warning bg-warning/10';
      case 'hard': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Peer Performance Comparison</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Shield" size={16} />
          <span>Privacy Protected</span>
        </div>
      </div>
      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Performance vs Region</h3>
          <div className="space-y-4">
            {benchmarkMetrics?.map((metric, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Icon name={metric?.icon} size={20} color="var(--color-primary)" />
                    <span className="font-medium text-foreground">{metric?.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      metric?.trend === 'up' ? 'text-success' : 'text-error'
                    }`}>
                      {metric?.improvement}
                    </span>
                    <Icon 
                      name={metric?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16} 
                      color={metric?.trend === 'up' ? 'var(--color-success)' : 'var(--color-error)'} 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Your Value</div>
                    <div className="font-semibold text-primary">{metric?.yourValue}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Region Avg</div>
                    <div className="font-medium text-foreground">{metric?.regionAvg}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Top 10%</div>
                    <div className="font-medium text-success">{metric?.topPerformers}</div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Regional Percentile</span>
                    <span className="text-sm font-medium text-primary">{metric?.percentile}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Performance Radar</h3>
          <div className="w-full h-80" aria-label="Performance Comparison Radial Chart">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={performanceData}>
                <RadialBar dataKey="value" cornerRadius={10} />
                <Legend />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Detailed Comparison Chart */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Detailed Benchmarking</h3>
          <div className="flex space-x-1 bg-muted rounded-lg p-1">
            {metrics?.map((metric) => (
              <button
                key={metric?.id}
                onClick={() => setSelectedMetric(metric?.id)}
                className={`px-3 py-1 rounded-md text-sm font-medium growth-transition ${
                  selectedMetric === metric?.id
                    ? 'bg-white text-primary harvest-shadow'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {metric?.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-80" aria-label="Peer Comparison Bar Chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey={selectedMetric} 
                fill={(item) => item?.category === 'Your Farm' ? 'var(--color-primary)' : 'var(--color-muted)'}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Improvement Opportunities */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Improvement Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {improvementOpportunities?.map((opportunity, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/20 growth-transition">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-foreground">{opportunity?.area}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(opportunity?.difficulty)}`}>
                  {opportunity?.difficulty}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{opportunity?.description}</p>
              
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Potential</div>
                  <div className="font-semibold text-success">{opportunity?.potential}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Investment</div>
                  <div className="font-medium text-foreground">{opportunity?.investment}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Payback</div>
                  <div className="font-medium text-primary">{opportunity?.payback}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeerComparison;