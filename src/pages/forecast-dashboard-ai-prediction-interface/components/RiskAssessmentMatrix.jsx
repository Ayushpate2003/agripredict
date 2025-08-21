import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RiskAssessmentMatrix = () => {
  const [selectedRisk, setSelectedRisk] = useState(null);

  const riskFactors = [
    {
      id: 'weather',
      name: 'Weather Variability',
      probability: 'Medium',
      impact: 'High',
      level: 'moderate',
      description: 'Unpredictable weather patterns affecting crop growth',
      mitigation: 'Implement weather monitoring and adaptive irrigation systems',
      timeframe: 'Seasonal'
    },
    {
      id: 'pests',
      name: 'Pest & Disease',
      probability: 'Low',
      impact: 'High',
      level: 'low',
      description: 'Potential crop damage from insects and plant diseases',
      mitigation: 'Regular scouting and integrated pest management practices',
      timeframe: 'Growing Season'
    },
    {
      id: 'market',
      name: 'Market Price Volatility',
      probability: 'High',
      impact: 'Medium',
      level: 'moderate',
      description: 'Fluctuating commodity prices affecting profitability',
      mitigation: 'Diversify crops and consider forward contracting',
      timeframe: 'Annual'
    },
    {
      id: 'soil',
      name: 'Soil Degradation',
      probability: 'Low',
      impact: 'Medium',
      level: 'low',
      description: 'Long-term soil health decline affecting productivity',
      mitigation: 'Implement cover crops and soil conservation practices',
      timeframe: 'Multi-year'
    },
    {
      id: 'water',
      name: 'Water Availability',
      probability: 'Medium',
      impact: 'High',
      level: 'moderate',
      description: 'Limited water resources for irrigation needs',
      mitigation: 'Install efficient irrigation systems and water storage',
      timeframe: 'Seasonal'
    },
    {
      id: 'equipment',
      name: 'Equipment Failure',
      probability: 'Medium',
      impact: 'Low',
      level: 'low',
      description: 'Machinery breakdown during critical farming periods',
      mitigation: 'Regular maintenance and backup equipment planning',
      timeframe: 'Operational'
    }
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'bg-error text-white';
      case 'moderate': return 'bg-warning text-white';
      case 'low': return 'bg-success text-white';
      default: return 'bg-muted text-foreground';
    }
  };

  const getRiskIcon = (level) => {
    switch (level) {
      case 'high': return 'AlertTriangle';
      case 'moderate': return 'AlertCircle';
      case 'low': return 'CheckCircle';
      default: return 'Minus';
    }
  };

  const getProbabilityColor = (probability) => {
    switch (probability?.toLowerCase()) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact?.toLowerCase()) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-error/20 rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={18} className="text-error" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Risk Assessment Matrix</h3>
            <p className="text-sm text-muted-foreground">
              Identify and evaluate potential farming risks
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Factors List */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground mb-4">Risk Factors</h4>
            {riskFactors?.map((risk) => (
              <div
                key={risk?.id}
                onClick={() => setSelectedRisk(risk)}
                className={`p-4 rounded-lg border-2 cursor-pointer growth-transition ${
                  selectedRisk?.id === risk?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getRiskColor(risk?.level)}`}>
                      <Icon name={getRiskIcon(risk?.level)} size={16} />
                    </div>
                    <span className="font-medium text-foreground">{risk?.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{risk?.timeframe}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="text-muted-foreground">Probability:</span>
                    <span className={`font-medium ${getProbabilityColor(risk?.probability)}`}>
                      {risk?.probability}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-muted-foreground">Impact:</span>
                    <span className={`font-medium ${getImpactColor(risk?.impact)}`}>
                      {risk?.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Details */}
          <div className="bg-muted/30 rounded-lg p-6">
            {selectedRisk ? (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getRiskColor(selectedRisk?.level)}`}>
                    <Icon name={getRiskIcon(selectedRisk?.level)} size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{selectedRisk?.name}</h4>
                    <p className="text-sm text-muted-foreground">{selectedRisk?.timeframe} Risk</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Description</h5>
                    <p className="text-sm text-muted-foreground">{selectedRisk?.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Probability</h5>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          selectedRisk?.probability === 'High' ? 'bg-error' :
                          selectedRisk?.probability === 'Medium' ? 'bg-warning' : 'bg-success'
                        }`}></div>
                        <span className={`text-sm font-medium ${getProbabilityColor(selectedRisk?.probability)}`}>
                          {selectedRisk?.probability}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2">Impact</h5>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          selectedRisk?.impact === 'High' ? 'bg-error' :
                          selectedRisk?.impact === 'Medium' ? 'bg-warning' : 'bg-success'
                        }`}></div>
                        <span className={`text-sm font-medium ${getImpactColor(selectedRisk?.impact)}`}>
                          {selectedRisk?.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Mitigation Strategy</h5>
                    <p className="text-sm text-muted-foreground">{selectedRisk?.mitigation}</p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-primary mb-1">Recommendation</p>
                        <p className="text-xs text-muted-foreground">
                          Monitor this risk factor closely and implement preventive measures during the {selectedRisk?.timeframe?.toLowerCase()} period.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon name="MousePointer" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-medium text-foreground mb-2">Select a Risk Factor</h4>
                <p className="text-sm text-muted-foreground">
                  Click on any risk factor to view detailed analysis and mitigation strategies
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-accent/10 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="TrendingDown" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-accent mb-1">Overall Risk Assessment</p>
              <p className="text-xs text-muted-foreground">
                Current risk level is <span className="font-medium text-warning">MODERATE</span>. Weather variability and water availability are primary concerns. Implement monitoring systems and maintain contingency plans for optimal risk management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentMatrix;