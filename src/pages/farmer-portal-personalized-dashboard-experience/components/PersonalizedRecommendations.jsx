import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PersonalizedRecommendations = ({ recommendations }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-error bg-error/10 border-error/20';
      case 'Medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'Low': return 'text-primary bg-primary/10 border-primary/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High': return 'AlertTriangle';
      case 'Medium': return 'AlertCircle';
      case 'Low': return 'Info';
      default: return 'Minus';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Planting': return 'Sprout';
      case 'Irrigation': return 'Droplets';
      case 'Fertilization': return 'Zap';
      case 'Pest Control': return 'Bug';
      case 'Harvesting': return 'Scissors';
      case 'Weather': return 'Cloud';
      default: return 'Lightbulb';
    }
  };

  const toggleExpanded = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Personalized Recommendations
        </h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Brain" size={16} />
          <span>AI-powered insights</span>
        </div>
      </div>
      <div className="space-y-4">
        {recommendations?.map((rec) => (
          <div 
            key={rec?.id} 
            className={`border rounded-lg p-4 growth-transition seasonal-hover ${getPriorityColor(rec?.priority)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={getCategoryIcon(rec?.category)} size={20} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-foreground">{rec?.title}</h3>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-white/50 rounded-full text-xs">
                      <Icon name={getPriorityIcon(rec?.priority)} size={12} />
                      <span>{rec?.priority}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{rec?.description}</p>
                  
                  {expandedCard === rec?.id && (
                    <div className="mt-4 space-y-3">
                      <div className="bg-white/50 rounded-lg p-3">
                        <h4 className="font-medium text-foreground mb-2">Detailed Analysis:</h4>
                        <p className="text-sm text-muted-foreground">{rec?.analysis}</p>
                      </div>
                      
                      <div className="bg-white/50 rounded-lg p-3">
                        <h4 className="font-medium text-foreground mb-2">Action Steps:</h4>
                        <ul className="space-y-1">
                          {rec?.actionSteps?.map((step, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <Icon name="CheckCircle" size={14} className="mt-0.5 flex-shrink-0" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Icon name="Calendar" size={12} />
                          <span>Timeline: {rec?.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Icon name="DollarSign" size={12} />
                          <span>Est. Cost: {rec?.estimatedCost}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Icon name="TrendingUp" size={12} />
                          <span>Impact: {rec?.expectedImpact}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName={expandedCard === rec?.id ? "ChevronUp" : "ChevronDown"}
                  onClick={() => toggleExpanded(rec?.id)}
                >
                  {expandedCard === rec?.id ? "Less" : "More"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="BookmarkPlus"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            Recommendations updated based on your farming patterns and local conditions
          </div>
          <Button variant="outline" iconName="RefreshCw" iconPosition="left">
            Refresh Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;