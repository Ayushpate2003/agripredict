import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RegionalSupport = () => {
  const [selectedRegion, setSelectedRegion] = useState('midwest');

  const regions = [
    {
      id: 'midwest',
      name: 'Midwest',
      states: ['Illinois', 'Iowa', 'Indiana', 'Ohio', 'Michigan', 'Wisconsin', 'Minnesota', 'Missouri'],
      primaryCrops: ['Corn', 'Soybeans', 'Wheat'],
      supportCenter: {
        city: 'Chicago, IL',
        phone: '+1 (312) 555-0123',
        email: 'midwest@agripredict.com',
        hours: 'Mon-Sun: 5:00 AM - 9:00 PM CST'
      },
      localPartners: [
        {
          name: 'University of Illinois Extension',
          type: 'Academic Partner',
          contact: 'extension@illinois.edu'
        },
        {
          name: 'Iowa State Agricultural Research',
          type: 'Research Partner',
          contact: 'research@iastate.edu'
        },
        {
          name: 'Midwest Farmers Cooperative',
          type: 'Industry Partner',
          contact: 'info@midwestcoop.com'
        }
      ],
      specialists: [
        {
          name: 'Dr. Sarah Johnson',
          role: 'Corn Specialist',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          expertise: 'Corn yield optimization, pest management'
        },
        {
          name: 'Mike Chen',
          role: 'Soybean Expert',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          expertise: 'Soybean disease prediction, soil health'
        }
      ]
    },
    {
      id: 'great-plains',
      name: 'Great Plains',
      states: ['Kansas', 'Nebraska', 'Oklahoma', 'Texas', 'Colorado', 'Wyoming', 'Montana', 'North Dakota', 'South Dakota'],
      primaryCrops: ['Wheat', 'Corn', 'Sorghum', 'Cotton'],
      supportCenter: {
        city: 'Kansas City, MO',
        phone: '+1 (816) 555-0456',
        email: 'greatplains@agripredict.com',
        hours: 'Mon-Sun: 6:00 AM - 8:00 PM CST'
      },
      localPartners: [
        {
          name: 'Kansas State Agricultural Extension',
          type: 'Academic Partner',
          contact: 'extension@ksu.edu'
        },
        {
          name: 'Great Plains Research Institute',
          type: 'Research Partner',
          contact: 'research@gpri.org'
        },
        {
          name: 'Plains Grain Association',
          type: 'Industry Partner',
          contact: 'info@plainsgrain.org'
        }
      ],
      specialists: [
        {
          name: 'Dr. Robert Martinez',
          role: 'Wheat Specialist',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          expertise: 'Winter wheat, drought resistance'
        },
        {
          name: 'Jennifer Lee',
          role: 'Cotton Expert',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          expertise: 'Cotton yield prediction, irrigation management'
        }
      ]
    },
    {
      id: 'california',
      name: 'California',
      states: ['California'],
      primaryCrops: ['Almonds', 'Grapes', 'Strawberries', 'Lettuce', 'Tomatoes'],
      supportCenter: {
        city: 'Fresno, CA',
        phone: '+1 (559) 555-0789',
        email: 'california@agripredict.com',
        hours: 'Mon-Sun: 5:00 AM - 10:00 PM PST'
      },
      localPartners: [
        {
          name: 'UC Davis Agricultural Extension',
          type: 'Academic Partner',
          contact: 'extension@ucdavis.edu'
        },
        {
          name: 'California Agricultural Research Institute',
          type: 'Research Partner',
          contact: 'research@cari.org'
        },
        {
          name: 'California Growers Association',
          type: 'Industry Partner',
          contact: 'info@cagrowers.com'
        }
      ],
      specialists: [
        {
          name: 'Dr. Maria Rodriguez',
          role: 'Specialty Crops Expert',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
          expertise: 'Fruit and nut crops, precision agriculture'
        },
        {
          name: 'David Kim',
          role: 'Vegetable Specialist',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          expertise: 'Vegetable production, greenhouse management'
        }
      ]
    },
    {
      id: 'southeast',
      name: 'Southeast',
      states: ['Georgia', 'Florida', 'Alabama', 'Mississippi', 'Louisiana', 'Arkansas', 'Tennessee', 'Kentucky', 'North Carolina', 'South Carolina'],
      primaryCrops: ['Cotton', 'Peanuts', 'Rice', 'Citrus', 'Tobacco'],
      supportCenter: {
        city: 'Atlanta, GA',
        phone: '+1 (404) 555-0321',
        email: 'southeast@agripredict.com',
        hours: 'Mon-Sun: 6:00 AM - 9:00 PM EST'
      },
      localPartners: [
        {
          name: 'University of Georgia Extension',
          type: 'Academic Partner',
          contact: 'extension@uga.edu'
        },
        {
          name: 'Southeast Agricultural Research Center',
          type: 'Research Partner',
          contact: 'research@searc.org'
        },
        {
          name: 'Southern Cotton Growers',
          type: 'Industry Partner',
          contact: 'info@southerncotton.org'
        }
      ],
      specialists: [
        {
          name: 'Dr. James Wilson',
          role: 'Cotton & Peanut Expert',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          expertise: 'Cotton disease management, peanut production'
        },
        {
          name: 'Lisa Thompson',
          role: 'Citrus Specialist',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          expertise: 'Citrus health monitoring, pest prediction'
        }
      ]
    }
  ];

  const currentRegion = regions?.find(region => region?.id === selectedRegion);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Regional Agricultural Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with local agricultural experts who understand your region's unique climate, soil conditions, and farming challenges.
          </p>
        </div>

        {/* Region Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {regions?.map((region) => (
            <button
              key={region?.id}
              onClick={() => setSelectedRegion(region?.id)}
              className={`px-6 py-3 rounded-lg font-medium growth-transition ${
                selectedRegion === region?.id
                  ? 'bg-primary text-white' :'bg-white text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border'
              }`}
            >
              {region?.name}
            </button>
          ))}
        </div>

        {currentRegion && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Regional Overview */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                  {currentRegion?.name} Region
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Coverage Area</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentRegion?.states?.map((state) => (
                        <span
                          key={state}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Primary Crops</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentRegion?.primaryCrops?.map((crop) => (
                        <span
                          key={crop}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Center Info */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Building" size={20} className="mr-2" />
                  Regional Support Center
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={16} color="var(--color-primary)" />
                    <span className="text-foreground">{currentRegion?.supportCenter?.city}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} color="var(--color-primary)" />
                    <span className="text-foreground">{currentRegion?.supportCenter?.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} color="var(--color-primary)" />
                    <span className="text-foreground">{currentRegion?.supportCenter?.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={16} color="var(--color-primary)" />
                    <span className="text-sm text-muted-foreground">{currentRegion?.supportCenter?.hours}</span>
                  </div>
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
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Regional Specialists */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Icon name="Users" size={24} className="mr-3 text-primary" />
                  Regional Specialists
                </h3>
                
                <div className="space-y-6">
                  {currentRegion?.specialists?.map((specialist, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <img
                        src={specialist?.avatar}
                        alt={specialist?.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{specialist?.name}</h4>
                        <p className="text-primary font-medium text-sm mb-2">{specialist?.role}</p>
                        <p className="text-muted-foreground text-sm mb-3">{specialist?.expertise}</p>
                        
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="xs"
                            iconName="MessageCircle"
                            iconPosition="left"
                          >
                            Chat
                          </Button>
                          <Button
                            variant="outline"
                            size="xs"
                            iconName="Calendar"
                            iconPosition="left"
                          >
                            Schedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Partners */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Icon name="Handshake" size={24} className="mr-3 text-primary" />
                  Local Partners
                </h3>
                
                <div className="space-y-4">
                  {currentRegion?.localPartners?.map((partner, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground">{partner?.name}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {partner?.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" size={14} color="var(--color-muted-foreground)" />
                        <span className="text-sm text-muted-foreground">{partner?.contact}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-accent/20 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 flex items-center">
                    <Icon name="Info" size={16} className="mr-2" />
                    Partnership Benefits
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Access to local research data</li>
                    <li>• Regional weather station networks</li>
                    <li>• Extension service collaboration</li>
                    <li>• Educational program discounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl border border-border p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Find Your Regional Support
            </h3>
            
            <div className="aspect-video bg-muted/30 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="AgriPredict Regional Support Centers"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=39.8283,-98.5795&z=4&output=embed"
                className="border-0"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-muted-foreground mb-4">
                Can't find your region? We're expanding our support network nationwide.
              </p>
              <Button
                variant="outline"
                iconName="Plus"
                iconPosition="left"
              >
                Request Regional Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalSupport;