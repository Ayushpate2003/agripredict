import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementMilestones = ({ achievements, currentProgress }) => {
  const getAchievementIcon = (type) => {
    switch (type) {
      case 'yield': return 'Trophy';
      case 'accuracy': return 'Target';
      case 'sustainability': return 'Leaf';
      case 'efficiency': return 'Zap';
      case 'innovation': return 'Lightbulb';
      case 'community': return 'Users';
      default: return 'Award';
    }
  };

  const getAchievementColor = (type, unlocked) => {
    if (!unlocked) return 'text-muted-foreground bg-muted/50';
    
    switch (type) {
      case 'yield': return 'text-warning bg-warning/10';
      case 'accuracy': return 'text-primary bg-primary/10';
      case 'sustainability': return 'text-success bg-success/10';
      case 'efficiency': return 'text-accent bg-accent/10';
      case 'innovation': return 'text-secondary bg-secondary/10';
      case 'community': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted/50';
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Achievement Milestones
        </h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Award" size={16} />
          <span>{achievements?.filter(a => a?.unlocked)?.length} of {achievements?.length} unlocked</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {achievements?.map((achievement) => (
          <div 
            key={achievement?.id}
            className={`relative p-4 rounded-lg border-2 growth-transition seasonal-hover ${
              achievement?.unlocked 
                ? 'border-primary/20 bg-primary/5' :'border-muted bg-muted/20'
            }`}
          >
            {achievement?.unlocked && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} color="white" />
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getAchievementColor(achievement?.type, achievement?.unlocked)}`}>
                <Icon 
                  name={getAchievementIcon(achievement?.type)} 
                  size={24} 
                  color={achievement?.unlocked ? "currentColor" : "#666666"}
                />
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold ${achievement?.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {achievement?.title}
                </h3>
                <p className="text-sm text-muted-foreground">{achievement?.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className={achievement?.unlocked ? 'text-success font-medium' : 'text-muted-foreground'}>
                  {achievement?.progress}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full growth-transition ${
                    achievement?.unlocked ? 'bg-success' : 'bg-muted-foreground'
                  }`}
                  style={{ width: `${achievement?.progress}%` }}
                />
              </div>
              {achievement?.unlocked && achievement?.unlockedDate && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Icon name="Calendar" size={12} />
                  <span>Unlocked: {achievement?.unlockedDate}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Current Season Progress</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentProgress?.map((progress, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{progress?.value}</div>
              <div className="text-sm text-muted-foreground">{progress?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementMilestones;