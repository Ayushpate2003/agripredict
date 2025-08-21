import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232D5016%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mr-4">
              <Icon name="Microscope" size={32} color="white" />
            </div>
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
              <Icon name="Sprout" size={32} color="var(--color-secondary)" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Scientific
            <span className="text-primary block lg:inline lg:ml-4">Transparency</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Where agricultural science meets technological innovation. Discover the rigorous methodology, 
            peer-reviewed research, and transparent processes that power AgriPredict's AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Award" size={20} />
              <span className="font-medium">Peer-Reviewed Research</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Shield" size={20} />
              <span className="font-medium">University Partnerships</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="TrendingUp" size={20} />
              <span className="font-medium">95.3% Accuracy Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;