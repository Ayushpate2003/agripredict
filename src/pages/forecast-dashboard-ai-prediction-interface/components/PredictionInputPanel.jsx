import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PredictionInputPanel = ({ onPredictionSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    crop: '',
    location: '',
    soilType: '',
    plantingDate: '',
    fieldSize: '',
    irrigationType: '',
    previousYield: ''
  });

  const cropOptions = [
    { value: 'corn', label: 'Corn (Maize)' },
    { value: 'wheat', label: 'Winter Wheat' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'rice', label: 'Rice' },
    { value: 'barley', label: 'Barley' },
    { value: 'oats', label: 'Oats' },
    { value: 'sorghum', label: 'Sorghum' }
  ];

  const soilTypeOptions = [
    { value: 'clay', label: 'Clay Soil' },
    { value: 'sandy', label: 'Sandy Soil' },
    { value: 'loam', label: 'Loam Soil' },
    { value: 'silt', label: 'Silt Soil' },
    { value: 'peat', label: 'Peat Soil' },
    { value: 'chalk', label: 'Chalk Soil' }
  ];

  const irrigationOptions = [
    { value: 'drip', label: 'Drip Irrigation' },
    { value: 'sprinkler', label: 'Sprinkler System' },
    { value: 'flood', label: 'Flood Irrigation' },
    { value: 'pivot', label: 'Center Pivot' },
    { value: 'rainfed', label: 'Rain-fed Only' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    onPredictionSubmit(formData);
  };

  const isFormValid = formData?.crop && formData?.location && formData?.soilType && formData?.plantingDate;

  return (
    <div className="bg-white rounded-lg harvest-shadow border border-border h-fit">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 agricultural-gradient rounded-lg flex items-center justify-center">
            <Icon name="Settings" size={18} color="white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Prediction Parameters</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Configure your farming parameters for AI-powered yield predictions
        </p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-4">
          <Select
            label="Crop Type"
            placeholder="Select your crop"
            options={cropOptions}
            value={formData?.crop}
            onChange={(value) => handleInputChange('crop', value)}
            required
            searchable
          />

          <Input
            label="Farm Location"
            type="text"
            placeholder="e.g., Iowa County, IA"
            value={formData?.location}
            onChange={(e) => handleInputChange('location', e?.target?.value)}
            required
          />

          <Select
            label="Soil Type"
            placeholder="Select soil type"
            options={soilTypeOptions}
            value={formData?.soilType}
            onChange={(value) => handleInputChange('soilType', value)}
            required
          />

          <Input
            label="Planting Date"
            type="date"
            value={formData?.plantingDate}
            onChange={(e) => handleInputChange('plantingDate', e?.target?.value)}
            required
          />

          <Input
            label="Field Size (acres)"
            type="number"
            placeholder="e.g., 150"
            value={formData?.fieldSize}
            onChange={(e) => handleInputChange('fieldSize', e?.target?.value)}
            min="1"
          />

          <Select
            label="Irrigation Method"
            placeholder="Select irrigation type"
            options={irrigationOptions}
            value={formData?.irrigationType}
            onChange={(value) => handleInputChange('irrigationType', value)}
          />

          <Input
            label="Previous Year Yield (bu/acre)"
            type="number"
            placeholder="e.g., 180"
            value={formData?.previousYield}
            onChange={(e) => handleInputChange('previousYield', e?.target?.value)}
            description="Optional: Helps improve prediction accuracy"
          />
        </div>

        <div className="pt-4 border-t border-border">
          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isLoading}
            disabled={!isFormValid}
            iconName="Zap"
            iconPosition="left"
          >
            {isLoading ? 'Generating Prediction...' : 'Generate AI Prediction'}
          </Button>
        </div>

        <div className="bg-accent/10 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Pro Tip</p>
              <p className="text-xs text-muted-foreground">
                More accurate location data (GPS coordinates) and historical yield information will improve prediction precision by up to 15%.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PredictionInputPanel;