import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PredictionInputPanel from './components/PredictionInputPanel';
import YieldPredictionChart from './components/YieldPredictionChart';
import WeatherImpactAnalysis from './components/WeatherImpactAnalysis';
import ScenarioComparison from './components/ScenarioComparison';
import RiskAssessmentMatrix from './components/RiskAssessmentMatrix';
import RealtimeWeatherWidget from './components/RealtimeWeatherWidget';
import ExportReportModal from './components/ExportReportModal';

const ForecastDashboard = () => {
  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [dashboardView, setDashboardView] = useState('overview');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = 'Forecast Dashboard - AI Prediction Interface | AgriPredict';
  }, []);

  const handlePredictionSubmit = async (formData) => {
    setIsLoading(true);
    setSelectedCrop(formData?.crop);
    setSelectedLocation(formData?.location);
    // Simulate AI prediction generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Mock prediction data for chart (array of months)
    const mockPredictionData = [
      { month: 'Mar', predicted: 45, confidence: 85, historical: 42 },
      { month: 'Apr', predicted: 78, confidence: 88, historical: 75 },
      { month: 'May', predicted: 125, confidence: 92, historical: 118 },
      { month: 'Jun', predicted: 165, confidence: 94, historical: 158 },
      { month: 'Jul', predicted: 185, confidence: 96, historical: 178 },
      { month: 'Aug', predicted: 195, confidence: 94, historical: 188 },
      { month: 'Sep', predicted: 198, confidence: 92, historical: 192 },
      { month: 'Oct', predicted: 200, confidence: 90, historical: 195 }
    ];
    setPredictionData(mockPredictionData);
    setIsLoading(false);
  };

  const dashboardViews = [
    { id: 'overview', name: 'Overview', icon: 'LayoutDashboard' },
    { id: 'predictions', name: 'Predictions', icon: 'TrendingUp' },
    { id: 'weather', name: 'Weather', icon: 'Cloud' },
    { id: 'scenarios', name: 'Scenarios', icon: 'GitCompare' },
    { id: 'risks', name: 'Risk Analysis', icon: 'Shield' }
  ];

  const renderDashboardContent = () => {
    switch (dashboardView) {
      case 'predictions':
        return (
          <div className="space-y-6">
            <YieldPredictionChart predictionData={predictionData} selectedCrop={selectedCrop} />
            <RealtimeWeatherWidget location={selectedLocation} />
            <WeatherImpactAnalysis />
          </div>
        );
      case 'weather':
        return (
          <div className="space-y-6">
            <RealtimeWeatherWidget location={selectedLocation} />
            <WeatherImpactAnalysis />
          </div>
        );
      case 'scenarios':
        return (
          <div className="space-y-6">
            <ScenarioComparison />
            <YieldPredictionChart predictionData={predictionData} selectedCrop={selectedCrop} />
          </div>
        );
      case 'risks':
        return (
          <div className="space-y-6">
            <RiskAssessmentMatrix />
            <WeatherImpactAnalysis />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <YieldPredictionChart predictionData={predictionData} selectedCrop={selectedCrop} />
              <RealtimeWeatherWidget location={selectedLocation} />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <WeatherImpactAnalysis />
              <ScenarioComparison />
            </div>
            <RiskAssessmentMatrix />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  AI Prediction Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Transform complex agricultural data into actionable insights with AI-powered forecasting
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  iconName="RefreshCw"
                  iconPosition="left"
                  onClick={() => window.location?.reload()}
                >
                  Refresh Data
                </Button>
                <Button
                  variant="default"
                  iconName="Download"
                  iconPosition="left"
                  onClick={() => setIsExportModalOpen(true)}
                  disabled={!predictionData}
                >
                  Export Report
                </Button>
              </div>
            </div>

            {/* Dashboard Navigation */}
            <div className="mt-6 border-b border-border">
              <nav className="flex space-x-8 overflow-x-auto">
                {dashboardViews?.map((view) => (
                  <button
                    key={view?.id}
                    onClick={() => setDashboardView(view?.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap growth-transition ${
                      dashboardView === view?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <Icon name={view?.icon} size={16} />
                    <span>{view?.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar - Input Panel */}
            <div className={`lg:col-span-1 ${sidebarCollapsed ? 'hidden lg:block' : ''}`}>
              <div className="sticky top-24">
                <PredictionInputPanel 
                  onPredictionSubmit={handlePredictionSubmit}
                  isLoading={isLoading}
                />
              </div>
            </div>

            {/* Main Content Area */}
            <div className={`${sidebarCollapsed ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
              {/* Loading State */}
              {isLoading && (
                <div className="bg-white rounded-lg harvest-shadow border border-border p-12">
                  <div className="text-center">
                    <div className="w-16 h-16 agricultural-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Icon name="Zap" size={32} color="white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Generating AI Predictions
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Analyzing weather patterns, soil conditions, and historical data...
                    </p>
                    <div className="w-64 mx-auto bg-border rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dashboard Content */}
              {!isLoading && (
                <>
                  {/* Quick Stats */}
                  {predictionData && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-white rounded-lg harvest-shadow border border-border p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Target" size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Predicted Yield</p>
                            <p className="text-xl font-bold text-foreground">{predictionData?.predictedYield} bu/acre</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg harvest-shadow border border-border p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                            <Icon name="CheckCircle" size={20} className="text-success" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Confidence</p>
                            <p className="text-xl font-bold text-foreground">{predictionData?.confidence}%</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg harvest-shadow border border-border p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                            <Icon name="AlertTriangle" size={20} className="text-warning" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Risk Level</p>
                            <p className="text-xl font-bold text-foreground capitalize">{predictionData?.riskLevel}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg harvest-shadow border border-border p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Icon name="Sprout" size={20} className="text-accent" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Crop Type</p>
                            <p className="text-xl font-bold text-foreground capitalize">{predictionData?.crop}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Main Dashboard Content */}
                  {renderDashboardContent()}

                  {/* Getting Started Message */}
                  {!predictionData && (
                    <div className="bg-white rounded-lg harvest-shadow border border-border p-12">
                      <div className="text-center max-w-md mx-auto">
                        <div className="w-16 h-16 agricultural-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Sprout" size={32} color="white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Welcome to AgriPredict Dashboard
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Configure your farming parameters in the sidebar to generate AI-powered yield predictions and comprehensive agricultural insights.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                          <Icon name="ArrowLeft" size={16} />
                          <span>Start by filling out the prediction form</span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Sidebar Toggle for Mobile */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="fixed bottom-6 right-6 lg:hidden w-12 h-12 agricultural-gradient rounded-full flex items-center justify-center harvest-shadow z-40"
          >
            <Icon name={sidebarCollapsed ? "ChevronLeft" : "Settings"} size={20} color="white" />
          </button>
        </div>
      </div>
      {/* Export Modal */}
      <ExportReportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        predictionData={predictionData}
      />
    </div>
  );
};

export default ForecastDashboard;