import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SupportTicketSystem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    category: '',
    priority: '',
    subject: '',
    description: '',
    cropType: '',
    location: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const userTypeOptions = [
    { value: 'farmer', label: 'Farmer/Grower' },
    { value: 'advisor', label: 'Agricultural Advisor' },
    { value: 'researcher', label: 'Researcher/Academic' },
    { value: 'partner', label: 'Business Partner' },
    { value: 'other', label: 'Other' }
  ];

  const categoryOptions = [
    { value: 'prediction', label: 'Crop Prediction Questions' },
    { value: 'weather', label: 'Weather Data Inquiries' },
    { value: 'technical', label: 'Technical Platform Issues' },
    { value: 'methodology', label: 'Methodology Clarifications' },
    { value: 'account', label: 'Account & Billing' },
    { value: 'integration', label: 'API & Integration' },
    { value: 'training', label: 'Training & Education' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Affects productivity' },
    { value: 'high', label: 'High - Critical farming decision' },
    { value: 'urgent', label: 'Urgent - Emergency situation' }
  ];

  const cropTypeOptions = [
    { value: 'corn', label: 'Corn/Maize' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'rice', label: 'Rice' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'other', label: 'Other Crops' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Support ticket submitted successfully! You will receive a confirmation email shortly.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      userType: '',
      category: '',
      priority: '',
      subject: '',
      description: '',
      cropType: '',
      location: ''
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Ticket" size={32} color="white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Submit Support Ticket
          </h2>
          <p className="text-lg text-muted-foreground">
            Get personalized assistance from our agricultural experts. We typically respond within 2-4 hours during business days.
          </p>
        </div>

        <div className="bg-white rounded-2xl harvest-shadow p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="User Type"
                placeholder="Select your role"
                options={userTypeOptions}
                value={formData?.userType}
                onChange={(value) => handleInputChange('userType', value)}
                required
              />
              
              <Select
                label="Support Category"
                placeholder="Choose category"
                options={categoryOptions}
                value={formData?.category}
                onChange={(value) => handleInputChange('category', value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Priority Level"
                placeholder="Select priority"
                options={priorityOptions}
                value={formData?.priority}
                onChange={(value) => handleInputChange('priority', value)}
                required
              />
              
              <Select
                label="Crop Type (if applicable)"
                placeholder="Select crop type"
                options={cropTypeOptions}
                value={formData?.cropType}
                onChange={(value) => handleInputChange('cropType', value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Subject"
                type="text"
                placeholder="Brief description of your issue"
                value={formData?.subject}
                onChange={(e) => handleInputChange('subject', e?.target?.value)}
                required
              />
              
              <Input
                label="Location (City, State)"
                type="text"
                placeholder="Your farming location"
                value={formData?.location}
                onChange={(e) => handleInputChange('location', e?.target?.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Detailed Description *
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary growth-transition resize-none"
                rows="6"
                placeholder="Please provide detailed information about your question or issue. Include any relevant details about your farming operation, specific predictions you're working with, or technical problems you're experiencing."
                value={formData?.description}
                onChange={(e) => handleInputChange('description', e?.target?.value)}
                required
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-2">Response Time Expectations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Urgent:</strong> Within 1 hour during business hours</li>
                    <li>• <strong>High:</strong> Within 4 hours during business hours</li>
                    <li>• <strong>Medium:</strong> Within 24 hours</li>
                    <li>• <strong>Low:</strong> Within 48 hours</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                className="flex-1"
              >
                {isSubmitting ? 'Submitting Ticket...' : 'Submit Support Ticket'}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="flex-1"
              >
                Start Live Chat
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportTicketSystem;