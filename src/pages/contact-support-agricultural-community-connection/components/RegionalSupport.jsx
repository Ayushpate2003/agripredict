import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RegionalSupport = () => {
  const [selectedRegion, setSelectedRegion] = useState('maharashtra');

  const regions = [
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      states: ['Maharashtra'],
      primaryCrops: ['Sugarcane', 'Cotton', 'Soybean'],
      supportCenter: {
        city: 'Mumbai, Maharashtra',
        phone: '+91 (22) 555-0123',
        email: 'maharashtra@agripredict.com',
        hours: 'Mon-Sun: 9:00 AM - 7:00 PM IST'
      },
      localPartners: [
        {
          name: 'Maharashtra Agricultural University',
          type: 'Academic Partner',
          contact: 'extension@mau.ac.in'
        },
        {
          name: 'Maharashtra State Agricultural Research',
          type: 'Research Partner',
          contact: 'research@msar.gov.in'
        },
        {
          name: 'Maharashtra Farmers Cooperative',
          type: 'Industry Partner',
          contact: 'info@maharashtrafarmers.com'
        }
      ],
      specialists: [
        {
          name: 'Dr. Rajesh Patel',
          role: 'Sugarcane Specialist',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          expertise: 'Sugarcane yield optimization, pest management'
        },
        {
          name: 'Priya Sharma',
          role: 'Cotton Expert',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          expertise: 'Cotton disease prediction, soil health'
        }
      ]
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      states: ['Rajasthan'],
      primaryCrops: ['Wheat', 'Bajra', 'Mustard'],
      supportCenter: {
        city: 'Jaipur, Rajasthan',
        phone: '+91 (141) 555-0456',
        email: 'rajasthan@agripredict.com',
        hours: 'Mon-Sun: 9:00 AM - 7:00 PM IST'
      },
      localPartners: [
        {
          name: 'Rajasthan Agricultural University',
          type: 'Academic Partner',
          contact: 'extension@rau.ac.in'
        },
        {
          name: 'Rajasthan State Agricultural Research',
          type: 'Research Partner',
          contact: 'research@rsar.gov.in'
        },
        {
          name: 'Rajasthan Farmers Cooperative',
          type: 'Industry Partner',
          contact: 'info@rajasthanfarmers.com'
        }
      ],
      specialists: [
        {
          name: 'Dr. Amit Kumar',
          role: 'Wheat Specialist',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          expertise: 'Wheat yield optimization, drought resistance'
        },
        {
          name: 'Sunita Devi',
          role: 'Bajra Expert',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          expertise: 'Bajra disease prediction, irrigation management'
        }
      ]
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      states: ['Gujarat'],
      primaryCrops: ['Groundnut', 'Cotton', 'Wheat'],
      supportCenter: {
        city: 'Ahmedabad, Gujarat',
        phone: '+91 (79) 555-0789',
        email: 'gujarat@agripredict.com',
        hours: 'Mon-Sun: 9:00 AM - 7:00 PM IST'
      },
      localPartners: [
        {
          name: 'Gujarat Agricultural University',
          type: 'Academic Partner',
          contact: 'extension@gau.ac.in'
        },
        {
          name: 'Gujarat Agricultural Research Institute',
          type: 'Research Partner',
          contact: 'research@gari.org'
        },
        {
          name: 'Gujarat Farmers Association',
          type: 'Industry Partner',
          contact: 'info@gujaratfarmers.com'
        }
      ],
      specialists: [
        {
          name: 'Dr. Meera Patel',
          role: 'Groundnut Expert',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
          expertise: 'Groundnut yield optimization, precision agriculture'
        },
        {
          name: 'Ramesh Shah',
          role: 'Cotton Specialist',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          expertise: 'Cotton production, pest management'
        }
      ]
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      states: ['Uttar Pradesh'],
      primaryCrops: ['Rice', 'Wheat', 'Sugarcane'],
      supportCenter: {
        city: 'Lucknow, Uttar Pradesh',
        phone: '+91 (522) 555-0321',
        email: 'uttarpradesh@agripredict.com',
        hours: 'Mon-Sun: 9:00 AM - 7:00 PM IST'
      },
      localPartners: [
        {
          name: 'Uttar Pradesh Agricultural University',
          type: 'Academic Partner',
          contact: 'extension@upau.ac.in'
        },
        {
          name: 'Uttar Pradesh Agricultural Research Center',
          type: 'Research Partner',
          contact: 'research@uparc.org'
        },
        {
          name: 'Uttar Pradesh Farmers Association',
          type: 'Industry Partner',
          contact: 'info@upfarmers.org'
        }
      ],
      specialists: [
        {
          name: 'Dr. Anil Singh',
          role: 'Rice & Wheat Expert',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          expertise: 'Rice disease management, wheat production'
        },
        {
          name: 'Kavita Verma',
          role: 'Sugarcane Specialist',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          expertise: 'Sugarcane health monitoring, pest prediction'
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