import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ResearchSection = () => {
  const [activeCategory, setActiveCategory] = useState('publications');

  const publications = [
    {
      title: "Machine Learning Approaches for Crop Yield Prediction: A Comprehensive Review",
      authors: "Chen, S., Rodriguez, M., Watson, E.",
      journal: "Agricultural Systems",
      year: "2024",
      impact: "Impact Factor: 6.2",
      citations: "127 citations",
      doi: "10.1016/j.agsy.2024.103456",
      abstract: `This comprehensive review examines the application of machine learning techniques in crop yield prediction, 
                analyzing over 200 studies published between 2015-2024. The study identifies key factors affecting prediction 
                accuracy and proposes a framework for selecting optimal ML approaches based on data availability and crop types.`,
      tags: ["Machine Learning", "Crop Yield", "Prediction Models"]
    },
    {
      title: "Climate-Adaptive Agricultural Forecasting Using Ensemble Deep Learning",
      authors: "Rodriguez, M., Park, J., Gonzalez, M.",
      journal: "Nature Climate Change",
      year: "2024",
      impact: "Impact Factor: 25.3",
      citations: "89 citations",
      doi: "10.1038/s41558-024-01987-x",
      abstract: `We present a novel ensemble deep learning approach that adapts to changing climate conditions for improved 
                agricultural forecasting. The model demonstrates 15% better accuracy than traditional methods when predicting 
                yields under extreme weather conditions.`,
      tags: ["Deep Learning", "Climate Adaptation", "Ensemble Methods"]
    },
    {
      title: "Soil-Weather Interaction Modeling for Precision Agriculture",
      authors: "Watson, E., Thompson, L., Hassan, A.",
      journal: "Precision Agriculture",
      year: "2023",
      impact: "Impact Factor: 5.4",
      citations: "156 citations",
      doi: "10.1007/s11119-023-09876-5",
      abstract: `This study develops a comprehensive model for soil-weather interactions in precision agriculture, incorporating 
                real-time soil moisture data and weather patterns to optimize irrigation and fertilization strategies.`,
      tags: ["Soil Science", "Weather Modeling", "Precision Agriculture"]
    },
    {
      title: "Satellite-Based Crop Monitoring: Integration with AI Prediction Systems",
      authors: "Hassan, A., Chen, S., Kim, R.",
      journal: "Remote Sensing of Environment",
      year: "2023",
      impact: "Impact Factor: 11.1",
      citations: "203 citations",
      doi: "10.1016/j.rse.2023.113421",
      abstract: `We demonstrate how satellite-based crop monitoring can be effectively integrated with AI prediction systems 
                to provide real-time crop health assessment and yield forecasting with 94% accuracy across multiple crop types.`,
      tags: ["Remote Sensing", "Satellite Monitoring", "AI Integration"]
    }
  ];

  const ongoingResearch = [
    {
      title: "AI-Driven Pest and Disease Prediction Models",
      lead: "Dr. Emily Watson",
      duration: "2024-2026",
      funding: "$2.3M NSF Grant",
      description: `Developing predictive models for crop pest and disease outbreaks using machine learning algorithms 
                   trained on historical pest data, weather patterns, and crop health indicators.`,
      partners: ["Cornell University", "USDA", "International Crop Protection Alliance"],
      status: "Phase 2: Field Testing"
    },
    {
      title: "Climate Resilience in Agricultural AI Systems",
      lead: "Dr. Maria Gonzalez",
      duration: "2023-2025",
      funding: "$1.8M NOAA Grant",
      description: `Research focused on developing climate-resilient AI models that maintain accuracy under extreme 
                   weather conditions and changing climate patterns.`,
      partners: ["NASA Goddard", "NOAA Climate Center", "UC Davis"],
      status: "Phase 3: Model Validation"
    },
    {
      title: "Sustainable Agriculture Optimization Platform",
      lead: "Dr. Robert Kim",
      duration: "2024-2027",
      funding: "$3.1M DOE Grant",
      description: `Creating an integrated platform that optimizes agricultural practices for sustainability while 
                   maintaining yield targets using multi-objective optimization algorithms.`,
      partners: ["Stanford AI Lab", "Environmental Defense Fund", "Sustainable Agriculture Initiative"],
      status: "Phase 1: Algorithm Development"
    }
  ];

  const certifications = [
    {
      name: "ISO 27001 Information Security Management",
      issuer: "International Organization for Standardization",
      year: "2024",
      description: "Ensures the security of agricultural data and farmer information",
      icon: "Shield"
    },
    {
      name: "USDA Organic Certification Data Partner",
      issuer: "United States Department of Agriculture",
      year: "2023",
      description: "Authorized to access and process organic farming certification data",
      icon: "Award"
    },
    {
      name: "IEEE Standards for Agricultural AI",
      issuer: "Institute of Electrical and Electronics Engineers",
      year: "2024",
      description: "Compliance with IEEE standards for agricultural AI applications",
      icon: "CheckCircle"
    },
    {
      name: "Carbon Trust Agricultural Technology Certification",
      issuer: "Carbon Trust",
      year: "2023",
      description: "Certified for sustainable agricultural technology practices",
      icon: "Leaf"
    }
  ];

  const categories = [
    { id: 'publications', title: 'Publications', icon: 'BookOpen' },
    { id: 'research', title: 'Ongoing Research', icon: 'Microscope' },
    { id: 'certifications', title: 'Certifications', icon: 'Award' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
              <Icon name="BookOpen" size={24} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Scientific Research & Validation</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to scientific excellence through peer-reviewed research, ongoing studies, and industry certifications
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted/30 rounded-xl p-2 flex space-x-2">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium growth-transition ${
                  activeCategory === category?.id
                    ? 'bg-white text-primary harvest-shadow'
                    : 'text-muted-foreground hover:text-primary hover:bg-white/50'
                }`}
              >
                <Icon name={category?.icon} size={18} />
                <span>{category?.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Publications */}
        {activeCategory === 'publications' && (
          <div className="space-y-8">
            {publications?.map((publication, index) => (
              <div key={index} className="bg-card rounded-xl harvest-shadow p-8 border border-border">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{publication?.title}</h3>
                    <p className="text-muted-foreground mb-2">{publication?.authors}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-primary">{publication?.journal}</span>
                      <span>{publication?.year}</span>
                      <span>{publication?.impact}</span>
                      <span>{publication?.citations}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {publication?.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{publication?.abstract}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="ExternalLink" size={16} />
                    <span>DOI: {publication?.doi}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80 growth-transition">
                    <Icon name="Download" size={16} />
                    <span className="text-sm font-medium">Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ongoing Research */}
        {activeCategory === 'research' && (
          <div className="space-y-8">
            {ongoingResearch?.map((research, index) => (
              <div key={index} className="bg-card rounded-xl harvest-shadow p-8 border border-border">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{research?.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="User" size={16} />
                        <span>Lead: {research?.lead}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} />
                        <span>{research?.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="DollarSign" size={16} />
                        <span>{research?.funding}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-success bg-success/10 px-3 py-1 rounded-full">
                    {research?.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{research?.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Research Partners</h4>
                  <div className="flex flex-wrap gap-2">
                    {research?.partners?.map((partner, partnerIndex) => (
                      <span key={partnerIndex} className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeCategory === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl harvest-shadow p-8 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name={cert?.icon} size={28} color="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert?.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{cert?.issuer}</span>
                      <span>{cert?.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{cert?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Research Impact Stats */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Research Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'FileText', value: '45+', label: 'Peer-Reviewed Papers' },
              { icon: 'Quote', value: '2,300+', label: 'Total Citations' },
              { icon: 'Users', value: '12', label: 'University Partners' },
              { icon: 'Award', value: '8', label: 'Research Grants' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={28} color="white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;