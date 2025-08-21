import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SeasonalCalendar = ({ selectedRegion, regions }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const seasonalData = {
    0: { // January
      season: 'Winter Planning',
      activities: [
        { task: 'Soil Testing', priority: 'High', timing: 'Early January', icon: 'TestTube' },
        { task: 'Equipment Maintenance', priority: 'Medium', timing: 'Mid January', icon: 'Wrench' },
        { task: 'Seed Ordering', priority: 'High', timing: 'Late January', icon: 'Package' },
        { task: 'Financial Planning', priority: 'Medium', timing: 'Throughout', icon: 'Calculator' }
      ],
      weather: { temp: '32°F', precipitation: '2.1"', conditions: 'Cold, occasional snow' },
      recommendations: [
        'Review previous year\'s yield data and plan improvements',
        'Attend winter agricultural conferences and workshops',
        'Finalize crop rotation plans for the upcoming season'
      ]
    },
    1: { // February
      season: 'Pre-Season Prep',
      activities: [
        { task: 'Field Preparation Planning', priority: 'High', timing: 'Early February', icon: 'Map' },
        { task: 'Fertilizer Procurement', priority: 'High', timing: 'Mid February', icon: 'Beaker' },
        { task: 'Insurance Review', priority: 'Medium', timing: 'Late February', icon: 'Shield' },
        { task: 'Labor Planning', priority: 'Medium', timing: 'Throughout', icon: 'Users' }
      ],
      weather: { temp: '38°F', precipitation: '2.8"', conditions: 'Cool, increasing daylight' },
      recommendations: [
        'Monitor soil temperature for spring preparation timing',
        'Check and calibrate planting equipment',
        'Review weather forecasts for early spring planning'
      ]
    },
    2: { // March
      season: 'Spring Preparation',
      activities: [
        { task: 'Field Condition Assessment', priority: 'High', timing: 'Early March', icon: 'Eye' },
        { task: 'Pre-Plant Fertilizer Application', priority: 'High', timing: 'Mid March', icon: 'Droplets' },
        { task: 'Equipment Final Check', priority: 'Medium', timing: 'Late March', icon: 'CheckCircle' },
        { task: 'Seed Treatment', priority: 'High', timing: 'Throughout', icon: 'Pill' }
      ],
      weather: { temp: '49°F', precipitation: '3.5"', conditions: 'Mild, variable conditions' },
      recommendations: [
        'Wait for proper soil conditions before field work',
        'Monitor soil moisture levels closely',
        'Prepare for potential late frost protection'
      ]
    },
    3: { // April
      season: 'Planting Season',
      activities: [
        { task: 'Corn Planting', priority: 'Critical', timing: 'Mid to Late April', icon: 'Sprout' },
        { task: 'Soil Temperature Monitoring', priority: 'High', timing: 'Throughout', icon: 'Thermometer' },
        { task: 'Herbicide Application', priority: 'High', timing: 'Pre/Post Plant', icon: 'Spray' },
        { task: 'Planting Progress Tracking', priority: 'Medium', timing: 'Daily', icon: 'BarChart' }
      ],
      weather: { temp: '58°F', precipitation: '4.2"', conditions: 'Warming, spring rains' },
      recommendations: [
        'Plant when soil temperature reaches 50°F consistently',
        'Monitor weather for planting windows',
        'Ensure proper seed depth and spacing'
      ]
    },
    4: { // May
      season: 'Peak Planting',
      activities: [
        { task: 'Soybean Planting', priority: 'Critical', timing: 'Early to Mid May', icon: 'Sprout' },
        { task: 'Emergence Monitoring', priority: 'High', timing: 'Throughout', icon: 'Eye' },
        { task: 'Pest Scouting', priority: 'Medium', timing: 'Weekly', icon: 'Bug' },
        { task: 'Replanting Assessment', priority: 'High', timing: 'Late May', icon: 'RefreshCw' }
      ],
      weather: { temp: '68°F', precipitation: '4.8"', conditions: 'Warm, frequent showers' },
      recommendations: [
        'Complete planting by optimal dates for maximum yield',
        'Scout for early season pests and diseases',
        'Monitor stand establishment and uniformity'
      ]
    },
    5: { // June
      season: 'Early Growth',
      activities: [
        { task: 'Cultivation/Weed Control', priority: 'High', timing: 'Early June', icon: 'Scissors' },
        { task: 'Nutrient Management', priority: 'High', timing: 'Mid June', icon: 'Leaf' },
        { task: 'Growth Stage Monitoring', priority: 'Medium', timing: 'Weekly', icon: 'TrendingUp' },
        { task: 'Irrigation Planning', priority: 'Medium', timing: 'Throughout', icon: 'CloudRain' }
      ],
      weather: { temp: '75°F', precipitation: '3.9"', conditions: 'Warm, variable rainfall' },
      recommendations: [
        'Control weeds before they compete with crops',
        'Monitor for nutrient deficiencies',
        'Assess irrigation needs based on rainfall'
      ]
    },
    6: { // July
      season: 'Rapid Growth',
      activities: [
        { task: 'Disease Monitoring', priority: 'High', timing: 'Throughout', icon: 'AlertTriangle' },
        { task: 'Insect Scouting', priority: 'High', timing: 'Weekly', icon: 'Bug' },
        { task: 'Fungicide Application', priority: 'Medium', timing: 'As Needed', icon: 'Spray' },
        { task: 'Yield Potential Assessment', priority: 'Medium', timing: 'Late July', icon: 'Target' }
      ],
      weather: { temp: '78°F', precipitation: '3.2"', conditions: 'Hot, humid conditions' },
      recommendations: [
        'Monitor for heat stress in crops',
        'Scout for mid-season pests and diseases',
        'Ensure adequate moisture during critical growth periods'
      ]
    },
    7: { // August
      season: 'Reproductive Stage',
      activities: [
        { task: 'Pollination Monitoring', priority: 'Critical', timing: 'Early August', icon: 'Heart' },
        { task: 'Drought Stress Assessment', priority: 'High', timing: 'Throughout', icon: 'Sun' },
        { task: 'Late Season Pest Control', priority: 'Medium', timing: 'As Needed', icon: 'Shield' },
        { task: 'Harvest Equipment Prep', priority: 'Low', timing: 'Late August', icon: 'Truck' }
      ],
      weather: { temp: '76°F', precipitation: '3.1"', conditions: 'Hot, dry periods possible' },
      recommendations: [
        'Ensure adequate water during pollination',
        'Monitor for late season diseases',
        'Begin harvest preparation activities'
      ]
    },
    8: { // September
      season: 'Grain Fill',
      activities: [
        { task: 'Maturity Monitoring', priority: 'High', timing: 'Throughout', icon: 'Clock' },
        { task: 'Harvest Planning', priority: 'High', timing: 'Early September', icon: 'Calendar' },
        { task: 'Storage Preparation', priority: 'Medium', timing: 'Mid September', icon: 'Archive' },
        { task: 'Marketing Decisions', priority: 'Medium', timing: 'Throughout', icon: 'DollarSign' }
      ],
      weather: { temp: '69°F', precipitation: '3.8"', conditions: 'Cooling, fall weather begins' },
      recommendations: [
        'Monitor crop maturity and moisture levels',
        'Prepare harvest equipment and storage facilities',
        'Plan harvest logistics and labor needs'
      ]
    },
    9: { // October
      season: 'Harvest Season',
      activities: [
        { task: 'Corn Harvest', priority: 'Critical', timing: 'Throughout', icon: 'Scissors' },
        { task: 'Moisture Testing', priority: 'High', timing: 'Daily', icon: 'Droplets' },
        { task: 'Grain Storage Management', priority: 'High', timing: 'Throughout', icon: 'Archive' },
        { task: 'Field Cleanup', priority: 'Medium', timing: 'Post Harvest', icon: 'Broom' }
      ],
      weather: { temp: '58°F', precipitation: '2.9"', conditions: 'Cool, dry harvest weather' },
      recommendations: [
        'Harvest at optimal moisture content',
        'Monitor grain quality and storage conditions',
        'Plan for timely field cleanup and preparation'
      ]
    },
    10: { // November
      season: 'Late Harvest',
      activities: [
        { task: 'Soybean Harvest', priority: 'Critical', timing: 'Early November', icon: 'Scissors' },
        { task: 'Fall Tillage', priority: 'Medium', timing: 'Mid November', icon: 'Plow' },
        { task: 'Cover Crop Planting', priority: 'High', timing: 'Late November', icon: 'Sprout' },
        { task: 'Equipment Storage', priority: 'Medium', timing: 'Throughout', icon: 'Warehouse' }
      ],
      weather: { temp: '46°F', precipitation: '2.4"', conditions: 'Cool, shorter days' },
      recommendations: [
        'Complete harvest before winter weather',
        'Consider fall tillage based on soil conditions',
        'Plant cover crops for soil health'
      ]
    },
    11: { // December
      season: 'Winter Prep',
      activities: [
        { task: 'Year-End Record Keeping', priority: 'High', timing: 'Throughout', icon: 'FileText' },
        { task: 'Equipment Winterization', priority: 'High', timing: 'Early December', icon: 'Snowflake' },
        { task: 'Next Year Planning', priority: 'Medium', timing: 'Mid December', icon: 'Calendar' },
        { task: 'Tax Preparation', priority: 'High', timing: 'Late December', icon: 'Calculator' }
      ],
      weather: { temp: '37°F', precipitation: '2.2"', conditions: 'Cold, winter conditions' },
      recommendations: [
        'Complete all record keeping and documentation',
        'Winterize equipment and facilities',
        'Begin planning for next growing season'
      ]
    }
  };

  const currentMonthData = seasonalData?.[selectedMonth];

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'critical': return 'text-error bg-error/10 border-error/20';
      case 'high': return 'text-warning bg-warning/10 border-warning/20';
      case 'medium': return 'text-primary bg-primary/10 border-primary/20';
      case 'low': return 'text-muted-foreground bg-muted/10 border-muted/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Seasonal Calendar</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="MapPin" size={16} />
          <span>{region?.name} Region</span>
        </div>
      </div>
      {/* Month Navigation */}
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 mb-8">
        {months?.map((month, index) => (
          <button
            key={index}
            onClick={() => setSelectedMonth(index)}
            className={`p-2 rounded-lg text-sm font-medium growth-transition ${
              selectedMonth === index
                ? 'bg-primary text-white' :'bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {month?.slice(0, 3)}
          </button>
        ))}
      </div>
      {/* Current Month Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Season Info */}
        <div className="lg:col-span-1">
          <div className="bg-primary/5 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-primary mb-2">{months?.[selectedMonth]}</h3>
            <p className="text-secondary font-medium mb-4">{currentMonthData?.season}</p>
            
            <div className="space-y-3">
              <div>
                <span className="text-sm text-muted-foreground">Average Temperature</span>
                <div className="font-semibold text-foreground">{currentMonthData?.weather?.temp}</div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Precipitation</span>
                <div className="font-semibold text-foreground">{currentMonthData?.weather?.precipitation}</div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Conditions</span>
                <div className="text-sm text-foreground">{currentMonthData?.weather?.conditions}</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3">This Month</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Critical Tasks</span>
                <span className="font-medium text-error">
                  {currentMonthData?.activities?.filter(a => a?.priority === 'Critical')?.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">High Priority</span>
                <span className="font-medium text-warning">
                  {currentMonthData?.activities?.filter(a => a?.priority === 'High')?.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Activities</span>
                <span className="font-medium text-primary">{currentMonthData?.activities?.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Activities</h3>
          <div className="space-y-4 mb-8">
            {currentMonthData?.activities?.map((activity, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getPriorityColor(activity?.priority)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Icon name={activity?.icon} size={20} />
                    <span className="font-medium">{activity?.task}</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50">
                    {activity?.priority}
                  </span>
                </div>
                <div className="text-sm opacity-80">{activity?.timing}</div>
              </div>
            ))}
          </div>

          {/* Recommendations */}
          <h3 className="text-lg font-semibold text-foreground mb-4">Regional Recommendations</h3>
          <div className="space-y-3">
            {currentMonthData?.recommendations?.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg">
                <Icon name="Lightbulb" size={16} color="var(--color-success)" className="mt-0.5" />
                <span className="text-sm text-foreground">{recommendation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalCalendar;