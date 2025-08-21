import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalInsights = () => {
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [currentDate] = useState(new Date());

  // Determine current season based on date
  useEffect(() => {
    const month = currentDate?.getMonth() + 1; // 1-12
    if (month >= 3 && month <= 5) setCurrentSeason('spring');
    else if (month >= 6 && month <= 8) setCurrentSeason('summer');
    else if (month >= 9 && month <= 11) setCurrentSeason('fall');
    else setCurrentSeason('winter');
  }, [currentDate]);

  const seasonalData = {
    spring: {
      title: "Spring Planting Season",
      subtitle: "Optimize Your Planting Decisions",
      description: "Critical planting window is here. Make data-driven decisions about crop selection, timing, and field preparation based on soil conditions and weather forecasts.",
      icon: "Sprout",
      color: "text-success",
      bgColor: "bg-success/10",
      insights: [
        {
          title: "Soil Temperature Monitoring",
          description: "Current soil temperatures are optimal for corn planting in 73% of Midwest regions",
          metric: "52°F avg",
          trend: "up",
          icon: "Thermometer"
        },
        {
          title: "Moisture Levels",
          description: "Field conditions improving with 15% moisture reduction over past week",
          metric: "18% moisture",
          trend: "down",
          icon: "Droplets"
        },
        {
          title: "Planting Window",
          description: "Extended favorable weather pattern predicted for next 10-14 days",
          metric: "14 days",
          trend: "stable",
          icon: "Calendar"
        }
      ],
      recommendations: [
        "Consider early corn varieties in northern regions",
        "Monitor soil compaction in wet fields",
        "Plan nitrogen application timing",
        "Review seed treatment options"
      ],
      cta: "View Planting Forecasts"
    },
    summer: {
      title: "Growing Season Management",
      subtitle: "Monitor Crop Development",
      description: "Peak growing season requires constant monitoring. Track crop health, manage irrigation, and prepare for potential weather challenges with real-time insights.",
      icon: "Sun",
      color: "text-warning",
      bgColor: "bg-warning/10",
      insights: [
        {
          title: "Heat Stress Risk",
          description: "Elevated temperatures expected in Great Plains region next week",
          metric: "95°F peak",
          trend: "up",
          icon: "Thermometer"
        },
        {
          title: "Irrigation Needs",
          description: "Corn water demand increasing with tasseling stage approaching",
          metric: "1.5\" weekly",
          trend: "up",
          icon: "Droplets"
        },
        {
          title: "Pest Pressure",
          description: "Corn borer activity moderate, scouting recommended",
          metric: "Medium risk",
          trend: "stable",
          icon: "Bug"
        }
      ],
      recommendations: [
        "Increase irrigation frequency during heat waves",
        "Scout for pest activity weekly",
        "Monitor nitrogen uptake rates",
        "Plan fungicide applications"
      ],
      cta: "View Growth Monitoring"
    },
    fall: {
      title: "Harvest Planning",
      subtitle: "Maximize Harvest Efficiency",
      description: "Harvest season is approaching. Optimize timing, logistics, and storage decisions based on crop maturity predictions and weather windows.",
      icon: "Wheat",
      color: "text-accent",
      bgColor: "bg-accent/10",
      insights: [
        {
          title: "Crop Maturity",
          description: "Corn reaching physiological maturity 5 days ahead of average",
          metric: "R6 stage",
          trend: "up",
          icon: "Clock"
        },
        {
          title: "Moisture Content",
          description: "Field drying conditions favorable with low humidity forecast",
          metric: "22% moisture",
          trend: "down",
          icon: "Droplets"
        },
        {
          title: "Weather Window",
          description: "7-day dry period starting this weekend, ideal for harvest",
          metric: "7 dry days",
          trend: "stable",
          icon: "Sun"
        }
      ],
      recommendations: [
        "Schedule combine maintenance now",
        "Secure grain storage capacity",
        "Monitor commodity prices daily",
        "Plan field access routes"
      ],
      cta: "View Harvest Forecasts"
    },
    winter: {
      title: "Planning & Analysis",
      subtitle: "Prepare for Next Season",
      description: "Use the quiet season to analyze performance, plan improvements, and prepare for the upcoming growing season with comprehensive data insights.",
      icon: "Snowflake",
      color: "text-primary",
      bgColor: "bg-primary/10",
      insights: [
        {
          title: "Yield Analysis",
          description: "Final yield data shows 12% improvement over 5-year average",
          metric: "+12% yield",
          trend: "up",
          icon: "TrendingUp"
        },
        {
          title: "Soil Health",
          description: "Winter soil testing reveals optimal nutrient levels in 85% of fields",
          metric: "85% optimal",
          trend: "stable",
          icon: "TestTube"
        },
        {
          title: "Planning Progress",
          description: "Seed orders and input planning 60% complete for next season",
          metric: "60% complete",
          trend: "up",
          icon: "CheckCircle"
        }
      ],
      recommendations: [
        "Complete soil testing program",
        "Analyze yield maps for patterns",
        "Plan crop rotation strategies",
        "Review input supplier contracts"
      ],
      cta: "View Planning Tools"
    }
  };

  const current = seasonalData?.[currentSeason];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="bg-gradient-to-br from-muted/30 to-accent/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center space-x-2 ${current?.bgColor} ${current?.color} px-4 py-2 rounded-full text-sm font-medium`}>
            <Icon name={current?.icon} size={16} />
            <span>Current Season</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {current?.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {current?.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Seasonal Insights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {current?.subtitle}
            </h3>
            
            <div className="space-y-4">
              {current?.insights?.map((insight, index) => (
                <div key={index} className="bg-white rounded-xl harvest-shadow p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${current?.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon name={insight?.icon} size={20} className={current?.color} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{insight?.title}</h4>
                        <p className="text-sm text-muted-foreground">{insight?.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">{insight?.metric}</div>
                      <div className={`flex items-center space-x-1 text-sm ${getTrendColor(insight?.trend)}`}>
                        <Icon name={getTrendIcon(insight?.trend)} size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Recommendations & Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl harvest-shadow p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Seasonal Recommendations
              </h3>
              
              <ul className="space-y-3">
                {current?.recommendations?.map((recommendation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{recommendation}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <Link to="/forecast-dashboard-ai-prediction-interface">
                  <Button 
                    variant="default" 
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {current?.cta}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Weather Alert */}
            <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-warning" />
                <h4 className="font-semibold text-foreground">Weather Alert</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Severe thunderstorms possible in the Midwest region this weekend. Monitor forecasts closely and secure equipment as needed.
              </p>
              <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                View Detailed Forecast
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl harvest-shadow p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {currentDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="text-sm text-muted-foreground">Today's Date</div>
              </div>
              <div className="bg-white rounded-xl harvest-shadow p-4 text-center">
                <div className="text-2xl font-bold text-accent">
                  {Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24))}
                </div>
                <div className="text-sm text-muted-foreground">Day of Year</div>
              </div>
            </div>
          </div>
        </div>

        {/* Season Navigation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full p-2 harvest-shadow">
            {Object.entries(seasonalData)?.map(([season, data]) => (
              <button
                key={season}
                onClick={() => setCurrentSeason(season)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium growth-transition ${
                  season === currentSeason
                    ? `${data?.bgColor} ${data?.color}`
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={data?.icon} size={16} />
                <span className="capitalize">{season}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalInsights;