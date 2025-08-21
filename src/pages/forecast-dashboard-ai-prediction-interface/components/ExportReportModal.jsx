import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ExportReportModal = ({ isOpen, onClose, predictionData }) => {
  const [exportSettings, setExportSettings] = useState({
    format: 'pdf',
    sections: ['summary', 'predictions', 'weather', 'risks'],
    includeCharts: true,
    includeRawData: false,
    recipientEmail: '',
    reportTitle: 'Agricultural Yield Prediction Report'
  });

  const [isExporting, setIsExporting] = useState(false);

  const formatOptions = [
    { value: 'pdf', label: 'PDF Document' },
    { value: 'excel', label: 'Excel Spreadsheet' },
    { value: 'csv', label: 'CSV Data File' },
    { value: 'json', label: 'JSON Data Export' }
  ];

  const sectionOptions = [
    { id: 'summary', label: 'Executive Summary', description: 'Key findings and recommendations' },
    { id: 'predictions', label: 'Yield Predictions', description: 'AI-generated yield forecasts and confidence intervals' },
    { id: 'weather', label: 'Weather Analysis', description: 'Current conditions and impact assessment' },
    { id: 'scenarios', label: 'Scenario Comparisons', description: 'Multiple scenario analysis and outcomes' },
    { id: 'risks', label: 'Risk Assessment', description: 'Identified risks and mitigation strategies' },
    { id: 'methodology', label: 'Methodology', description: 'AI model details and data sources' }
  ];

  const handleSectionToggle = (sectionId) => {
    setExportSettings(prev => ({
      ...prev,
      sections: prev?.sections?.includes(sectionId)
        ? prev?.sections?.filter(id => id !== sectionId)
        : [...prev?.sections, sectionId]
    }));
  };

  const handleExport = async () => {
    setIsExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsExporting(false);
    onClose();
    
    // Show success message (in real app, this would trigger actual export)
    alert('Report exported successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg harvest-shadow border border-border w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Download" size={18} className="text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Export Prediction Report</h2>
                <p className="text-sm text-muted-foreground">
                  Customize and download your agricultural analysis
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/30 growth-transition"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-6">
            {/* Report Settings */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">Report Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Report Title"
                  type="text"
                  value={exportSettings?.reportTitle}
                  onChange={(e) => setExportSettings(prev => ({ ...prev, reportTitle: e?.target?.value }))}
                  placeholder="Enter report title"
                />
                <Select
                  label="Export Format"
                  options={formatOptions}
                  value={exportSettings?.format}
                  onChange={(value) => setExportSettings(prev => ({ ...prev, format: value }))}
                />
              </div>
            </div>

            {/* Section Selection */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">Report Sections</h3>
              <div className="space-y-3">
                {sectionOptions?.map((section) => (
                  <div key={section?.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border">
                    <Checkbox
                      checked={exportSettings?.sections?.includes(section?.id)}
                      onChange={() => handleSectionToggle(section?.id)}
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <label className="text-sm font-medium text-foreground cursor-pointer">
                        {section?.label}
                      </label>
                      <p className="text-xs text-muted-foreground mt-1">{section?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Options */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">Additional Options</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={exportSettings?.includeCharts}
                    onChange={(e) => setExportSettings(prev => ({ ...prev, includeCharts: e?.target?.checked }))}
                  />
                  <div>
                    <label className="text-sm font-medium text-foreground">Include Charts & Visualizations</label>
                    <p className="text-xs text-muted-foreground">Embed interactive charts and graphs in the report</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={exportSettings?.includeRawData}
                    onChange={(e) => setExportSettings(prev => ({ ...prev, includeRawData: e?.target?.checked }))}
                  />
                  <div>
                    <label className="text-sm font-medium text-foreground">Include Raw Data</label>
                    <p className="text-xs text-muted-foreground">Append detailed data tables and calculations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Delivery */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">Delivery Options</h3>
              <Input
                label="Email Report To (Optional)"
                type="email"
                value={exportSettings?.recipientEmail}
                onChange={(e) => setExportSettings(prev => ({ ...prev, recipientEmail: e?.target?.value }))}
                placeholder="advisor@farm.com"
                description="Leave blank to download directly"
              />
            </div>

            {/* Preview Info */}
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary mb-1">Report Preview</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Format: {formatOptions?.find(f => f?.value === exportSettings?.format)?.label}</p>
                    <p>• Sections: {exportSettings?.sections?.length} selected</p>
                    <p>• Charts: {exportSettings?.includeCharts ? 'Included' : 'Excluded'}</p>
                    <p>• Estimated size: ~{exportSettings?.includeCharts ? '2.5' : '1.2'} MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={isExporting}
            >
              Cancel
            </Button>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                iconName="Eye"
                iconPosition="left"
                disabled={isExporting}
              >
                Preview
              </Button>
              <Button
                variant="default"
                onClick={handleExport}
                loading={isExporting}
                iconName="Download"
                iconPosition="left"
                disabled={exportSettings?.sections?.length === 0}
              >
                {isExporting ? 'Generating Report...' : 'Export Report'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportReportModal;