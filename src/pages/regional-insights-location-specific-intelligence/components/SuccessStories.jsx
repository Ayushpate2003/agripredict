import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = ({ selectedRegion, regions }) => {
  const [selectedStory, setSelectedStory] = useState(0);
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  const stories = [
    {
      id: 1,
      farmer: "Rajesh Patel",
      farm: "Patel Sugarcane Farm",
      location: `${region?.name}`,
      crop: "Sugarcane",
      improvement: "28% yield increase",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=300&fit=crop",
      story: `After implementing AgriPredict's soil recommendations and weather-based planting schedule, we saw remarkable improvements in our sugarcane yields. The precision timing for fertilizer application based on local weather patterns made all the difference.\n\nThe regional insights helped us understand our soil's unique characteristics and adjust our farming practices accordingly. We're now planning to expand our operation based on these data-driven decisions.`,
      metrics: [
        { label: "Yield Increase", value: "28%", icon: "TrendingUp" },
        { label: "Cost Reduction", value: "18%", icon: "DollarSign" },
        { label: "Water Savings", value: "22%", icon: "Droplets" },
        { label: "ROI", value: "380%", icon: "Target" }
      ],
      techniques: [
        "Precision fertilizer timing",
        "Weather-based irrigation",
        "Soil-specific seed varieties",
        "Integrated pest management"
      ]
    },
    {
      id: 2,
      farmer: "Priya Sharma",
      farm: "Sharma Organic Farms",
      location: `${region?.name}`,
      crop: "Cotton",
      improvement: "35% yield increase",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=300&fit=crop",
      story: `Transitioning to organic farming seemed risky, but AgriPredict's regional data showed our soil composition was perfect for organic cotton. The platform's weather intelligence helped us time our organic treatments perfectly.\n\nThe peer comparison feature showed us what other organic farmers in our region were achieving, giving us confidence in our approach. Now we're mentoring other farmers making the organic transition.`,
      metrics: [
        { label: "Yield Increase", value: "35%", icon: "TrendingUp" },
        { label: "Premium Price", value: "50%", icon: "DollarSign" },
        { label: "Soil Health", value: "+32%", icon: "Leaf" },
        { label: "Certification", value: "100%", icon: "Award" }
      ],
      techniques: [
        "Organic soil amendments",
        "Companion planting",
        "Natural pest control",
        "Cover crop rotation"
      ]
    },
    {
      id: 3,
      farmer: "Amit Kumar",
      farm: "Kumar Sustainable Agriculture",
      location: `${region?.name}`,
      crop: "Rice",
      improvement: "22% yield increase",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=300&fit=crop",
      story: `As a third-generation farmer, I was skeptical about AI predictions. But AgriPredict's regional insights revealed patterns in our local climate that I hadn't noticed in 30 years of farming.\n\nThe platform's recommendations for drought-resistant rice varieties and precision irrigation timing helped us navigate the challenging 2024 growing season. We're now the top rice producer in our district.`,
      metrics: [
        { label: "Yield Increase", value: "22%", icon: "TrendingUp" },
        { label: "Water Efficiency", value: "28%", icon: "Droplets" },
        { label: "Quality Grade", value: "A+", icon: "Star" },
        { label: "Market Price", value: "+15%", icon: "DollarSign" }
      ],
      techniques: [
        "Drought-resistant varieties",
        "Precision irrigation",
        "Soil moisture monitoring",
        "Harvest timing optimization"
      ]
    }
  ];

  const currentStory = stories?.[selectedStory];

  return (
    <div className="bg-white rounded-lg harvest-shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Local Success Stories</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedStory(Math.max(0, selectedStory - 1))}
            disabled={selectedStory === 0}
            className="p-2 rounded-lg border border-border hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed growth-transition"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <span className="text-sm text-muted-foreground px-3">
            {selectedStory + 1} of {stories?.length}
          </span>
          <button
            onClick={() => setSelectedStory(Math.min(stories?.length - 1, selectedStory + 1))}
            disabled={selectedStory === stories?.length - 1}
            className="p-2 rounded-lg border border-border hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed growth-transition"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story Content */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src={currentStory?.avatar}
              alt={currentStory?.farmer}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-foreground">{currentStory?.farmer}</h3>
              <p className="text-muted-foreground">{currentStory?.farm}</p>
              <p className="text-sm text-muted-foreground">{currentStory?.location} • {currentStory?.year}</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-2xl font-bold text-success">{currentStory?.improvement}</div>
              <div className="text-sm text-muted-foreground">{currentStory?.crop} Yield</div>
            </div>
          </div>

          <div className="mb-6">
            <Image
              src={currentStory?.farmImage}
              alt={`${currentStory?.farm} landscape`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-sm max-w-none">
            {currentStory?.story?.split('\n\n')?.map((paragraph, index) => (
              <p key={index} className="text-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-foreground mb-3">Key Techniques Used</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentStory?.techniques?.map((technique, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">{technique}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics & Navigation */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Impact Metrics</h4>
            <div className="space-y-4">
              {currentStory?.metrics?.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={metric?.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{metric?.label}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{metric?.value}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SuccessStories;