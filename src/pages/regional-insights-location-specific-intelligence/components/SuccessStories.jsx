import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = ({ selectedRegion, regions }) => {
  const [selectedStory, setSelectedStory] = useState(0);
  const region = regions?.find(r => r?.id === selectedRegion) || regions?.[0];

  const stories = [
    {
      id: 1,
      farmer: "Sarah Johnson",
      farm: "Johnson Family Farm",
      location: `${region?.name} County`,
      crop: "Corn",
      improvement: "23% yield increase",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=300&fit=crop",
      story: `After implementing AgriPredict's soil recommendations and weather-based planting schedule, we saw remarkable improvements in our corn yields. The precision timing for fertilizer application based on local weather patterns made all the difference.\n\nThe regional insights helped us understand our soil's unique characteristics and adjust our farming practices accordingly. We're now planning to expand our operation based on these data-driven decisions.`,
      metrics: [
        { label: "Yield Increase", value: "23%", icon: "TrendingUp" },
        { label: "Cost Reduction", value: "15%", icon: "DollarSign" },
        { label: "Water Savings", value: "18%", icon: "Droplets" },
        { label: "ROI", value: "340%", icon: "Target" }
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
      farmer: "Michael Rodriguez",
      farm: "Rodriguez Organic Farms",
      location: `${region?.name} County`,
      crop: "Soybeans",
      improvement: "31% yield increase",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=300&fit=crop",
      story: `Transitioning to organic farming seemed risky, but AgriPredict's regional data showed our soil composition was perfect for organic soybeans. The platform's weather intelligence helped us time our organic treatments perfectly.\n\nThe peer comparison feature showed us what other organic farmers in our region were achieving, giving us confidence in our approach. Now we're mentoring other farmers making the organic transition.`,
      metrics: [
        { label: "Yield Increase", value: "31%", icon: "TrendingUp" },
        { label: "Premium Price", value: "45%", icon: "DollarSign" },
        { label: "Soil Health", value: "+28%", icon: "Leaf" },
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
      farmer: "David Chen",
      farm: "Chen Sustainable Agriculture",
      location: `${region?.name} County`,
      crop: "Wheat",
      improvement: "19% yield increase",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=300&fit=crop",
      story: `As a third-generation farmer, I was skeptical about AI predictions. But AgriPredict's regional insights revealed patterns in our local climate that I hadn't noticed in 30 years of farming.\n\nThe platform's recommendations for drought-resistant wheat varieties and precision irrigation timing helped us navigate the challenging 2024 growing season. We're now the top wheat producer in our county.`,
      metrics: [
        { label: "Yield Increase", value: "19%", icon: "TrendingUp" },
        { label: "Water Efficiency", value: "25%", icon: "Droplets" },
        { label: "Quality Grade", value: "A+", icon: "Star" },
        { label: "Market Price", value: "+12%", icon: "DollarSign" }
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

          <div>
            <h4 className="font-semibold text-foreground mb-4">Other Success Stories</h4>
            <div className="space-y-3">
              {stories?.map((story, index) => (
                <button
                  key={story?.id}
                  onClick={() => setSelectedStory(index)}
                  className={`w-full text-left p-3 rounded-lg growth-transition ${
                    selectedStory === index
                      ? 'bg-primary/10 border border-primary/20' :'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={story?.avatar}
                      alt={story?.farmer}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">{story?.farmer}</div>
                      <div className="text-sm text-muted-foreground truncate">{story?.crop}</div>
                    </div>
                    <div className="text-sm font-bold text-success">{story?.improvement}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;