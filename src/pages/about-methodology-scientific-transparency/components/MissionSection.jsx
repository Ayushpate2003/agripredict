import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MissionSection = () => {
  const foundingPrinciples = [
    {
      icon: "Target",
      title: "Precision Agriculture",
      description: "Combining traditional farming wisdom with cutting-edge AI to deliver actionable insights that improve yield outcomes."
    },
    {
      icon: "Users",
      title: "Farmer Empowerment",
      description: "Democratizing access to advanced agricultural intelligence, making sophisticated forecasting tools accessible to all farmers."
    },
    {
      icon: "Leaf",
      title: "Sustainable Farming",
      description: "Supporting environmentally responsible farming practices through data-driven decision making and resource optimization."
    },
    {
      icon: "Globe",
      title: "Global Impact",
      description: "Contributing to global food security by helping farmers worldwide make informed decisions about crop production."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
                <Icon name="Heart" size={24} color="white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Mission</h2>
            </div>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2021 by a team of agricultural scientists and AI researchers, AgriPredict emerged from a simple yet powerful vision: 
                to bridge the gap between complex agricultural data and practical farming decisions.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our founders, Dr. Sarah Chen (Agricultural Data Science, UC Davis) and Dr. Michael Rodriguez (Machine Learning, Stanford), 
                witnessed firsthand how farmers struggled with increasingly unpredictable weather patterns and market demands. 
                They recognized that while vast amounts of agricultural data existed, it remained largely inaccessible to the farmers who needed it most.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, AgriPredict serves over 15,000 farmers across 23 countries, providing AI-powered insights that have contributed to 
                an average 18% increase in crop yields while reducing resource waste by 12%.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden harvest-shadow">
              <Image 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Agricultural research team working in field with technology"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 agricultural-gradient rounded-2xl flex items-center justify-center">
              <Icon name="Zap" size={32} color="white" />
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
            Founding Principles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundingPrinciples?.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 growth-transition">
                  <Icon name={principle?.icon} size={28} color="white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{principle?.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{principle?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;