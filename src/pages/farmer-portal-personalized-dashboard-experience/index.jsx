import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import CropOverviewCards from './components/CropOverviewCards';
import HistoricalTracking from './components/HistoricalTracking';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import AchievementMilestones from './components/AchievementMilestones';
import PlanningTools from './components/PlanningTools';
import NotificationCenter from './components/NotificationCenter';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const FarmerPortalDashboard = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock farmer data
  const farmerData = {
    name: "John Mitchell",
    location: "Iowa, USA",
    farmSize: 450,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  };

  const currentSeason = "Spring 2025";
  const weatherAlert = "Rain expected in 2 days";

  // Mock crop data
  const cropsData = [
    {
      id: 1,
      name: "Corn",
      variety: "Pioneer P1197AM",
      icon: "Wheat",
      plantedArea: 180,
      growthStage: "V6 - Six Leaf",
      expectedYield: "185 bu/acre",
      harvestDate: "Oct 15, 2025",
      status: "Excellent",
      accuracy: 94
    },
    {
      id: 2,
      name: "Soybeans",
      variety: "Asgrow AG2834",
      icon: "Sprout",
      plantedArea: 150,
      growthStage: "R2 - Full Bloom",
      expectedYield: "58 bu/acre",
      harvestDate: "Sep 28, 2025",
      status: "Good",
      accuracy: 91
    },
    {
      id: 3,
      name: "Wheat",
      variety: "WB-Grainfield",
      icon: "Wheat",
      plantedArea: 120,
      growthStage: "Grain Filling",
      expectedYield: "72 bu/acre",
      harvestDate: "Jul 20, 2025",
      status: "Fair",
      accuracy: 88
    }
  ];

  // Mock historical data
  const historicalData = {
    yieldTrends: [
      { season: "2020", predicted: 165, actual: 158 },
      { season: "2021", predicted: 172, actual: 175 },
      { season: "2022", predicted: 168, actual: 164 },
      { season: "2023", predicted: 178, actual: 182 },
      { season: "2024", predicted: 185, actual: 188 }
    ],
    weatherImpact: [
      { month: "Mar", rainfall: 45, temperature: 52 },
      { month: "Apr", rainfall: 38, temperature: 61 },
      { month: "May", rainfall: 52, temperature: 72 },
      { month: "Jun", rainfall: 41, temperature: 78 },
      { month: "Jul", rainfall: 35, temperature: 82 },
      { month: "Aug", rainfall: 28, temperature: 79 }
    ]
  };

  const predictionAccuracy = [
    { crop: "Corn", accuracy: 94 },
    { crop: "Soybeans", accuracy: 91 },
    { crop: "Wheat", accuracy: 88 },
    { crop: "Cotton", accuracy: 86 }
  ];

  // Mock recommendations
  const recommendations = [
    {
      id: 1,
      title: "Optimize Nitrogen Application",
      category: "Fertilization",
      priority: "High",
      description: "Based on soil tests and current corn growth stage, consider split nitrogen application for maximum efficiency.",
      analysis: `Your corn fields are entering the V6 stage, which is critical for nitrogen uptake. Soil analysis shows moderate nitrogen levels, but with the predicted rainfall in the next week, there's risk of nitrogen leaching. A split application approach would optimize nutrient availability while minimizing environmental impact.`,
      actionSteps: [
        "Apply 80 lbs N/acre as side-dress application before V8 stage",
        "Monitor soil moisture levels for optimal timing",
        "Consider using nitrogen stabilizers to reduce leaching",
        "Schedule follow-up soil test in 3 weeks"
      ],
      timeline: "Next 7-10 days",
      estimatedCost: "$45/acre",
      expectedImpact: "+8-12 bu/acre yield increase"
    },
    {
      id: 2,
      title: "Irrigation Schedule Adjustment",
      category: "Irrigation",
      priority: "Medium",
      description: "Weather patterns suggest adjusting irrigation timing to optimize water usage and prevent stress.",
      analysis: `Long-range weather forecasts indicate a dry period following the expected rainfall. Your soybean fields will benefit from adjusted irrigation scheduling to maintain optimal soil moisture during the critical R2-R4 reproductive stages.`,
      actionSteps: [
        "Reduce irrigation frequency by 20% for next 5 days",
        "Increase monitoring of soil moisture sensors",
        "Prepare for increased irrigation post-rainfall period",
        "Check irrigation system efficiency"
      ],
      timeline: "Immediate - next 2 weeks",
      estimatedCost: "$12/acre water savings",
      expectedImpact: "15% water efficiency improvement"
    },
    {
      id: 3,
      title: "Pest Monitoring Alert",
      category: "Pest Control",
      priority: "Medium",
      description: "Corn rootworm activity detected in neighboring fields. Implement monitoring protocol.",
      analysis: `Regional pest monitoring networks report increased corn rootworm activity. Your corn fields are at the vulnerable V6 stage, and proactive monitoring will help determine if treatment thresholds are reached.`,
      actionSteps: [
        "Conduct weekly root inspections in 5 random locations per field",
        "Set up pheromone traps along field edges",
        "Document any signs of root damage or adult beetles",
        "Prepare treatment plan if threshold exceeded"
      ],
      timeline: "Start immediately, continue for 4 weeks",
      estimatedCost: "$8/acre monitoring",
      expectedImpact: "Prevent potential 15-25% yield loss"
    }
  ];

  // Mock achievements
  const achievements = [
    {
      id: 1,
      title: "Yield Master",
      description: "Achieve 95%+ prediction accuracy for 3 consecutive seasons",
      type: "accuracy",
      progress: 100,
      unlocked: true,
      unlockedDate: "March 15, 2025"
    },
    {
      id: 2,
      title: "Efficiency Expert",
      description: "Reduce input costs by 15% while maintaining yield",
      type: "efficiency",
      progress: 87,
      unlocked: false
    },
    {
      id: 3,
      title: "Sustainability Champion",
      description: "Implement 5+ sustainable farming practices",
      type: "sustainability",
      progress: 100,
      unlocked: true,
      unlockedDate: "January 8, 2025"
    },
    {
      id: 4,
      title: "Innovation Adopter",
      description: "Use 3+ new AgriPredict features in a season",
      type: "innovation",
      progress: 67,
      unlocked: false
    },
    {
      id: 5,
      title: "Community Contributor",
      description: "Share insights with 10+ fellow farmers",
      type: "community",
      progress: 100,
      unlocked: true,
      unlockedDate: "February 22, 2025"
    },
    {
      id: 6,
      title: "Record Breaker",
      description: "Achieve personal best yield in any crop category",
      type: "yield",
      progress: 45,
      unlocked: false
    }
  ];

  const currentProgress = [
    { label: "Fields Monitored", value: "12" },
    { label: "Predictions Made", value: "47" },
    { label: "Accuracy Rate", value: "94%" },
    { label: "Cost Savings", value: "$8.2K" }
  ];

  // Mock planning data
  const planningData = {
    activities: [
      {
        title: "Corn Side-dress Fertilizer",
        date: "May 15, 2025",
        icon: "Zap",
        status: "upcoming"
      },
      {
        title: "Soybean Pest Scouting",
        date: "May 20, 2025",
        icon: "Bug",
        status: "upcoming"
      },
      {
        title: "Wheat Harvest Prep",
        date: "July 10, 2025",
        icon: "Scissors",
        status: "planned"
      },
      {
        title: "Soil Testing",
        date: "April 30, 2025",
        icon: "TestTube",
        status: "completed"
      }
    ],
    weatherForecast: [
      { day: "Mon", icon: "Sun", temp: 75 },
      { day: "Tue", icon: "CloudRain", temp: 68 },
      { day: "Wed", icon: "CloudRain", temp: 65 },
      { day: "Thu", icon: "PartlyCloudy", temp: 72 },
      { day: "Fri", icon: "Sun", temp: 78 },
      { day: "Sat", icon: "Sun", temp: 82 },
      { day: "Sun", icon: "PartlyCloudy", temp: 79 }
    ],
    timeline: [
      {
        title: "Spring Planting Complete",
        date: "April 25, 2025",
        icon: "Sprout",
        description: "All corn and soybean fields planted according to schedule",
        duration: "3 weeks",
        priority: "High"
      },
      {
        title: "First Cultivation",
        date: "May 30, 2025",
        icon: "Tractor",
        description: "Mechanical weed control and soil aeration",
        duration: "1 week",
        priority: "Medium"
      },
      {
        title: "Mid-Season Assessment",
        date: "July 1, 2025",
        icon: "BarChart",
        description: "Comprehensive crop health and yield potential evaluation",
        duration: "2 days",
        priority: "High"
      }
    ],
    scenarios: [
      {
        name: "Optimal Weather Scenario",
        confidence: "High",
        expectedYield: "195 bu/acre",
        investment: "$485/acre",
        roi: 24,
        description: "Assumes normal rainfall patterns and moderate temperatures throughout growing season"
      },
      {
        name: "Drought Stress Scenario",
        confidence: "Medium",
        expectedYield: "165 bu/acre",
        investment: "$520/acre",
        roi: 12,
        description: "Accounts for 20% below normal rainfall requiring additional irrigation"
      }
    ]
  };

  // Mock notifications
  const notifications = [
    {
      id: 1,
      title: "Weather Alert: Heavy Rain Expected",
      message: "Significant rainfall predicted for next 48 hours. Consider delaying field operations.",
      type: "weather",
      priority: "high",
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      read: false,
      location: "Field 7A",
      details: `Weather models show 2-3 inches of rain expected over the next 48 hours with potential for localized flooding. Wind speeds may reach 25-30 mph. Recommend securing loose equipment and postponing any planned spraying operations.`,
      actionRequired: "Review Field Schedule"
    },
    {
      id: 2,
      title: "Optimal Planting Window",
      message: "Soil conditions ideal for soybean planting in Field 12B starting tomorrow.",
      type: "planting",
      priority: "medium",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false,
      location: "Field 12B",
      details: "Soil temperature has reached 55°F and moisture levels are optimal. Weather forecast shows stable conditions for the next 5 days."
    },
    {
      id: 3,
      title: "Harvest Readiness Update",
      message: "Wheat in Field 3C approaching optimal harvest moisture content.",
      type: "harvest",
      priority: "medium",
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      read: true,
      location: "Field 3C"
    },
    {
      id: 4,
      title: "Irrigation System Maintenance",
      message: "Scheduled maintenance reminder for pivot irrigation system.",
      type: "irrigation",
      priority: "low",
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      read: true,
      location: "Field 8A"
    },
    {
      id: 5,
      title: "Pest Pressure Alert",
      message: "Increased corn rootworm activity detected in surrounding area.",
      type: "pest",
      priority: "high",
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      read: false,
      location: "All Corn Fields",
      details: "Regional monitoring traps show 40% increase in adult corn rootworm beetles. Recommend increased scouting frequency and consider treatment thresholds.",
      actionRequired: "Schedule Scouting"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WelcomeHeader 
            farmer={farmerData}
            currentSeason={currentSeason}
            weatherAlert={weatherAlert}
          />
          
          <CropOverviewCards crops={cropsData} />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            <div className="xl:col-span-2">
              <HistoricalTracking 
                historicalData={historicalData}
                predictionAccuracy={predictionAccuracy}
              />
            </div>
            <div>
              <NotificationCenter notifications={notifications} />
            </div>
          </div>
          
          <PersonalizedRecommendations recommendations={recommendations} />
          
          <AchievementMilestones 
            achievements={achievements}
            currentProgress={currentProgress}
          />
          
          <PlanningTools planningData={planningData} />
          
          {/* Quick Actions Footer */}
          <div className="bg-white rounded-lg harvest-shadow p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quick Actions</h3>
                <p className="text-sm text-muted-foreground">
                  Access frequently used tools and features
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" iconName="Plus" iconPosition="left">
                  Add Field
                </Button>
                <Button variant="outline" iconName="BarChart3" iconPosition="left">
                  New Prediction
                </Button>
                <Button variant="outline" iconName="Users" iconPosition="left">
                  Connect Advisor
                </Button>
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Export Data
                </Button>
                <Button variant="default" iconName="MessageCircle" iconPosition="left">
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 agricultural-gradient rounded-lg flex items-center justify-center">
                <Icon name="Sprout" size={20} color="white" />
              </div>
              <span className="text-lg font-bold text-primary">AgriPredict</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} AgriPredict. Empowering farmers with intelligent insights.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmerPortalDashboard;