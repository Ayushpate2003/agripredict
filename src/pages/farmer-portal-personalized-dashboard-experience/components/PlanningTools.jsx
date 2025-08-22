import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { exportPlanToExcel } from './exportToExcel';

const PlanningTools = ({ planningData }) => {
  const [selectedSeason, setSelectedSeason] = useState('2025-spring');
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [viewMode, setViewMode] = useState('calendar');

  const seasonOptions = [
    { value: '2025-spring', label: 'Spring 2025' },
    { value: '2025-summer', label: 'Summer 2025' },
    { value: '2025-fall', label: 'Fall 2025' },
    { value: '2026-spring', label: 'Spring 2026' }
  ];

  const cropOptions = [
    { value: 'corn', label: 'Corn' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'cotton', label: 'Cotton' }
  ];

  const viewModes = [
    { id: 'calendar', label: 'Calendar View', icon: 'Calendar' },
    { id: 'timeline', label: 'Timeline View', icon: 'Clock' },
    { id: 'scenarios', label: 'Scenarios', icon: 'GitBranch' }
  ];

  const renderCalendarView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Key Activities</h4>
        {planningData?.activities?.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={activity?.icon} size={20} color="var(--color-primary)" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">{activity?.title}</div>
              <div className="text-sm text-muted-foreground">{activity?.date}</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              activity?.status === 'completed' ? 'bg-success/10 text-success' :
              activity?.status === 'upcoming'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
            }`}>
              {activity?.status}
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Weather Forecast</h4>
        <div className="grid grid-cols-7 gap-2">
          {planningData?.weatherForecast?.map((day, index) => (
            <div key={index} className="text-center p-2 bg-muted/30 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">{day?.day}</div>
              <Icon name={day?.icon} size={20} className="mx-auto mb-1" />
              <div className="text-sm font-medium">{day?.temp}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTimelineView = () => (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        {planningData?.timeline?.map((event, index) => (
          <div key={index} className="relative flex items-start space-x-4 pb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
              <Icon name={event?.icon} size={16} color="white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">{event?.title}</h4>
                <span className="text-sm text-muted-foreground">{event?.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{event?.description}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Duration: {event?.duration}</span>
                <span>Priority: {event?.priority}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderScenariosView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {planningData?.scenarios?.map((scenario, index) => (
          <div key={index} className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground">{scenario?.name}</h4>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                scenario?.confidence === 'High' ? 'bg-success/10 text-success' :
                scenario?.confidence === 'Medium'? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'
              }`}>
                {scenario?.confidence} Confidence
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Expected Yield</span>
                <span className="font-medium">{scenario?.expectedYield}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Investment</span>
                <span className="font-medium">{scenario?.investment}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">ROI</span>
                <span className={`font-medium ${scenario?.roi > 0 ? 'text-success' : 'text-error'}`}>
                  {scenario?.roi > 0 ? '+' : ''}{scenario?.roi}%
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">{scenario?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (viewMode) {
      case 'calendar': return renderCalendarView();
      case 'timeline': return renderTimelineView();
      case 'scenarios': return renderScenariosView();
      default: return renderCalendarView();
    }
  };

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-4 lg:mb-0">
          Multi-Season Planning Tools
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select
            options={seasonOptions}
            value={selectedSeason}
            onChange={setSelectedSeason}
            placeholder="Select season"
            className="w-full sm:w-40"
          />
          <Select
            options={cropOptions}
            value={selectedCrop}
            onChange={setSelectedCrop}
            placeholder="Select crop"
            className="w-full sm:w-40"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {viewModes?.map((mode) => (
          <button
            key={mode?.id}
            onClick={() => setViewMode(mode?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium growth-transition ${
              viewMode === mode?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={mode?.icon} size={16} />
            <span>{mode?.label}</span>
          </button>
        ))}
      </div>
      <div className="min-h-96">
        {renderContent()}
      </div>
      <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          Planning data updated based on historical patterns and weather forecasts
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={() => exportPlanToExcel(planningData)}
          >
            Export Plan
          </Button>
          <Button variant="default" iconName="Share" iconPosition="left">
            Share with Advisor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanningTools;