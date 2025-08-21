import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center">
              <Icon name="MessageCircle" size={32} color="white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agricultural Community
            <span className="block text-primary">Support Center</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Connect with agricultural experts, access technical support, and join a thriving community of farmers leveraging AI-powered crop predictions for smarter farming decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 harvest-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock assistance during critical farming periods</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 harvest-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} color="var(--color-secondary)" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Community</h3>
              <p className="text-sm text-muted-foreground">Connect with agricultural professionals and researchers</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 harvest-shadow">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} color="var(--color-success)" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Help</h3>
              <p className="text-sm text-muted-foreground">Quick solutions for prediction and technical questions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;