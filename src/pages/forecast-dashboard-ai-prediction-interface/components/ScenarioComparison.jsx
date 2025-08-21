import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ScenarioComparison = () => {
  const [activeScenarios, setActiveScenarios] = useState(['current', 'optimal']);

  const scenarioData = [
    { factor: 'Yield Potential', current: 85, optimal: 95, drought: 65, flood: 70 },
    { factor: 'Risk Level', current: 25, optimal: 15, drought: 75, flood: 80 },
    { factor: 'Input Costs', current: 70, optimal: 85, drought: 60, flood: 75 },
    { factor: 'Market Price', current: 80, optimal: 80, drought: 90, flood: 85 },
    { factor: 'Profit Margin', current: 75, optimal: 90, drought: 45, flood: 50 },
    { factor: 'Sustainability', current: 80, optimal: 95, drought: 55, flood: 60 }
  ];

  const scenarios = [
    {
      id: 'current',
      name: 'Current Conditions',
      color: 'var(--color-primary)',
      description: 'Based on current weather and farming practices',
      icon: 'Activity'
    },
    {
      id: 'optimal',
      name: 'Optimal Conditions',
      color: 'var(--color-success)',
      description: 'Best-case scenario with ideal weather and practices',
      icon: 'Star'
    },
    {
      id: 'drought',
      name: 'Drought Scenario',
      color: 'var(--color-warning)',
      description: '20% below average rainfall conditions',
      icon: 'Sun'
    },
    {
      id: 'flood',
      name: 'Excess Rain Scenario',
      color: 'var(--color-error)',
      description: '30% above average rainfall conditions',
      icon: 'CloudRain'
    }
  ];

  const toggleScenario = (scenarioId) => {
    setActiveScenarios(prev => {
      if (prev?.includes(scenarioId)) {
        return prev?.filter(id => id !== scenarioId);
      } else {
        return [...prev, scenarioId];
      }
    });
  };

  const getScenarioSummary = (scenarioId) => {
    const scenario = scenarios?.find(s => s?.id === scenarioId);
    const avgYield = scenarioData?.reduce((sum, item) => sum + item?.[scenarioId], 0) / scenarioData?.length;
    
    return {
      ...scenario,
      avgScore: Math.round(avgYield)
    };
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
            <Icon name="GitCompare" size={18} className="text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Scenario Comparison</h3>
            <p className="text-sm text-muted-foreground">
              Compare different weather and farming scenarios
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {scenarios?.map((scenario) => (
            <button
              key={scenario?.id}
              onClick={() => toggleScenario(scenario?.id)}
              className={`p-3 rounded-lg border-2 growth-transition text-left ${
                activeScenarios?.includes(scenario?.id)
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon 
                  name={scenario?.icon} 
                  size={16} 
                  style={{ color: scenario?.color }}
                />
                <span className="text-sm font-medium text-foreground">{scenario?.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{scenario?.description}</p>
              {activeScenarios?.includes(scenario?.id) && (
                <div className="mt-2 flex items-center space-x-1">
                  <Icon name="CheckCircle" size={12} className="text-primary" />
                  <span className="text-xs text-primary">Active</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="h-80 w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={scenarioData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis 
                dataKey="factor" 
                tick={{ fontSize: 12, fill: '#666666' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: '#666666' }}
              />
              {activeScenarios?.map((scenarioId) => {
                const scenario = scenarios?.find(s => s?.id === scenarioId);
                return (
                  <Radar
                    key={scenarioId}
                    name={scenario?.name}
                    dataKey={scenarioId}
                    stroke={scenario?.color}
                    fill={scenario?.color}
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                );
              })}
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {activeScenarios?.map((scenarioId) => {
            const summary = getScenarioSummary(scenarioId);
            return (
              <div key={scenarioId} className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon 
                    name={summary?.icon} 
                    size={16} 
                    style={{ color: summary?.color }}
                  />
                  <span className="text-sm font-medium text-foreground">{summary?.name}</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{summary?.avgScore}%</p>
                <p className="text-xs text-muted-foreground">Overall Score</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            className="flex-1"
          >
            Export Comparison
          </Button>
          <Button
            variant="default"
            iconName="Share"
            iconPosition="left"
            className="flex-1"
          >
            Share Analysis
          </Button>
        </div>

        <div className="mt-6 bg-accent/10 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="TrendingUp" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-accent mb-1">Scenario Insights</p>
              <p className="text-xs text-muted-foreground">
                Optimal conditions show 12% higher yield potential compared to current conditions. Consider drought mitigation strategies as dry scenarios show significant yield reduction. Flood scenarios indicate need for improved drainage systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioComparison;