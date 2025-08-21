import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Co-Founder & Chief Scientific Officer',
      credentials: 'Ph.D. Agricultural Data Science, UC Davis',
      experience: '15+ years in agricultural research and data modeling',
      specialization: 'Crop yield modeling, climate adaptation strategies',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c1e4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: [
        'Published 45+ peer-reviewed papers on agricultural modeling',
        'Led USDA-funded climate adaptation research project',
        'Developed predictive models used by 500+ farms'
      ],
      social: {
        linkedin: '#',
        scholar: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Co-Founder & Chief Technology Officer',
      credentials: 'Ph.D. Machine Learning, Stanford University',
      experience: '12+ years in AI/ML and agricultural technology',
      specialization: 'Deep learning, ensemble methods, agricultural AI',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: [
        'Former Senior ML Engineer at Google DeepMind',
        'Developed award-winning agricultural prediction algorithms',
        'Holds 8 patents in agricultural AI technology'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Emily Watson',
      role: 'Lead Agricultural Scientist',
      credentials: 'Ph.D. Plant Sciences, Cornell University',
      specialization: 'Crop physiology, soil-plant interactions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '10 years'
    },
    {
      name: 'Dr. James Park',
      role: 'Senior Data Scientist',
      credentials: 'Ph.D. Statistics, MIT',
      specialization: 'Statistical modeling, time series analysis',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '8 years'
    },
    {
      name: 'Dr. Maria Gonzalez',
      role: 'Climate Research Specialist',
      credentials: 'Ph.D. Atmospheric Sciences, NOAA',
      specialization: 'Weather modeling, climate change impacts',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '12 years'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Machine Learning Engineer',
      credentials: 'Ph.D. Computer Science, Carnegie Mellon',
      specialization: 'Neural networks, model optimization',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '7 years'
    },
    {
      name: 'Dr. Lisa Thompson',
      role: 'Soil Science Researcher',
      credentials: 'Ph.D. Soil Science, Iowa State',
      specialization: 'Soil health, nutrient cycling',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '9 years'
    },
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Remote Sensing Specialist',
      credentials: 'Ph.D. Remote Sensing, University of Maryland',
      specialization: 'Satellite imagery, crop monitoring',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '11 years'
    }
  ];

  const advisors = [
    {
      name: 'Prof. David Miller',
      role: 'Agricultural Economics Advisor',
      institution: 'Harvard Business School',
      expertise: 'Agricultural markets, economic modeling'
    },
    {
      name: 'Dr. Jennifer Lee',
      role: 'Climate Science Advisor',
      institution: 'NASA Goddard Institute',
      expertise: 'Climate modeling, extreme weather prediction'
    },
    {
      name: 'Prof. Carlos Mendoza',
      role: 'Sustainable Agriculture Advisor',
      institution: 'UC Berkeley',
      expertise: 'Sustainable farming practices, environmental impact'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 agricultural-gradient rounded-xl flex items-center justify-center mr-4">
              <Icon name="Users" size={24} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Expert Team</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the agricultural scientists, data researchers, and farming experts who make AgriPredict's innovations possible
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership?.map((leader, index) => (
              <div key={index} className="bg-card rounded-2xl harvest-shadow overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image 
                        src={leader?.image}
                        alt={leader?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1">{leader?.name}</h4>
                      <p className="text-primary font-semibold mb-2">{leader?.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{leader?.credentials}</p>
                      <p className="text-sm text-muted-foreground mb-3">{leader?.experience}</p>
                      <p className="text-sm font-medium text-foreground">{leader?.specialization}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {leader?.achievements?.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex space-x-4">
                    {Object.entries(leader?.social)?.map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 growth-transition"
                      >
                        <Icon 
                          name={platform === 'linkedin' ? 'Linkedin' : platform === 'scholar' ? 'GraduationCap' : 'Twitter'} 
                          size={18} 
                          className="text-primary" 
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Core Research Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers?.map((member, index) => (
              <div key={index} className="bg-card rounded-xl harvest-shadow overflow-hidden hover:shadow-lg growth-transition">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4">
                      <Image 
                        src={member?.image}
                        alt={member?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{member?.name}</h4>
                    <p className="text-primary font-semibold text-sm mb-2">{member?.role}</p>
                    <p className="text-xs text-muted-foreground mb-2">{member?.credentials}</p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                      <Icon name="Clock" size={12} />
                      <span>{member?.experience} experience</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">{member?.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors?.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 agricultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={28} color="white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{advisor?.name}</h4>
                <p className="text-primary font-semibold text-sm mb-2">{advisor?.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{advisor?.institution}</p>
                <p className="text-xs text-muted-foreground">{advisor?.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { icon: 'Users', value: '25+', label: 'Team Members' },
            { icon: 'GraduationCap', value: '18', label: 'Ph.D. Holders' },
            { icon: 'Award', value: '150+', label: 'Published Papers' },
            { icon: 'Globe', value: '12', label: 'Countries Represented' }
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
    </section>
  );
};

export default TeamSection;