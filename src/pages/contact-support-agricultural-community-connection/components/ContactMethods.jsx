import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('general');

  const contactMethods = [
    {
      id: 'farmers',
      title: 'Farmers & Growers',
      description: 'Crop prediction support and farming guidance',
      icon: 'Sprout',
      color: 'primary',
      phone: '+1 (555) FARM-123',
      email: 'farmers@agripredict.com',
      hours: 'Mon-Sun: 5:00 AM - 10:00 PM',
      specialNote: 'Priority support during planting and harvest seasons'
    },
    {
      id: 'advisors',
      title: 'Agricultural Advisors',
      description: 'Technical assistance and platform integration',
      icon: 'BookOpen',
      color: 'secondary',
      phone: '+1 (555) TECH-456',
      email: 'advisors@agripredict.com',
      hours: 'Mon-Fri: 7:00 AM - 7:00 PM',
      specialNote: 'Dedicated account managers available'
    },
    {
      id: 'researchers',
      title: 'Researchers & Academia',
      description: 'Methodology questions and data access',
      icon: 'Microscope',
      color: 'accent',
      phone: '+1 (555) RESEARCH-789',
      email: 'research@agripredict.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      specialNote: 'API documentation and dataset access'
    },
    {
      id: 'partners',
      title: 'Partnership Inquiries',
      description: 'Business partnerships and integrations',
      icon: 'Handshake',
      color: 'success',
      phone: '+1 (555) PARTNER-012',
      email: 'partnerships@agripredict.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      specialNote: 'Strategic partnerships and white-label solutions'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/20 text-secondary border-accent/30',
      success: 'bg-success/10 text-success border-success/20'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Support Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get connected with the right agricultural experts based on your specific needs and role in the farming ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`bg-white rounded-2xl p-8 border-2 growth-transition seasonal-hover cursor-pointer ${
                selectedMethod === method?.id 
                  ? getColorClasses(method?.color)
                  : 'border-border hover:border-primary/30'
              }`}
              onClick={() => setSelectedMethod(method?.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  method?.color === 'primary' ? 'agricultural-gradient' :
                  method?.color === 'secondary' ? 'bg-secondary' :
                  method?.color === 'accent'? 'bg-accent' : 'bg-success'
                }`}>
                  <Icon name={method?.icon} size={28} color="white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {method?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={18} color="var(--color-primary)" />
                      <span className="font-medium text-foreground">{method?.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={18} color="var(--color-primary)" />
                      <span className="font-medium text-foreground">{method?.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={18} color="var(--color-primary)" />
                      <span className="text-sm text-muted-foreground">{method?.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Info" size={16} className="inline mr-2" />
                      {method?.specialNote}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Phone"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Mail"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Emergency Agricultural Support
            </h3>
            <p className="text-muted-foreground mb-6">
              For urgent crop emergencies or critical weather events affecting your predictions
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="AlertTriangle"
              iconPosition="left"
            >
              Emergency Hotline: +1 (555) URGENT-24
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;