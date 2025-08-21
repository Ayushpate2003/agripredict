import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Icon from '../../../components/AppIcon';

const SoilAnalysis = ({ selectedRegion, regions }) => {
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  const soilMetrics = [
    { name: 'pH Level', value: region?.soilData?.ph, optimal: '6.0-7.0', status: 'good' },
    { name: 'Nitrogen', value: region?.soilData?.nitrogen, optimal: '20-40 ppm', status: 'moderate' },
    { name: 'Phosphorus', value: region?.soilData?.phosphorus, optimal: '30-50 ppm', status: 'good' },
    { name: 'Potassium', value: region?.soilData?.potassium, optimal: '150-300 ppm', status: 'excellent' },
    { name: 'Organic Matter', value: region?.soilData?.organicMatter, optimal: '3-5%', status: 'good' }
  ];

  const radarData = [
    { subject: 'pH', A: region?.soilData?.ph * 10, fullMark: 100 },
    { subject: 'Nitrogen', A: 75, fullMark: 100 },
    { subject: 'Phosphorus', A: 85, fullMark: 100 },
    { subject: 'Potassium', A: 95, fullMark: 100 },
    { subject: 'Organic Matter', A: 80, fullMark: 100 },
    { subject: 'Drainage', A: 88, fullMark: 100 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'moderate': return 'text-warning';
      case 'poor': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent': return 'CheckCircle2';
      case 'good': return 'CheckCircle';
      case 'moderate': return 'AlertCircle';
      case 'poor': return 'XCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Soil Health Analysis</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>Last Updated: December 2024</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Soil Metrics */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Soil Metrics</h3>
          <div className="space-y-4">
            {soilMetrics?.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon 
                    name={getStatusIcon(metric?.status)} 
                    size={20} 
                    className={getStatusColor(metric?.status)} 
                  />
                  <div>
                    <div className="font-medium text-foreground">{metric?.name}</div>
                    <div className="text-sm text-muted-foreground">Optimal: {metric?.optimal}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{metric?.value}</div>
                  <div className={`text-sm capitalize ${getStatusColor(metric?.status)}`}>
                    {metric?.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Chart */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Soil Health Overview</h3>
          <div className="w-full h-80" aria-label="Soil Health Radar Chart">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Soil Health"
                  dataKey="A"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Soil Recommendations */}
      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recommended Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-foreground flex items-center space-x-2">
              <Icon name="Sprout" size={16} color="var(--color-success)" />
              <span>Optimal Crops for This Soil</span>
            </h4>
            <div className="space-y-2">
              {region?.recommendedCrops?.map((crop, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <span className="text-sm font-medium text-foreground">{crop?.name}</span>
                  <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                    {crop?.suitability}% match
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground flex items-center space-x-2">
              <Icon name="Wrench" size={16} color="var(--color-warning)" />
              <span>Improvement Suggestions</span>
            </h4>
            <div className="space-y-2">
              {region?.soilImprovements?.map((improvement, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-warning/5 rounded-lg">
                  <Icon name="ArrowRight" size={14} color="var(--color-warning)" className="mt-0.5" />
                  <span className="text-sm text-foreground">{improvement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilAnalysis;