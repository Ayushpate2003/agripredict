import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCenter = () => {
  const [selectedResourceType, setSelectedResourceType] = useState('all');

  const resourceTypes = [
    { id: 'all', label: 'All Resources', icon: 'Library' },
    { id: 'guides', label: 'User Guides', icon: 'BookOpen' },
    { id: 'videos', label: 'Video Tutorials', icon: 'Play' },
    { id: 'quick-ref', label: 'Quick Reference', icon: 'FileText' },
    { id: 'api-docs', label: 'API Documentation', icon: 'Code' }
  ];

  const resources = [
    {
      id: 1,
      type: 'guides',
      title: 'Complete Guide to Crop Prediction Interpretation',
      description: 'Comprehensive guide covering how to read and interpret AI-generated crop predictions, confidence levels, and weather impact factors.',
      format: 'PDF',
      size: '2.4 MB',
      downloadCount: 15420,
      lastUpdated: '2024-08-15',
      difficulty: 'Beginner',
      estimatedTime: '15 min read',
      thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
      tags: ['predictions', 'interpretation', 'beginner']
    },
    {
      id: 2,
      type: 'videos',
      title: 'Dashboard Navigation and Features Overview',
      description: 'Step-by-step video walkthrough of the AgriPredict dashboard, covering all major features and navigation tips.',
      format: 'MP4',
      size: '45.2 MB',
      downloadCount: 8934,
      lastUpdated: '2024-08-10',
      difficulty: 'Beginner',
      estimatedTime: '12 min watch',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      tags: ['dashboard', 'navigation', 'tutorial']
    },
    {
      id: 3,
      type: 'quick-ref',
      title: 'Weather Factor Impact Quick Reference',
      description: 'One-page reference sheet showing how different weather factors affect various crop types and prediction accuracy.',
      format: 'PDF',
      size: '0.8 MB',
      downloadCount: 12567,
      lastUpdated: '2024-08-18',
      difficulty: 'Intermediate',
      estimatedTime: '5 min read',
      thumbnail: 'https://images.unsplash.com/photo-1504382103100-db7e92322d39?w=300&h=200&fit=crop',
      tags: ['weather', 'crops', 'reference']
    },
    {
      id: 4,
      type: 'guides',
      title: 'Optimizing Predictions with Local Weather Data',
      description: 'Advanced guide on integrating your own weather station data to improve prediction accuracy for your specific microclimate.',
      format: 'PDF',
      size: '3.1 MB',
      downloadCount: 6789,
      lastUpdated: '2024-08-12',
      difficulty: 'Advanced',
      estimatedTime: '25 min read',
      thumbnail: 'https://images.unsplash.com/photo-1592982736920-1ad1f9d1b2d1?w=300&h=200&fit=crop',
      tags: ['weather-data', 'optimization', 'advanced']
    },
    {
      id: 5,
      type: 'api-docs',
      title: 'AgriPredict API Integration Guide',
      description: 'Technical documentation for developers integrating AgriPredict APIs into farm management systems and custom applications.',
      format: 'HTML',
      size: '1.2 MB',
      downloadCount: 3456,
      lastUpdated: '2024-08-20',
      difficulty: 'Advanced',
      estimatedTime: '45 min read',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
      tags: ['api', 'integration', 'development']
    },
    {
      id: 6,
      type: 'videos',
      title: 'Seasonal Planning with AI Predictions',
      description: 'Learn how to use long-term predictions for seasonal planning, crop rotation decisions, and resource allocation.',
      format: 'MP4',
      size: '67.8 MB',
      downloadCount: 7234,
      lastUpdated: '2024-08-08',
      difficulty: 'Intermediate',
      estimatedTime: '18 min watch',
      thumbnail: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
      tags: ['planning', 'seasonal', 'strategy']
    },
    {
      id: 7,
      type: 'quick-ref',
      title: 'Troubleshooting Common Issues',
      description: 'Quick solutions for the most common technical issues, login problems, and data interpretation questions.',
      format: 'PDF',
      size: '1.5 MB',
      downloadCount: 9876,
      lastUpdated: '2024-08-16',
      difficulty: 'Beginner',
      estimatedTime: '8 min read',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
      tags: ['troubleshooting', 'support', 'common-issues']
    },
    {
      id: 8,
      type: 'guides',
      title: 'Mobile App Field Usage Guide',
      description: 'Comprehensive guide for using AgriPredict mobile app in the field, including offline capabilities and data sync.',
      format: 'PDF',
      size: '2.8 MB',
      downloadCount: 11234,
      lastUpdated: '2024-08-14',
      difficulty: 'Beginner',
      estimatedTime: '20 min read',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      tags: ['mobile', 'field-use', 'offline']
    }
  ];

  const filteredResources = selectedResourceType === 'all' 
    ? resources 
    : resources?.filter(resource => resource?.type === selectedResourceType);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-success/10 text-success',
      'Intermediate': 'bg-warning/10 text-warning',
      'Advanced': 'bg-error/10 text-error'
    };
    return colors?.[difficulty] || colors?.Beginner;
  };

  const getFormatIcon = (format) => {
    const icons = {
      'PDF': 'FileText',
      'MP4': 'Play',
      'HTML': 'Globe'
    };
    return icons?.[format] || 'File';
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resource Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive guides, video tutorials, and quick reference materials to maximize your AgriPredict experience and agricultural success.
          </p>
        </div>

        {/* Resource Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {resourceTypes?.map((type) => (
            <button
              key={type?.id}
              onClick={() => setSelectedResourceType(type?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg growth-transition ${
                selectedResourceType === type?.id
                  ? 'bg-primary text-white' :'bg-white text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border'
              }`}
            >
              <Icon name={type?.icon} size={18} />
              <span className="font-medium">{type?.label}</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources?.map((resource) => (
            <div
              key={resource?.id}
              className="bg-white rounded-2xl overflow-hidden harvest-shadow seasonal-hover growth-transition"
            >
              <div className="relative">
                <img
                  src={resource?.thumbnail}
                  alt={resource?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource?.difficulty)}`}>
                    {resource?.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <Icon name={getFormatIcon(resource?.format)} size={20} color="var(--color-primary)" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                  {resource?.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {resource?.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{resource?.estimatedTime}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="HardDrive" size={14} />
                      <span>{resource?.size}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource?.tags?.slice(0, 3)?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1 mb-1">
                      <Icon name="Download" size={12} />
                      <span>{resource?.downloadCount?.toLocaleString()} downloads</span>
                    </div>
                    <div>Updated {resource?.lastUpdated}</div>
                  </div>
                  
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Headphones" size={32} color="white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Webinar Series
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our monthly webinars featuring agricultural experts discussing advanced prediction techniques and farming strategies.
            </p>
            <Button
              variant="outline"
              iconName="Calendar"
              iconPosition="left"
            >
              View Schedule
            </Button>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="GraduationCap" size={32} color="white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Certification Program
            </h3>
            <p className="text-muted-foreground mb-6">
              Become a certified AgriPredict expert with our comprehensive training program and earn professional credentials.
            </p>
            <Button
              variant="outline"
              iconName="Award"
              iconPosition="left"
            >
              Learn More
            </Button>
          </div>

          <div className="bg-gradient-to-br from-success/10 to-success/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-success rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" size={32} color="white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Community Wiki
            </h3>
            <p className="text-muted-foreground mb-6">
              Access community-contributed knowledge base with tips, tricks, and best practices from experienced users.
            </p>
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="left"
            >
              Visit Wiki
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;