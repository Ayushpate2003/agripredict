import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
              title: "Sugarcane & Cotton Farmer",
              location: "Nashik, Maharashtra",
              farmSize: "486 hectares",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      quote: `AgriPredict transformed our planting decisions completely. Last season, their AI predicted a late frost that our local weather missed. We delayed planting by 5 days and avoided $50,000 in crop damage. The yield predictions were spot-on too.`,
      metrics: {
        yieldIncrease: "18%",
        roi: "$75,000",
        accuracy: "96%"
      },
      cropTypes: ["Corn", "Soybeans"],
      yearsUsing: 2
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
              title: "Wheat & Mustard Producer",
              location: "Jaipur, Rajasthan",
              farmSize: "1,133 hectares",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
              quote: `The regional intelligence feature is incredible. It showed me that switching 162 hectares from cotton to wheat would increase profitability by 22%. The prediction was accurate within 0.5 quintals per hectare. This platform pays for itself many times over.`,
      metrics: {
        yieldIncrease: "22%",
        roi: "$120,000",
        accuracy: "94%"
      },
      cropTypes: ["Wheat", "Cotton"],
      yearsUsing: 3
    },
    {
      id: 3,
      name: "Jennifer Chen",
              title: "Groundnut & Cotton Grower",
              location: "Ahmedabad, Gujarat",
              farmSize: "182 hectares",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      quote: `As an organic farmer, timing is everything. AgriPredict's soil moisture predictions help me optimize irrigation, reducing water usage by 30% while maintaining yields. The scientific transparency gives me confidence in every decision.`,
      metrics: {
        yieldIncrease: "15%",
        roi: "$45,000",
        accuracy: "91%"
      },
      cropTypes: ["Tomatoes", "Lettuce", "Peppers"],
      yearsUsing: 1
    },
    {
      id: 4,
      name: "Robert Thompson",
              title: "Rice & Wheat Farmer",
              location: "Lucknow, Uttar Pradesh",
              farmSize: "1,295 hectares",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
      quote: `Four generations of farming experience, and AgriPredict still teaches us something new every season. The AI caught a nutrient deficiency pattern we missed, leading to targeted fertilization that boosted yields across 324 hectares.`,
      metrics: {
        yieldIncrease: "12%",
        roi: "$95,000",
        accuracy: "93%"
      },
      cropTypes: ["Corn", "Soybeans", "Wheat"],
      yearsUsing: 4
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Real Farmers, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentic success stories from agricultural professionals who've transformed their operations with AI-powered insights
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-muted/20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Farm Image */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden harvest-shadow">
                  <Image 
                    src={current?.farmImage}
                    alt={`${current?.name}'s farm in ${current?.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl harvest-shadow p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{current?.farmSize}</div>
                    <div className="text-sm text-muted-foreground">Farm Size</div>
                  </div>
                </div>
              </div>

              {/* Right: Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden harvest-shadow">
                    <Image 
                      src={current?.avatar}
                      alt={current?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{current?.name}</h3>
                    <p className="text-muted-foreground">{current?.title}</p>
                    <p className="text-sm text-muted-foreground">{current?.location}</p>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground leading-relaxed italic">
                  "{current?.quote}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl harvest-shadow">
                    <div className="text-2xl font-bold text-success">+{current?.metrics?.yieldIncrease}</div>
                    <div className="text-sm text-muted-foreground">Yield Increase</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl harvest-shadow">
                    <div className="text-2xl font-bold text-primary">{current?.metrics?.roi}</div>
                    <div className="text-sm text-muted-foreground">Additional ROI</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl harvest-shadow">
                    <div className="text-2xl font-bold text-accent">{current?.metrics?.accuracy}</div>
                    <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                  </div>
                </div>

                {/* Crop Types & Experience */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Wheat" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Crops: {current?.cropTypes?.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {current?.yearsUsing} years with AgriPredict
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button 
              variant="outline" 
              size="sm"
              iconName="ChevronLeft"
              iconPosition="left"
              onClick={prevTestimonial}
            >
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full growth-transition ${
                    index === currentTestimonial 
                      ? 'bg-primary' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              iconName="ChevronRight"
              iconPosition="right"
              onClick={nextTestimonial}
            >
              Next
            </Button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-muted-foreground">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-success animate-pulse' : 'bg-muted-foreground/30'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Join Thousands of Successful Farmers
            </h3>
            <p className="text-muted-foreground">
              Start your journey to higher yields and smarter farming decisions today.
            </p>
            <Button 
              variant="default" 
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
            >
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;