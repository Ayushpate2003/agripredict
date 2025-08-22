import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const forumCategories = [
    { id: 'all', label: 'All Discussions', count: 1247 },
    { id: 'predictions', label: 'Crop Predictions', count: 423 },
    { id: 'weather', label: 'Weather Insights', count: 312 },
    { id: 'success', label: 'Success Stories', count: 189 },
    { id: 'technical', label: 'Technical Help', count: 156 },
    { id: 'regional', label: 'Regional Farming', count: 167 }
  ];

  const forumPosts = [
    {
      id: 1,
      category: 'predictions',
      title: 'Corn yield predictions vs actual results - Midwest 2024',
      author: 'Mike Johnson',
      authorRole: 'Corn Farmer - Iowa',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      replies: 23,
      views: 1456,
      lastActivity: '2 hours ago',
      isHot: true,
      excerpt: 'Sharing my experience with AgriPredict\'s corn yield predictions this season. The AI was remarkably accurate for my 500-acre operation...',
      tags: ['corn', 'midwest', 'yield-analysis']
    },
    {
      id: 2,
      category: 'weather',
      title: 'How to interpret weather confidence levels for planting decisions?',
      author: 'Sarah Chen',
      authorRole: 'Agricultural Advisor - Nebraska',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      replies: 18,
      views: 892,
      lastActivity: '4 hours ago',
      isHot: false,
      excerpt: 'I\'m advising several farmers on optimal planting windows. What confidence threshold do you use for weather predictions when making planting recommendations?',
      tags: ['weather', 'planting', 'decision-making']
    },
    {
      id: 3,
      category: 'success',
      title: 'Increased soybean yield by 15% using AgriPredict insights',
      author: 'Dr. Robert Martinez',
      authorRole: 'Research Agronomist - Illinois',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      replies: 31,
      views: 2134,
      lastActivity: '6 hours ago',
      isHot: true,
      excerpt: 'Documenting a successful case study where AI-driven insights helped optimize irrigation timing and fertilizer application for significant yield improvements...',
      tags: ['soybeans', 'success-story', 'yield-improvement']
    },
    {
      id: 4,
      category: 'technical',
      title: 'API integration for custom dashboard - need guidance',
      author: 'Emma Thompson',
      authorRole: 'AgTech Developer - California',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      replies: 12,
      views: 567,
      lastActivity: '8 hours ago',
      isHot: false,
      excerpt: 'Working on integrating AgriPredict API into our farm management system. Looking for best practices and code examples...',
      tags: ['api', 'integration', 'development']
    },
    {
      id: 5,
      category: 'regional',
      title: 'Pacific Northwest apple orchards - climate adaptation strategies',
      author: 'Jennifer Lee',
      authorRole: 'Orchard Manager - Washington',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      replies: 19,
      views: 743,
      lastActivity: '12 hours ago',
      isHot: false,
      excerpt: 'Discussing how changing climate patterns are affecting apple production in the Pacific Northwest and how AI predictions are helping us adapt...',
      tags: ['apples', 'climate-change', 'pacific-northwest']
    }
  ];

  const topContributors = [
    {
      id: 1,
      name: 'Dr. Michael Rodriguez',
      role: 'Senior Agronomist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      posts: 127,
      reputation: 2456,
      badge: 'Expert'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Agricultural Advisor',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      posts: 89,
      reputation: 1834,
      badge: 'Mentor'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Corn Farmer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      posts: 76,
      reputation: 1567,
      badge: 'Contributor'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts?.filter(post => post?.category === selectedCategory);

  const getBadgeColor = (badge) => {
    const colors = {
      'Expert': 'bg-primary text-white',
      'Mentor': 'bg-accent text-secondary',
      'Contributor': 'bg-success text-white'
    };
    return colors?.[badge] || 'bg-muted text-muted-foreground';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Agricultural Community Forum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow farmers, share experiences, and learn from agricultural experts. Join discussions about crop predictions, farming techniques, and success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Hash" size={20} className="mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {forumCategories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setSelectedCategory(category?.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left growth-transition ${
                      selectedCategory === category?.id
                        ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }`}
                  >
                    <span className="font-medium">{category?.label}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {category?.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Trophy" size={20} className="mr-2" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors?.map((contributor) => (
                  <div key={contributor?.id} className="flex items-center space-x-3">
                    <img
                      src={contributor?.avatar}
                      alt={contributor?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-foreground text-sm">
                          {contributor?.name}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(contributor?.badge)}`}>
                          {contributor?.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{contributor?.role}</p>
                      <p className="text-xs text-muted-foreground">
                        {contributor?.posts} posts • {contributor?.reputation} reputation
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Join the Discussion</h3>
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Plus"
                  iconPosition="left"
                  size="sm"
                >
                  New Discussion
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Search"
                  iconPosition="left"
                  size="sm"
                >
                  Search Posts
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredPosts?.map((post) => (
                <div
                  key={post?.id}
                  className="bg-white rounded-2xl border border-border p-6 hover:harvest-shadow growth-transition"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={post?.avatar}
                      alt={post?.author}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
                          {post?.title}
                        </h3>
                        {post?.isHot && (
                          <span className="bg-error/10 text-error text-xs px-2 py-1 rounded-full flex items-center">
                            <Icon name="Flame" size={12} className="mr-1" />
                            Hot
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">{post?.author}</span>
                        <span>•</span>
                        <span>{post?.authorRole}</span>
                        <span>•</span>
                        <span>{post?.lastActivity}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post?.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post?.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer growth-transition"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="MessageSquare" size={16} />
                            <span>{post?.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={16} />
                            <span>{post?.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                iconName="ChevronDown"
                iconPosition="right"
              >
                Load More Discussions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;